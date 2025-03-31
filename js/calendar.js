document.addEventListener('DOMContentLoaded', function() {
    const calendarEl = document.getElementById('calendar');
    
    // Initialize FullCalendar
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,listMonth'
      },
      events: [
        {
          title: 'Systems Thinking',
          start: '2025-01-17T13:30:00',
          end: '2025-01-17T16:30:00',
          url: '#event-systems-thinking',
          color: '#45b29d'
        },
        {
          title: 'Degrowth and Circular Economies',
          start: '2025-01-24T15:00:00',
          end: '2025-01-24T17:00:00',
          url: '#event-circular-economies',
          color: '#6a51a3'
        },
        {
          title: 'Critical Thinking',
          start: '2025-02-14T13:30:00',
          end: '2025-02-14T16:30:00',
          url: '#event-critical-thinking',
          color: '#45b29d'
        },
        {
          title: 'Financial Inequalities',
          start: '2025-02-21T15:00:00',
          end: '2025-02-21T17:00:00',
          url: '#event-financial-inequalities',
          color: '#6a51a3'
        },
        {
          title: 'Culmination & Reflections',
          start: '2025-04-01T13:30:00',
          end: '2025-04-01T18:30:00',
          url: '#event-culmination',
          color: '#45b29d'
        }
      ],
      eventClick: function(info) {
        if (info.event.url) {
          info.jsEvent.preventDefault();
          document.querySelector(info.event.url).scrollIntoView({ 
            behavior: 'smooth' 
          });
        }
      }
    });
    
    calendar.render();
  });
  
  // RSVP Form Handling
  document.addEventListener('DOMContentLoaded', function() {
    const rsvpForms = document.querySelectorAll('.rsvp-form');
    
    rsvpForms.forEach(form => {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const eventId = this.dataset.eventId;
        const name = this.querySelector('input[name="name"]').value;
        const email = this.querySelector('input[name="email"]').value;
        
        // Simple validation
        if (!name || !email) {
          alert('Please fill in all fields');
          return;
        }
        
        // Display success message
        this.innerHTML = `<div class="rsvp-success">
          <p>Thank you, ${name}! Your RSVP has been received.</p>
          <p>We'll send a confirmation to ${email} shortly.</p>
        </div>`;
        
        // Here you would normally send data to server
        console.log(`RSVP for ${eventId}: ${name} (${email})`);
      });
    });
  });