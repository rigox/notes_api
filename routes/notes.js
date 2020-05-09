const express = require("express")
const router =  express.Router()
const  {deleteNote ,makeNote, getNotes}    =  require("../controllers/notes")

router
      .route('/')
          .get(getNotes)
          .post(makeNote)
      
router
      .route('/:id')
            .delete(deleteNote)


module.exports =  router;