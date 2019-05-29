import React from 'react';
import './App.css';
import CalculatorDisplay from '../src/components/DisplayComponents/CalculatorDisplay';
import ActionButton from '../src/components/ButtonComponents/ActionButton';
import NumberButton from '../src/components/ButtonComponents/NumberButton';
// import ButtonContainer from '../src/components/ButtonComponents/ButtonContainer';
import * as math from 'mathjs';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: ''
		};
	}

	clickHandler = props => {
		this.setState({ input: this.state.input + props });
	};
	equalHandler = () => {
		this.setState({ input: math.eval(this.state.input) });
	};

	render() {
		return (
			<div className="App">
				<div className="CalculatorWrapper">
					<CalculatorDisplay input={this.state.input} />
					<div className="row">
						<NumberButton handleClick={this.clickHandler}>7</NumberButton>
						<NumberButton handleClick={this.clickHandler}>8</NumberButton>
						<NumberButton handleClick={this.clickHandler}>9</NumberButton>
						<NumberButton handleClick={this.clickHandler}>/</NumberButton>
					</div>
					<div className="row">
						<NumberButton handleClick={this.clickHandler}>4</NumberButton>
						<NumberButton handleClick={this.clickHandler}>5</NumberButton>
						<NumberButton handleClick={this.clickHandler}>6</NumberButton>
						<NumberButton handleClick={this.clickHandler}>*</NumberButton>
					</div>
					<div className="row">
						<NumberButton handleClick={this.clickHandler}>1</NumberButton>
						<NumberButton handleClick={this.clickHandler}>2</NumberButton>
						<NumberButton handleClick={this.clickHandler}>3</NumberButton>
						<NumberButton handleClick={this.clickHandler}>+</NumberButton>
					</div>
					<div className="row">
						<NumberButton handleClick={this.clickHandler}>.</NumberButton>
						<NumberButton handleClick={this.clickHandler}>0</NumberButton>
						<NumberButton handleClick={this.equalHandler}>=</NumberButton>
						<NumberButton handleClick={this.clickHandler}>-</NumberButton>
					</div>
					<div className="row">
						<ActionButton handleClear={() => this.setState({ input: '' })}>Clear</ActionButton>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
