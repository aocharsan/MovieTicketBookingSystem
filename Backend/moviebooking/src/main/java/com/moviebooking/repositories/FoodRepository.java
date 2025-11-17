/**
 * 
 */
package com.moviebooking.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.moviebooking.models.Foods;

/**
 * @author ADMIN
 *
 */
public interface FoodRepository  extends JpaRepository<Foods, Long>{

}
