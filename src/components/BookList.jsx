import React, { Component } from "react";
import { Link } from "react-router-dom";

class BookList extends Component {
	// constructor(props){
	// 	super(props);
	// }

	render(){
		return (
			<div>
				<h2>
					BookList
				</h2>
				<ul>
					<li>
						<Link to="/detail/">
							dolor set elit nullum vitae
						</Link>.
					</li>
					<li>
						<Link to="/detail/">
							dolor set elit nullum vitae
						</Link>.
					</li>
					<li>
						<Link to="/detail/">
							dolor set elit nullum vitae
						</Link>.
					</li>
				</ul>
			</div>
		);
	}
}

export default BookList;