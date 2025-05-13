document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality
    const updateModal = document.getElementById('update-modal');
    const taskModal = document.getElementById('task-modal');
    const addUpdateBtn = document.getElementById('add-update-btn');
    const addTaskBtn = document.getElementById('add-task-btn');
    const closeModalBtns = document.querySelectorAll('.close-modal');
    const dailyUpdateBtn = document.getElementById('daily-update-btn');
    const viewHackathonBtn = document.getElementById('view-hackathon-btn');
    const editProfileBtn = document.getElementById('edit-profile-btn');
    const logoutBtn = document.getElementById('logout-btn');
    
    // File upload display
    const updateFilesInput = document.getElementById('update-files');
    const fileNamesDisplay = document.querySelector('.file-names');
    
    // Form submissions
    const updateForm = document.getElementById('update-form');
    const taskForm = document.getElementById('task-form');
    
    // Open modals
    addUpdateBtn.addEventListener('click', () => {
        updateModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    
    addTaskBtn.addEventListener('click', () => {
        taskModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    
    dailyUpdateBtn.addEventListener('click', () => {
        updateModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    
    // Close modals
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            updateModal.style.display = 'none';
            taskModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === updateModal) {
            updateModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (e.target === taskModal) {
            taskModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // File upload display
    updateFilesInput.addEventListener('change', () => {
        if (updateFilesInput.files.length > 0) {
            const names = Array.from(updateFilesInput.files).map(file => file.name).join(', ');
            fileNamesDisplay.textContent = `${updateFilesInput.files.length} files selected: ${names}`;
        } else {
            fileNamesDisplay.textContent = 'No files selected';
        }
    });
    
    // Form submissions
    updateForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const updateContent = document.getElementById('update-content').value;
        
        // In a real app, you would send this to your backend
        console.log('New update:', updateContent);
        console.log('Files:', updateFilesInput.files);
        
        // Close modal and reset form
        updateModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        updateForm.reset();
        fileNamesDisplay.textContent = 'No files selected';
        
        // Show success message
        alert('Your daily update has been posted!');
    });
    
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskTitle = document.getElementById('task-title').value;
        const taskDescription = document.getElementById('task-description').value;
        const taskDue = document.getElementById('task-due').value;
        const taskAssign = document.getElementById('task-assign').value;
        const taskPriority = document.querySelector('input[name="priority"]:checked').value;
        
        // In a real app, you would send this to your backend
        console.log('New task:', {
            title: taskTitle,
            description: taskDescription,
            due: taskDue,
            assign: taskAssign,
            priority: taskPriority
        });
        
        // Close modal and reset form
        taskModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        taskForm.reset();
        
        // Show success message
        alert('New task has been added!');
    });
    
    // Navigation buttons
    viewHackathonBtn.addEventListener('click', () => {
        window.location.href = '/hackathon';
    });
    
    editProfileBtn.addEventListener('click', () => {
        // In a real app, this would navigate to the edit profile page
        window.location.href = '/edit_profile';
    });
    
    logoutBtn.addEventListener('click', () => {
        // In a real app, this would log the user out
        if (confirm('Are you sure you want to logout?')) {
            // Redirect to login page
            window.location.href = 'index.html';
        }
    });
    
    // Task completion toggle
    const taskCheckboxes = document.querySelectorAll('.task-checkbox input[type="checkbox"]');
    taskCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const taskItem = this.closest('.task-item');
            if (this.checked) {
                taskItem.style.opacity = '0.6';
                taskItem.querySelector('.task-info h4').style.textDecoration = 'line-through';
            } else {
                taskItem.style.opacity = '1';
                taskItem.querySelector('.task-info h4').style.textDecoration = 'none';
            }
        });
    });
    
    // Simulate loading data
    setTimeout(() => {
        document.querySelectorAll('.animate').forEach(el => {
            el.style.opacity = '1';
        });
    }, 300);
});


document.getElementById('profile').addEventListener('click',()=>{
    window.location.href = '/profile';
});

document.getElementById('new-project-btn').addEventListener('click',()=>{
    window.location.href = '/create_new_project';
});

Current_Hackathon

document.getElementById('Current_Hackathon').addEventListener('click', () => {
    window.location.href = '/hackathon';
});

document.getElementById('View_Details').addEventListener('click', () => {
    window.location.href = '/hackathon';
});


document.getElementById('Past_Hackathons').addEventListener('click', () => {
    window.location.href = '/past_hackathon';
});


document.getElementById('dashboard').addEventListener('click',()=>{
    window.location.href = '/dashboard';
});


document.getElementById('recent_documents').addEventListener('click', () => {
    window.location.href = '/hackathon';
});


