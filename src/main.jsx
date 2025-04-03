import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";

// components
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Router>
			<main className="h-screen overflow-hidden">
				<NavBar />
				<App />
				<Footer />
			</main>
		</Router>
	</StrictMode>
);
