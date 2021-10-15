import React from "react";
import logo from "../img/logo.png";

const Header = () => {
	return (
		<div>
			<header>
				<h1 className='logo'>
					{/* The <strong>Anime Search</strong> Database */}
					<img src={logo} alt='logo' />
				</h1>
			</header>
		</div>
	);
};

export default Header;
