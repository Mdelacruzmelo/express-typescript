"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../types");
const diaryEntries = [
    {
        id: 1,
        date: '2020-09-20',
        weather: types_1.Weather.Rainy,
        visibility: types_1.Visibility.Good,
        comment: "Pretty scary flight, I'm glad I'm alive"
    },
    {
        id: 2,
        date: '2020-09-21',
        weather: types_1.Weather.Cloudy,
        visibility: types_1.Visibility.Ok,
        comment: 'Much better now'
    }
];
exports.default = diaryEntries;
