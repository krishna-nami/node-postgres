'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
// import dotenv from 'dotenv';
// dotenv.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 6001;
app.get('/', (req, res) => {
  res.json({ message: 'this is home page' });
});
app.listen(port, () => {
  console.log(`app is listening is the port address of ${port}`);
});
