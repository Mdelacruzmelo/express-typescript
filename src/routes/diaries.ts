import express from 'express'

const router = express.Router()

router.get('/', (_req, res) => {
    res.send("Fetching all diaries")
})

router.post('/', (_req, res) => {
    res.send("saving a diarie")
})


export default router