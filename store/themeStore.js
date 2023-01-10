import create from "zustand";

const useThemeStore = create((set) => ({
  currentTheme: "null",
  initThemeInStore: () =>
    set((state) => {
      const currentThemeInLocalStorage = localStorage.getItem("currentTheme");
      return {
        currentTheme: currentThemeInLocalStorage,
      };
    }),
  toggleTheme: () =>
    set((state) => {
      if (state.currentTheme === "light") {
        localStorage.setItem("currentTheme", "dark");
        return {
          currentTheme: "dark",
        };
      } else if (state.currentTheme === "dark") {
        localStorage.setItem("currentTheme", "light");
        return {
          currentTheme: "light",
        };
      }
    }),
}));

export default useThemeStore;
