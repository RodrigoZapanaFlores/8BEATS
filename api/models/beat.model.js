const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const beatSchema = new Schema(
  {
    title: {
      type: String,
      required: 'Title is required',
      trim: true,
      maxLength: [100, `Title must be <= 100 chars`], 
    },
    author: {
      type: String,
      required: "Author is required",
      trim: true,
    },
    description: {
      type: String,
      required: 'Description is required',
    },
    /*bpms: {
      type: String,
      required: 'Title is required',
      minLength: [3, 'Title needs at least 3 chars'] 
    },
    machine: {
      type: String,
      required: 'Title is required',
      minLength: [3, 'Title needs at least 3 chars'] 
    },*/

    url: {
      type: String,
      required: 'url process is required',
      trim: true,
    },

    views: {
      type: Number,
    },

    category: {
      type: String,  
      required: "Category is required",
      trim: true,
      
    },

    duration: {
      type: Number,  
      
    },

    thumbnail: {
      type: String,  
      required: "Thumbnail is required",
      trim: true,
    },

    /*audio: {
      type: String,
      
    },*/

    private: {
        type: Boolean,
    },
   },
   {
   timestamps: true,
   toJSON: {
     transform: (doc, ret) => {
       delete ret.__v;
       ret.id = ret._id;
       delete ret._id;

       return ret;
     },
   },
 }
);

const Beat = mongoose.model('Beat', beatSchema);
module.exports = Beat;