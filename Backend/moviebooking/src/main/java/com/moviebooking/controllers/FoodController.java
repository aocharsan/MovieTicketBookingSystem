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

import com.moviebooking.exceptions.FoodException;
import com.moviebooking.exceptions.FoodException;
import com.moviebooking.models.Foods;
import com.moviebooking.repositories.FoodRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class FoodController {

	@Autowired
	private FoodRepository foodRepository;

	@GetMapping("/fooditems")
	public List<Foods> getAllFoodItems() {
		return foodRepository.findAll();
	}

	@GetMapping("/foods/{id}")
	public ResponseEntity<Foods> getFoodsById(@PathVariable(value = "id") Long foodId) throws FoodException {
		Foods foods = foodRepository.findById(foodId)
				.orElseThrow(() -> new FoodException("Foods not found on :: " + foodId));
		return ResponseEntity.ok().body(foods);
	}

	@PostMapping("/foods")
	public Status createFoods(@RequestBody Foods foods) {
		 foodRepository.save(foods);
		return Status.SUCCESS;
	}

	@PutMapping("/foods/{id}")
	public ResponseEntity<Foods> updateFoods(@PathVariable(value = "id") Long foodId, @RequestBody Foods foodsdata)
			throws FoodException {

		Foods foods = foodRepository.findById(foodId)
				.orElseThrow(() -> new FoodException("Foods not found on :: " + foodId));

		foods.setItem_name(foodsdata.getItem_name());
		foods.setItem_desc(foodsdata.getItem_desc());
		foods.setId(foodId);
		foods.setUnit_price(foodsdata.getUnit_price());

		final Foods updatedFoods = foodRepository.save(foods);
		return ResponseEntity.ok(updatedFoods);
	}

	/**
	 * Delete user map.
	 *
	 * @param userId the user id
	 * @return the map
	 * @throws Exception the exception
	 */
	@DeleteMapping("/foods/{id}")
	public Map<String, Boolean> deleteFoods(@PathVariable(value = "id") Long foodId) throws Exception {
		Foods foods = foodRepository.findById(foodId)
				.orElseThrow(() -> new FoodException("Foods not found on :: " + foodId));

		foodRepository.delete(foods);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
