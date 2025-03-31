import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Router>
			<main className="h-screen overflow-hidden">
				<App />
			</main>
		</Router>
	</StrictMode>
);
