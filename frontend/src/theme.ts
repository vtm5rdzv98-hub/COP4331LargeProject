export type Theme = "dark" | "light";

export function getStoredTheme(): Theme {
    return localStorage.getItem("theme") === "light" ? "light" : "dark";
}

export function applyTheme(theme: Theme): void {
    document.body.dataset.theme = theme;
    localStorage.setItem("theme", theme);
}
