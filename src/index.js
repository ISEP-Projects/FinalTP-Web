import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import App from "./Components/App"
import { createStore, applyMiddleware } from "redux"
import { Provider } from 'react-redux'
import allReducers from "./reducers"
import thunk from "redux-thunk"


const store = createStore(allReducers, applyMiddleware(thunk))

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
)
