"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.send('A-Wing Index');
    }
}
exports.indexController = new IndexController();
