import React from 'react';

// components
import SignUpForm from '@/components/auth/sign-up-form/SignUpForm';
import OAuthButtons from '@/components/auth/oauth-buttons/OAuthButtons';
import Separator from '@/components/auth/separator/Separator';
import Subtitle from '@/components/auth/subtitle/Subtitle';

export default async function SignUp() {
  return (
    <>
      <Subtitle subtitle="Create account" />
      <OAuthButtons />
      <Separator />
      <SignUpForm />
    </>
  );
}
