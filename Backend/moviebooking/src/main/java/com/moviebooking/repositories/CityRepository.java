package com.moviebooking.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.moviebooking.models.City;

@Repository
public interface CityRepository extends JpaRepository<City, Long> {	

}