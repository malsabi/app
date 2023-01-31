import React , {useState} from 'react';
import './style.css';
import Button from '../../components/Button';

function UserRegisterPage() {
	const [inputs, setInputs] = useState({});
	const [isShown, setIsShown] = useState(false);


	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;

		setInputs(values => ({...values, [name]: value}))
	}

	 const handleSubmit = (event) => {
		event.preventDefault();

		console.log(inputs);

		// TODO add correct validation

		setIsShown(current => !current);

		// TODO: Add AJAX Request here
	  }
  	return (
		  <div className='container'>
			{!isShown && (
				<div className='register'>
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
										required
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
										required
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
										required
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
										required
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
					<p className='text-center fs-4'>
						Your registration process is completed. Now you can use the website to test the strength of your desired password.
					</p>
					<div className='row d-flex justify-content-center'>
						<div className='col-6'>
							<Button text="TEST THE PASSWORD NOW" submit="true" color="#2e5582" fontWeight="bold" className="w-25"></Button>
						</div>
					</div>
				</div>
			)}
		</div>
  	)
}

export default UserRegisterPage;