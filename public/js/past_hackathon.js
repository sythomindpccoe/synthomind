document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const logoutBtn = document.getElementById('logout-btn');
    const searchInput = document.getElementById('hackathon-search');
    const filterSelect = document.getElementById('hackathon-filter');
    const hackathonCards = document.querySelectorAll('.hackathon-card');
    const pageBtns = document.querySelectorAll('.page-btn:not(.disabled)');

    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        hackathonCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('.hackathon-description').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // Filter functionality
    filterSelect.addEventListener('change', function() {
        const filterValue = this.value;
        
        hackathonCards.forEach(card => {
            const isWinner = card.classList.contains('winner');
            const year = card.querySelector('h3').textContent;
            
            if (filterValue === 'all') {
                card.style.display = 'block';
            } else if (filterValue === 'winner') {
                card.style.display = isWinner ? 'block' : 'none';
            } else {
                // Filter by year (simplified for demo)
                card.style.display = year.includes(filterValue) ? 'block' : 'none';
            }
        });
    });

    // Pagination (simulated)
    pageBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (!this.classList.contains('active')) {
                document.querySelector('.page-btn.active').classList.remove('active');
                this.classList.add('active');
                
                // In a real app, this would load new data
                console.log('Loading page:', this.textContent);
            }
        });
    });

    // Logout
    logoutBtn.addEventListener('click', function() {
        if (confirm('Are you sure you want to logout?')) {
            window.location.href = 'index.html';
        }
    });

    // Simulate loading animation
    setTimeout(() => {
        document.querySelectorAll('.hackathon-card').forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 300);
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

