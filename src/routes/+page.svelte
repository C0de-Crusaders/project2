<script lang="ts">
  import { onMount } from 'svelte';

  let texts: HTMLElement[];
  let index = 0;

  function showNextText() {
    texts.forEach((text, i) => {
      text.style.opacity = i === index ? '1' : '0';
    });
    index = (index + 1) % texts.length;
  }

  onMount(() => {
    texts = Array.from(document.querySelectorAll('.sliding-text p'));
    showNextText(); // Initialize the first text
    const interval = setInterval(showNextText, 5000);

    return () => clearInterval(interval); // Cleanup on component destroy
  });
</script>

<div class="hero">
  <div class="hero-content">
    <img src="pic2.jpg" alt="Logo" class="logo-image" />
    <div class="text-content">
      <h1>Welcome to PlanNext</h1>
      <p class="tagline">Manage Your Events With Ease</p>
      <p>Plan your events with ease and organization.</p>
    </div>
    <a href="/project2/scheduling" class="get-started">Get Started</a>
  </div>
</div>

<div class="sliding-text-container">
  <div class="sliding-text">
    <p><strong>Plan your events seamlessly with our app </strong></p>
    <p><strong>Organize your schedule efficiently </strong> </p>
    <p><strong> Stay updated with reminders </strong> </p>
  </div>
</div>

<section class="features">
  <h2>Our Features</h2>
  <p>Explore our diverse set of features for effective event management.</p>
  <div class="feature-cards">
    <div class="card">
      <div class="card-header">EVENTS</div>
      <div class="card-body">
       
      </div>
      <div class="card-footer">
        <strong>Event Calendar</strong>
        <p>Add, edit, and view events</p>
      </div>
    </div>

    <div class="card">
      <div class="card-header">REMINDERS</div>
      <div class="card-body">
        
      </div>
      <div class="card-footer">
        <strong>Reminders</strong>
        <p>Stay updated with event notifications</p>
      </div>
    </div>

    <div class="card">
      <div class="card-header">IMAGES</div>
      <div class="card-body">
        
      </div>
      <div class="card-footer">
        <strong>Add Images</strong>
        <p>Manage Events with Image</p>
      </div>
    </div>
  </div>
</section>

<footer>
  <p>© 2024 PlanNext. All Rights Reserved.</p>
</footer>

<style>
 .hero {
  background-color: #588157;
  color: white;
  margin-top: 4rem;
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}


.hero-content {
  display: flex;
  align-items: center;
  gap: 2rem;
  max-width: 1000px;
  width: 100%;
}

.logo-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.text-content h1 {
  font-size: 1.5rem; /* Increase font size */
  font-weight: bold; /* Make text bold */
  margin: 0.5rem 0; /* Add some margin */
}

.text-content {
  flex-grow: 1;
}

.tagline {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  font-weight: bolder;
  display: inline-block;
  padding: 0.2rem 0.5rem;
  margin: 0.5rem 0;
  font-size: .7rem;
}

.get-started {
  background-color: #344E41;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  text-decoration: none;
  border-radius: 5px;
}

.sliding-text-container {
  background-color: #a3c9a857;
  padding: 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  height: 200px;
  margin: 2rem auto;
  max-width: 800px;
  border-top: 2px solid #a3b18a;
  border-bottom: 2px solid #a3b18a;
}

.sliding-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  animation: slide 15s infinite;
}

.sliding-text p {
  margin: 0;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  position: absolute;
}

@keyframes slide {
  0%, 33.33% { opacity: 1; }
  33.33%, 66.66% { opacity: 0; }
  66.66%, 100% { opacity: 1; }
}

.features {
  text-align: center;
  padding: 2rem;
  
}

.feature-cards {
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;

}

.card {
  background-color: rgba(163, 201, 168, 0.6); /* Semi-transparent background */
  border: 4px solid #344E41;
  border-radius: 12px;
  width: 350px;
  height: 400px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-image: url('/EVENTS.gif'); /* Background for EVENTS card */
  background-size: cover; /* Cover the entire card */
  background-position: center; /* Center the background */
}

.card:nth-child(2) {
  background-image: url('/REMINDER.gif'); /* Background for REMINDERS card */
}

.card:nth-child(3) {
  background-image: url('/IMAGES.gif'); /* Background for IMAGES card */
}

.card-header {
  background-color: #344E41;
  color: white;
  padding: 0.5rem;
  font-weight: bold;
  position: absolute;
  top: 15px;
  left: 0;
  transform: translateY(-50%);
  border-radius: 0 0 12px 0;
  width: 120px;
  text-align: center;
}

.card-body {
  padding: 2rem 1rem;
  color: #333;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-footer {
  background-color: #588157;
  color: white;
  padding: 1rem;
  text-align: left;
  margin-top: auto;
}

.card-footer p {
  color: white;
  font-weight: bold;
}

.card-footer strong {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

footer {
  background-color: #a3b18a;
  text-align: center;
  padding: 1rem;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  height: 8rem; /* Ensure enough height for centering */
}

footer p {
  font-weight: bold; /* Make text bold */
  margin: 0; /* Remove default margin */
}

.features h2 {
  font-size: 2rem; /* Adjust size as needed */
  font-weight: bold; /* Bold text */
  color: #000; /* Black color */
  margin-bottom: 0.5rem; /* Space below the heading */
}

.features p {
  font-size: 1rem; /* Adjust size as needed */
  font-weight: bold; /* Bold text */
}

.feature-gif {
    width: 100%; /* Adjust width as needed */
    height: auto; /* Maintain aspect ratio */
    border-radius: 8px; /* Optional: rounded corners */
    margin-bottom: 1rem; /* Space between GIF and text */
}
</style>