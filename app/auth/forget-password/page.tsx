'use client';
import React from 'react';
import { useState } from 'react';
import Subtitle from '@/components/auth/subtitle/Subtitle';
import SendConfirmationCodeForm from '@/components/auth/confirmation-code-form/ConfirmationCodeForm';
import EnterCodeForm from '@/components/auth/enter-code-form/EnterCodeForm';
import NewPasswordForm from '@/components/auth/new-password-form/NewPasswordForm';

export interface ForgetPasswordPageProps {
  step: number;
  onStepChange: (step: number) => void;
}

export default function ForgetPassword() {
  const [step, setStep] = useState(1);

  const subtitles = {
    1: 'Forget password',
    2: 'Enter confirmation code',
    3: 'Create new password',
  };

  return (
    <>
      <Subtitle subtitle={subtitles[step]} />
      <SendConfirmationCodeForm onStepChange={setStep} step={step} />
      <EnterCodeForm onStepChange={setStep} step={step} />
      <NewPasswordForm onStepChange={setStep} step={step} />
    </>
  );
}
