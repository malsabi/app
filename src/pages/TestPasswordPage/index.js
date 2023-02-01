import React, {useState} from 'react';
import './style.css';
import StrengthMeter from '../../components/StrengthMeter';
import Label from '../../components/Label';

function TestPasswordPage() {
	const [password, setPassword] = useState(null);

	const handleChange = (event) => {
	  // 👇 Get input value from "event"
	  setPassword(event.target.value);
	  console.log(password);
	};
  	return (
		<div className='w-100 d-flex flex-column justify-content-center '>
			<div className='d-flex justify-content-center'>
				<Label text='Check Your Password Strength'></Label>
			</div>
			<div className='row'>
				<form>
					<div className='row mb-5'>
						<div className='col-12 d-flex justify-content-center align-items-center'>

								<input
									className=" w-50 text-center"
									style={{
										height:'5rem',
										fontSize:'20px'
									}}
									value={password}
									type="text"
									name="passwordChecker"
									placeholder='Enter Your Password'
									onChange={handleChange}
								/>
						</div>
						<div className='col-12 d-flex justify-content-center align-items-center'>
								<StrengthMeter password={password}>
								</StrengthMeter>
						</div>
					</div>
				</form>
			</div>
		</div>
  	)
}

export default TestPasswordPage;