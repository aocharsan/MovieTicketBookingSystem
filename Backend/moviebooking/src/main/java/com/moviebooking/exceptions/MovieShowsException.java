package com.moviebooking.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;


@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class MovieShowsException extends Exception {
	 
	  public MovieShowsException(String message) {
	    super(message);
	  }

}