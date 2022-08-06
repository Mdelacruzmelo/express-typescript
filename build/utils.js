"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toNewDiaryEntry = void 0;
const types_1 = require("./types");
const isString = (inputString) => {
    return typeof inputString !== 'string';
};
const parseComment = (commentFromRequest) => {
    if (!isString(commentFromRequest)) {
        throw new Error('Incorrect or missing comment');
    }
    return commentFromRequest;
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const parseDate = (dateFromRequest) => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Incorrect or missing date');
    }
    return dateFromRequest;
};
const isWeather = (weatherString) => {
    // ['sunny', 'rainy', 'cloudy', 'windy', 'stormy'].includes(weatherString)
    // Esto devuelve un booleano, pero no es exactamente lo que queremos,
    // porque estariamos repitiendo el contrato por el array hardcoded
    return Object.values(types_1.Weather).includes(weatherString);
};
const parseWeather = (weatherFromRequest) => {
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error('Incorrect or missing weather');
    }
    return weatherFromRequest;
};
const isVisibility = (visibilityString) => {
    return Object.values(types_1.Visibility).includes(visibilityString);
};
const parseVisibility = (visibilityFromRequest) => {
    if (!isString(visibilityFromRequest) && !isVisibility(visibilityFromRequest)) {
        throw new Error('Incorrect or missing visibility');
    }
    return visibilityFromRequest;
};
const toNewDiaryEntry = (object) => {
    const newEntry = {
        date: parseDate(object.date),
        comment: parseComment(object.comment),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    };
    return newEntry;
};
exports.toNewDiaryEntry = toNewDiaryEntry;
