package com.moviebooking.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;



@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class CityException extends Exception {
	 
	  public CityException(String message) {
	    super(message);
	  }

}