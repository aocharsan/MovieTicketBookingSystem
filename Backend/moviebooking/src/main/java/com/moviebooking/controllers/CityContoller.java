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

import com.moviebooking.exceptions.CityException;
import com.moviebooking.exceptions.CityException;
import com.moviebooking.models.City;
import com.moviebooking.repositories.CityRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class CityContoller {
	@Autowired
	private CityRepository cityRepository;

	@GetMapping("/cities")
	public List<City> getAllCities() {
		return cityRepository.findAll();
	}

	@GetMapping("/city/{id}")
	public ResponseEntity<City> getCityById(@PathVariable(value = "id") Long cityId) throws CityException {
		City city = cityRepository.findById(cityId)
				.orElseThrow(() -> new CityException("City not found on :: " + cityId));
		return ResponseEntity.ok().body(city);
	}

	@PostMapping("/city")
	public Status createCity(@RequestBody City city) {
		 cityRepository.save(city);
		return Status.SUCCESS;
	}

	@PutMapping("/city/{id}")
	public ResponseEntity<City> updateCity(@PathVariable(value = "id") Long cityId, @RequestBody City citydata)
			throws CityException {

		City city = cityRepository.findById(cityId)
				.orElseThrow(() -> new CityException("City not found on :: " + cityId));

		city.setCity_name(citydata.getCity_name());
        city.setCity_id(cityId);
		final City updatedCity = cityRepository.save(city);
		return ResponseEntity.ok(updatedCity);
	}

	/**
	 * Delete user map.
	 *
	 * @param userId the user id
	 * @return the map
	 * @throws Exception the exception
	 */
	@DeleteMapping("/city/{id}")
	public Map<String, Boolean> deleteCity(@PathVariable(value = "id") Long cityId) throws Exception {
		City city = cityRepository.findById(cityId)
				.orElseThrow(() -> new CityException("City not found on :: " + cityId));

		cityRepository.delete(city);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
