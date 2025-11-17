import { Component, useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';

const apiUrl = 'http://localhost:8080/api/v1/';
export function Register() {

	const { register, handleSubmit, errors } = useForm();
	const history = useHistory();

	var today = new Date();

	var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

	const registerUser = (data) => {

		axios.post(apiUrl + 'registeruser', data).then(result => {
			if (result.data === 'SUCCESS') {
				alert("Registration Successfully done!");
				history.push("/login");
			}
			else {
				alert("Error");
			}

		});

	};

	return (<div>


		<div class="w3l-breadcrumbs">
			<nav id="breadcrumbs" class="breadcrumbs">
				<div class="container page-wrapper">
					<a href="#">Home</a> » <span class="breadcrumb_last" aria-current="page">Register</span>
				</div>
			</nav>
		</div>

		<section class="w3l-contact-1">
			<div class="contacts-9 py-5">
				<div class="container py-lg-4">
					<div class="headerhny-title text-center">
						<h4 class="sub-title text-center">Register Now</h4>

						<p class="hny-title mb-lg-5 mb-4">register now and book your favourite movie ticket online!</p>
					</div>
					<div class="contact-view mt-lg-5 mt-4">
						<div class="conhny-form-section">
							<form method="post" class="formhny-sec" onSubmit={handleSubmit(registerUser)}>
								<div class="form-grids">
									<div class="form-input">
										<input type="text" name="username" id="w3lName" placeholder="Enter your name *" ref={register({ required: true })} />
									</div>

									<div class="form-input">
										<input type="email" name="email" id="w3lSender" placeholder="Enter your email *"
											ref={register({ required: true })} />
									</div>
									<div class="form-input">
										<input type="password" name="password" id="w3lSubject" placeholder="Enter Password " ref={register({ required: true })} />
									</div>
									<div class="form-input">
										<input type="text" name="contact_no" id="w3lPhone" placeholder="Enter your Phone Number *"
											ref={register({ required: true })} />
									</div>
								</div>
								<input type="hidden" name="city_id" value="0" ref={register({ required: true })} />
								<input type="hidden" name="added_date" value={date} ref={register({ required: true })} />
								<input type="hidden" name="ustatus" value="1" ref={register({ required: true })} />

								<div class="submithny text-right mt-4">
									<button class="btn read-button">Sign Up</button>
								</div>
							</form>
						</div>


					</div>
				</div>
			</div>

		</section>

	</div>

	)



};
export default Register