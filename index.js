import { Calculadora } from "./modules/calculadora.js";
import { UiController } from "./modules/uiController.js";

const calculadora = new Calculadora();

new UiController(calculadora).iniciar();
