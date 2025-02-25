import { ForgotPasswordGetters } from '@vue-storefront/core';
import type { PasswordResetResult } from '@vue-storefront/Saussage-api';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getResetPasswordToken(result: PasswordResetResult): string {
  return '';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function isPasswordChanged(result: PasswordResetResult): boolean {
  return true;
}

export const forgotPasswordGetters: ForgotPasswordGetters<PasswordResetResult> = {
  getResetPasswordToken,
  isPasswordChanged
};
