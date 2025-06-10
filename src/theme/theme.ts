// src/theme/theme.ts
export const toggleDarkMode = (enable: boolean) => {
  document.body.classList.toggle('dark', enable);
};
