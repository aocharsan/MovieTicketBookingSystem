package com.moviebooking.models;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "shows")
public class MovieShows {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "show_id")
	Long id;

	@Column(name = "movie_id")
	Long movie_id;
	
	@Column(name = "screen_id")
	Long screen_id;
	
	@Column(name = "show_date")
	String show_date;
	
	@Column(name = "show_time")
	String show_time;
	
	@Column(name = "ticket_price")
	String ticket_price;
	
	@Column(name = "show_status")
	String show_status;
	
	@OneToOne
	@JoinColumn(name = "screen_id", insertable = false, updatable = false)
	private MovieHall hall;	
	
	/*
	 * @ManyToOne
	 * 
	 * @JoinColumn(name = "movie_id", insertable = false, updatable = false) private
	 * Movie movie;
	 */
	
	
	
	/*
	 * public Movie getMovie() { return movie; }
	 * 
	 * public void setMovie(Movie movie) { this.movie = movie; }
	 */
	@OneToMany
    @JoinColumn(name = "show_id", insertable = false, updatable = false) 
    private List<BookedSeat> bookedSeats;
	
	

	public List<BookedSeat> getBookedSeats() {
		return bookedSeats;
	}

	public void setBookedSeats(List<BookedSeat> bookedSeats) {
		this.bookedSeats = bookedSeats;
	}

	public MovieHall getHall() {
		return hall;
	}

	public void setHall(MovieHall hall) {
		this.hall = hall;
	}

	public MovieShows(Long id, Long movie_id, Long screen_id, String show_date, String show_time, String ticket_price,
			String show_status) {
		super();
		this.id = id;
		this.movie_id = movie_id;
		this.screen_id = screen_id;
		this.show_date = show_date;
		this.show_time = show_time;
		this.ticket_price = ticket_price;
		this.show_status = show_status;
	}

	public MovieShows() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getMovie_id() {
		return movie_id;
	}

	public void setMovie_id(Long movie_id) {
		this.movie_id = movie_id;
	}

	public Long getScreen_id() {
		return screen_id;
	}

	public void setScreen_id(Long screen_id) {
		this.screen_id = screen_id;
	}

	public String getShow_date() {
		return show_date;
	}

	public void setShow_date(String show_date) {
		this.show_date = show_date;
	}

	public String getShow_time() {
		return show_time;
	}

	public void setShow_time(String show_time) {
		this.show_time = show_time;
	}

	public String getTicket_price() {
		return ticket_price;
	}

	public void setTicket_price(String ticket_price) {
		this.ticket_price = ticket_price;
	}

	public String getShow_status() {
		return show_status;
	}

	public void setShow_status(String show_status) {
		this.show_status = show_status;
	}

	@Override
	public String toString() {
		return "MovieShows [id=" + id + ", movie_id=" + movie_id + ", screen_id=" + screen_id + ", show_date="
				+ show_date + ", show_time=" + show_time + ", ticket_price=" + ticket_price + ", show_status="
				+ show_status + "]";
	}
	
	
}
