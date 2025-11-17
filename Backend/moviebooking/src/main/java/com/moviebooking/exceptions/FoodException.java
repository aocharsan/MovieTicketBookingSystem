package com.moviebooking.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;


@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class FoodException extends Exception {
	 
	  public FoodException(String message) {
	    super(message);
	  }

}