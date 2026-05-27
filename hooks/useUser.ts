"use client";

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase/client'; // Import the client builder

export default function UserProfile() {
  const [currentUser, setCurrentUser] = useState<{ name?: string; email?: string }>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const supabase = createClient();

    async function getUserData() {
      const { data: { user } } = await supabase.auth.getUser();

      if (user) {
        setCurrentUser({
          email: user.email,
          name: user.user_metadata?.full_name || 'Guest',
        });
      }
      setLoading(false);
    }

    getUserData();
  }, []);

  return {
    loading,
    currentUser
  }
}


