import express from 'express'
import * as diaryServices from '../services/diaries.service'
import { toNewDiaryEntry } from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = diaryServices.findById(+req.params.id)

  return (diary != null)
    ? res.send(diary)
    : res.send(404)
})

router.post('/', (req, res) => {
  try {
    const { date, weather, visibility, comment } = req.body

    const newDiaryEntry = toNewDiaryEntry({ date, weather, visibility, comment })
    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)

    res.send(addedDiaryEntry)
  } catch (e: any) {
    res.status(400).send(e?.message)
  }
})

export default router
