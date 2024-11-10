interface FormData {
  name: string;
  email: string;
  phone: string;
  reason: string;
  additional: string;
}

// Function to validate form data
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

// Function to validate event data
export function validateEvent(data: EventData) {
  const errors = {
    eventName: data.eventName ? '' : 'Event name is required.',
    eventType: data.eventType ? '' : 'Event type is required.',
    contactNumber: /^\d+$/.test(data.contactNumber) ? '' : 'Invalid contact number.',
    startDateTime: data.startDateTime ? '' : 'Start date and time are required.',
    endDateTime: data.endDateTime ? '' : 'End date and time are required.',
    location: data.location ? '' : 'Location is required.',
  };

  // Check if endDateTime is before startDateTime
  if (data.startDateTime && data.endDateTime) {
    const startDate = new Date(data.startDateTime);
    const endDate = new Date(data.endDateTime);
    if (endDate < startDate) {
      errors.endDateTime = 'End date and time must be the same or after the start date and time.';
    }
  }

  return {
    isValid: !Object.values(errors).some(error => error),
    errors
  };
}