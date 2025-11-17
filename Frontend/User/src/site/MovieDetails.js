import { Component } from "react";

import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


const apiUrl = 'http://localhost:8080/api/v1/';

export default class MovieDetails extends Component {
	constructor(props) {
		super(props);
		this.state = { movieitems: '' };
		var data = JSON.parse(localStorage.getItem('MOVIDATA'));
		this.state.movieitems = data;
		console.log(this.state.movieitems);

		this.bookSeat = this.bookSeat.bind(this);
	}
	bookSeat(item) {
		localStorage.setItem("SCHEDULDATA", JSON.stringify(item));
		this.props.history.push('/booking')
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
								<div class="w3l-title-grids text-left ml-4">
									<div class="headerhny-left">
										<h3 class="hny-title">{this.state.movieitems.mtitle}</h3>
										<p>{this.state.movieitems.genres.genre_name}</p>
									</div>

								</div>
							</div>

							{

								<div className="container ">
									<div className="row">
										<div className="col-3">

											<div className="movie-card " >
												<div className="movie-card card">
													<img className="card-img-top it" src={this.state.movieitems.movie_poster} alt="" />
													<div className="card-body">
														<h4 className="card-title">{this.state.movieitems.mtitle}</h4>
														{/* <h6 className="card-subtitle mb-2 text-muted"></h6> */}
														<p className="text-justify text-center" style={{ fontSize: '14px' }}>   Release date: {this.state.movieitems.release_date}</p>
													</div>
													<div className="card-footer">
														<div className="clearfix">
															{/* <div className="float-left mt-1">
														<StarRating rating={props.movie.rating} />
													</div> */}
															<div className="card-footer-badge float-right badge badge-primary badge-pill">{this.state.movieitems.duration}min</div>
														</div>
													</div>

												</div>




											</div>


										</div>
										<div className="col">
											<div className="movie-card">
												<div className="movie-card card">
													{/* <h4></h4> */}
													<p className="text-muted text-left"><b>MOVIE DESCRIPTION:</b>&nbsp;&nbsp;
														<i>{this.state.movieitems.mdesc}</i></p>
													<br></br><br></br><br></br>
														DIRECTOR:
														<div>
														{this.state.movieitems.director}
													</div>
													<br></br><br></br>
														CAST AND CREW:
														<div>
														{this.state.movieitems.cast_crew}
													</div>


												</div>
												<div></div>
											</div>
										</div>

									</div>
								</div>


							}



							{/* </div> */}

						</div>

						<div class="container py-lg-6">
							<div class="headerhny-title">

								<div className="text-info">
									<h4 class="text-center">Movie Schedule</h4>

								</div>


							</div>
							<table class="table table-primary  table-dark table-striped table-hover">
								<thead>
									<tr>
										<th>SCREEN ID</th>
										<th>SHOW TIME</th>
										<th>SCREEN NAME</th>
										<th>ACTION</th>

									</tr>
								</thead>
								<tbody>


									{
										this.state.movieitems.movieshow.map((item, idx) => {

											return <tr key={item.id}>

												<td>{item.show_date}</td>

												<td>{item.show_time}</td>

												<td>{item.hall.screen_name}</td>
												<td>

													<div class="btn-group">


														<button className="btn btn-success" onClick={() => this.bookSeat(item)}>Book</button>


													</div>

												</td>

											</tr>
										})
									}
								</tbody>
							</table>
						</div>

					</div>

				</section>



			</div>
		)
	}
}