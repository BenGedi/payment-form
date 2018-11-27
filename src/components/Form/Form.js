import React, { Component } from 'react';
import { DatePicker } from 'antd';
import styled from 'styled-components';
import { observer } from "mobx-react";

import LockImage from '../../assets/images/lock.png';
import Input from '../../UI/Input/Input';
import Select from '../../UI/Select/Select';
import { withRouter } from "react-router";

const { MonthPicker } = DatePicker;
const FormWrapper = styled.div`
	max-width: 60%;
	margin: auto;
	padding: 50px 0;
`;

const FormHeader = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 0 15px 0;
	border-bottom: 1px solid #eeeeee;

	span {
		font-size: 30px;
		margin-left: 10px; 
	}
`;

const FormStlyed = styled.form`
	background-color: #eeeeee;
	border-radius: 5px;
	margin: 15px 30px;
	padding: 40px 60px;
`;

class Form extends Component {
	state = {
		value: '',
		isValid: true
	};

	monthNames = ["January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"];

	handleChange = event => {
		const value = event.target.value;
		this.setState({ value});
	}

	handleSubmit = event => {
		alert('A name was submitted: ' + this.state.value);
		event.preventDefault();
	}

	onChangeMonthHandler = (date, dateString) => {
		console.log(date, dateString);
	}

	componentDidMount() {
		this.props.store.getCounteries();
	}

	render() {
		console.log('From state: ', this.state);
		return (
			<FormWrapper>
				<FormHeader>
					<img src={LockImage} alt="Lock"/>
					<span>Secure Payment page</span>
				</FormHeader>
				<FormStlyed onSubmit={this.handleSubmit}>
				
					<div className="form-row">
						<label className="form-label">
							Billing Address
						</label>
						<div className="form-2-inputs">
							<Input isValid={this.state.isValid} className="form-input" type="text" value={this.state.value} placeholder="Street Address" changed={this.handleChange} />
							<Select isValid={this.state.isValid} placeHolder="Select Country" optionValue="countryCode" optionName="countryName" options={this.props.store.countries.toJSON()} />
						</div>
					</div>
					<div className="form-row">
						<label className="form-label">
							Credit card details
						</label>
						<Input className="form-input" type="text" value={this.state.value} onChange={() => {}} />
						<img src="" alt="" />
						<div>
							<MonthPicker onChange={this.onChangeMonthHandler} placeholder="Select month" />
							<select className="form-select" onChange={this.handleChange}>
								<option >select countery</option>
							</select>
							<Input className="form-input" type="text" value={this.state.value} onChange={() => {}} />
						</div>
					</div>
					<input type="submit" value="Submit" />
				</FormStlyed>
			</FormWrapper>
		);
	}
}

export default withRouter(observer(Form));
