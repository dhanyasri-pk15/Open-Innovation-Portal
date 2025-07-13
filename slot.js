document.addEventListener('DOMContentLoaded', function () {
    const slots = [
        '09:00 AM - 10:00 AM',
        '10:00 AM - 11:00 AM',
        '11:00 AM - 12:00 PM',
        '01:00 PM - 02:00 PM',
        '02:00 PM - 03:00 PM',
        '03:00 PM - 04:00 PM'
    ];

    const slotsContainer = document.getElementById('slotsContainer');
    const confirmationMessage = document.getElementById('confirmationMessage');
    const datePicker = document.getElementById('datePicker');

    // Function to render time slots
    function renderSlots() {
        slotsContainer.innerHTML = ''; // Clear previous slots
        slots.forEach(slot => {
            const slotDiv = document.createElement('div');
            slotDiv.classList.add('slot');
            slotDiv.innerText = slot;
            slotDiv.addEventListener('click', () => bookSlot(slotDiv, slot));
            slotsContainer.appendChild(slotDiv);
        });
    }

    // Function to book a slot
    function bookSlot(slotDiv, slot) {
        if (!slotDiv.classList.contains('booked')) {
            slotDiv.classList.add('booked');
            confirmationMessage.innerText = `You have booked the slot: ${slot}`;
            confirmationMessage.style.display = 'block';
        }
    }

    // Listen for date change and reset slots on new date selection
    datePicker.addEventListener('change', function () {
        confirmationMessage.style.display = 'none'; // Hide confirmation message when changing dates
        renderSlots(); // Re-render slots when a date is selected
    });
    
    // Initial rendering of slots
    renderSlots();
});
