import { describe, it, expect } from 'vitest';
import { validateForm } from '$lib/validation';

describe('Contact Form Validation', () => {
  it('should validate the form correctly', () => {
    const validData = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '12345678901',
      reason: 'Inquiry',
      additional: 'Some additional info'
    };

    const invalidData = {
      name: '',
      email: 'invalid-email',
      phone: '123',
      reason: '',
      additional: ''
    };

    expect(validateForm(validData).isValid).toBe(true);
    expect(validateForm(invalidData).isValid).toBe(false);
  });
});
