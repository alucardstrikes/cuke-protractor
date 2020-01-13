import { setWorldConstructor } from "cucumber";
import { Google_HomePage } from "../../pages/google_homepage";

class CustomWorld {

    google_search: Google_HomePage;
    attach;
    parameters;
    constructor( {attach, parameters} ) {
        this.google_search = new Google_HomePage();
        this.attach = attach
        this.parameters = parameters
    }
}

setWorldConstructor(CustomWorld);