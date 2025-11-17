/**
 * 
 */
package com.moviebooking.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.moviebooking.exceptions.MovieException;
import com.moviebooking.exceptions.MovieException;
import com.moviebooking.models.Movie;
import com.moviebooking.repositories.MovieRepository;

/**
 * @author ADMIN
 *
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class MovieController{
	
	@Autowired
	private MovieRepository movieRepository;

	@GetMapping("/movies")
	public List<Movie> getAllMovies() {
		return movieRepository.findAll();
	}

	/*get Single record*/
	
	@GetMapping("/movie/{id}")
	public ResponseEntity<Movie> getMovieById(@PathVariable(value = "id") Long movieId) throws MovieException {
		Movie movie = movieRepository.findById(movieId)
				.orElseThrow(() -> new MovieException("Movie not found on :: " + movieId));
		return ResponseEntity.ok().body(movie);
	}

	@PostMapping("/movie")
	public Status createMovie(@RequestBody Movie movie) {
		 movieRepository.save(movie);
		 return Status.SUCCESS;
	}

	@PutMapping("/movie/{id}")
	public ResponseEntity<Movie> updateMovie(@PathVariable(value = "id") Long movieId, @RequestBody Movie movieData)
			throws MovieException {

		Movie movie = movieRepository.findById(movieId)
				.orElseThrow(() -> new MovieException("City not found on :: " + movieId));

		movie.setMtitle(movieData.getMtitle());
		movie.setDuration(movieData.getMtitle());

		final Movie updatedmovie = movieRepository.save(movie);
		return ResponseEntity.ok(updatedmovie);
	}

	
	@DeleteMapping("/movie/{id}")
	public Map<String, Boolean> deleteGenre(@PathVariable(value = "id") Long movieID) throws Exception {
		Movie movie= movieRepository.findById(movieID)
				.orElseThrow(() -> new MovieException("City not found on :: " + movieID));

		movieRepository.delete(movie);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}

}
