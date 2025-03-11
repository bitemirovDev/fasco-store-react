import React from 'react';

// components
import SignUpForm from '@/components/auth/sign-up/sign-up-form';
import OAuthButtons from '@/components/auth/oauth-buttons/OAuthButtons';
import Separator from '@/components/auth/separator/Separator';
import Subtitle from '@/components/auth/subtitle/Subtitle';
import { getCurrentSession } from '@/actions/auth';
import { redirect } from 'next/navigation';

export default async function SignUp() {
  const { user } = await getCurrentSession();

  if (user) {
    return redirect('/');
  }

  return (
    <>
      <Subtitle subtitle="Create an account" />
      <OAuthButtons />
      <Separator />
      <SignUpForm />
    </>
  );
}
