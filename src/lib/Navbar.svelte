<script>
  export let currentPage = '';

  function handleLogout() {
    // Clear user data from local storage or any other storage
    localStorage.removeItem('user');
    // Redirect to the root page
    window.location.href = '/project2'; // Adjust the path as necessary
  }
</script>

<header class="header">
  <div class="logo-container">
    <img src="pic2.png" alt="Logo" class="logo-image" />
    <span class="logo-text">PlanNext</span>
  </div>
  <button on:click={handleLogout} class="logout-button">Logout</button>
</header>

<nav class="sidebar">
  <ul>
    <li class={currentPage === '' ? 'active' : ''}>
      <a href="/project2">Dashboard</a>
    </li>
    <li class={currentPage === 'scheduling' ? 'active' : ''}>
      <a href="/project2/scheduling">Scheduling</a>
    </li>
    <li class={currentPage === 'contact' ? 'active' : ''}>
      <a href="/project2/contact">Contact</a>
    </li>
  </ul>
</nav>

<style>
  .header {
    display: flex;
    justify-content: space-between; /* Space between logo and logout button */
    align-items: center;
    background-color: #4a7c59;
    color: white;
    padding: 1rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
  }
  .logout-button {
    background-color: #c0392b; /* Red color for logout button */
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  .logout-button:hover {
    background-color: #e74c3c; /* Darker red on hover */
  }
  .page-title {
    font-size: 1.2rem;
    margin-left: 1rem;
  }
  .logo-container {
    display: flex;
    align-items: center;
  }
  .logo-image {
    width: 40px;
    height: 40px;
    margin-right: 0.5rem;
  }
  .logo-text {
    font-size: 1.5rem;
  }
  .sidebar {
    width: 200px;
    background-color: #4a7c59;
    color: white;
    padding: 1rem;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    padding-top: 5rem;
  }
  .sidebar ul {
    list-style: none;
    padding: 0;
  }
  .sidebar li {
    margin-bottom: 1rem;
  }
  .sidebar a {
    color: white;
    text-decoration: none;
  }
  .active a {
    font-weight: bold;
  }
</style>

