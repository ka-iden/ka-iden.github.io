// Execute immediately to prevent flash of wrong theme
(function() {
	// Check for saved theme preference or use system preference
	const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
	const savedTheme = localStorage.getItem('theme');
	
	// Apply the right theme based on saved preference or system preference
	if (savedTheme === 'dark' || (!savedTheme && prefersDarkMode)) {
		document.documentElement.classList.add('dark-mode');
		// Set initial emoji - will be executed once DOM is ready
		document.addEventListener('DOMContentLoaded', () => {
			document.getElementById('darkModeToggle').textContent = '🌙';
		});
	} else {
		// Set initial emoji for light mode
		document.addEventListener('DOMContentLoaded', () => {
			document.getElementById('darkModeToggle').textContent = '☀️';
		});
	}
})();