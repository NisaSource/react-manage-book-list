import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function BookList(props) {
	return (
		<table className="table">
			<thead>
				<tr>
					<th>Title</th>
					<th>Author ID</th>
					<th>Category</th>
				</tr>
			</thead>
			<tbody>
				{props.books.map((book) => {
					return (
						<tr key={book.id}>
							<td>
								<Link to={'/book/' + book.slug}>{book.title}</Link>
							</td>
							<td>{book.authorId}</td>
							<td>{book.category}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

BookList.propTypes = {
	books: PropTypes.array.isRequired,
};

export default BookList;
