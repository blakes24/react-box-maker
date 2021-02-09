import { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuidv4 } from 'uuid';

const BoxList = () => {
	const [ boxes, setBoxes ] = useState([]);
	const removeBox = (id) => {
		const filteredBoxes = boxes.filter((box) => box.id != id);
		setBoxes(filteredBoxes);
	};
	const addBox = (formData) => {
		const newBox = { ...formData, id: uuidv4() };
		setBoxes((boxes) => [ ...boxes, newBox ]);
	};

	return (
		<div>
			<h1>Box Maker</h1>
			<NewBoxForm addBox={addBox} />
			{boxes.map(({ id, width, height, backgroundColor }) => (
				<Box
					id={id}
					width={width}
					height={height}
					backgroundColor={backgroundColor}
					removeBox={removeBox}
					key={id}
				/>
			))}
		</div>
	);
};

export default BoxList;
