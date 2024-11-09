<!-- src/routes/contact/+page.svelte -->
<script>
  import Navbar from '$lib/Navbar.svelte';
</script>

<Navbar currentPage="contact" />

<div class="scheduling-content">
  <div class="scheduling-header">
    <h1>Contact Us</h1>
  </div>
  <div class="contact-container">
    <form class="contact-form">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" placeholder="Enter your name" />
        <small>Full name</small>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" />
        <small>Valid email address</small>
      </div>
      <div class="form-group">
        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" placeholder="Enter your phone number" />
        <small>Valid phone number</small>
      </div>
      <div class="form-group">
        <label for="reason">Reason for Contact</label>
        <input type="text" id="reason" placeholder="Enter reason for contact" />
        <small>Briefly describe the purpose of your message</small>
      </div>
      <div class="form-group">
        <label for="additional">Additional Information</label>
        <input type="text" id="additional" placeholder="Enter any additional information" />
        <small>Any other information you would like to provide</small>
      </div>
      <button type="submit" class="submit-button">Submit</button>
    </form>
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
  .scheduling-content {
    padding-top: 4rem;

  }
  .scheduling-header {
    background-color: #3A5A40;
    padding: 2rem;
    height: 6rem;
    display: flex; /* Added to enable flexbox */
    justify-content: center; /* Centers horizontally */
    align-items: center; /* Centers vertically */
    color: white;
    width: 100%;
    margin: 0;
  }
  .scheduling-header h1 {
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
