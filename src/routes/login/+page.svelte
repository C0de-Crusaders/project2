<script>
    let email = '';
    let password = '';

    function handleLogin() {
      const storedUserJSON = localStorage.getItem('user');
      console.log('Stored User JSON:', storedUserJSON);

      if (!storedUserJSON) {
        alert('No user data found!');
        return;
      }

      try {
        const storedUser = JSON.parse(storedUserJSON);
        console.log('Parsed Stored User:', storedUser);

        if (storedUser.email === email && storedUser.password === password) {
          alert('Login successful!');
          window.location.href = '/project2/home';
        } else {
          alert('Invalid email or password!');
        }
      } catch (error) {
        console.error('Error parsing user data:', error);
        alert('Error reading user data!');
      }
    }
</script>
  
  <div class="form-container">
    <h2>Log In</h2>
    <input type="email" bind:value={email} placeholder="Email" />
    <input type="password" bind:value={password} placeholder="Password" />
    <button on:click={handleLogin}>Log In</button>
    <a href="/project2/signup" class="link-button">Go to Sign Up</a>
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