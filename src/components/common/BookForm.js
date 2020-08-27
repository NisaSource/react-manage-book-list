import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';

function BookForm({ onChange, onSubmit, errors, book }) {
	const { title, authorId, category } = errors;
	return (
		<form onSubmit={onSubmit}>
			<TextInput
				id="title"
				label="Title"
				name="title"
				onChange={onChange}
				error={title}
				value={book.title}
			/>

			<div className="form-group">
				<label htmlFor="author">Author</label>
				<div className="field">
					<select
						id="author"
						name="authorId"
						onChange={onChange}
						value={book.authorId || ''}
						className="form-control"
					>
						<option value="" />
						<option value="1">Sandra Brown</option>
						<option value="2">Napoleon Hill</option>
						<option value="3">Mark Manson</option>
					</select>
				</div>
				{authorId && <div className="alert alert-danger">{authorId}</div>}
			</div>

			<TextInput
				id="category"
				label="Category"
				name="category"
				onChange={onChange}
				error={category}
				value={book.category}
			/>

			<input
				type="submit"
				value="Save"
				className="btn"
				style={{ backgroundColor: '#f79205' }}
			/>
		</form>
	);
}

BookForm.propTypes = {
	book: PropTypes.object.isRequired,
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired,
};

export default BookForm;
