'use server';

import { LoginFormSchema, SignupFormSchema, FormState } from '@/app/lib/definitions';
import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';

export async function signup(state: FormState, formData: FormData) {
    // Validate form fields using Zod
    const validatedFields = SignupFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    });

    // If any form fields are invalid, return early
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const { name, email, password } = validatedFields.data
    const supabase = await createClient()

    // 3. Insert the user into the database or call an Auth Library's API
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            emailRedirectTo: 'http://localhost:3000/auth/callback',
            data: {
                full_name: name, // This stores the name inside user metadata
            },
        },
    })


    if (error) {
        return {
            message: error.message,
        }
    }

    redirect("/store")
}


export async function login(state: FormState, formData: FormData) {
    // Validate form fields using Zod
    const validatedFields = LoginFormSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
    });

    // If any form fields are invalid, return early
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const { email, password } = validatedFields.data;
    const supabase = await createClient()

    // 3. Insert the user into the database or call an Auth Library's API
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })


    if (error) {
        return {
            message: error.message,
        }
    }

    redirect("/store")
}

export async function adminLogin(state: FormState, formData: FormData) {
    // Validate form fields using Zod
    const validatedFields = LoginFormSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
    });

    // If any form fields are invalid, return early
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const { email, password } = validatedFields.data;
    const supabase = await createClient()

    // 3. Insert the user into the database or call an Auth Library's API


    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    if (error || !data.user) {
        return {
            message: error?.message || "Invalid credentials",
        }
    }

    const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', data.user.id)
        .single()

    if (profileError || profile?.role !== 'admin') {
        await supabase.auth.signOut()
        return {
            message: "Access Denied: You do not have admin permissions.",
        }
    }



    // should only redirect if user is an admin
    redirect("/admin/dashboard")
}