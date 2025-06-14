import React from 'react';

import SignInForm from '@/components/auth/sign-in-form/SignInForm';
import Subtitle from '@/components/auth/subtitle/Subtitle';
import OAuthButtons from '@/components/auth/oauth-buttons/OAuthButtons';
import Separator from '@/components/auth/separator/Separator';

import { Suspense } from 'react';

export default async function SignIn() {
  return (
    <>
      <Subtitle subtitle="Sign in" />
      <OAuthButtons />
      <Separator />
      <Suspense>
        <SignInForm />
      </Suspense>
    </>
  );
}
