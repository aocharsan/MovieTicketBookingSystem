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

import com.moviebooking.exceptions.GenreException;
import com.moviebooking.exceptions.GenreException;
import com.moviebooking.models.Genres;
import com.moviebooking.repositories.GenresRepository;

/**
 * @author Ravi
 *
 */
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class GenresController {

	/**
	 * 
	 */
	public GenresController() {
		// TODO Auto-generated constructor stub
	}

	@Autowired
	private GenresRepository genresRepository;

	@GetMapping("/genres")
	public List<Genres> getAllGenres() {
		return genresRepository.findAll();
	}

	@GetMapping("/genres/{id}")
	public ResponseEntity<Genres> getGenreById(@PathVariable(value = "id") Long genreId) throws GenreException {
		Genres geners = genresRepository.findById(genreId)
				.orElseThrow(() -> new GenreException("City not found on :: " + genreId));
		return ResponseEntity.ok().body(geners);
	}

	@PostMapping("/genre")
	public Status createGenre(@RequestBody Genres genres) {
		 genresRepository.save(genres);
		 return Status.SUCCESS;
	}

	@PutMapping("/gener/{id}")
	public ResponseEntity<Genres> updateGenre(@PathVariable(value = "id") Long generId, @RequestBody Genres generdata)
			throws GenreException {

		Genres geners = genresRepository.findById(generId)
				.orElseThrow(() -> new GenreException("City not found on :: " + generId));

		geners.setGenre_name(generdata.getGenre_name());
		geners.setId(generId);
		final Genres updatedgenre = genresRepository.save(geners);
		return ResponseEntity.ok(updatedgenre);
	}

	/**
	 * Delete user map.
	 *
	 * @param userId the user id
	 * @return the map
	 * @throws Exception the exception
	 */
	@DeleteMapping("/geners/{id}")
	public Map<String, Boolean> deleteGenre(@PathVariable(value = "id") Long generId) throws Exception {
		Genres geners= genresRepository.findById(generId)
				.orElseThrow(() -> new GenreException("City not found on :: " + generId));

		genresRepository.delete(geners);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
