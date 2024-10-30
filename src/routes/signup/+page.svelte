<script>
    let email = '';
    let password = '';
    let confirmPassword = '';
  
    function handleSignup() {
      if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
  
      const user = { email, password };
      localStorage.setItem('user', JSON.stringify(user));
      alert('Signup successful!');
    }
  </script>
  
  <div class="form-container">
    <h2>Sign Up</h2>
    <input type="email" bind:value={email} placeholder="Email" />
    <input type="password" bind:value={password} placeholder="Password" />
    <input type="password" bind:value={confirmPassword} placeholder="Confirm Password" />
    <button on:click={handleSignup}>Sign Up</button>
    <a href="/project2/login" class="link-button">Go to Login</a>
  </div>
  
  <style>
    .form-container {
    padding: 1rem;
    max-width: 300px;
    margin: 0 auto; /* Center horizontally */
    background-color: #e0e0d1;
    border-radius: 8px;
    position: absolute; /* Positioning for vertical centering */
    top: 50%; /* Move down 50% of the viewport height */
    left: 50%; /* Move right 50% of the viewport width */
    transform: translate(-50%, -50%); /* Center the container */
  }
    input {
      display: block;
      width: 100%;
      margin-bottom: 1rem;
      padding: 0.5rem;
    }
    button {
      width: 100%;
      padding: 0.5rem;
      background-color: #2c5f2d;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 0.5rem;
    }
  </style>