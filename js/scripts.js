const changeThemeBtn = document.querySelector('#change-theme');

// toggle dark mode

function toggleDarkMode() {
  document.body.classList.toggle('dark');
}

// Load ligth or dark mode in Local Storage
function LoadTheme() {
  const darkMode = localStorage.getItem('dark');

  if (darkMode) {
    toggleDarkMode();
  }
}

LoadTheme();

// change theme and save local storage
changeThemeBtn.addEventListener('change', function () {
  toggleDarkMode();

  // Save or remove dark mode
  localStorage.removeItem('dark');

  if (document.body.classList.contains('dark')) {
    localStorage.setItem('dark', 1);
  }
});

