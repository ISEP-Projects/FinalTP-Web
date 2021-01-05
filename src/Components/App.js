import "./App.css"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Navbar from "./NavigationBar"
import Home from "./Home"
import Missions from "./Missions"

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route path="/home">
						<Home />
					</Route>
					<Route path="/mercs"></Route>
					<Route path="/guns"></Route>
					<Route path="/jobs"></Route>
					<Route path="/missions">
						<Missions />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	)
}

export default App
