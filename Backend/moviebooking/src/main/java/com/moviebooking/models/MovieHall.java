package com.moviebooking.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "moviehall")
public class MovieHall {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "screen_id")
	Long id;

	@Column(name = "screen_name")
	String screen_name;
	
	@Column(name = "seating_capacity")
	String seating_capacity;

	public MovieHall() {
		super();
		// TODO Auto-generated constructor stub
	}

	public MovieHall(Long id, String screen_name, String seating_capacity) {
		super();
		this.id = id;
		this.screen_name = screen_name;
		this.seating_capacity = seating_capacity;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getScreen_name() {
		return screen_name;
	}

	public void setScreen_name(String screen_name) {
		this.screen_name = screen_name;
	}

	public String getSeating_capacity() {
		return seating_capacity;
	}

	public void setSeating_capacity(String seating_capacity) {
		this.seating_capacity = seating_capacity;
	}

	@Override
	public String toString() {
		return "MovieHall [id=" + id + ", screen_name=" + screen_name + ", seating_capacity=" + seating_capacity + "]";
	}
	
	
}
