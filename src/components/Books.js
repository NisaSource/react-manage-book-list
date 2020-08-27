import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBooks } from '../api/bookApi';
import BookList from './BookList';

function Books() {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		// Get the book from the mocked api
		getBooks().then((_books) => setBooks(_books));
	}, []);

	return (
		<>
			<h2>Book Lists</h2>
			<Link
				className="btn float-right"
				style={{ backgroundColor: '#f79205' }}
				to="/book"
			>
				Add book
			</Link>
			<BookList books={books} />
		</>
	);
}

export default Books;
