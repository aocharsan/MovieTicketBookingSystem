package com.moviebooking.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;



@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class GenreException extends Exception {
	 
	  public GenreException(String message) {
	    super(message);
	  }

}