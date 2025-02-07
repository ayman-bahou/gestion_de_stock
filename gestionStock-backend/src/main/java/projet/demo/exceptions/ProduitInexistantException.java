package projet.demo.exceptions;

public class ProduitInexistantException extends RuntimeException {
    public ProduitInexistantException( String message) {
        super(message);
    }

}