package com.moviebooking.models;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "booking")
public class Booking {

	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "booking_id ")
	Long booking_id;

	@Column(name = "user_id")
	String user_id;
	
	@Column(name = "show_id")
	String show_id;
	
	@Column(name = "total_amt")
	String total_amt;
	
	@Column(name = "booking_date")
	String booking_date;
	
	@Column(name = "payment_status")
	String payment_status;
	
	@Column(name = "booking_status")
	String booking_status;
	
	@OneToOne
	@JoinColumn(name = "user_id", insertable = false, updatable = false)
	private User user;
	
	@OneToMany
	@JoinColumn(name = "booking_id")
	private List<BookedSeat> bookedSeats;
	
	@OneToMany
	@JoinColumn(name = "booking_id")
	private List<FoodOrder> foodOrders;
	

	
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<BookedSeat> getBookedSeats() {
		return bookedSeats;
	}

	public void setBookedSeats(List<BookedSeat> bookedSeats) {
		this.bookedSeats = bookedSeats;
	}

	public List<FoodOrder> getFoodOrders() {
		return foodOrders;
	}

	public void setFoodOrders(List<FoodOrder> foodOrders) {
		this.foodOrders = foodOrders;
	}

	public Booking() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Booking(Long booking_id, String user_id, String total_amt, String booking_date, String payment_status,
			String booking_status,String show_id) {
		super();
		this.booking_id = booking_id;
		this.user_id = user_id;
		this.total_amt = total_amt;
		this.booking_date = booking_date;
		this.payment_status = payment_status;
		this.booking_status = booking_status;
		this.show_id=show_id;
	}
	

	public String getShow_id() {
		return show_id;
	}

	public void setShow_id(String show_id) {
		this.show_id = show_id;
	}

	public Long getBooking_id() {
		return booking_id;
	}

	public void setBooking_id(Long booking_id) {
		this.booking_id = booking_id;
	}

	public String getUser_id() {
		return user_id;
	}

	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}

	public String getTotal_amt() {
		return total_amt;
	}

	public void setTotal_amt(String total_amt) {
		this.total_amt = total_amt;
	}

	public String getBooking_date() {
		return booking_date;
	}

	public void setBooking_date(String booking_date) {
		this.booking_date = booking_date;
	}

	public String getPayment_status() {
		return payment_status;
	}

	public void setPayment_status(String payment_status) {
		this.payment_status = payment_status;
	}

	public String getBooking_status() {
		return booking_status;
	}

	public void setBooking_status(String booking_status) {
		this.booking_status = booking_status;
	}	
	
	
}
