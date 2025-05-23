document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    const tabBtns = document.querySelectorAll('.hackathon-tabs .tab-btn');
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
    const docModal = document.getElementById('doc-modal');
    const addDocBtn = document.getElementById('add-doc-btn');
    const closeModalBtns = document.querySelectorAll('.close-modal');
    const logoutBtn = document.getElementById('logout-btn');
    
    // Form elements
    const docForm = document.getElementById('doc-form');
    const docFileInput = document.getElementById('doc-file');
    const docFileNames = document.querySelector('#doc-modal .file-names');
    
    // Open document modal
    addDocBtn.addEventListener('click', () => {
        docModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    
    // Close modals
    function closeModal() {
        docModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', closeModal);
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === docModal) {
            closeModal();
        }
    });
    
    // File upload display
    docFileInput.addEventListener('change', function() {
        if (this.files.length > 0) {
            docFileNames.textContent = this.files[0].name;
        } else {
            docFileNames.textContent = 'No file selected';
        }
    });
    
    // Form submission
    docForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const docTitle = document.getElementById('doc-title').value;
        const docType = document.getElementById('doc-type').value;
        const docContent = document.getElementById('doc-content').value;
        const docFile = docFileInput.files[0];
        
        // In a real app, you would upload this to your server
        console.log('New document:', {
            title: docTitle,
            type: docType,
            content: docContent,
            file: docFile ? docFile.name : 'None'
        });
        
        // Close modal and reset form
        closeModal();
        docForm.reset();
        docFileNames.textContent = 'No file selected';
        
        // Show success message
        alert('Document added successfully!');
    });
    
    // Logout button
    logoutBtn.addEventListener('click', function() {
        if (confirm('Are you sure you want to logout?')) {
            // Redirect to login page
            window.location.href = 'index.html';
        }
    });
    
    // Project submission checklist
    const checklistItems = document.querySelectorAll('.checklist-item input[type="checkbox"]');
    
    checklistItems.forEach(item => {
        item.addEventListener('change', function() {
            const checklistItem = this.closest('.checklist-item');
            const percentComplete = calculateChecklistProgress();
            updateHackathonProgress(percentComplete);
        });
    });
    
    function calculateChecklistProgress() {
        const totalItems = checklistItems.length;
        let checkedItems = 0;
        
        checklistItems.forEach(item => {
            if (item.checked) checkedItems++;
        });
        
        return (checkedItems / totalItems) * 100;
    }
    
    function updateHackathonProgress(percent) {
        const progressFill = document.querySelector('.progress-fill');
        const progressPercent = document.querySelector('.progress-percent');
        
        // Animate progress bar
        progressFill.style.width = `${percent}%`;
        progressPercent.textContent = `${Math.round(percent)}% Complete`;
    }
    
    // Initialize project links position
    document.querySelectorAll('.project-links').forEach(links => {
        links.style.opacity = '0';
        links.style.transform = 'translateY(-10px)';
        links.style.transition = 'all 0.3s ease';
    });
    
    // Project card hover effect
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
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

