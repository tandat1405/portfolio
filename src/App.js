import { useEffect } from "react";
import ReactGA from "react-ga4";
import { Route, Routes } from "react-router-dom";

import Notfound from "./pages/404";
import Contact from "./pages/contact";
import Homepage from "./pages/homepage";

import "./app.css";
import { TRACKING_ID } from "./data/tracking";

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				{/* <Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/articles" element={<Articles />} />
				<Route path="/article/:slug" element={<ReadArticle />} /> */}
				<Route path="/contact" element={<Contact />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
