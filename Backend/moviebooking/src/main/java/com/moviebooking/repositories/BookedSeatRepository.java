package com.moviebooking.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.moviebooking.models.BookedSeat;

public interface BookedSeatRepository extends JpaRepository<BookedSeat, Long>{

}
