package projet.demo.controller;

import projet.demo.service.mouvementStockService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

import projet.demo.entites.MouvementStock;


@RestController
@RequestMapping("/mouvementStock")
public class mouvementStockController {
    @SuppressWarnings("FieldMayBeFinal")
    private mouvementStockService mouvementStockService;

    public mouvementStockController(mouvementStockService mouvementStockService) {
        this.mouvementStockService = mouvementStockService;
    }

    @ResponseStatus(value=HttpStatus.CREATED)
    @PostMapping(path = "create", consumes = APPLICATION_JSON_VALUE)
    public void creerMouvementStock(@RequestBody MouvementStock mouvementStock){
        this.mouvementStockService.creerMouvementStock(mouvementStock);
    }

    
}
