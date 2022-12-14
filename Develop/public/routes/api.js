const fs =require('fs');
const path = require('path');

const notes = require('express').Router();
const uuid = require('../helpers/uuid');



// GET Route for retrieving all the notes
notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });
  
  // POST Route for a new note
  notes.post('/', (req, res) => {
    console.log(req.body);
  
    const { username, topic, notes } = req.body;
  
    if (req.body) {
      const newNote = {
        username,
        notes,
        topic,
        note_id: uuid(),
      };
  
      readAndAppend(newNote, './db/db.json');
      res.json(`Note added successfully 🚀`);
    } else {
      res.error('Error in adding note');
    }
  });
  
  module.exports = notes;