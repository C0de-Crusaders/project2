<script>
  export let currentPage = '';
</script>

<header class="header">
  <div class="logo-container">
    <img src="pic2.png" alt="Logo" class="logo-image" />
    <span class="logo-text"><strong>PlanNext</strong></span>
  </div>
  <nav class="navbar">
    <ul>
      <li class={currentPage === 'home' ? 'active' : ''}>
        <a href="/project2">Home</a>
      </li>
      <li class={currentPage === 'scheduling' ? 'active' : ''}>
        <a href="/project2/scheduling">Schedule</a>
      </li>
      <li class={currentPage === 'contact' ? 'active' : ''}>
        <a href="/project2/contact">Contact Us</a>
      </li>
    </ul>
  </nav>
</header>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #588157;
    color: white;
    padding: 1rem;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    margin-bottom: 60px;
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

  .navbar ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    padding: 0;
    margin: 0;
  }

  .navbar a {
    color: white;
    text-decoration: none;
  }

  .active a {
    font-weight: bold;
  }
</style>

