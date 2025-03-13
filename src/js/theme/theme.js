const THEME = {
  PINK: '#ed3b44',
  BLUE: '#0041e8',
  ORANGE: '#ff7f08',
};

const THEME_KEY = 'user theme';
const checker = document.querySelector('.theme-list');

const savedUserTheme = getFromLS(THEME_KEY);
if (savedUserTheme) {
  changeTheme(savedUserTheme);
}

checker.addEventListener('click', evt => {
  if (evt.target === evt.currentTarget) {
    return;
  }

  const theme = evt.target.dataset.themeOption;
  saveToLS(THEME_KEY, theme);
  changeTheme(theme);
});

function changeTheme(theme) {
  const html = document.querySelector('html');
  if (html.dataset.theme === theme) return;
  html.dataset.theme = theme;
}

function saveToLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getFromLS(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    console.log(error);
  }
}
