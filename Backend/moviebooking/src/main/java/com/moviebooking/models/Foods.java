package com.moviebooking.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "foots_drinks")
public class Foods {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "item_id")
	Long id;

	@Column(name = "item_name")
	String item_name;
	
	@Column(name = "item_desc")
	String item_desc;
	
	@Column(name = "unit_price")
	String unit_price;
	
	@Column(name = "qty" ,nullable = true)
	String qty="0";

	public Foods(Long id, String item_name, String item_desc, String unit_price, String qty) {
		super();
		this.id = id;
		this.item_name = item_name;
		this.item_desc = item_desc;
		this.unit_price = unit_price;
		this.qty = qty;
	}

	public Foods() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getItem_name() {
		return item_name;
	}

	public void setItem_name(String item_name) {
		this.item_name = item_name;
	}

	public String getItem_desc() {
		return item_desc;
	}

	public void setItem_desc(String item_desc) {
		this.item_desc = item_desc;
	}

	public String getUnit_price() {
		return unit_price;
	}

	public void setUnit_price(String unit_price) {
		this.unit_price = unit_price;
	}

	public String getQty() {
		return qty;
	}

	public void setQty(String qty) {
		this.qty = qty;
	}

	@Override
	public String toString() {
		return "Foods [id=" + id + ", item_name=" + item_name + ", item_desc=" + item_desc + ", unit_price="
				+ unit_price + ", qty=" + qty + "]";
	}
	
	
}
