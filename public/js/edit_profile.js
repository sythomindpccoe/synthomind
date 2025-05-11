document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const logoutBtn = document.getElementById('logout-btn');
    const avatarUpload = document.getElementById('avatar-upload');
    const avatarPreview = document.getElementById('avatar-preview');
    const removeAvatarBtn = document.getElementById('remove-avatar');
    const newSkillInput = document.getElementById('new-skill');
    const addSkillBtn = document.getElementById('add-skill-btn');
    const skillsTagsContainer = document.getElementById('skills-tags');
    const deactivateBtn = document.getElementById('deactivate-account');
    const deleteBtn = document.getElementById('delete-account');
    const confirmModal = document.getElementById('confirm-modal');
    const modalCancel = document.getElementById('modal-cancel');
    const modalConfirm = document.getElementById('modal-confirm');
    const modalTitle = document.getElementById('modal-title');
    const modalMessage = document.getElementById('modal-message');

    // Avatar Upload
    avatarUpload.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                avatarPreview.src = event.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    // Remove Avatar
    removeAvatarBtn.addEventListener('click', function() {
        avatarPreview.src = 'https://randomuser.me/api/portraits/men/22.jpg';
        avatarUpload.value = '';
    });

    // Add Skill
    function addSkill() {
        const skillText = newSkillInput.value.trim();
        if (skillText) {
            const skillTag = document.createElement('span');
            skillTag.className = 'skill-tag';
            skillTag.innerHTML = `
                ${skillText}
                <button class="remove-skill"><i class="fas fa-times"></i></button>
            `;
            skillsTagsContainer.appendChild(skillTag);
            newSkillInput.value = '';
            
            // Add event listener to remove button
            skillTag.querySelector('.remove-skill').addEventListener('click', function() {
                skillTag.remove();
            });
        }
    }

    newSkillInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            addSkill();
        }
    });

    addSkillBtn.addEventListener('click', addSkill);

    // Initialize existing skill remove buttons
    document.querySelectorAll('.remove-skill').forEach(button => {
        button.addEventListener('click', function() {
            this.parentElement.remove();
        });
    });

    // Danger Zone Actions
    deactivateBtn.addEventListener('click', function() {
        showConfirmationModal(
            'Deactivate Account',
            'Are you sure you want to deactivate your account? You can reactivate it by logging in again.',
            'Deactivate'
        );
    });

    deleteBtn.addEventListener('click', function() {
        showConfirmationModal(
            'Delete Account',
            'This will permanently delete your account and all associated data. This action cannot be undone.',
            'Delete'
        );
    });

    // Confirmation Modal
    function showConfirmationModal(title, message, confirmText) {
        modalTitle.textContent = title;
        modalMessage.textContent = message;
        modalConfirm.textContent = confirmText;
        confirmModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    modalCancel.addEventListener('click', function() {
        confirmModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    modalConfirm.addEventListener('click', function() {
        confirmModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        alert(`Action confirmed: ${modalTitle.textContent}`);
        // In a real app, you would perform the action here
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === confirmModal) {
            confirmModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Form Submissions
    document.getElementById('personal-info-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Personal information updated successfully!');
    });

    document.getElementById('social-media-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Social media links updated successfully!');
    });

    document.getElementById('skills-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Skills updated successfully!');
    });

    document.getElementById('password-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const newPassword = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        
        if (newPassword !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        
        alert('Password changed successfully!');
        this.reset();
    });

    // Logout
    logoutBtn.addEventListener('click', function() {
        if (confirm('Are you sure you want to logout?')) {
            window.location.href = 'index.html';
        }
    });
});