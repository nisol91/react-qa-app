import React, { Component } from 'react';
import './NavBar.css';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';


class NavBar extends Component {

	constructor(props) {
		super(props);

		this.state = {
			prevScrollPos: 0,
			visible: true
		};
	}

	//======handling SCROLL to hide navbar on the scroll direction========
	handleScroll = () => {
		const currentScrollPos = window.pageYOffset;
		if (currentScrollPos > 300 && currentScrollPos > this.state.prevScrollPos) {
			//down
			console.log('down');
			
			this.setState({
				prevScrollPos: currentScrollPos - 1,
				visible: false
			});
			} else {
			//up
			console.log('up');
			
			this.setState({
				prevScrollPos: currentScrollPos + 1,
				visible: true
			});
        }
		console.log(currentScrollPos);
		console.log('prev -> ' + this.state.prevScrollPos);
		console.log(this.state.visible);
	};

	componentDidMount() {
	//valgono un po come la vue scroll directive
	window.addEventListener("scroll", this.handleScroll);
	}

	componentWillUnmount() {
	window.removeEventListener("scroll", this.handleScroll);
	}
	//===========================


	render () {

	//=====GESTISCO IL CAMBIO DI CLASSE CON TRANSIZIONE PER LA NAVBAR====
	let NavClasses = 'navbar navbar-dark bg-primary fixed-top nav_color';
	if (!this.state.visible) {
		NavClasses += ' navbar--hidden';
	} else if (this.state.visible) {
		NavClasses += ' navbar--show';
	}
	//=======================
		
 	return (
		<nav className={NavClasses}>
			<Link className="navbar-brand" to="/">Q&App</Link>
			<Link className="navbar-brand" to="/NewQuestion">New Question</Link>
			<Button color="danger">oooo</Button>
			<div className="btn-danger">ciao</div>
		</nav>
	);
	}
}

export default NavBar;