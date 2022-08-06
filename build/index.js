"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diaries_route_1 = __importDefault(require("./routes/diaries.route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = 3000;
app.use('/api/diaries', diaries_route_1.default);
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
