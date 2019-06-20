"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MembroEsquadraoController_1 = require("../controllers/MembroEsquadraoController");
class MembroEsquadraoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', MembroEsquadraoController_1.MembroController.list);
        this.router.get('/:id', MembroEsquadraoController_1.MembroController.getOne);
        this.router.post('/', MembroEsquadraoController_1.MembroController.create);
        this.router.delete('/:id', MembroEsquadraoController_1.MembroController.delete);
        this.router.put('/:id', MembroEsquadraoController_1.MembroController.update);
        //
    }
}
const MembroRoutes = new MembroEsquadraoRoutes();
exports.default = MembroRoutes.router;
