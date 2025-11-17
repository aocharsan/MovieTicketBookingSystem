package com.moviebooking.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.moviebooking.models.FoodOrder;

public interface FoodOrderRepository extends JpaRepository<FoodOrder, Long>{


}
