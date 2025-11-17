package com.moviebooking.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;


@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class MovieException extends Exception {
	 
	  public MovieException(String message) {
	    super(message);
	  }

}
