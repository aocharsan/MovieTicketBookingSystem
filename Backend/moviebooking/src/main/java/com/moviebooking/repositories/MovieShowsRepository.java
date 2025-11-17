package com.moviebooking.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.moviebooking.models.MovieShows;

public interface MovieShowsRepository extends JpaRepository<MovieShows, Long>{

}
