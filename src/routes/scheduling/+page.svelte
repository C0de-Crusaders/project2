<script>
    import Navbar from '$lib/Navbar.svelte';
    import { validateEvent } from '$lib/validation';
    import { fly } from 'svelte/transition';

    let showAddModal = false;
    let showWarning = false;
    let showViewModal = false;
    let showDateFilter = false;
    let selectedEvent = null;
    let eventName = '';
    let eventType = '';
    let eventDescription = '';
    let contactNumber = '';
    let startDateTime = '';
    let endDateTime = '';
    let location = '';
    let events = [];
    let searchQuery = '';
    let filterYear = ''; // Year input for filtering
    let filterMonth = ''; // Month input for filtering
    let errors = {
        eventName: '',
        eventType: '',
        contactNumber: '',
        startDateTime: '',
        endDateTime: '',
        location: ''
    };

    $: filteredEvents = events.filter(event => {
        const eventDate = new Date(event.startDateTime);
        const eventYear = eventDate.getFullYear().toString();

        return event.eventName.toLowerCase().includes(searchQuery.toLowerCase()) &&
               (!filterYear || eventYear === filterYear.toString());
    });

    function toggleAddModal() {
        showAddModal = !showAddModal;
    }

    function toggleViewModal(event = null) {
        showViewModal = !showViewModal;
        selectedEvent = event;
    }

    function toggleDateFilter() {
        showDateFilter = !showDateFilter;
    }

    function handleSubmit(event) {
        event.preventDefault();
        const newEvent = {
            eventName,
            eventType,
            eventDescription,
            contactNumber,
            startDateTime,
            endDateTime,
            location
        };

        const { isValid, errors: validationErrors } = validateEvent(newEvent);
        errors = validationErrors;
        if (isValid) {
            events = [...events, newEvent];
            console.log('Event scheduled:', newEvent);
            showWarning = true;
            setTimeout(() => {
                showWarning = false;
            }, 5000);
            toggleAddModal();

            // Clear the form fields
            eventName = '';
            eventType = '';
            eventDescription = '';
            contactNumber = '';
            startDateTime = '';
            endDateTime = '';
            location = '';
        } else {
            console.log('Validation errors:', errors);
        }
    }

    function removeEvent() {
        events = events.filter(event => event !== selectedEvent);
        toggleViewModal();
    }

    function formatDateTime(dateTime) {
        const date = new Date(dateTime);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const timeOptions = { hour: '2-digit', minute: '2-digit' };
        return {
            date: date.toLocaleDateString(undefined, options),
            time: date.toLocaleTimeString(undefined, timeOptions)
        };
    }
</script>

<Navbar currentPage="scheduling" />

<div class="contact-content">
  <div class="contact-header"> 
    <h1>SCHEDULE</h1>
  </div> 
