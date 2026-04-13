import { Link, useNavigate } from "react-router-dom";
import type { Theme } from "../theme";

interface NavbarProps {
    theme: Theme;
    onToggleTheme: () => void;
}

function Navbar({ theme, onToggleTheme }: NavbarProps) {
    const navigate = useNavigate();

    function handleLogout(): void {
        localStorage.removeItem("user_data");
        navigate("/");
    }

    return (
        <nav className="navbar">
            <h2>StudyRewards</h2>

            <div className="nav-links">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/sets">Study Sets</Link>
                <Link to="/flashcards">Flashcards</Link>
                <Link to="/quiz">Quiz</Link>
                <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle theme">
                    {theme === "dark" ? "☀️" : "🌙"}
                </button>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </nav>
    );
}

export default Navbar;