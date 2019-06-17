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
class SquadController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO esquadrao set ?', [req.body]);
            res.json({
                message: 'Squad saved!!!'
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE INTO esquadrao set ?', [req.body]);
            res.json({
                message: 'Updating squad'
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const squad = yield database_1.default.query('SELECT * FROM esquadrao WHERE cod_esquadrao = ?', [id]);
            console.log(squad);
            if (squad.length > 0) {
                return res.json(squad[0]);
            }
            res.status(404).json({ text: 'squad nao existe' });
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const squad = yield database_1.default.query('SELECT * FROM esquadrao');
            res.json(squad);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const squad = yield database_1.default.query('DELETE FROM esquadrao WHERE cod_esquadrao = ?', [id]);
            console.log(squad);
            res.json({ message: 'Squad deleted' });
        });
    }
}
const squadController = new SquadController();
exports.default = squadController;
