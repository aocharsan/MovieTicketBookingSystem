/**
 * 
 */
package com.moviebooking.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.moviebooking.models.Genres;

/**
 * @author ADMIN
 *
 */
public interface GenresRepository extends JpaRepository<Genres, Long> {

}
