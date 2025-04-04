import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";

// components
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import MobileNav from "./components/MobileNav.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Router>
			<main className="h-screen overflow-hidden">
				<NavBar />
				<MobileNav />
				<App />
				<Footer />
			</main>
		</Router>
	</StrictMode>
);
