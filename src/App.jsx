import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
		</Routes>
	);
};

export default App;
