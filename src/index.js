import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import App from "./Components/App"
import { createStore, applyMiddleware } from "redux"
import allReducers from "./reducers"
import thunk from "redux-thunk"


const store = createStore(allReducers, applyMiddleware(thunk))

ReactDOM.render(
	<React.StrictMode store={store}>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
)
