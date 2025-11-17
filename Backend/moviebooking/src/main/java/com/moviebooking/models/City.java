package com.moviebooking.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "city")
public class City {
	private @Id @GeneratedValue Long city_id;
	
	@Column(name = "city_name", nullable = false)
	private String city_name;
	public City(Long city_id, String city_name) {
		super();
		this.city_id = city_id;
		this.city_name = city_name;
	}
	public City() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Long getCity_id() {
		return city_id;
	}
	public void setCity_id(Long city_id) {
		this.city_id = city_id;
	}
	public String getCity_name() {
		return city_name;
	}
	public void setCity_name(String city_name) {
		this.city_name = city_name;
	}
	@Override
	public String toString() {
		return "City [city_id=" + city_id + ", city_name=" + city_name + "]";
	}
	
	
}
