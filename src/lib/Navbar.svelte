<!-- src/lib/Navbar.svelte -->
<script>
  export let currentPage = '';
</script>

<nav>
  <ul>
    <li class={currentPage === 'welcome' ? 'active' : ''}>
      <a href="/project2/">Welcome</a>
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
  nav ul {
    list-style: none;
    display: flex;
    gap: 1rem;
  }
  .active a {
    font-weight: bold;
  }
</style>

