import { DiaryEntry } from "../types"
import diariesData from './diaries.json' // Mejor practica aunque necesitamos el as...
// import diariesData from './_diaries' // No tan buena practica, pero no tenemos assertion

const diaries: DiaryEntry[] = diariesData as Array<DiaryEntry>

export const getEntries = (): DiaryEntry[] => diaries

export const addEntry = () => null