const   Note =  require("../models/Note");
const asyncHandler =  require("../middleware/async")


// @desc create a profile
// @route POST /api/v1/notes/
// @access Private
exports.makeNote = asyncHandler(async (req,res,next)=>{
     const noteVars =  await Note.create(req.body)

      res.status(201).json({
           success:true,
           data:noteVars 
      })
    });


//@Desc deletes a note
//@Route  DELETE /api/v1/notes/{id}
//@Access Privare

exports.deleteNote =  asyncHandler(async (req,res,next)=>{
     console.log(req.params)
     const deletedNote = await   Note.deleteOne({_id:req.params.id})

     res.status(201).json({
          success:true,
          data:deletedNote
     })

});

//@Desc GETS all notes
//@Route  GET /api/v1/notes/
//@Access Private
exports.getNotes =  asyncHandler(async (req,res,next)=>{
         const notes =  await Note.find({})

   res.status(200).json({
        success:true,
        data:notes
   })

});

//@Desc UPDATES a note by id
//@Route PUT  /api/v1/notes/{id}
//Access  private
exports.updateNote =  asyncHandler(async (req,res,next)=>{
   
       const updatedNote =  await Note.findByIdAndUpdate(req.params.id,req.body,{
              new:true,
              runValidators:true
       })


       res.status(200).json({
            success:true,
            data:updatedNote
       })
});


