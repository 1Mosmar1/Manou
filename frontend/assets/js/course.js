// Function to update the countdown on each card
function updateCountdown() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const deadline = new Date(card.getAttribute('data-deadline')).getTime();
        const countdownElement = card.querySelector('.btn-countdown');
        
        const now = new Date().getTime();
        const timeRemaining = deadline - now;

        if (timeRemaining <= 0) {
            countdownElement.textContent = 'Deadline Reached';
        } else {
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
            countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s left`;
        }
    });
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Run once on page load