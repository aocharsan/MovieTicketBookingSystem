import { Component } from "react";

import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const apiUrl = 'http://localhost:8080/api/v1/';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { movieitems: [] };

		this.movieDetails = this.movieDetails.bind(this);
	}
	componentDidMount() {

		axios.get(apiUrl + 'movies')
			.then(response => {
				console.log(response.data);
				this.setState({ movieitems: response.data });
			})
			.catch(function (error) {
				console.log(error);
			})
	}

	movieDetails(item) {
		localStorage.setItem("MOVIDATA", JSON.stringify(item));
		this.props.history.push('/details')
	}

	render() {
		return (

			<div>

				<section class="w3l-main-slider position-relative" id="home">
					<div class="companies20-content">
						<div class="owl-one owl-carousel owl-theme">
							<div class="item">
								<li>
									<div class="slider-info banner-view bg bg2">
										<div class="banner-info">
											<h3>Latest Movie Trailers</h3>
											<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<span class="over-para"> Consequuntur hic odio
									voluptatem tenetur consequatur.</span></p>
											<a href="#small-dialog1" class="popup-with-zoom-anim play-view1">
												<span class="video-play-icon">
													<span class="fa fa-play"></span>
												</span>
												<h6>Watch Trailer</h6>
											</a>

											<div id="small-dialog1" class="zoom-anim-dialog mfp-hide">
												<iframe src="https://player.vimeo.com/video/358205676" allow="autoplay; fullscreen"
													allowfullscreen=""></iframe>
											</div>
										</div>
									</div>
								</li>
							</div>
							<div class="item">
								<li>
									<div class="slider-info  banner-view banner-top1 bg bg2">
										<div class="banner-info">
											<h3>Latest Online Movies</h3>
											<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<span class="over-para"> Consequuntur hic odio
									voluptatem tenetur consequatur.</span></p>
											<a href="#small-dialog2" class="popup-with-zoom-anim play-view1">
												<span class="video-play-icon">
													<span class="fa fa-play"></span>
												</span>
												<h6>Watch Trailer</h6>
											</a>

											<div id="small-dialog2" class="zoom-anim-dialog mfp-hide">
												<iframe src="https://player.vimeo.com/video/395376850" allow="autoplay; fullscreen"
													allowfullscreen=""></iframe>
											</div>
										</div>
									</div>
								</li>
							</div>


						</div>
					</div>
				</section>

				<section class="w3l-grids">
					<div class="grids-main py-5">
						<div class="container py-lg-3">
							<div class="headerhny-title">
								<div class="w3l-title-grids">
									<div class="headerhny-left">
										<h3 class="hny-title">New Movie Releases</h3>
									</div>
									<div class="headerhny-right text-lg-right">
										<h4><a class="show-title" href="#">Show all</a></h4>
									</div>
								</div>
							</div>
							<div class="w3l-populohny-grids">
								{

									this.state.movieitems.map((item, idx) => {

										return <div class="item vhny-grid" key={item.id} >
											<div class="box16">
												<a href="#">
													<figure>
														<img class="img-fluid" src={item.movie_poster} alt="" />
													</figure>
													<div class="box-content">
														<h3 class="title">{item.mtitle}</h3>
														<h4>
															<span class="post">
																<span class="fa fa-clock-o"> </span> {item.duration} min

															</span>

															<span class="post fa fa-heart text-right"></span>
														</h4>
													</div>
													<span class="fa fa-play video-icon" aria-hidden="true"></span>

												</a>


											</div>
											<div class="">
												{item.language}
											</div>
											<h3 class="text-dark">{item.mtitle}</h3>
											<p></p>
											<div class="button-center text-center mt-4">
												{/* <a href="genre.html" class="btn watch-button">Watch now</a> */}
												<button class="btn watch-button " onClick={() => this.movieDetails(item)} >Book now</button>
											</div>

										</div>
									})}



							</div>
						</div>
					</div>
				</section>

				<section class="w3l-grids">
					<div class="grids-main py-5">
						<div class="container py-lg-3">
							<div class="headerhny-title">
								<div class="w3l-title-grids">
									<div class="headerhny-left">
										<h3 class="hny-title">New Releases</h3>
									</div>
									<div class="headerhny-right text-lg-right">
										<h4><a class="show-title" href="genre.html">Show all</a></h4>
									</div>
								</div>
							</div>
							<div class="owl-three owl-carousel owl-theme">
								<div class="item vhny-grid">
									<div class="box16 mb-0">
										<a href="genre.html">
											<figure>
												<img class="img-fluid" src="assets/images/n1.jpg" alt="" />
											</figure>
											<div class="box-content">
												<h4> <span class="post"><span class="fa fa-clock-o"> </span> 2 Hr 4min

										</span>

													<span class="post fa fa-heart text-right"></span>
												</h4>
											</div>
											<span class="fa fa-play video-icon" aria-hidden="true"></span>
										</a>
									</div>
									<h3> <a class="title-gd" href="genre.html">No Time to Die</a></h3>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
									<div class="button-center text-center mt-4">
										<a href="genre.html" class="btn watch-button">Watch now</a>
									</div>

								</div>
								<div class="item vhny-grid">
									<div class="box16 mb-0">
										<a href="genre.html">
											<figure>
												<img class="img-fluid" src="assets/images/n2.jpg" alt="" />
											</figure>
											<div class="box-content">

												<h4> <span class="post"><span class="fa fa-clock-o"> </span> 2 Hr 4min

										</span>

													<span class="post fa fa-heart text-right"></span>
												</h4>
											</div>
											<span class="fa fa-play video-icon" aria-hidden="true"></span>
										</a>
									</div>
									<h3> <a class="title-gd" href="genre.html">Mulan</a></h3>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
									<div class="button-center text-center mt-4">
										<a href="genre.html" class="btn watch-button">Watch now</a>
									</div>
								</div>
								<div class="item vhny-grid">
									<div class="box16 mb-0">
										<a href="genre.html">
											<figure>
												<img class="img-fluid" src="assets/images/n3.jpg" alt="" />
											</figure>
											<div class="box-content">

												<h4> <span class="post"><span class="fa fa-clock-o"> </span> 2 Hr 4min

										</span>

													<span class="post fa fa-heart text-right"></span>
												</h4>
											</div>
											<span class="fa fa-play video-icon" aria-hidden="true"></span>
										</a>
									</div>
									<h3> <a class="title-gd" href="genre.html">Free Guy</a></h3>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
									<div class="button-center text-center mt-4">
										<a href="genre.html" class="btn watch-button">Watch now</a>
									</div>
								</div>
								<div class="item vhny-grid">
									<div class="box16 mb-0">
										<a href="genre.html">
											<figure>
												<img class="img-fluid" src="assets/images/n4.jpg" alt="" />
											</figure>
											<div class="box-content">

												<h4> <span class="post"><span class="fa fa-clock-o"> </span> 2 Hr 4min

										</span>

													<span class="post fa fa-heart text-right"></span>
												</h4>
											</div>
											<span class="fa fa-play video-icon" aria-hidden="true"></span>
										</a>
									</div>
									<h3> <a class="title-gd" href="genre.html">My Spy</a></h3>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
									<div class="button-center text-center mt-4">
										<a href="genre.html" class="btn watch-button">Watch now</a>
									</div>

								</div>
								<div class="item vhny-grid">
									<div class="box16 mb-0">
										<a href="genre.html">
											<figure>
												<img class="img-fluid" src="assets/images/n5.jpg" alt="" />
											</figure>
											<div class="box-content">

												<h4> <span class="post"><span class="fa fa-clock-o"> </span> 2 Hr 4min

										</span>

													<span class="post fa fa-heart text-right"></span>
												</h4>
											</div>
											<span class="fa fa-play video-icon" aria-hidden="true"></span>
										</a>
									</div>
									<h3> <a class="title-gd" href="genre.html">Scoob</a></h3>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
									<div class="button-center text-center mt-4">
										<a href="genre.html" class="btn watch-button">Watch now</a>
									</div>
								</div>
								<div class="item vhny-grid">
									<div class="box16 mb-0">
										<a href="genre.html">
											<figure>
												<img class="img-fluid" src="assets/images/n6.jpg" alt="" />
											</figure>
											<div class="box-content">

												<h4> <span class="post"><span class="fa fa-clock-o"> </span> 2 Hr 4min

										</span>

													<span class="post fa fa-heart text-right"></span>
												</h4>
											</div>
											<span class="fa fa-play video-icon" aria-hidden="true"></span>
										</a>
									</div>
									<h3> <a class="title-gd" href="genre.html">Downhill</a></h3>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
									<div class="button-center text-center mt-4">
										<a href="genre.html" class="btn watch-button">Watch now</a>
									</div>
								</div>
							</div>
						</div>

					</div>
				</section>

				<section class="w3l-mid-slider position-relative">
					<div class="companies20-content">
						<div class="owl-mid owl-carousel owl-theme">
							<div class="item">
								<li>
									<div class="slider-info mid-view bg bg2">
										<div class="container">
											<div class="mid-info">
												<span class="sub-text">Comedy</span>
												<h3>Jumanji: The Next Level</h3>
												<p>2019 ‧ Comedy/Action ‧ 2h 3m</p>
												<a class="watch" href="genre.html"><span class="fa fa-play"
													aria-hidden="true"></span>
										Watch Trailer</a>
											</div>
										</div>
									</div>
								</li>
							</div>
							<div class="item">
								<li>
									<div class="slider-info mid-view mid-top1 bg bg2">
										<div class="container">
											<div class="mid-info">
												<span class="sub-text">Adventure</span>
												<h3>Dolittle</h3>
												<p>2020 ‧ Family/Adventure ‧ 1h 41m</p>
												<a class="watch" href="genre.html"><span class="fa fa-play"
													aria-hidden="true"></span>
										Watch Trailer</a>
											</div>
										</div>
									</div>
								</li>
							</div>
							<div class="item">
								<li>
									<div class="slider-info mid-view mid-top2 bg bg2">
										<div class="container">
											<div class="mid-info">
												<span class="sub-text">Action</span>
												<h3>Bad Boys for Life</h3>
												<p>2020 ‧ Comedy/Action ‧ 2h 4m</p>
												<a class="watch" href="genre.html"><span class="fa fa-play"
													aria-hidden="true"></span>
										Watch Trailer</a>
											</div>
										</div>
									</div>
								</li>
							</div>
						</div>
					</div>
				</section>

				<section class="w3l-albums py-5" id="projects">
					<div class="container py-lg-4">
						<div class="row">
							<div class="col-lg-12 mx-auto">

								<div id="parentHorizontalTab">
									<ul class="resp-tabs-list hor_1">
										<li>Recent Movies</li>
										<li>Popular Movies</li>
										<li>Trend Movies</li>
										<div class="clear"></div>
									</ul>
									<div class="resp-tabs-container hor_1">
										<div class="albums-content">
											<div class="row">

												<div class="col-lg-4 new-relise-gd mt-lg-0 mt-0">
													<div class="slider-info">
														<div class="img-circle">
															<a href="genre.html">

																<img src="assets/images/m6.jpg" class="img-fluid"
																	alt="author image" />
																<div class="overlay-icon">

																	<span class="fa fa-play video-icon" aria-hidden="true"></span>
																</div>
															</a>
														</div>
														<div class="message">
															<p>English</p>
															<a class="author-book-title" href="genre.html">Long Shot</a>
															<h4> <span class="post"><span class="fa fa-clock-o"> </span> 2 Hr 4min

													</span>

																<span class="post fa fa-heart text-right"></span>
															</h4>
														</div>
													</div>

												</div>
												<div class="col-lg-4 new-relise-gd mt-lg-0 mt-0">
													<div class="slider-info">
														<div class="img-circle">
															<a href="genre.html"><img src="assets/images/m5.jpg" class="img-fluid"
																alt="author image" />
																<div class="overlay-icon">

																	<span class="fa fa-play video-icon" aria-hidden="true"></span>
																</div>
															</a>
														</div>
														<div class="message">
															<p>English</p>
															<a class="author-book-title" href="genre.html">Jumanji</a>
															<h4> <span class="post"><span class="fa fa-clock-o"> </span> 2 Hr 4min

													</span>

																<span class="post fa fa-heart text-right"></span>
															</h4>
														</div>
													</div>

												</div>
												<div class="col-lg-4 new-relise-gd mt-lg-0 mt-0">
													<div class="slider-info">
														<div class="img-circle">
															<a href="genre.html"><img src="assets/images/m4.jpg" class="img-fluid"
																alt="author image" />
																<div class="overlay-icon">

																	<span class="fa fa-play video-icon" aria-hidden="true"></span>
																</div>
															</a>
														</div>
														<div class="message">
															<p>English</p>
															<a class="author-book-title" href="genre.html">Little Women</a>
															<h4> <span class="post"><span class="fa fa-clock-o"> </span> 2 Hr 4min

													</span>

																<span class="post fa fa-heart text-right"></span>
															</h4>
														</div>
													</div>

												</div>


											</div>
										</div>

									</div>
								</div>
							</div>

						</div>
					</div>
				</section>


			</div>
		)
	}
}