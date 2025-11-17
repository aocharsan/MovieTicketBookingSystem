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

import com.moviebooking.exceptions.MovieShowsException;
import com.moviebooking.exceptions.MovieShowsException;
import com.moviebooking.models.MovieShows;
import com.moviebooking.repositories.MovieShowsRepository;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class MovieShowsController {	
	
	@Autowired
	private MovieShowsRepository movieShowsRepository;

	@GetMapping("/movieshows")
	public List<MovieShows> getAllMovieShows() {
		return movieShowsRepository.findAll();
	}

	/*get Single record*/
	
	@GetMapping("/movieshow/{id}")
	public ResponseEntity<MovieShows> getMovieShowsById(@PathVariable(value = "id") Long movieShowsId) throws MovieShowsException {
		MovieShows movieShows = movieShowsRepository.findById(movieShowsId)
				.orElseThrow(() -> new MovieShowsException("MovieShows not found on :: " + movieShowsId));
		return ResponseEntity.ok().body(movieShows);
	}

	@PostMapping("/movieshow")
	public Status createMovieShows(@RequestBody MovieShows movieShows) {
		movieShowsRepository.save(movieShows);
		 return Status.SUCCESS;
	}

	@PutMapping("/movieshow/{id}")
	public ResponseEntity<MovieShows> updateMovieShows(@PathVariable(value = "id") Long movieShowsId, @RequestBody MovieShows movieShowsData)
			throws MovieShowsException {

		MovieShows movieShows = movieShowsRepository.findById(movieShowsId)
				.orElseThrow(() -> new MovieShowsException("City not found on :: " + movieShowsId));

	//	movieShows.setMtitle(movieShowsData.getMtitle());
	//	movieShows.setDuration(movieShowsData.getMtitle());

		final MovieShows updatedmovieShows = movieShowsRepository.save(movieShows);
		return ResponseEntity.ok(updatedmovieShows);
	}

	
	@DeleteMapping("/movieshow/{id}")
	public Map<String, Boolean> deleteMovieShow(@PathVariable(value = "id") Long movieShowsID) throws Exception {
		MovieShows movieShows= movieShowsRepository.findById(movieShowsID)
				.orElseThrow(() -> new MovieShowsException("City not found on :: " + movieShowsID));

		movieShowsRepository.delete(movieShows);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
