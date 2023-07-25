"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const classController_1 = __importDefault(require("../controller/classController"));
const ClassRouter = (0, express_1.Router)();
ClassRouter.get('/', classController_1.default.findAll);
ClassRouter.post('/add', classController_1.default.add);
ClassRouter.put('/update', classController_1.default.update);
ClassRouter.get('/delete', classController_1.default.delete);
exports.default = ClassRouter;
//# sourceMappingURL=classRouter.js.map