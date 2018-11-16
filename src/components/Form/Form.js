import React, { Component } from 'react';
import { DatePicker } from 'antd';
import styled from 'styled-components';
import axios from 'axios';

import LockImage from '../../assets/images/lock.png';

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
	};

	monthNames = ["January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"];
	componentDidMount = () => {
		axios.get('http://api.geonames.org/countryInfoJSON?username=dperic')
			.then(response => {
				this.setState({geonames: response.data.geonames});
				console.log('setState: ',this.state.geonames);
			})
			.catch(error => {
				console.log(error);
			});
	}
	handleChange = event => {
		this.setState({ value: event.target.value });
	}

	handleSubmit = event => {
		alert('A name was submitted: ' + this.state.value);
		event.preventDefault();
	}

	onChangeMonthHandler = (date, dateString) => {
		console.log(date, dateString);
	}

	render() {
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
						<input className="form-input" type="text" value={this.state.value} onChange={this.handleChange} />
						<select className="form-select" onChange={this.handleChange} >
							<option >select countery</option>
						</select>
					</div>
					<div className="form-row">
						<label className="form-label">
							Credit card details
						</label>
						<input className="form-input" type="text" value={this.state.value} onChange={this.handleChange} />
						<img src="" alt="" />
						<div>
							<MonthPicker onChange={this.onChangeMonthHandler} placeholder="Select month" />
							<select className="form-select" onChange={this.handleChange} >
								<option >select countery</option>
							</select>
							<input className="form-input" type="text" value={this.state.value} onChange={this.handleChange} />
						</div>
					</div>
					<input type="submit" value="Submit" />
				</FormStlyed>
			</FormWrapper>
		);
	}
}

export default Form;
