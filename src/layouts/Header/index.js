import React from 'react'
import logo from '../../assets/images/logo_lowRes.PNG';
import Button from '../../components/Button';
import './style.css';


function Header(){
    return (
		<div className='header row'>
			<div className='col-3 d-flex justify-content-center'>
				<img src={logo} className="logo" alt="logo" />
			</div>
			<div className='col-9'>
			<div className='topNav'>
				<Button text="User Register" textTransform="uppercase"></Button>
				<Button text="Administrator Log In" textTransform="uppercase" borderBottom="none"></Button>
			</div>
			<div className='Pages'>
				<Button text="Home" textTransform="uppercase" borderBottom="none"></Button>
				<Button text="Test the Password" textTransform="uppercase" borderBottom="none"></Button>
				<Button text="Password Suggestions" textTransform="uppercase" borderBottom="none"></Button>
				<Button text="Contact Us" textTransform="uppercase" borderBottom="none"></Button>
			</div>
			</div>
		</div>
    )
}

export default Header;
