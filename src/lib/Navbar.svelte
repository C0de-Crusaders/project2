<script>
  export let currentPage = '';
  let isMenuOpen = false; 

  function toggleMenu() {
    isMenuOpen = !isMenuOpen; 
  }
</script>

<header class="header">
  <div class="logo-container">
    <img src="pic2.png" alt="Logo" class="logo-image" />
    <span class="logo-text"><strong>PlanNext</strong></span>
  </div>
  <button class="menu-toggle" on:click={toggleMenu}>
    ☰
  </button>
  <nav class="navbar">
    <ul>
      <li class={currentPage === 'home' ? 'active' : ''}>
        <a href="/project2">Home</a>
      </li>
      <li class={currentPage === 'schedule' ? 'active' : ''}>
        <a href="/project2/schedule">Schedule</a>
      </li>
      <li class={currentPage === 'contact' ? 'active' : ''}>
        <a href="/project2/contact">Contact Us</a>
      </li>
    </ul>
  </nav>
  {#if isMenuOpen}
    <div class="toggled-navbar">
      <ul>
        <li class={currentPage === 'home' ? 'active' : ''}>
          <a href="/project2">Home</a>
        </li>
        <li class={currentPage === 'schedule' ? 'active' : ''}>
          <a href="/project2/schedule">Schedule</a>
        </li>
        <li class={currentPage === 'contact' ? 'active' : ''}>
          <a href="/project2/contact">Contact Us</a>
        </li>
      </ul>
    </div>
  {/if}
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

  .menu-toggle {
    display: none; 
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
  }

  .toggled-navbar {
    position: absolute;
    top: 60px; 
    left: 0;
    right: 0;
    background-color: rgba(77, 104, 77, 0.8);
    z-index: 3; 
    display: flex;
    flex-direction: column; 
    align-items: center; 
  }

  .toggled-navbar ul {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%; 
  }

  .toggled-navbar li {
    padding: 0.5rem 0; 
    text-align: center; 
  }

  .toggled-navbar a {
    color: white; 
    text-decoration: none; 
    width: 100%; 
  }

  @media (max-width: 768px) {
    .navbar {
      display: none; 
    }

    .menu-toggle {
      display: block; 
    }
  }
</style>

