const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.sidebar .close-btn');

menuToggle.addEventListener('click', () => {
    sidebar.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
});

// Optional: Close sidebar when clicking outside of it
window.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
        sidebar.classList.remove('active');
    }
});