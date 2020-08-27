import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './Home';
import About from './About';
import Header from './common/Header';
import Books from './Books';
import PageNotFound from './common/PageNotFound';
import ManageBook from './ManageBook';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<div className="container">
			<ToastContainer autoClose={3000} hideProgressBar />
			<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/books" component={Books} />
				<Route path="/about" component={About} />
				<Route path="/book/:slug" component={ManageBook} />
				<Route path="/book" component={ManageBook} />
				<Route component={PageNotFound} />
			</Switch>
		</div>
	);
}

export default App;
