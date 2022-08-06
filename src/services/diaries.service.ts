import {
  DiaryEntry,
  NonSensitiveInfoDiaryEntry,
  NewDiaryEntry
} from '../types'
import diariesData from './diaries.json' // Mejor practica aunque necesitamos el as...
// import diariesData from './_diaries' // No tan buena practica, pero no tenemos assertion

const diaries: DiaryEntry[] = diariesData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find(entry => entry.id === id)

  if (entry != null) {
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }

  return undefined
}

// 1.- Esto no detectará que estoy con otro tipo de arr de objectos sin comment
// export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => diaries

// 2.- Tenemos que hacer esto manualmente
export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return { id, date, weather, visibility }
  })
}

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...newDiaryEntry
  }

  diaries.push(newDiary)

  return newDiary
}
