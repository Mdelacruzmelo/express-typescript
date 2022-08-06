import { NewDiaryEntry, Weather, Visibility } from './types'

const isString = (inputString: any): boolean => {
  return typeof inputString !== 'string'
}

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing comment')
  }
  return commentFromRequest
}

/* const isDate = (date: any): boolean => {
  return Boolean(Date.parse(date))
} */

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest)) {
    throw new Error('Incorrect or missing date')
  }
  return dateFromRequest
}

const isWeather = (weatherString: any): boolean => {
  // ['sunny', 'rainy', 'cloudy', 'windy', 'stormy'].includes(weatherString)
  // Esto devuelve un booleano, pero no es exactamente lo que queremos,
  // porque estariamos repitiendo el contrato por el array hardcoded
  return Object.values(Weather).includes(weatherString)
}

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Incorrect or missing weather')
  }
  return weatherFromRequest
}

const isVisibility = (visibilityString: any): boolean => {
  return Object.values(Visibility).includes(visibilityString)
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isString(visibilityFromRequest) && !isVisibility(visibilityFromRequest)) {
    throw new Error('Incorrect or missing visibility')
  }
  return visibilityFromRequest
}

export const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    date: parseDate(object.date),
    comment: parseComment(object.comment),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }

  return newEntry
}
