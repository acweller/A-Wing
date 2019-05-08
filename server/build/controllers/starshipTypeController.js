"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class StarshipTypeController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const types = yield database_1.default.query('SELECT * FROM starship_type');
            res.json(types);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const types = yield database_1.default.query('SELECT * FROM starship_type WHERE cod_type = ?', [id]);
            if (types.length > 0) {
                console.log(types);
                return res.json(types[0]);
            }
            res.status(404).json({ text: "O tipo de nave não existe." });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body);
            yield database_1.default.query('INSERT INTO starship_type set ?', [req.body]);
            res.json({ message: 'O tipo de nave foi inserido.' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE starship_type set ? WHERE cod_type = ?', [req.body, id]);
            res.json({ text: "O tipo de nave foi atualizado." });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM starship_type WHERE cod_type = ?', [id]);
            res.json({ text: 'O tipo de nave ' + req.params.id + ' foi excluído.' });
        });
    }
}
exports.starshipTypeController = new StarshipTypeController();
