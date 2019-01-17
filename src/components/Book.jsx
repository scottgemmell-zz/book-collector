import React, { Component } from "react";
import { connect } from "react-redux";

class Book extends Component {
	// constructor(props){
	// 	super(props);
	// }

	render(){

		const { match, books } = this.props;
		const idx = match.params.id;

		// console.log({books, match});

		return (
			<div>
				<h2>
					Book {idx}
				</h2>

				<dl>
					<dt>
						Title
					</dt>
					<dd>
						{books[idx].title}
					</dd>
					<dt>
						Author
					</dt>
					<dd>
						{books[idx].author}
					</dd>
				</dl>
			</div>
		);	
	}
}

const mapStateToProps = state => ({
	books: state.books,
});

export default connect(mapStateToProps)(Book);