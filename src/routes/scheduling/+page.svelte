<script>
    import Navbar from '$lib/Navbar.svelte';
    let showAddModal = false; // State to control add event modal visibility
    let showViewModal = false; // State to control view event modal visibility
    let selectedEvent = {}; // Object to hold the selected event details

    function toggleAddModal() {
        showAddModal = !showAddModal; // Toggle add modal visibility
    }

    function openViewModal() {
        showViewModal = true; // Show the view modal
    }

    function closeViewModal() {
        showViewModal = false; // Hide the view modal
    }
</script>

<Navbar currentPage="scheduling" />

<div class="contact-content">
  <div class="contact-header"> 
    <h1>SCHEDULE</h1>
  </div> 
  <div class="scheduling-container">
      <div class="search-container">
          <input type="text" placeholder="Search events" class="search-input" />
          <div class="event-search">
            <button class="filter-events">Filter Events</button>
            <button class="add-events" on:click={toggleAddModal}>Add Events</button>
          </div>
          {#if showAddModal}
          <div class="modal">
            <div class="modal-content">
              <span class="close" on:click={toggleAddModal}>&times;</span>
              <h2>Add Event</h2>
              <form>
                <label>Event Name</label>
                <input type="text" placeholder="Enter event name" />
                
                <label>Event Type</label>
                <input type="text" placeholder="Enter event type" />
                
                <label>Event Description</label>
                <textarea placeholder="Add description"></textarea>
                
                <label>Contact No.</label>
                <input type="text" placeholder="Add Contact" />
                
                <label>Start Date and Time</label>
                <input type="datetime-local" />
                
                <label>End Date and Time</label>
                <input type="datetime-local" />
                
                <label>Location</label>
                <input type="text" placeholder="Enter event location" />
                
                <label>Image</label>
                <input type="file" />
                
                <button type="submit">Save</button>
              </form>
            </div>
          </div>
        {/if}
      </div>

      <div class="today-section">
        <h2>Today</h2>
        <div class="event-card" on:click={() => openViewModal()}>
            <img src="pic2.jpg" alt="Event Image" class="event-image" />
            <div class="event-details">
                <h3>Visit Cemetery</h3>
                <p>Holiday</p>
                <div class="event-info">
                    <span class="date-time">Nov 1, 2024</span>
                    <span class="date-time">3:00 AM</span>
                </div>
            </div>
            <button class="view-button" on:click={() => openViewModal()}>VIEW</button>
        </div>
    </div>
  
    <!-- View Modal -->
    {#if showViewModal}
      <div class="modal">
        <div class="modal-content">
          <span class="close" on:click={closeViewModal}>&times;</span>
          <h2>sample.data</h2>
          <img src="pic2.jpg" alt="Event Image" class="event-image" />
          <p><strong>Location:</strong> sample.data</p>
          <p><strong>Contact:</strong>sample.data</p>
          <p><strong>START:</strong>sample.data</p>
          <p><strong>END:</strong>sample.data</p>
          <p><strong>Description:</strong> sample.data</p>
          <button class="edit-button">Edit</button>
        </div>
      </div>
    {/if}
  

      <div class="yesterday-section">
          <h2>Yesterday</h2>
          <div class="event-card">
              <img src="pic2.jpg" alt="Event Image" class="event-image" />
              <div class="event-details">
                  <h3>Birthday</h3>
                  <p>Birthday</p>
                  <div class="event-info">
                      <span class="date-time">Oct 31, 2024</span>
                      <span class="date-time">1:00 PM</span>
                  </div>
              </div>
              <button class="view-button">VIEW</button>
          </div>
          <div class="event-card">
              <img src="pic2.jpg" alt="Event Image" class="event-image" />
              <div class="event-details">
                  <h3>Mandated Half Day</h3>
                  <p>National Event</p>
                  <div class="event-info">
                      <span class="date-time">Oct 31, 2024</span>
                      <span class="date-time">12:00 PM</span>
                  </div>
              </div>
              <button class="view-button">VIEW</button>
          </div>
      </div>
      <div class="pagination">
        <button class="prev-button">← Previous</button>
        <span class="page-number">1</span>
        <span>2</span>
        <span>3</span>
        <span>...</span>
        <span>9</span>
        <span>10</span>
        <button class="next-button">Next →</button>
    </div>
  </div>
</div>
<footer>
    <p class="copyright">© 2024 PlanNext. All Rights Reserved.</p>
    <div class="social-icons">
        <a href="https://twitter.com" target="_blank" class="social-icon"><i class="fab fa-twitter"></i></a>
        <a href="https://instagram.com" target="_blank" class="social-icon"><i class="fab fa-instagram"></i></a>
        <a href="https://youtube.com" target="_blank" class="social-icon"><i class="fab fa-youtube"></i></a>
        <a href="https://linkedin.com" target="_blank" class="social-icon"><i class="fab fa-linkedin"></i></a>
    </div>
</footer>

<style>
  .contact-content {
    padding-top: 4rem;

  }
  .contact-header {
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
  .contact-header h1 {
    font-size: 2rem;
    font-weight: bolder;
  }
    .scheduling-container {
        padding: 2rem;
        background-color: #e0e0d1;
        max-width: 1200px;
        margin: 0 auto;
    }

    

    .search-container {
        display: flex;
        flex-direction: column; /* Stack elements vertically */
        align-items: center; /* Center align items */
        margin-bottom: 2rem;
    }

    .search-input {
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 800px; /* Adjust width as needed */
        margin-bottom: 1rem; /* Space between input and buttons */
    }

    .event-search {
        display: flex; /* Keep buttons in a row */
        justify-content: center; /* Center buttons */
        
    }
    .add-events {
      background-color: #344E41;
    }
    .filter-events {
      background-color: #588157;
    }
    .filter-events, .add-events {
        color: white;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        width: 250px;
        margin-left: 0.5rem; /* Space between buttons */
    }

    .today-section, .yesterday-section {
        margin-bottom: 2rem;
    }
    .today-section h2, .yesterday-section h2 {
        margin-bottom: 2rem;
        font-size: 15px;
        font-weight: bold;
    }
    .event-card {
        background-color: #588157;
        padding: 1rem;
        border-radius: 8px;
        margin-bottom: 1rem;
        display: flex;
        align-items: center; /* Align items vertically */
        justify-content: space-between; /* Space between details and button */
    }

    .event-image {
        width: 100px; /* Fixed width for the image */
        height: auto; /* Maintain aspect ratio */
        border-radius: 8px;
        margin-right: 1rem; /* Space between image and text */
    }

    .event-details {
        flex-grow: 1; /* Allow details to take remaining space */
        color: white; /* Text color */
        font-size: 12px;
    }
    .event-details h3 {
        font-size: 17px;
        font-weight: bold;
    }

    .event-info {
        display: flex;
        justify-content: flex-start; /* Align items to the left */
        margin: 0.5rem 0; /* Margin for spacing */
    }

    .date-time {
        background-color: #A3B18A; /* Light green background */
        padding: 0.5rem;
        font-size: 10px;
        border-radius: 4px;
        margin-right: 0.5rem; /* Space between date and time */
        color: black; /* Text color */
    }

    .view-button {
        background-color: #344E41;
        color: white;
        font-size: 10px;
        padding: 0.5rem;
        border: none;
        width: 11rem;
        border-radius: 4px;
        cursor: pointer;
        margin-left: 1rem; /* Space between details and button */
    }

    .pagination {
    display: flex;
    font-size: 12px;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
}
.pagination span {
  padding: 0.5rem;
}

.prev-button{
    color: rgba(0, 0, 0, 0.519);
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin: 0 0.5rem; /* Space between buttons */
}
.next-button {
    color: rgb(0, 0, 0);
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin: 0 0.5rem; /* Space between buttons */
}

.page-number {
    background-color: #344E41; /* Change to match the template */
    color: white;
    
    border-radius: 4px;
   
}
    footer {
    background-color: #a3b18a;
    text-align: center;
    padding: 1rem;
    display: flex;
    justify-content: center; /* Center the copyright text */
    align-items: center;
    position: relative; /* Position relative for absolute positioning of icons */
    height: 8rem;
  }

  footer p {
    font-weight: bold;
    margin: 0;
  }

  .social-icons {
    position: absolute; /* Position icons absolutely */
    right: 1rem; /* Align to the right */
    bottom: 1rem; /* Align to the bottom */
    display: flex;
    gap: 1rem; /* Space between icons */
  }

  .social-icon {
    color: rgb(0, 0, 0); /* Icon color */
    font-size: 1.5rem; /* Icon size */
    text-decoration: none; /* Remove underline */
  }

  .social-icon:hover {
    color: #ffffff; /* Change color on hover */
  }

  .modal {
    display: flex;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.7);
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    background-color: #fefefe;
    padding: 20px;
    border: 1px solid #888;
    border-radius: 8px;
    width: 90%;
    max-width: 500px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }

  .edit-button {
    margin-top: 20px;
    background-color: #344E41;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  /* Additional styles for form elements */
  form {
    display: flex;
    flex-direction: column;
  }

  label {
    margin-top: 10px;
  }

  input, textarea {
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button[type="submit"] {
    margin-top: 20px;
    background-color: #344E41;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
</style>
