"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const starshipTypeController_1 = require("../controllers/starshipTypeController");
class StarshipTypeRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', starshipTypeController_1.starshipTypeController.list);
        this.router.get('/:id', starshipTypeController_1.starshipTypeController.getOne);
        this.router.post('/', starshipTypeController_1.starshipTypeController.create);
        this.router.put('/:id', starshipTypeController_1.starshipTypeController.update);
        this.router.delete('/:id', starshipTypeController_1.starshipTypeController.delete);
    }
}
const starshipTypeRoutes = new StarshipTypeRoutes();
exports.default = starshipTypeRoutes.router;
