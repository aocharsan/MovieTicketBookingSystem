package com.moviebooking.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "booked_seat")
public class BookedSeat {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	Long id;

	@Column(name = "booking_id")
	String booking_id;
	
	@Column(name = "show_id")
	String show_id;
	
	@Column(name = "seat_no")
	String seat_no;

	public BookedSeat() {
		super();
		// TODO Auto-generated constructor stub
	}

	public BookedSeat(Long id, String booking_id, String show_id, String seat_no) {
		super();
		this.id = id;
		this.booking_id = booking_id;
		this.show_id = show_id;
		this.seat_no = seat_no;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getBooking_id() {
		return booking_id;
	}

	public void setBooking_id(String booking_id) {
		this.booking_id = booking_id;
	}

	public String getShow_id() {
		return show_id;
	}

	public void setShow_id(String show_id) {
		this.show_id = show_id;
	}

	public String getSeat_no() {
		return seat_no;
	}

	public void setSeat_no(String seat_no) {
		this.seat_no = seat_no;
	}
	
	
	
}
