import React, { Component } from "react";
import { Alert } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchBooks } from "../redux/actions/books.actions";
import * as R from "ramda";
import spinner from "../assets/svg/spinner.svg";
import { Button, Row, Col, ListGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class BookList extends Component {

	componentDidMount() {
		const { fetchBooks } = this.props;
		fetchBooks();
	}

	render(){
		const { books, notification, loading } = this.props;

		if (loading === true) {
			return (
				<div>
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

			return <Alert style={{marginTop: 20}}>
				<p>
					<strong>Notification</strong>: {note[0]+" "+note[1]}
				</p>
			</Alert>;
		}

		if (books === null || R.isEmpty(books)) {
			return <div>
				<h2>
					BookList
				</h2>
				<p>
					No books :(
				</p>
			</div>;
		}

		return (
			<div>
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
					{books.map((book) => {
						return (
							<ListGroup.Item className="" key={book.id} as="li">
								<h3>
									<Link className="list__title" to={`/book/view/${book.id}`}>
										{book.bookTitle}
									</Link>
								</h3>
								<p className="h4">
									{book.author}
								</p>
							</ListGroup.Item>
						);
					})}
				</ListGroup>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { 
		books: state.books, 
		notification: state.notification[0], 
		loading: state.ui.loading,
	};
}

export default connect(mapStateToProps, { 
	fetchBooks, 
})(BookList);