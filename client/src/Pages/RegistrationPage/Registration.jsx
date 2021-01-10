import {useState} from 'react';
import {InputField, SelectDropdown} from '../../components/formComponents';

export default function Registration() {
	const [formValues, setFormValues] = useState({});

	const inputHandler = (e) => {
		setFormValues({
			...formValues,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(formValues);
	};
	return (
		<div className='page registration'>
			<div className='page-wrapper'>
				<div className='form-container'>
					<form action='' onSubmit={handleSubmit}>
						<InputField name='shop-name' placeholder='example: FoodVally' inputHandler={inputHandler} />
						<InputField
							name='email'
							type='email'
							placeholder='example: johndoe@gmail.com'
							inputHandler={inputHandler}
						/>
						<InputField
							name='password'
							placeholder='exapmle: abc123'
							type='password'
							inputHandler={inputHandler}
						/>
						<SelectDropdown name='division' inputHandler={inputHandler} />
						<SelectDropdown name='district' inputHandler={inputHandler} />

						<button type='submit'>Register</button>
					</form>
				</div>
			</div>
		</div>
	);
}
