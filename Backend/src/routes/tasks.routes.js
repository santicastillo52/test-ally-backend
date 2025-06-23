const express = require('express');
const router = express.Router();
const jwtMdw = require('../middlewares/authMiddleware');

router.get('/tasks', jwtMdw, (req, res) => {
  res.json([
    { id: 1, title: 'Completar login', completed: false },
    { id: 2, title: 'Diseñar dashboard', completed: true },
    { id: 3, title: 'Registrar usuario nuevo', completed: false },
    { id: 4, title: 'Curso de Angular', completed: true}

  ]);
});

module.exports =  router;