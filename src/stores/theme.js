import { writable } from "svelte/store";

export const theme = writable(getInitialTHeme());

function getInitialTHeme() {
  const persistedTheme = localStorage.getItem("theme");

  console.log(persistedTheme);

  return persistedTheme || "light";
}
