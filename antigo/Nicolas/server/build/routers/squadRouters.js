"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const squadController_1 = __importDefault(require("../controllers/squadController"));
class SquadRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', squadController_1.default.create);
        this.router.delete('/:id', squadController_1.default.delete);
        this.router.put('/:id', squadController_1.default.update);
        this.router.get('/', squadController_1.default.list);
        this.router.get('/:id', squadController_1.default.getOne);
    }
}
const squadRoutes = new SquadRoutes();
exports.default = squadRoutes.router;
