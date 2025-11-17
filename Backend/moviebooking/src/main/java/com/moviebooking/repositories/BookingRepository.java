package com.moviebooking.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.moviebooking.models.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long>{

}
