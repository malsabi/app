import React , {useState} from 'react';
import './style.css';
import Button from '../../components/Button';
import Label from '../../components/Label';
import { Link } from 'react-router-dom';

function UserRegisterPage() {
	const [inputs, setInputs] = useState({});
	const [isShown, setIsShown] = useState(false);


	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;

		setInputs(values => ({...values, [name]: value}))
	}

	async function componentDidMount() {
		// GET request using fetch with async/await
		const response = await fetch("http://localhost:3001/register");
		const data = await response.json();
		console.log(response, data);
		// this.setState({ totalReactPackages: data.total })
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		componentDidMount();
		
		console.log(inputs);

		setIsShown(current => !current);
	}
  	return (
		  <div className='container'>
			{!isShown && (
				
				<div className='register'>
					<div className='d-flex justify-content-center'>
						<Label text='Welcome to Secure Password! Please Register' ></Label>
					</div>
					<form onSubmit={handleSubmit}>
						<div className='row mb-5'>
							<div className='col-6'>
								<label className="d-flex justify-content-center align-items-center flex-column">
									Student Name:
									<input
										className="text-center"
										type="text"
										name="name"
										placeholder='Enter your name'
										onChange={handleChange}
										/>
								</label>
							</div>
							<div className='col-6'>
								<label className="d-flex justify-content-center align-items-center flex-column">
									Student ID:
									<input
										className="text-center"
										type="text"
										name="id"
										placeholder='Enter your HCT ID'
										onChange={handleChange}
									/>
								</label>
							</div>
						</div>
						<div className='row mb-5'>
							<div className='col-6'>
								<label className="d-flex justify-content-center align-items-center flex-column">
									Student Major:
									<input
										className="text-center"
										type="text"
										name="major"
										placeholder='Enter your Major'
										onChange={handleChange}
									/>
								</label>
							</div>
							<div className='col-6'>
								<label className="d-flex justify-content-center align-items-center flex-column">
									Student Year:
									<input
										className="text-center"
										type="text"
										name="year"
										placeholder='Enter your Year'
										onChange={handleChange}
									/>
								</label>
							</div>
						</div>
						<div className='row d-flex justify-content-center'>
							<div className='col-3'>
								<Button text="Register" submit="true" className="w-25"></Button>
							</div>
						</div>
					</form>
				</div>
			)}

			{isShown && (
				<div className='registerConfirmed'>
					<div className='d-flex justify-content-center'>
						<Label text='Registration Confirmed'></Label>
					</div>
					<p className='text-center fs-4'>
						Your registration process is completed. Now you can use the website to test the strength of your desired password.
					</p>
					<div className='row d-flex justify-content-center'>
						<div className='col-6'>
							<Link to='/testPassword'><Button text="TEST THE PASSWORD NOW" submit="true" color="#2e5582" fontWeight="bold" className="w-25"></Button></Link>
						</div>
					</div>
				</div>
			)}
		</div>
  	)
}

export default UserRegisterPage;