'use server';

import bcrypt from 'bcrypt';
import { promises as fs } from 'fs';
import path from 'path';
import { SignupFormSchema, FormState } from '@/app/lib/definitions';
import { createSession } from '../lib/session';
import { redirect } from 'next/navigation';

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

    const { name, email, password } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);
    const jsonFilePath = path.join(process.cwd(), 'data/users.json');

    // We declare this outside the try block so redirect() can read it safely later
    let signupSuccessful = false;
    let newUserId = '';

    try {
        // 1. Read existing users from data.json safely
        let users = [];
        try {
            const fileContent = await fs.readFile(jsonFilePath, 'utf8');
            users = JSON.parse(fileContent);
        } catch (readError: any) {
            if (readError.code !== 'ENOENT') {
                throw readError;
            }
        }

        // 2. Business Logic: Check if user already exists
        const userExists = users.some((user: any) => user.email === email);
        if (userExists) {
            return {
                message: 'A user with this email already exists.',
            };
        }

        // 3. Create a unique ID and new user object
        newUserId = `user-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
        const newUser = {
            id: newUserId,
            name,
            email,
            password: hashedPassword,
        };

        // 4. Push new user and save back to data.json
        users.push(newUser);
        await fs.writeFile(jsonFilePath, JSON.stringify(users, null, 2), 'utf8');

        // Establish session on the server side
        await createSession(newUserId);
        signupSuccessful = true;

    } catch (error) {
        console.error('File system signup error:', error);
        return {
            message: 'An error occurred while creating your account.',
        };
    }

    if (signupSuccessful) {
        redirect('/store');
    }
}
