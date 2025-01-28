package projet.demo.controller.advice;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import jakarta.persistence.EntityNotFoundException;
import projet.demo.dto.ErrorEntity;

@ControllerAdvice
public class ApplicationControllerAdvice {
    @ResponseStatus(BAD_REQUEST)
    @ExceptionHandler({EntityNotFoundException.class})
    public @ResponseBody ErrorEntity handleException(EntityNotFoundException exception){
        return new ErrorEntity(null,exception.getMessage());

    }

    @ResponseStatus(BAD_REQUEST)
    @ExceptionHandler({DataIntegrityViolationException.class})
    public @ResponseBody ErrorEntity handleException(DataIntegrityViolationException exception){
        return new ErrorEntity(null,exception.getMessage());

    }


}
