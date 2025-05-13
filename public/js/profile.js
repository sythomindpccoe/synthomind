document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Show corresponding content
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
    
    // Modal functionality
    const avatarModal = document.getElementById('avatar-modal');
    const editAvatarBtn = document.getElementById('edit-avatar-btn');
    const closeModalBtns = document.querySelectorAll('.close-modal');
    const cancelAvatarBtn = document.getElementById('cancel-avatar-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const editProfileBtn = document.getElementById('edit-profile-btn');
    
    // Avatar upload functionality
    const avatarInput = document.getElementById('avatar-input');
    const avatarPreview = document.getElementById('avatar-preview');
    const removeAvatarBtn = document.getElementById('remove-avatar-btn');
    const saveAvatarBtn = document.getElementById('save-avatar-btn');
    
    // Open avatar modal
    editAvatarBtn.addEventListener('click', () => {
        avatarModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    
    // Close modals
    function closeModal() {
        avatarModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', closeModal);
    });
    
    cancelAvatarBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === avatarModal) {
            closeModal();
        }
    });
    
    // Avatar upload preview
    avatarInput.addEventListener('change', function() {
        if (this.files && this.files[0]) {
            const reader = new FileReader();
            
            reader.onload = function(e) {
                avatarPreview.querySelector('img').src = e.target.result;
            }
            
            reader.readAsDataURL(this.files[0]);
        }
    });
    
    // Remove avatar
    removeAvatarBtn.addEventListener('click', function() {
        avatarPreview.querySelector('img').src = 'https://randomuser.me/api/portraits/men/22.jpg';
        avatarInput.value = '';
    });
    
    // Save avatar changes
    saveAvatarBtn.addEventListener('click', function() {
        // In a real app, you would upload the image to your server here
        const newAvatarSrc = avatarPreview.querySelector('img').src;
        document.querySelector('.profile-avatar').src = newAvatarSrc;
        
        // Show success message
        alert('Profile picture updated successfully!');
        closeModal();
    });
    
    // Edit profile button
    editProfileBtn.addEventListener('click', function() {
        // In a real app, this would navigate to the edit profile page
        window.location.href = '/edit_profile';
    });
    
    // Logout button
    logoutBtn.addEventListener('click', function() {
        if (confirm('Are you sure you want to logout?')) {
            // Redirect to login page
            window.location.href = 'index.html';
        }
    });
    
    // Project card hover effect
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const projectImage = this.querySelector('.project-image');
            const projectLinks = this.querySelector('.project-links');
            
            projectLinks.style.opacity = '1';
            projectLinks.style.transform = 'translateY(0)';
        });
        
        card.addEventListener('mouseleave', function() {
            const projectLinks = this.querySelector('.project-links');
            
            projectLinks.style.opacity = '0';
            projectLinks.style.transform = 'translateY(-10px)';
        });
    });
    
    // Initialize project links position
    document.querySelectorAll('.project-links').forEach(links => {
        links.style.opacity = '0';
        links.style.transform = 'translateY(-10px)';
        links.style.transition = 'all 0.3s ease';
    });
});


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

