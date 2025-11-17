package com.moviebooking.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.moviebooking.models.User;

public interface UserRepository extends JpaRepository<User, Long>{
	User findByEmail(String email);
}
