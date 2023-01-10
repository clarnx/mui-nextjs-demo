(function initTheme() {
  
  const currentThemeInLocalStorage = localStorage.getItem("currentTheme");

  if (currentThemeInLocalStorage === null) {
    localStorage.setItem("currentTheme", "light");
  }
})();
