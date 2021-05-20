const {nanoid} = require('nanoid');
const notes = require('./notes');

const addNote = (request, h)=>{
    const {title, tags, body} = request.payload;
    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const newNote = {id, title, tags, createdAt, updatedAt, body};

    notes.push(newNote);

    const isSuccess = notes.filter((note)=> note.id == id).length > 0;

    if(isSuccess){
        const response = h.response({
            status:"success",
            message: "Note has been added",
            data:{
                noteId: id
            },
        });
        response.code(201);
        return response;
    }
    const response = h.response({
        status:"fail",
        message:"Catatan gagal ditambahkan",
    });
    return response;
};

const getAllNotes = ()=>({
    status:"success",
    data:{
        notes,
    }

});

const getNoteById = (request, h)=>{
    const {id} = request.params;

    const note = notes.filter((n)=> n.id === id)[0];
    if(note != undefined){
        return {
            status:"success",
            data:{
                note,
            },
        };
    }
    const response = h.response({
        status:"fail",
        message:`note ${id} Not Found`,
    });

    response.code(404);
    return response;
};

const editNoteById = (request, h)=>{
    const {id} = request.params;
    const {title, tags, body} = request.payload;
    const index = notes.findIndex((note)=> note.id === id);

    const updatedAt = new Date().toISOString();
    if(index != -1){
        notes[index] = {
            ...notes[index],
            title,
            tags,
            updatedAt,
            body,
        }
        const response = h.response({
            status:"success",
            message:"Note has been edited",
        });
        response.code(200);
        return response;
    }

    const response = h.response({
        status:"fail",
        message:"ID Not Found",
    });
    response.code(404);
    return response;
};

const deletNoteById = (request, h)=>{
    const {id} = request.params;
    const index = notes.findIndex((note)=> note.id === id);

    if(index!=-1){
        notes.splice(index,1);
        const response = h.response({
            status:"success",
            message:"Note Deleted",
        });
        response.code(200);
        return response;
    }

    const response = h.response({
        status:"fail",
        message:"ID Not Found",
    });
    response.code(404);
    return response;
};

module.exports = {
    addNote,
    getAllNotes,
    getNoteById,
    editNoteById,
    deletNoteById,
};
