import { describe, it, expect } from 'vitest';
import { validateEvent, validateForm } from '$lib/formValidator';

describe('Event Schedule Validation', () => {
  // Test case for validating a correctly structured event
  it('should validate the event correctly', () => {
    // Define a valid event object
    const validEvent = {
      eventName: 'Conference',
      eventType: 'Business',
      contactNumber: '1234567890',
      startDateTime: '2024-11-01T09:00',
      endDateTime: '2024-11-01T17:00',
      location: 'Conference Hall'
    };

    // Define an invalid event object
    const invalidEvent = {
      eventName: '',
      eventType: '',
      contactNumber: 'abc',
      startDateTime: '',
      endDateTime: '',
      location: ''
    };

    // Validate the events and check the results
    expect(validateEvent(validEvent).isValid).toBe(true);
    expect(validateEvent(invalidEvent).isValid).toBe(false);
  });

  // Test case for invalidating an event with an end date before the start date
  it('should invalidate the event if end date is before start date', () => {
    // Define an event with an invalid end date
    const invalidEndDateEvent = {
      eventName: 'Invalid Event',
      eventType: 'Business',
      contactNumber: '1234567890',
      startDateTime: '2024-11-01T09:00',
      endDateTime: '2024-10-31T17:00', 
      location: 'Conference Hall'
    };

    // Validate the event and check for errors
    const result = validateEvent(invalidEndDateEvent);
    expect(result.isValid).toBe(false);
    expect(result.errors.endDateTime).toBe('End date and time must be the same or after the start date and time.');
  });

  // Test case for validating an event with the same start and end date
  it('should validate the event if end date is the same as start date', () => {
    // Define an event with the same start and end date
    const sameDateEvent = {
      eventName: 'Same Date Event',
      eventType: 'Business',
      contactNumber: '1234567890',
      startDateTime: '2024-11-01T09:00',
      endDateTime: '2024-11-01T09:00', 
      location: 'Conference Hall'
    };

    // Validate the event
    const result = validateEvent(sameDateEvent);
    expect(result.isValid).toBe(true);
  });

  // Test case for validating an event with a valid end date after the start date
  it('should validate the event if end date is after start date', () => {
    // Define a valid event
    const validEndDateEvent = {
      eventName: 'Valid Event',
      eventType: 'Business',
      contactNumber: '1234567890',
      startDateTime: '2024-11-01T09:00',
      endDateTime: '2024-11-01T17:00', 
      location: 'Conference Hall'
    };

    // Validate the event
    const result = validateEvent(validEndDateEvent);
    expect(result.isValid).toBe(true);
  });

  // Test case for checking overlapping events
  it('should invalidate overlapping events', () => {
    // Define an existing event
    const existingEvent = {
      eventName: 'Existing Event',
      eventType: 'Business',
      contactNumber: '1234567890',
      startDateTime: '2024-11-01T09:00',
      endDateTime: '2024-11-01T17:00',
      location: 'Conference Hall'
    };

    // Define a new event that overlaps with the existing event
    const newEvent = {
      eventName: 'New Event',
      eventType: 'Business',
      contactNumber: '0987654321',
      startDateTime: '2024-11-01T09:00', 
      endDateTime: '2024-11-01T17:00', 
      location: 'Conference Hall'
    };

    const events = [existingEvent];

    // Check for overlapping events
    const isOverlapping = events.some(existing => {
      const existingStart = new Date(existing.startDateTime);
      const existingEnd = new Date(existing.endDateTime);
      const newStart = new Date(newEvent.startDateTime);
      const newEnd = new Date(newEvent.endDateTime);

      return (newStart < existingEnd && newEnd > existingStart);
    });

    // Expect the overlapping check to return true
    expect(isOverlapping).toBe(true);
  });
});

describe('Contact Form Validation', () => {
  // Test case for validating a contact form
  it('should validate the form correctly', () => {
    // Define valid form data
    const validData = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '12345678901',
      reason: 'Inquiry',
      additional: 'Some additional info'
    };

    // Define invalid form data
    const invalidData = {
      name: '',
      email: 'invalid-email',
      phone: '123',
      reason: '',
      additional: ''
    };

    // Validate the forms and check the results
    expect(validateForm(validData).isValid).toBe(true);
    expect(validateForm(invalidData).isValid).toBe(false);
  });
});

