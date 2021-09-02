import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { HashLink as Link } from 'react-router-hash-link';

export default class Navbar extends Component {
	render() {
		return (
			<>
				<nav className='light-blue darken-4'>
					<div className='container'>
						<div className='nav-wrapper'>
							<Link to='/' className='brand-logo'>
								I'M FARIS NAZRIN
							</Link>
							<ul className='right hide-on-med-and-down'>
								<li>
									<Link to='/skills'>
										Skills
									</Link>
								</li>
								<li>
									<Link to='/experiences'>
										Experiences
									</Link>
								</li>
								<li>
									<Link to='/educations'>
										Educations
									</Link>
								</li>
								<li>
									<Link to='/portfolios'>
										Portfolios
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</>
		);
	}
}
