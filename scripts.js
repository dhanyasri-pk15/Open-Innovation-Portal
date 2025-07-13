document.getElementById('project-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form Submitted Successfully!');
});
const teamSizeInput = document.getElementById('team-size');
const teamMembersDiv = document.getElementById('team-members');
teamSizeInput.addEventListener('input', function() {
    // Clear the current team member inputs
    teamMembersDiv.innerHTML = '';

    // Generate the new team member inputs based on the team size
    const teamSize = parseInt(this.value);
    if (teamSize >= 2 && teamSize <= 10) {
        for (let i = 1; i <= teamSize; i++) {
            const label = document.createElement('label');
            label.innerText = `Member ${i} Name:`;
            const input = document.createElement('input');
            input.type = 'text';
            input.name = `member-${i}-name`;
            input.placeholder = `Enter name of member ${i}`;
            input.classList.add('member-field');
            teamMembersDiv.appendChild(label);
            teamMembersDiv.appendChild(input);
        }
    }
});