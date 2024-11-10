<script>

  import Navbar from '$lib/Navbar.svelte';
  import { validateForm } from '$lib/formValidator';
  import { fly } from 'svelte/transition';

  // State variables for form inputs
  let name = '';
  let email = '';
  let phone = '';
  let reason = '';
  let additional = '';

  // Object to hold validation errors
  let errors = {
    name: '',
    email: '',
    phone: '',
    reason: '',
    additional: ''
  };

  let showWarning = false;
  let isListVisible = false;

  // Function to handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    const { isValid, errors: validationErrors } = validateForm({ name, email, phone, reason, additional });
    errors = validationErrors;
    if (isValid) {
      console.log('Form submitted:', { name, email, phone, reason, additional });
      showWarning = true;
      isListVisible = false;
      setTimeout(() => {
        showWarning = false;
      }, 5000);
    }
  }

  // Function to toggle the visibility of the additional details list
  function toggleList() {
    isListVisible = !isListVisible;
  }

</script>

<Navbar currentPage="contact" />

<div class="contact-content">
  <div class="contact-header">
    <h1>Contact Us</h1>
  </div>
  <div class="contact-container">
    <form class="contact-form" on:submit={handleSubmit}>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" bind:value={name} placeholder="Enter your name" />
        {#if errors.name}<small class="error">{errors.name}</small>{/if}
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" bind:value={email} placeholder="Enter your email" />
        {#if errors.email}<small class="error">{errors.email}</small>{/if}
      </div>
      <div class="form-group">
        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" bind:value={phone} placeholder="Enter your phone number" />
        {#if errors.phone}<small class="error">{errors.phone}</small>{/if}
      </div>
      <div class="form-group">
        <label for="reason">Reason for Contact</label>
        <input type="text" id="reason" bind:value={reason} placeholder="Enter reason for contact" />
        {#if errors.reason}<small class="error">{errors.reason}</small>{/if}
      </div>
      <div class="form-group">
        <label for="additional">Additional Information</label>
        <input type="text" id="additional" bind:value={additional} placeholder="Enter any additional information" />
        {#if errors.additional}<small class="error">{errors.additional}</small>{/if}
      </div>
      <button type="submit" class="submit-button">Submit</button>
    </form>

    {#if showWarning}
      <div class="warning-note" transition:fly={{ x: 300, duration: 500 }}>
        <div class="wrng-hd">
          <p><strong>Query Sent!</strong></p>
          <button on:click={toggleList} class="toggle-button">
            {isListVisible ? 'Hide Details' : 'Show Details'}
            <i class="fas fa-chevron-down" style="color: white;"></i>
          </button>
        </div>
        {#if isListVisible}
          <ul>
            <li>Name: {name}</li>
            <li>Email: {email}</li>
            <li>Phone: {phone}</li>
            <li>Reason: {reason}</li>
            <li>Additional: {additional}</li>
          </ul>
        {/if}
      </div>
    {/if}
  </div>
</div>
<footer>
  <p>© 2024 PlanNext. All Rights Reserved.</p>
</footer>

<style>
  body {
    background-color: #ccc;
    margin: 0;
    font-family: Arial, sans-serif;
  }
  .contact-content {
    padding-top: 4rem;
  }
  .contact-header {
    background-color: #3A5A40;
    padding: 2rem;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    width: 100%;
    margin: 0;
  }
  .contact-header h1 {
    font-size: 2rem;
    font-weight: bolder;
  }
  .contact-container {
    padding: 2rem;
    padding-top: 4rem;
    background-color: #e0e0d1;
    max-width: 800px;
    margin: auto;
    border-top: none;
  }
  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .form-group {
    display: flex;
    flex-direction: column;
  }
  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  small {
    color: #666;
    margin-top: 0.25rem;
  }
  .submit-button {
    background-color: #2c5f2d;
    color: white;
    padding: 0.75rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    align-self: center;
    width: 150px;
  }
  .wrng-hd {
    background-color: #000000;
    font-size: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .wrng-hd strong {
    color: #ffffff;
  }
  .warning-note {
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 1000;
    margin-top: 1rem;
    font-size: 12px;
    background-color: #DAD7CD;
    border: 5px solid #000000;
    border-radius: 4px;
  }
  footer {
    background-color: #a3b18a;
    text-align: center;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8rem;
  }
  footer p {
    font-weight: bold;
    margin: 0;
  }
</style>
