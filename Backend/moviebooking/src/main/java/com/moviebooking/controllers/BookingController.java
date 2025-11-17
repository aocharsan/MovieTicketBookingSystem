package com.moviebooking.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.moviebooking.exceptions.BookingException;
import com.moviebooking.models.BookedSeat;
import com.moviebooking.models.Booking;
import com.moviebooking.models.FoodOrder;
import com.moviebooking.repositories.BookedSeatRepository;
import com.moviebooking.repositories.BookingRepository;
import com.moviebooking.repositories.FoodOrderRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class BookingController {
	@Autowired
	private BookingRepository bookingRepository;
	
	@Autowired
	private BookedSeatRepository bookedSeatRepository;
	
	@Autowired
	private FoodOrderRepository foodOrderRepository;

	@GetMapping("/bookings")
	public List<Booking> getAllBookings() {
		return bookingRepository.findAll();
	}

	@GetMapping("/booking/{id}")
	public ResponseEntity<Booking> getBookingById(@PathVariable(value = "id") Long bookingId) throws BookingException {
		Booking booking = bookingRepository.findById(bookingId)
				.orElseThrow(() -> new BookingException("City not found on :: " + bookingId));
		return ResponseEntity.ok().body(booking);
	}

	@PostMapping("/booking")
	public Booking createBooking(@RequestBody Booking booking) {
		return bookingRepository.save(booking);
		
	}
	@PostMapping("/bookingseat")
	public Status createSeats(@RequestBody BookedSeat bookedseat) {
		 bookedSeatRepository.save(bookedseat);		 
		 return Status.SUCCESS;		
	}
	
	@PostMapping("/bookingfood")
	public Status createFoodOrder(@RequestBody FoodOrder foodorder) {
		foodOrderRepository.save(foodorder);		 
		 return Status.SUCCESS;		
	}
}
