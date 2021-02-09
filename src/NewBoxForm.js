import { useState } from 'react';

const NewBoxForm = ({ addBox }) => {
	const INITIAL_STATE = { height: '', width: '', backgroundColor: '' };
	const [ formData, setFormData ] = useState(INITIAL_STATE);

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setFormData((formData) => ({
			...formData,
			[name] : value
		}));
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		addBox(formData);
		setFormData(INITIAL_STATE);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="height">Height:</label>
			<input onChange={handleChange} name="height" id="height" type="text" value={formData.height} />
			<label htmlFor="width">Width:</label>
			<input onChange={handleChange} name="width" id="width" type="text" value={formData.width} />
			<label htmlFor="backgroundColor">Color:</label>
			<input
				onChange={handleChange}
				name="backgroundColor"
				id="backgroundColor"
				type="text"
				value={formData.backgroundColor}
			/>
			<button>Add!</button>
		</form>
	);
};

export default NewBoxForm;
