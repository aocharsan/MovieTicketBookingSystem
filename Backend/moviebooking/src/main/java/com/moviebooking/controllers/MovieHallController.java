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

import com.moviebooking.exceptions.ResourceNotFoundException;
import com.moviebooking.models.MovieHall;
import com.moviebooking.repositories.MovieHallRepository;;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class MovieHallController {

	
	@Autowired
	private MovieHallRepository movieHallRepository;

	@GetMapping("/moviehalls")
	public List<MovieHall> getAllMovieHall() {
		return movieHallRepository.findAll();
	}

	@GetMapping("/moviehall/{id}")
	public ResponseEntity<MovieHall> getMovieHallById(@PathVariable(value = "id") Long moviehallId) throws ResourceNotFoundException {
		MovieHall moviehall = movieHallRepository.findById(moviehallId)
				.orElseThrow(() -> new ResourceNotFoundException("MovieHall not found on :: " + moviehallId));
		return ResponseEntity.ok().body(moviehall);
	}

	@PostMapping("/moviehall")
	public Status createMovieHall(@RequestBody MovieHall moviehall) {
		 movieHallRepository.save(moviehall);
		return Status.SUCCESS;
	}

	@PutMapping("/moviehall/{id}")
	public ResponseEntity<MovieHall> updateMovieHall(@PathVariable(value = "id") Long moviehallId, @RequestBody MovieHall moviehalldata)
			throws ResourceNotFoundException {

		MovieHall moviehall = movieHallRepository.findById(moviehallId)
				.orElseThrow(() -> new ResourceNotFoundException("MovieHall not found on :: " + moviehallId));

		moviehall.setScreen_name(moviehalldata.getScreen_name());
		moviehall.setId(moviehallId);
		moviehall.setSeating_capacity(moviehalldata.getSeating_capacity());

		final MovieHall updatedMovieHall = movieHallRepository.save(moviehall);
		return ResponseEntity.ok(updatedMovieHall);
	}

	/**
	 * Delete user map.
	 *
	 * @param userId the user id
	 * @return the map
	 * @throws Exception the exception
	 */
	@DeleteMapping("/moviehall/{id}")
	public Map<String, Boolean> deleteMovieHall(@PathVariable(value = "id") Long moviehallId) throws Exception {
		MovieHall moviehall = movieHallRepository.findById(moviehallId)
				.orElseThrow(() -> new ResourceNotFoundException("MovieHall not found on :: " + moviehallId));

		movieHallRepository.delete(moviehall);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
