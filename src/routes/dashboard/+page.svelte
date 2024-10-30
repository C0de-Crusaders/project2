<script>
    import Navbar from '$lib/Navbar.svelte';
  </script>
  
  <Navbar currentPage="dashboard" />
  
  <div class="dashboard-container">
    <h1>Welcome to Event Planner</h1>
    <p>Plan and manage your events effortlessly</p>
    <input type="text" placeholder="Search events" />
    <div class="button-group">
      <button>Filter Events</button>
      <button>Create Event</button>
    </div>
    <div class="event-preview">
      <p>Plan your events seamlessly with our app</p>
      
    </div>
  </div>
  
  <footer>
    <p>© 2024 PlanNext. All Rights Reserved.</p>
  </footer>
  
  <style>
    .dashboard-container {
      padding: 6rem 2rem 2rem;
      text-align: center;
      background-color: #e0e0d1;
    }
    input {
      margin: 1rem 0;
      padding: 0.5rem;
      width: 200px;
    }
    .button-group {
      margin-bottom: 2rem;
    }
    button {
      margin: 0 0.5rem;
      padding: 0.5rem 1rem;
      background-color: #2c5f2d;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .event-preview {
      background-color: #a3c9a8;
      padding: 2rem;
      border-radius: 8px;
    }
    footer {
      background-color: #a3c9a8;
      text-align: center;
      padding: 1rem;
    }
  </style>