/**
 * 
 */
package com.moviebooking.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author Ravi
 *
 */

@Entity
@Table(name = "genres")
public class Genres {

	/**
	 * 
	 */
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "genre_id")
	Long Id;
	
	@Column(name = "genre_name", nullable = false)
	private String genre_name;
	public Genres() {
		// TODO Auto-generated constructor stub
	}
	public Genres(Long id, String genre_name) {
		super();
		Id = id;
		this.genre_name = genre_name;
	}
	public Long getId() {
		return Id;
	}
	public void setId(Long id) {
		Id = id;
	}
	public String getGenre_name() {
		return genre_name;
	}
	public void setGenre_name(String genre_name) {
		this.genre_name = genre_name;
	}
	@Override
	public String toString() {
		return "Genres [Id=" + Id + ", genre_name=" + genre_name + "]";
	}

	
}
