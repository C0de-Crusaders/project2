<script>
    import Navbar from '$lib/Navbar.svelte';
</script>

<Navbar currentPage="scheduling" />

<div class="scheduling-container">
  <h1>Upcoming Events</h1>
  <div class="schedule-section">
    <div class="schedule-controls">
      <h2>Schedule Your Events</h2>
      <button class="add-event">Add Event</button>
      <button class="view-events">View All Events</button>
    </div>
    <div class="calendar">
      <h2>November 2024</h2>
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          <!-- Calendar dates go here -->
        </tbody>
      </table>
    </div>
  </div>
  <div class="event-list">
    <div class="event-card">
      <h3>Meeting with Clients</h3>
      <p>Discuss project details</p>
      <span>10:00 AM - 11:00 AM | On Office</span>
    </div>
    <div class="event-card">
      <h3>Meeting with Clients</h3>
      <p>Discuss project details</p>
      <span>10:00 AM - 11:00 AM | On Office</span>
    </div>
    <!-- More event cards -->
  </div>
</div>

<footer>
  <p>© 2024 PlanNext. All Rights Reserved.</p>
</footer>

<style>
  .scheduling-container {
    padding: 2rem;
    background-color: #e0e0d1;
    max-width: 1000px;
    margin: 0 auto;
  }

  h1 {
    text-align: center;
    color: #4a7c59;
  }

  .schedule-section {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
  }

  .schedule-controls {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .add-event, .view-events {
    background-color: #2c5f2d;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .calendar {
    background-color: #fff;
    padding: 1rem;
    border-radius: 8px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th, td {
    border: 1px solid #ccc;
    padding: 0.5rem;
    text-align: center;
  }

  .event-list {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .event-card {
    background-color: #a3c9a8;
    padding: 1rem;
    border-radius: 8px;
    width: 200px;
  }

  footer {
    background-color: #a3c9a8;
    text-align: center;
    padding: 1rem;
  }
</style>
