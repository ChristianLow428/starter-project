'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import postgres from 'postgres';
import bcrypt from 'bcryptjs';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

// Test function to verify environment variables
export async function testEnv() {
  if (!process.env.POSTGRES_URL) {
    throw new Error('POSTGRES_URL is not defined');
  }
  if (!process.env.AUTH_SECRET) {
    throw new Error('AUTH_SECRET is not defined');
  }
  return { status: 'Environment variables are properly configured' };
}

// ... rest of your existing code ... 