import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Extract from "./pages/Extract";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/extract" element={<Extract />}></Route>
		</Routes>
	);
};

export default App;
