import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

export default class Header extends Component {

	constructor(props) {
		super(props);

	}

	render() {
		var islogin = false;
		if (localStorage.getItem("USERDATA") === null) {
			islogin = false;
		} else {
			var userdata = JSON.parse(localStorage.getItem('USERDATA'));
			if (userdata.username !== '' && userdata.id !== '') {
				islogin = true;
			}
		}
		return (
			<div>


				<header id="site-header" class="w3l-header fixed-top">

					<nav class="navbar navbar-expand-lg navbar-light fill px-lg-0 py-0 px-3">
						<div class="container">
							<h1><Link class="navbar-expand-lg text-black-50 " to="/home"><span class="fa fa-desktop"
								aria-hidden="true"></span>
						PrimeShowz </Link></h1>


							<button class="navbar-toggler collapsed" type="button" data-toggle="collapse"
								data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
								aria-label="Toggle navigation">

								<span class="fa icon-expand fa-bars"></span>
								<span class="fa icon-close fa-times"></span>
							</button>

							<div class="collapse navbar-collapse" id="navbarSupportedContent">
								<ul class="navbar-nav ml-auto">
									<li class="nav-item active">
										<Link class="nav-link" to="/">Home</Link>
									</li>

									<li class="nav-item">
										<a class="nav-link" href="genre.html">Movies</a>
									</li>

									{islogin
										? <LogoutButton />
										: <LoginButton />
									}


									<li class="nav-item">
										<Link class="nav-link" to="register">Register</Link>
									</li>
								</ul>





							</div>

						</div>
					</nav>

				</header>
				{this.props.children}

				<footer class="w3l-footer">
					<section class="footer-inner-main">
						<div class="footer-hny-grids py-5">
							<div class="container py-lg-4">
								<div class="text-txt">
									<div class="right-side">

										<div class="row footer-links">


											<div class="col-md-3 col-sm-6 sub-two-right mt-5">
												<h6>Movies</h6>
												<ul>
													<li><a href="#">Movies</a></li>
													<li><a href="#">Videos</a></li>
													<li><a href="#">English Movies</a></li>
													<li><a href="#">Tailor</a></li>
													<li><a href="#">Upcoming Movies</a></li>
													<li><a href="contact.html">Contact Us</a></li>
												</ul>
											</div>
											<div class="col-md-3 col-sm-6 sub-two-right mt-5">
												<h6>Information</h6>
												<ul>
													<li><a href="index.html">Home</a> </li>
													<li><a href="about.html">About</a> </li>
													<li><a href="#">Tv Series</a> </li>
													<li><a href="#">Blogs</a> </li>
													<li><a href="#">Login</a></li>
													<li><a href="contact.html">Contact</a></li>
												</ul>
											</div>
											<div class="col-md-3 col-sm-6 sub-two-right mt-5">
												<h6>Locations</h6>
												<ul>
													<li><a href="genre.html">Asia</a></li>
													<li><a href="genre.html">France</a></li>
													<li><a href="genre.html">Taiwan</a></li>
													<li><a href="genre.html">United States</a></li>
													<li><a href="genre.html">Korea</a></li>
													<li><a href="genre.html">United Kingdom</a></li>
												</ul>
											</div>
											<div class="col-md-3 col-sm-6 sub-two-right mt-5">
												<h6>Newsletter</h6>
												<form action="#" class="subscribe mb-3" method="post">
													<input type="email" name="email" placeholder="Your Email Address" required="" />
													<button><span class="fa fa-envelope-o"></span></button>
												</form>
												<p>Enter your email and receive the latest news, updates and special offers from us.
									</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="below-section">
							<div class="container">
								<div class="copyright-footer">
									<div class="columns text-lg-left">
										<p>&copy; 2021 ProShowz. All rights reserved </p>
									</div>

									<ul class="social text-lg-right">
										<li><a href="#facebook"><span class="fa fa-facebook" aria-hidden="true"></span></a>
										</li>
										<li><a href="#linkedin"><span class="fa fa-linkedin" aria-hidden="true"></span></a>
										</li>
										<li><a href="#twitter"><span class="fa fa-twitter" aria-hidden="true"></span></a>
										</li>
										<li><a href="#google"><span class="fa fa-google-plus" aria-hidden="true"></span></a>
										</li>

									</ul>
								</div>
							</div>
						</div>

					</section>
				</footer>

			</div>
		)
	}
}

function LoginButton(props) {
	return (
		<li class="nav-item">
			<Link class="nav-link" to="login">Login</Link>
		</li>
	);
}
function RegisterButton(props) {
	return (
		<li class="nav-item">
			<Link class="nav-link" to="register">Register</Link>
		</li>
	);
}
function LogoutButton(props) {
	return (
		<li class="nav-item">
			<Link class="nav-link" to="logout">Logout</Link>
		</li>
	);
}