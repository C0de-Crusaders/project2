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

interface EventData {
  eventName: string;
  eventType: string;
  contactNumber: string;
  startDateTime: string;
  endDateTime: string;
  location: string;
}

export function validateEvent(data: EventData) {
  const errors = {
    eventName: data.eventName ? '' : 'Event name is required.',
    eventType: data.eventType ? '' : 'Event type is required.',
    contactNumber: /^\d+$/.test(data.contactNumber) ? '' : 'Invalid contact number.',
    startDateTime: data.startDateTime ? '' : 'Start date and time are required.',
    endDateTime: data.endDateTime ? '' : 'End date and time are required.',
    location: data.location ? '' : 'Location is required.'
  };

  return {
    isValid: !Object.values(errors).some(error => error),
    errors
  };
}