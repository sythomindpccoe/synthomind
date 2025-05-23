// Dropdown checkbox functionality
const teamMembersToggle = document.getElementById('team-members-toggle');
const teamMembersMenu = document.getElementById('team-members-menu');
const selectedMembersDisplay = document.getElementById('selected-members-display');
const memberCheckboxes = document.querySelectorAll('.dropdown-checkbox-item input[type="checkbox"]');

// Toggle dropdown
teamMembersToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    teamMembersMenu.classList.toggle('active');
});

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown-checkbox')) {
        teamMembersToggle.classList.remove('active');
        teamMembersMenu.classList.remove('active');
    }
});

// Update selected members display
memberCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateSelectedMembers);
});

function updateSelectedMembers() {
    selectedMembersDisplay.innerHTML = '';
    const selectedMembers = [];
    
    memberCheckboxes.forEach(checkbox => {
        if (checkbox.checked) {
            const memberId = checkbox.id.replace('member-', '');
            const memberName = checkbox.nextElementSibling.textContent;
            
            selectedMembers.push({ id: memberId, name: memberName });
            
            const tag = document.createElement('div');
            tag.className = 'member-tag';
            tag.innerHTML = `
                ${memberName}
                <button type="button" data-member-id="${memberId}">
                    <i class="fas fa-times"></i>
                </button>
            `;
            selectedMembersDisplay.appendChild(tag);
        }
    });
    
    // Add click handlers to remove buttons
    document.querySelectorAll('.member-tag button').forEach(button => {
        button.addEventListener('click', function() {
            const memberId = this.getAttribute('data-member-id');
            document.getElementById(`member-${memberId}`).checked = false;
            updateSelectedMembers();
        });
    });
}

// Update form submission to get selected members
// projectForm.addEventListener('submit', function(e) {
//     e.preventDefault();
    
//     const selectedMembers = Array.from(memberCheckboxes)
//         .filter(checkbox => checkbox.checked)
//         .map(checkbox => checkbox.value);
    
//     const projectData = {
//         name: document.getElementById('project-name').value,
//         description: document.getElementById('project-description').value,
//         startDate: document.getElementById('project-start').value,
//         endDate: document.getElementById('project-end').value,
//         team: selectedMembers, // Updated to use checkbox values
//         type: document.querySelector('input[name="project-type"]:checked').value,
//         repo: document.getElementById('project-repo').value
//     };
    
//     console.log('New project data:', projectData);
//     alert('Project created successfully!');
//     window.location.href = 'dashboard.html';
// });



document.getElementById('dashboard').addEventListener('click',()=>{
    window.location.href = '/dashboard';
});

document.getElementById('hackathon').addEventListener('click',()=>{
    window.location.href = '/hackathon';
});

document.getElementById('past_hackathon').addEventListener('click',()=>{
    window.location.href = '/past_hackathon';
});

document.getElementById('profile').addEventListener('click',()=>{
    window.location.href = '/profile';
});


