package com.moviebooking.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.moviebooking.models.Admin;
import com.moviebooking.repositories.AdminRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class AdminController {
	
	@Autowired
	private AdminRepository adminRepository;
	 @PostMapping("/adminlogin")
	    public Status loginUser(@RequestBody Admin user) {
	        List<Admin> users = adminRepository.findAll();
	        for (Admin other : users) {
	            if (other.getEmail().equals(user.getEmail()) && other.getPassword().equals(user.getPassword())) {
	                
	                
	                return Status.SUCCESS;
	            }
	        }
	        return Status.FAILURE;
	    }
	    @PostMapping("/adminlogout")
	    public Status logUserOut(@RequestBody Admin user) {
	        List<Admin> users = adminRepository.findAll();
	        for (Admin other : users) {
	            if (other.equals(user)) {
	               
	               
	                return Status.SUCCESS;
	            }
	        }
	        return Status.FAILURE;
	    }

}
