import express from 'express'
import diaryRouter from './routes/diaries.route'

const app = express()

app.use(express.json())

const PORT = 3000

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`)
})
