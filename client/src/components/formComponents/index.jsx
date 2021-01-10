import {districts, divisions} from '../JsonData';

export const InputField = (props) => {
	const {name, inputHandler, type, placeholder} = props;
	return (
		<div className={`input-field ${name}`}>
			<label htmlFor={name}>{name}</label>
			<input name={name} type={type ? type : 'text'} onChange={inputHandler} placeholder={placeholder} />
		</div>
	);
};

export const SelectDropdown = (props) => {
	const {name, inputHandler} = props;
	return (
		<div className={`input-field dropdown ${name}`}>
			<select name={name} onChange={inputHandler} defaultValue={`Select ${name}`}>
				<option value={`Select ${name}`} disabled>
					Select {name}
				</option>

				{name === 'division'
					? divisions.map((division, index) => (
							<option key={index} value={division}>
								{division}
							</option>
					  ))
					: districts.map((division, index) => (
							<option key={index} value={division}>
								{division}
							</option>
					  ))}
			</select>
		</div>
	);
};
