const { request, response } = require('express');
const express= require('express');

const app= express();

// midleware para usar json no body params
app.use(express.json())

// GET -> buscar informação
// POST -> inserir uma informação
// PUT -> alterar informação
// PATCH -> alterar informação especifica
// DELETE -> deletar informações

// tipos de parametros
// Route params => identificar um rescurso, editar, deletar ou buscar
// Query params => Paginação, filtro
// body params => objetos inserção, alteração JSON

app.get('/courses', (request, response)=>{
  const query= request.query
  console.log(query)
  return response.json([
    "curso1", "curso 2", "curso 3"
  ])
})

app.post('/courses', (request, response)=>{
  const body = request.body
  console.log(body)
  return response.json([
    "curso1", "curso 2", "curso 3", "curso 4"
  ])
})

app.put('/courses/:id', (request, response)=>{
  const {id}= request.params
  console.log(id)
  return response.json([
    "curso S", "curso 2", "curso 3", "curso 4"
  ])
})

app.patch('/courses/:id', (request, response)=>{
  return response.json([
    "curso S", "curso R", "curso 3", "curso 4"
  ])
})

app.delete('/courses/:id', (request, response)=>{
  return response.json([
    "curso S", "curso R", "curso 4"
  ])
})



const port=3334;
//
app.listen(port, console.log('On-fire, http://localhost:3334'))