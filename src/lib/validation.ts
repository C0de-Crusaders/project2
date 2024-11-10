interface FormData {
  name: string;
  email: string;
  phone: string;
  reason: string;
  additional: string;
}

export function validateForm(data: FormData) {
  const errors = {
    name: data.name ? '' : 'Name is required.',
    email: /^\S+@\S+\.\S+$/.test(data.email) ? '' : 'Invalid email address.',
    phone: /^\d{11}$/.test(data.phone) ? '' : 'Invalid phone number.',
    reason: data.reason ? '' : 'Reason is required.',
    additional: data.additional ? '' : 'Additional information is required.'
  };

  return {
    isValid: !Object.values(errors).some(error => error),
    errors
  };
} 