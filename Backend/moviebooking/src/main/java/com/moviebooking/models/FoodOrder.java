package com.moviebooking.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "food_orders")
public class FoodOrder {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "order_id")
	Long order_id;

	@Column(name = "item_id")
	String item_id;
	
	@Column(name = "booking_id")
	String booking_id;
	
	@Column(name = "qty")
	String qty;
	
	@OneToOne
	@JoinColumn(name = "item_id", insertable = false, updatable = false)
	private Foods foods;

	
	public Foods getFoods() {
		return foods;
	}

	public void setFoods(Foods foods) {
		this.foods = foods;
	}

	public FoodOrder() {
		super();
		// TODO Auto-generated constructor stub
	}

	public FoodOrder(Long order_id, String item_id, String booking_id,String qty) {
		super();
		this.order_id = order_id;
		this.item_id = item_id;
		this.booking_id = booking_id;
		this.qty=qty;
	}
	

	public String getQty() {
		return qty;
	}

	public void setQty(String qty) {
		this.qty = qty;
	}

	public Long getOrder_id() {
		return order_id;
	}

	public void setOrder_id(Long order_id) {
		this.order_id = order_id;
	}

	public String getItem_id() {
		return item_id;
	}

	public void setItem_id(String item_id) {
		this.item_id = item_id;
	}

	public String getBooking_id() {
		return booking_id;
	}

	public void setBooking_id(String booking_id) {
		this.booking_id = booking_id;
	}
	
	
}
