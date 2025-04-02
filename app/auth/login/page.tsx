import React from 'react';

import SignInForm from '@/components/auth/sign-in-form/Sign-in-form';
import Subtitle from '@/components/auth/subtitle/Subtitle';
import OAuthButtons from '@/components/auth/oauth-buttons/OAuthButtons';
import Separator from '@/components/auth/separator/Separator';

export default async function SignIn() {
  return (
    <>
      <Subtitle subtitle="Sign in" />
      <OAuthButtons />
      <Separator />
      <SignInForm />
    </>
  );
}
