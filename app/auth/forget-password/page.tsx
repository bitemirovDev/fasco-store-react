'use client';
import React from 'react';
import { useState } from 'react';
import Subtitle from '@/components/auth/subtitle/Subtitle';
import SendConfirmationCodeForm from '@/components/auth/confirmation-code-form/ConfirmationCodeForm';
import EnterCodeForm from '@/components/auth/enter-code-form/EnterCodeForm';
import NewPasswordForm from '@/components/auth/new-password-form/NewPasswordForm';

export interface ForgetPasswordFormProps {
  onStepChange: (step: number) => void;
}

export default function ForgetPassword() {
  const [step, setStep] = useState(1);

  const subtitles: { [key: number]: string } = {
    1: 'Forget password',
    2: 'Enter confirmation code',
    3: 'Create new password',
  };

  console.log(step);

  return (
    <>
      <Subtitle subtitle={subtitles[step]} />
      {step === 1 && <SendConfirmationCodeForm onStepChange={setStep} />}
      {step === 2 && <EnterCodeForm onStepChange={setStep} />}
      {step === 3 && <NewPasswordForm />}
    </>
  );
}
