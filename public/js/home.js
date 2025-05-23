
function openModal(memberId) {
    // In a real implementation, you would fetch member data based on the memberId
    document.getElementById('memberModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('memberModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('memberModal');
    if (event.target == modal) {
        closeModal();
    }
}

    
document.getElementById('login').addEventListener('click',()=>{
    window.location.href = '/login_page';
})