import React from 'react';
import './App.css';
import CalculatorDisplay from '../src/components/DisplayComponents/CalculatorDisplay';
import ActionButton from '../src/components/ButtonComponents/ActionButton';
import NumberButton from '../src/components/ButtonComponents/NumberButton';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const App = () => {
	return (
		<div>
			<CalculatorDisplay />
			<ActionButton />
			{data.map(number => {
				return (
					<div>
						<NumberButton label={number} />
					</div>
				);
			})};
		</div>
	);
};

export default App;
