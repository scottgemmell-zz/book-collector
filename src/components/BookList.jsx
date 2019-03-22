import React, { Component } from "react";
import PropTypes from "prop-types";
import { Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBooks } from "../redux/actions/books.actions";
import * as R from "ramda";
import spinner from "../assets/svg/spinner.svg";
import { Button, Row, Col, ListGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export class BookList extends Component {

	componentDidMount() {
		const { fetchBooks } = this.props;
		fetchBooks();
	}

	render(){
		const { books, notification, loading } = this.props;

		if (loading === true) {
			return (
				<div data-test="book-list">
					<h2>
						BookList
					</h2>
					<div className="c-book">
						<div className="u-spinner">
							<img src={spinner} alt="Loading..." />
						</div>
					</div>
				</div>
			);
		}

		

		if (notification) {

			const note = R.values(notification);

			return <div data-test="book-list"><Alert style={{ marginTop: 20 }}>
				<p>
					<strong>Notification</strong>: {`${note[0]} ${note[1]}`}
				</p>
			</Alert></div>;
		}

		if (books === null || R.isEmpty(books)) {
			return <div data-test="book-list">
				<h2>
					BookList
				</h2>
				<p>
					No books :(
				</p>
			</div>;
		}

		return (
			<div data-test="book-list">
				<Row>
					<Col>
						<h2>
							BookList
						</h2>
					</Col>
					<Col className="text-right">
						<LinkContainer to="/book/add/">
							<Button variant="outline-primary">
								+ Add Book
							</Button>
						</LinkContainer>
					</Col>
				</Row>
	
				<ListGroup as="ul">
					{books.map((book, i) => {
						{return !book.error ? 
							<ListGroup.Item key={`${book.id}-${i}`} as="li">
								<h3>
									<Link className="list__title" to={`/book/view/${book.id}`}>
										{book.title}
									</Link>
								</h3>
								<p className="h4">
									{book.authors}
								</p>
							</ListGroup.Item>
							: 
							<ListGroup.Item key={`${book.id}-${i}`} as="li">
								<div style={{ color: "#bbb" }}>
									<strong>:( An error has occurred.</strong>
									<br/>
									<small>Invalid book object</small>
								</div>
							</ListGroup.Item>;
						}
					})}
				</ListGroup>
			</div>
		);
	}
}

BookList.propTypes = {
	fetchBooks: PropTypes.func.isRequired,
	books: PropTypes.array.isRequired,
	notification: PropTypes.bool,
	loading: PropTypes.bool,
};

const mapStateToProps = (state) => {
	return { 
		books: state.books, 
		notification: state.notification[0], 
		loading: state.ui.loading,
	};
};

export default connect(mapStateToProps, { 
	fetchBooks, 
})(BookList);