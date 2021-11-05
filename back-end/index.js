const express = require('express')
const cors = require('cors')
const taskController = require('./controller/taskController')

const app = express()

const PORT = 3001

app.use(cors())
app.use(express.json())

app.listen(PORT, () => console.log(`Aplicativo ouvindo na porta ${PORT}`))

app.get('/', taskController.getAll)
app.get('/:id', taskController.getById)

app.post('/create', taskController.create)

app.put('/update/:id', taskController.update)

app.delete('/delete/:id', taskController.remove)
