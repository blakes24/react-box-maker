import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

it('renders without crashing', function() {
	render(<BoxList />);
});

it('matches snapshot', function() {
	const { asFragment } = render(<BoxList />);
	expect(asFragment()).toMatchSnapshot();
});

it('can add a box', function() {
	const { getByLabelText, queryByText } = render(<BoxList />);

	// no boxes yet
	expect(queryByText('X')).not.toBeInTheDocument();

	const heightInput = getByLabelText('Height:');
	const widthInput = getByLabelText('Width:');
	const colorInput = getByLabelText('Color:');
	const submitBtn = queryByText('Add!');

	// fill out the form
	fireEvent.change(heightInput, { target: { value: '100' } });
	fireEvent.change(widthInput, { target: { value: '100' } });
	fireEvent.change(colorInput, { target: { value: 'blue' } });
	fireEvent.click(submitBtn);

	// box exists
	expect(queryByText('X')).toBeInTheDocument();
});

it('can remove a box', function() {
	const { getByLabelText, queryByText } = render(<BoxList />);

	const heightInput = getByLabelText('Height:');
	const widthInput = getByLabelText('Width:');
	const colorInput = getByLabelText('Color:');
	const submitBtn = queryByText('Add!');

	// fill out the form
	fireEvent.change(heightInput, { target: { value: '100' } });
	fireEvent.change(widthInput, { target: { value: '100' } });
	fireEvent.change(colorInput, { target: { value: 'blue' } });
	fireEvent.click(submitBtn);

	// box exists
	expect(queryByText('X')).toBeInTheDocument();

	fireEvent.click(queryByText('X'));

	// box should not exist
	expect(queryByText('X')).not.toBeInTheDocument();
});

it('clears form fields on submit', function() {
	const { getByLabelText, queryByText, queryByDisplayValue } = render(<BoxList />);

	const heightInput = getByLabelText('Height:');
	const widthInput = getByLabelText('Width:');
	const colorInput = getByLabelText('Color:');
	const submitBtn = queryByText('Add!');

	// fill out the form
	fireEvent.change(heightInput, { target: { value: '200' } });
	fireEvent.change(widthInput, { target: { value: '100' } });
	fireEvent.change(colorInput, { target: { value: 'blue' } });

	expect(queryByDisplayValue('blue')).toBeInTheDocument();
	expect(queryByDisplayValue('100')).toBeInTheDocument();
	expect(queryByDisplayValue('200')).toBeInTheDocument();

	fireEvent.click(submitBtn);

	expect(queryByDisplayValue('blue')).not.toBeInTheDocument();
	expect(queryByDisplayValue('100')).not.toBeInTheDocument();
	expect(queryByDisplayValue('200')).not.toBeInTheDocument();
});
