package com.moviebooking.models;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "movies")
public class Movie {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "movie_id")
	Long id;

	@Column(name = "movie_title")
	String mtitle;
	
	@Column(name = "movie_desc")
	String mdesc;
	
   
	@Column(name = "genre_id")
	String genre_id;
	
	
	@Column(name = "release_date")
	String release_date;
	
	
	@Column(name = "language")
	String language;
	
	
	@Column(name = "duration")
	String duration;
	
	
	@Column(name = "movie_poster", nullable = true )
	String movie_poster;
	
	@Column(name = "director")
	String director;
	
	
	@Column(name = "cast_crew")
	String cast_crew;
	
	@Column(name = "mstatus")
	String mstatus;
	
	@OneToOne
	@JoinColumn(name = "genre_id", insertable = false, updatable = false)
	private Genres genres;
	
	@OneToMany
	@JoinColumn(name = "movie_id")
	private List<MovieShows> movieshow;
	

	public Genres getGenres() {
		return genres;
	}

	public void setGenres(Genres genres) {
		this.genres = genres;
	}
	
   

	public List<MovieShows> getMovieshow() {
		return movieshow;
	}

	public void setMovieshow(List<MovieShows> movieshow) {
		this.movieshow = movieshow;
	}

	public Movie() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Movie(Long id, String mtitle, String mdesc, String genre_id, String release_date, String language,
			String duration, String movie_poster, String director, String cast_crew, String mstatus) {
		super();
		this.id = id;
		this.mtitle = mtitle;
		this.mdesc = mdesc;
		this.genre_id = genre_id;
		this.release_date = release_date;
		this.language = language;
		this.duration = duration;
		this.movie_poster = movie_poster;
		this.director = director;
		this.cast_crew = cast_crew;
		this.mstatus = mstatus;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getMtitle() {
		return mtitle;
	}

	public void setMtitle(String mtitle) {
		this.mtitle = mtitle;
	}

	public String getMdesc() {
		return mdesc;
	}

	public void setMdesc(String mdesc) {
		this.mdesc = mdesc;
	}

	public String getGenre_id() {
		return genre_id;
	}

	public void setGenre_id(String genre_id) {
		this.genre_id = genre_id;
	}

	public String getRelease_date() {
		return release_date;
	}

	public void setRelease_date(String release_date) {
		this.release_date = release_date;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}



	public String getMovie_poster() {
		return movie_poster;
	}

	public void setMovie_poster(String movie_poster) {
		this.movie_poster = movie_poster;
	}

	public String getDirector() {
		return director;
	}

	public void setDirector(String director) {
		this.director = director;
	}

	public String getCast_crew() {
		return cast_crew;
	}

	public void setCast_crew(String cast_crew) {
		this.cast_crew = cast_crew;
	}

	public String getMstatus() {
		return mstatus;
	}

	public void setMstatus(String mstatus) {
		this.mstatus = mstatus;
	}

	@Override
	public String toString() {
		return "Movie [id=" + id + ", mtitle=" + mtitle + ", mdesc=" + mdesc + ", genre_id=" + genre_id
				+ ", release_date=" + release_date + ", language=" + language + ", duration=" + duration
				+ ", movie_poster=" + movie_poster + ", director=" + director + ", cast_crew=" + cast_crew
				+ ", mstatus=" + mstatus + "]";
	}
	
	
}
