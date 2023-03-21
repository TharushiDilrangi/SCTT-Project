package com.sctt.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
public class GlobalException {

    @ExceptionHandler(ResourceNotFound.class)
    public ResponseEntity<String>
    resourceNotFound(Exception e, WebRequest request)

    {
        return new ResponseEntity<String>
                (e.getMessage(), HttpStatus.NOT_FOUND);
    }
}
