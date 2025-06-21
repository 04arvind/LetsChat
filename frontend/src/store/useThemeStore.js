import { create } from 'zustand'

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("letschat-theme") || "coffe",
  setTheme: (theme) =>{
    localStorage.setItem("letschat-theme", theme);
      set({theme})
  },
}));