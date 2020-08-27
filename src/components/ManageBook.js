import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import BookForm from './common/BookForm';
import * as bookApi from '../api/bookApi';

const ManageBook = (props) => {
	const [errors, setErrors] = useState({});
	const [book, setBook] = useState({
		id: null,
		slug: '',
		title: '',
		authorId: null,
		category: '',
	});

	useEffect(() => {
		const slug = props.match.params.slug;
		if (slug) {
			bookApi.getBookBySlug(slug).then((_book) => setBook(_book));
		}
	}, [props.match.params.slug]);

	const handleChange = ({ target }) => {
		setBook({ ...book, [target.name]: target.value });
	};

	const validForm = () => {
		const _errors = {};

		if (!book.title) _errors.title = 'Title is required!';
		if (!book.authorId) _errors.authorId = 'Author is required!';
		if (!book.category) _errors.category = 'Category is required!';

		setErrors(_errors);

		return Object.keys(_errors).length === 0;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!validForm()) return;
		bookApi.saveBook(book).then(() => {
			props.history.push('/books');
			toast.success('Book Added!');
		});
	};

	return (
		<>
			<h2>Manage the Book</h2>
			<BookForm
				errors={errors}
				book={book}
				onChange={handleChange}
				onSubmit={handleSubmit}
			/>
		</>
	);
};

export default ManageBook;
