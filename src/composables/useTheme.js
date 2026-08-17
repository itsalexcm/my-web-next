import { ref, onMounted } from 'vue';

const theme = ref('light');
let initialized = false;

const readPreferredTheme = () => {
  try {
    const saved = localStorage.getItem('theme') || sessionStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
  } catch (error) {
    // ignore storage access errors
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const applyTheme = (value) => {
  theme.value = value;
  document.documentElement.setAttribute('data-theme', value);
};

export function useTheme() {
  const toggleTheme = () => {
    document.body.classList.add('enable-transitions');
    const next = theme.value === 'light' ? 'dark' : 'light';
    applyTheme(next);
    try {
      localStorage.setItem('theme', next);
    } catch (error) {
      // ignore storage access errors
    }
  };

  onMounted(() => {
    if (initialized) {
      const current = document.documentElement.getAttribute('data-theme');
      if (current === 'light' || current === 'dark') {
        theme.value = current;
      }
      return;
    }
    initialized = true;
    const current = document.documentElement.getAttribute('data-theme') || readPreferredTheme();
    applyTheme(current);
  });

  return { theme, toggleTheme };
}
