const { Schema, model } = require('mongoose');

const thoughtsSchema = require('./thoughts');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,

        },

        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: function (v) {
                    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
                },
                message: props => `${props.v} is not a valid email`
            },
        }, 

        thoughts: [thoughtsSchema],

    }, 
    {
        toJSON: {
            getters: true,
        }
    });

const User = model('user', userSchema);


module.exports = users;