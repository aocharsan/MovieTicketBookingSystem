
import { Component, useState, useEffect } from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from 'react-router-dom';

const apiUrl = 'http://localhost:8080/api/v1/';
export function Login() {

	const { register, handleSubmit, errors } = useForm();
	const history = useHistory();

	const loginUser = (data) => {

		axios.post(apiUrl + 'userlogin', data).then(result => {
			if (result.data === 'SUCCESS') {
				axios.get(apiUrl + 'user/' + data.email).then(response => {

						localStorage.setItem("USERDATA", JSON.stringify(response.data));
						history.push("/home");

					})
					.catch(function (error) {
						console.log(error);
					})

			}
			else {
				alert("Invalid Email and Password");
			}

		});

	};

	return (<div>


		<div class="w3l-breadcrumbs">
			<nav id="breadcrumbs" class="breadcrumbs">
				<div class="container page-wrapper">
					<a href="#">Home</a> » <span class="breadcrumb_last" aria-current="page">Login</span>
				</div>
			</nav>
		</div>

		<section class="w3l-contact-1">
			<div class="contacts-9 py-5">
				<div class="container py-lg-4">
					<div class=" text-center">
						<h4 class="sub-title ">Login Here</h4>

						<p class="hny-title mb-lg-5 mb-4">login your account and book your favourite movie ticket online!</p>
					</div>
					<div class="contact-view mt-lg-5 mt-4">
						<div class="conhny-form-section">
							<form method="post" class="formhny-sec" onSubmit={handleSubmit(loginUser)}>
								<div class="form-grids">
									<div class="form-input">
										<input type="email" name="email" id="w3lSender" placeholder="Enter your email *"
											ref={register({ required: true })} />
									</div>
									<div class="form-input">
										<input type="password" name="password" id="w3lSubject" placeholder="Enter Password " ref={register({ required: true })} />
									</div>


								</div>

								<div class="submithny text-right mt-4">
									<button class="btn read-button">Sign In</button>
								</div>
							</form>
						</div>


					</div>
				</div>
			</div>

		</section>

	</div>

	)
}
export default Login