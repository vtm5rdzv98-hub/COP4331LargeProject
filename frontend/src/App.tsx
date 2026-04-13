import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import ForgotPassword from "./pages/forgotpass";
import Dashboard from "./pages/dashboard";
import Sets from "./pages/sets";
import SetDetail from "./pages/SetDetail.tsx";
import Flashcards from "./pages/flashcards";
import Quiz from "./pages/quiz";
import { applyTheme, getStoredTheme } from "./theme";

function App() {
    const location = useLocation();
    const user = localStorage.getItem("user_data");
    const [theme, setTheme] = useState<"dark" | "light">(getStoredTheme());

    const hideNavbarRoutes = ["/", "/login", "/register"];
    const showNavbar = !!user && !hideNavbarRoutes.includes(location.pathname);

    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    function handleToggleTheme(): void {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    }

    return (
        <>
            {showNavbar && <Navbar theme={theme} onToggleTheme={handleToggleTheme} />}
            {!showNavbar && (
                <button
                    type="button"
                    className="theme-toggle floating-theme-toggle"
                    onClick={handleToggleTheme}
                    aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                    title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                >
                    {theme === "dark" ? "☀️" : "🌙"}
                </button>
            )}

            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/sets" element={<Sets />} />
                    <Route path="/sets/:setId" element={<SetDetail />} />
                    <Route path="/flashcards" element={<Flashcards />} />
                    <Route path="/quiz" element={<Quiz />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
