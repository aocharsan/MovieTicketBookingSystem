
import React, { Component, useState, useEffect, useRef } from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';



// const apiUrl = 'http://localhost:8080/api/v1/';


export default class BookingSuccess extends Component {

	constructor(props) {
		super(props);
		this.state = {
			fooditems: [],
			movieitems: '',
			schedule: '',
			ticketprice: '',
			selectedseats: '',
			food: [],
			user_id: "",
			totalamt: 0,
			selectedIndexes: []
		};

		var data = JSON.parse(localStorage.getItem('MOVIDATA'));
		this.state.movieitems = data;
		var data1 = JSON.parse(localStorage.getItem('SCHEDULDATA'));
		this.state.schedule = data1;
		this.state.ticketprice = this.state.schedule.ticket_price;
		var data2 = JSON.parse(localStorage.getItem('SELCTEDSEAT'));
		this.state.selectedseats = data2;
		console.log(this.state.selectedseats);
		var data3 = JSON.parse(localStorage.getItem('USERDATA'));
		console.log(data3);
		this.state.user_id = data3.id;



		this.state.totalamt = localStorage.getItem('totalamt')
		var data4 = JSON.parse(localStorage.getItem('fooditmes'));
		this.state.food = data4;


	};

	render() {


		return (<div>


			<div class="w3l-breadcrumbs">
				<nav id="breadcrumbs" class="breadcrumbs">
					<div class="container page-wrapper">
						<a href="#">Home</a> » <span class="breadcrumb_last" aria-current="page">Success</span>
					</div>
				</nav>
			</div>

			<section class="w3l-contact-1">
				<div class="contacts-9 py-5">
					<div class="container py-lg-4">
						<div class="headerhny-title text-center">
							<h4 class="sub-title text-center">Thank You</h4>

							<p class="hny-title mb-lg-5 mb-4">Your Booking is Successfully done!</p>
							<h2>Your Ticket</h2>
						</div>
						<div class="contact-view mt-lg-5 mt-4">
							<div class="conhny-form-section">
								<Paper elevation={3} />
								<div>
									<table className="table-bordered table-striped table-dark table align-content-center " style={{ padding: '10px', border: '5px solid #000' }}>
										<tr>
											<td colspan="4"><h3>Showz</h3></td>
										</tr>
										<tr>
											<td colspan="4"> Movie Name : {this.state.movieitems.mtitle}</td>

										</tr>
										<tr>
											<td>Show Date : {this.state.schedule.show_date} </td>
											<td>Show Time:  {this.state.schedule.show_time} </td>
											<td>Screen : {this.state.schedule.hall.screen_name}</td>

											<td>Ticket Price  RS {this.state.schedule.ticket_price}/-</td>
										</tr>
										{

											this.state.food.map((item, idx) => {

												return <tr key={item.id}>

													<td>FOODITEM-{item.id}</td>
													<td>{item.item_name}</td>
													<td>{item.item_desc}</td>

													<td>RS {item.unit_price}/-</td>



												</tr>

											})}
										<tr>
											<td></td>
											<td></td>
											<td>Seats : {
												this.state.selectedseats.map((seats, idx) => {

													return <span>{seats} -</span>

												})
											}</td>
											<td>Total AMT  : Rs {this.state.totalamt} /-</td>

										</tr>


										<tr >

											<td colspan="4">Thank you for booking!!!...visit again</td>
										</tr>
									</table>
								</div>

								<Paper />
							</div>


						</div>
					</div>
				</div>

			</section>

		</div>

		)
	}
}