</div>
<div class="scheduling-container">
    <div class="search-container">
        <input type="text" placeholder="Search events" class="search-input" bind:value={searchQuery} />
        <div class="event-search">
          <details class="filter-dropdown">
            <summary class="filter-events">Filter Events</summary>
            <div class="filter-content">
              <input type="number" placeholder="Year" bind:value={filterYear} class="date-input" min="1900" max="2100" />
            </div>
          </details>
          <button class="add-events" on:click={toggleAddModal}>Add Events</button>
        </div>
       
        {#if showAddModal}
        <div class="modal">
          <div class="modal-content">
            <span class="close" on:click={toggleAddModal}>&times;</span>
            <h2><strong>Add Event</strong></h2>
            <form on:submit={handleSubmit}>
              <label>Event Name</label>
              <input type="text" name="eventName" bind:value={eventName} placeholder="Enter event name" />
              {#if errors.eventName}<small class="error">{errors.eventName}</small>{/if}

              <label>Event Type</label>
              <input type="text" name="eventType" bind:value={eventType} placeholder="Enter event type" />
              {#if errors.eventType}<small class="error">{errors.eventType}</small>{/if}

              <label>Event Description</label>
              <textarea name="eventDescription" bind:value={eventDescription} placeholder="Add description"></textarea>

              <label>Contact No.</label>
              <input type="text" name="contactNumber" bind:value={contactNumber} placeholder="Add Contact" />
              {#if errors.contactNumber}<small class="error">{errors.contactNumber}</small>{/if}

              <label>Start Date and Time</label>
              <input type="datetime-local" name="startDateTime" bind:value={startDateTime} />
              {#if errors.startDateTime}<small class="error">{errors.startDateTime}</small>{/if}

              <label>End Date and Time</label>
              <input type="datetime-local" name="endDateTime" bind:value={endDateTime} />
              {#if errors.endDateTime}<small class="error">{errors.endDateTime}</small>{/if}

              <label>Location</label>
              <input type="text" name="location" bind:value={location} placeholder="Enter event location" />
              {#if errors.location}<small class="error">{errors.location}</small>{/if}

              <button type="submit">Save</button>
            </form>
          </div>
        </div>
      {/if}
      
      {#if showWarning}
        <div class="warning-note" transition:fly={{ x: 300, duration: 500 }}>
          <div class="wrng-hd">
            <p><strong>Event Scheduled!</strong></p>
          </div>
        </div>
      {/if}
    
  </div>

  <div class="today-section">
    <h2>Events</h2>
    {#each filteredEvents as event}
      <div class="event-card">
        <img src="pic2.jpg" alt="Event Image" class="event-image" />
        <div class="event-details">
          <h3>{event.eventName}</h3>
          <p>{event.eventType}</p>
          <div class="event-info">
            <span class="date-time">{formatDateTime(event.startDateTime).date}</span>
            <span class="date-time">{formatDateTime(event.startDateTime).time}</span>
          </div>
        </div>
        <button class="view-button" on:click={() => toggleViewModal(event)}>VIEW</button>
      </div>
    {/each}
  </div>

  <!-- View Modal -->
  {#if showViewModal && selectedEvent}
    <div class="modal">
      <div class="modal-content">
        <span class="close" on:click={toggleViewModal}>&times;</span>
        <img src="pic2.jpg" alt="Event Image" class="event-image centered" />
        <h2 class="modal-title">{selectedEvent.eventName}</h2>
        <p><strong>Location:</strong> {selectedEvent.location}</p>
        <p><strong>Contact:</strong> {selectedEvent.contactNumber}</p>
        <div class="date-container">
          <div class="date-item">
            <strong class="start">START:</strong> {selectedEvent.startDateTime}
          </div>
          <div class="date-item">
            <strong class="end">END:</strong> {selectedEvent.endDateTime}
          </div>
        </div>
        <p><strong>Description:</strong> {selectedEvent.eventDescription}</p>
        <button class="remove-button" on:click={removeEvent}>Remove</button>
      </div>
    </div>
  {/if}
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
        display: flex;
        justify-content: space-evenly; /* Space between dropdown and button */
        align-items: flex-start; /* Align items to the top */
        width: 100%; /* Full width to prevent shifting */
        max-width: 800px; /* Adjust as needed */
    }

    .filter-dropdown {
        position: relative;
        z-index: 3; /* Ensure dropdown is above other elements */
    }

    .filter-content {
        display: flex;
        flex-direction: column;
        background-color: #e0e0d1;
        padding: 1rem;
        border-radius: 4px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        margin-top: 0.5rem;
    }

    .filter-events {
        cursor: pointer;
        list-style: none;
        background-color: #344E41; /* Keep background color */
        color: white;
        padding: 0.5rem 1rem;
        width: 250px;
        border-radius: 4px;
        text-align: center;
    }

    .filter-events::marker {
        display: none;
    }

    .add-events {
        background-color: #344E41;
        color: white;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        width: 250px;
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
    z-index: 3;
    left: 0;
    top: 0;
    padding-top: 4rem;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.7);
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    background-color: #A3B18A;
    padding: 30px;
    margin-top: 2rem;
    border: 1px solid #888;
    border-radius: 8px;
    width: 90%;
    max-width: 700px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .close {
    color: #000000;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: rgb(217, 41, 41);
    text-decoration: none;
    cursor: pointer;
  }

  .remove-button {
    margin: 20px auto; /* Center the button horizontally */
    display: block; /* Make the button a block element */
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

  .centered {
    display: block;
    margin: 0 auto; /* Center the image */
  }

  .date-container {
    display: flex; /* Use flexbox for inline layout */
    justify-content:space-evenly; /* Space between start and end */
    margin: 1rem 0; /* Margin for spacing */
  }

  .date-item {
    font-size: 12px;
    padding: 0.4rem 0.5rem 0.4rem 0;
    background-color: #f0f0f0; /* Background color for the date item */
    width: 300px;
    border-radius: 4px; /* Rounded corners */
    color: black; /* Text color */
  }
  .wrng-hd {
    background-color: #000000;
    font-size: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .wrng-hd strong {
    color: #ffffff;
  }
  .warning-note {
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 1000;
    margin-top: 1rem;
    font-size: 12px;
    background-color: #DAD7CD;
    border: 5px solid #000000;
    border-radius: 4px;
  }
  .start{
    font-size: 12px;
    padding: 0.7rem;
    background-color: #588157; /* Background color for the strong text */
    color: rgb(0, 0, 0); /* Text color for strong */
    border-radius: 4px; /* Rounded corners for strong background */
  }

  .end{
    font-size: 12px;
    padding: 0.7rem;
    background-color: #000000; /* Background color for the strong text */
    color: white; /* Text color for strong */
    border-radius: 4px; /* Rounded corners for strong background */
  }

  .modal-title {
    text-align: center; /* Center the title */
    margin-top: 10px; /* Space between the image and title */
    font-size: 1.5rem; /* Adjust font size as needed */
    color: black; /* Change color if needed */
  }
</style>
