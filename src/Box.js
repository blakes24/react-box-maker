import './Box.css';

const Box = ({ width = 100, height = 100, backgroundColor, removeBox, id }) => {
	const boxStyle = { width: +width, height: +height, backgroundColor: backgroundColor };
	const handleRemove = () => {
		removeBox(id);
	};
	return (
		<div className="Box" style={boxStyle}>
			<button onClick={handleRemove} className="Box-btn">
				X
			</button>
		</div>
	);
};

export default Box;
