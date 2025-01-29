package projet.demo.controller.advice;

import static org.springframework.http.HttpStatus.BAD_REQUEST;
import static org.springframework.http.HttpStatus.NOT_FOUND;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import jakarta.persistence.EntityNotFoundException;
import projet.demo.dto.ErrorEntity;
import projet.demo.exceptions.ProduitInexistantException;
import projet.demo.exceptions.StockInsuffisantException;

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

    @ResponseStatus(BAD_REQUEST)
    @ExceptionHandler({IllegalArgumentException.class})
    public @ResponseBody ErrorEntity handleException(IllegalArgumentException exception){
        return new ErrorEntity(null,exception.getMessage());

    }

    @ResponseStatus(BAD_REQUEST)
    @ExceptionHandler({StockInsuffisantException.class})
    public @ResponseBody ErrorEntity handleException(StockInsuffisantException exception){
        return new ErrorEntity(null,exception.getMessage());

    }

    @ResponseStatus(NOT_FOUND)
    @ExceptionHandler({ProduitInexistantException.class})
    public @ResponseBody ErrorEntity handleException(ProduitInexistantException exception){
        return new ErrorEntity(null,exception.getMessage());

    }


}
