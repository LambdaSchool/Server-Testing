// // import { userInfo } from 'os';
// // import { mongo } from 'mongoose';

// const mongoose = require('mongoose');
// const request = require('supertest');

// const server = require('../server');
// const Notes = require('./Notes');
// const bcrypt = require('bcrypt');

// describe('Notes model', () => {
//     beforeAll(() => {
//         return mongoose
//         .connect('mongodb://localhost/notesdb')
//         .then(console.log('Connected to the mongoose database'))
//     })
//     beforeEach(() => {
//         return Notes.remove();
//     })
//     afterEach(() => {

//     })
//     afterAll(() => {
//         return mongo.disconnect();
//     });
//     it('Should hash the password before saving the user', async() => {
//         const user = {username: 'abraham', password: 'pass'};
//         const savedNotes = await Notes.create(user);

//         expect(savedNotes.password).not.toEqual(user.password);
//     })
// });

// describe('POST /notes', () => {
//     it('Responds with json', async() => {
//         request
//     })
// })
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Note = require('./Notes');

describe('/notes', () => {

    // // POST notes
    describe('POST notes', () => {
        beforeAll(() => {
            mongoose
            .connect(`mongodb://localhost/testnotedb`)
            .then(connected => {
                console.log('Connected')
            })
            .catch(err => {
                console.log('Not Connected')
            })
        })

        afterAll(() => {
            mongoose.disconnected()
        })

        it('checks if note is created properly', async () => {
            // arrange
            const noteBody = { title: 'Choresz', body: 'Pick up milk', password: 'dabadoo'}

            // act
            const newNote = await Note.create(noteBody);

            // assert
            expect(newNote.title).toEqual('Choresz');

        })

        it('checks if password is properly hashed', async () => {
            // arrange
            const noteBody = { title: 'Chores', body: 'Pick up milk', password: 'dabadoo'}

            // act
            const newNote = await Note.create(noteBody);

            // assert
            expect(newNote.password).not.toEqual(noteBody.password);

        })
    })

    // DELETE notes
    describe('DELETE notes', () => {
        beforeAll(() => {
            mongoose
            .connect(`mongodb://localhost/testnotedb`)
            .then(connected => {
                console.log('Connected')
            })
            .catch(err => {
                console.log('Not Connected')
            })
        })

        it('checks if id being passed in is an object', async () => {

            // arrange
            const id = { _id: "5b072a80f10812f8b16a5edf" }
           
            // assert
            expect(typeof id).toBe('object')
        })

        it('checks if note is deleted', async () => {

            // arrange
            // const id = { _id: "5b072aa2bcb8aef8bdd7c688" }
            // const title = { title: 'Choresz'}

            // act
            // const note = await Note.findOneAndRemove(title);
            
            // assert
            // expect(title).not.toEqual(note.title)
        })
    })

})