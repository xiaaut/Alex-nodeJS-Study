import express from 'express';
import cors from 'cors';

import { readFile, writeFile } from 'node:fs/promises';
import { log } from 'node:console';

const app = express();
app.use(cors());

const port = 3000;

app.get('/todos', async (_req, res) => {
  const todosData = await readFile('./data.json', 'utf-8');
  const todos = JSON.parse(todosData);

  console.log(todos);


  return res.status(200).json(todos);
});

app.get('/todos/:todoId', async (req, res) => {
  const todosData = await readFile('./data.json', 'utf-8');
  const todos = JSON.parse(todosData);

  const todoId = req.params.todoId;

  const todo = todos.find(todo => todo.id === Number(todoId));

  if (todo) {
    return res.status(200).json(todo);
  }

  return res.status(404).send('404 Not Found');
})




app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
