import express from 'express'

import { createTodo, updateTodo, getTodos, getTodoById, deleteTodoById } from '../controllers/todoController.js'

const router = express.Router()

// router.get('/todos', getTodos)
// router.post('/todos', createTodo)
// router.patch('/todos', updateTodo)
// 链式写法
router.route('/todos').get(getTodos).post(createTodo).patch(updateTodo)

// router.get('/todos/:todoId', getTodoById)
// router.delete('/todos/:todoId', deleteTodoById)
// 链式写法
router.route('/todos/:todoId').get(getTodoById).delete(deleteTodoById)


export default router