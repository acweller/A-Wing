"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
class MembroEsquadraoController {
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const membro_esquadrao = yield database_1.pola.query('SELECT * FROM membro_esquadrao WHERE cod_esquadrao = ?', [id]);
            console.log(membro_esquadrao);
            if (membro_esquadrao.length > 0) {
                return res.json(membro_esquadrao[0]);
            }
            res.status(404).json({ text: 'damnn u nao existe' });
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const membro_esquadrao = yield database_1.pola.query('SELECT * FROM membro_esquadrao');
            res.json(membro_esquadrao);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.pola.query('INSERT INTO membro_esquadrao set ?', [req.body]);
            res.json({
                message: 'Membro Esquadrao saved!!!'
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            var str = id.split(',', 2);
            const membro_esquadrao = yield database_1.pola.query('DELETE FROM membro_esquadrao WHERE cod_personagem =?', str[0] + 'and cod_esquadrao = ?' + str[1]);
            console.log(membro_esquadrao + " isso");
            res.json({ message: 'Membro Esquadrao deletado ' + id.split(',') });
        });
    }
    update(req, res) {
        res.json({
            text: 'Updating Membro Esquadrao: ' + req.params.id
        });
    }
}
exports.MembroController = new MembroEsquadraoController();
//export default gamesController; 
