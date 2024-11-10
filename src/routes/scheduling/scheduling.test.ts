import { describe, it, expect } from 'vitest';
import { validateEvent } from '$lib/validation';

describe('Event Scheduling Validation', () => {
  it('should validate the event correctly', () => {
    const validEvent = {
      eventName: 'Conference',
      eventType: 'Business',
      contactNumber: '1234567890',
      startDateTime: '2024-11-01T09:00',
      endDateTime: '2024-11-01T17:00',
      location: 'Conference Hall'
    };

    const invalidEvent = {
      eventName: '',
      eventType: '',
      contactNumber: 'abc',
      startDateTime: '',
      endDateTime: '',
      location: ''
    };

    expect(validateEvent(validEvent).isValid).toBe(true);
    expect(validateEvent(invalidEvent).isValid).toBe(false);
  });
});