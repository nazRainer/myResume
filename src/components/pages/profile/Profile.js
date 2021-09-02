import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ImgProfile from '../../../images/ayen.png';

export default function Profile() {
	return (
		<div>
			<div className='card'>
				<div className='card-image'>
					<img className='activator' src={ImgProfile} alt='Faris Nazrin' />
					<Link className='btn-floating halfway-fab waves-effect waves-light green'>
						<i className='material-icons activator'>i</i>
					</Link>
				</div>
				<div className='card-content'>
					<span className='card-title activator grey-text text-darken-4'>
						<b>Muhammad Faris Nazrin bin Mohd Nizar</b>
					</span>
					<p>Bachelor of Software Engineering</p>
				</div>
				<div className='card-reveal'>
					<span className='card-title grey-text text-darken-4'>
						My Media Social
					</span>
					<ul>
					<li><b>LinkedIn:</b></li>
					<li>Muhammad Faris Nazrin</li>
					<li><b>Github:</b></li>
					<li>github.com/nazrainer</li>
					<li><b>Facebook:</b></li>
					<li>Fares Nazrain</li>
					<li><b>Instagram:</b></li>
					<li>faresnazrain_</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
