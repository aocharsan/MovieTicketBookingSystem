package com.moviebooking.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.moviebooking.models.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long>{

}
