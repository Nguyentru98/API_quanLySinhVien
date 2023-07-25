"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const studentsController_1 = __importDefault(require("../controller/studentsController"));
const studentRouter = (0, express_1.Router)();
studentRouter.get('/', studentsController_1.default.findAll);
studentRouter.post('/add', studentsController_1.default.add);
studentRouter.put('/update/:id', studentsController_1.default.update);
studentRouter.delete('/delete/:id', studentsController_1.default.delete);
exports.default = studentRouter;
//# sourceMappingURL=studentRouter.js.map