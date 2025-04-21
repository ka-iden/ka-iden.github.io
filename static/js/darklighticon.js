// Set initial icon based on current theme
const button = document.getElementById('darkModeToggle');
const isDarkMode = document.documentElement.classList.contains('dark-mode');
button.textContent = isDarkMode ? '🌙' : '☀️';

// Handle the toggle functionality
button.addEventListener('click', () => {
	const isDarkMode = document.documentElement.classList.toggle('dark-mode');
	
	// Update button emoji based on new theme state
	button.textContent = isDarkMode ? '🌙' : '☀️';
	
	// Save preference to localStorage
	localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});