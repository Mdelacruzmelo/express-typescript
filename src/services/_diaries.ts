import { DiaryEntry, Visibility, Weather } from '../types'

const diaryEntries: DiaryEntry[] = [
  {
    id: 1,
    date: '2020-09-20',
    weather: Weather.Rainy,
    visibility: Visibility.Good,
    comment: "Pretty scary flight, I'm glad I'm alive"
  },
  {
    id: 2,
    date: '2020-09-21',
    weather: Weather.Cloudy,
    visibility: Visibility.Ok,
    comment: 'Much better now'
  }
]

export default diaryEntries
