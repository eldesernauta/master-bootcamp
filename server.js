const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { Documents } = require('./models/db');

// Constants
const hostname = '0.0.0.0';
const port = 8080;

// App
const app = express();
app.use(bodyParser.json());

// GET method route
app.get('/', function (req, res) {
    res.send('GET request to the homepage');
});

// POST method route
app.post('/', function (req, res) {
    res.send('POST request to the homepage');
});

// GET method route
app.get('/secret', function (req, res, next) {
    res.send('Never be cruel, never be cowardly. And never eat pears!');
    console.log('This is a console.log message.');
});

/*
Your implementation here 
*/

// // Connect to mongodb server
mongoose.connect(
    'mongodb://mongo/master-bootcamp',
    { useNewUrlParser: true },
    { useUnifiedTopolody: true }
)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(err));

// GET method route
// Retrieve all documents in collection
app.get('/documents', (req, res) => {
    Documents.find({}, (err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            res.status(404).json({ code: 404, message: 'Documento no encontrado' })
        }
    })
})

// GET method route
// Query by hostname
app.get('/documents/:id', (req, res) => {
    Documents.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            res.status(404).json({ code: 404, message: 'Documento no encontrado' })
        }
    })
})

//POST method 
// Add a new document to collection
app.post('/documents/agregar', (req, res) => {
    const doc = new Documents({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
    })
    doc.save((err, doc) => {
        res.status(200).json({ code: 200, message: 'Documento agregado', newDoc: doc })
    })
})



/* PUT method. Modifying the message based on host. 
If not found, create a new document in the database. (201 Created)
If found, message, date and offset is modified (200 OK) */
app.put('/documents/update/:id', (req, res) => {
    const doc = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
    }
    Documents.findByIdAndUpdate(req.params.id, { $set: doc }, { new: true }, (err, doc) => {
        if (!err) {
            if (!doc) {
                doc = new Documents({
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                })
            }
            doc.save((err) => {
                if (!err) {
                    res.status(201).json({ code: 201, message: 'Documento creado', newDoc: doc })
                }
                else {
                    console.log(err);
                }
            })
            if (doc) {
                res.status(200).json({ code: 200, message: 'Documento actualizado', updatedDoc: doc })
            }
            else {
                console.log(err);
            }
        }
        else {
            res.status(404).json({ code: 404, message: 'Documento no encontrado' })
            console.log(err);
        }
    }
    )
})

/* DELETE method. Modifying the message based on hostname. 
If not found, do nothing. (204 No Content)
If found, document deleted (200 OK) */
app.delete('/documents/:id', (req, res) => {
    Documents.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.status(200).json({ code: 200, message: 'Documento eliminado', deletedDoc: doc })
        }
        else {
            res.status(204).json({ code: 204, message: 'Documento no encontrado' })
        }
    })
})

app.listen(port, hostname);
console.log(`Running on http://${hostname}:${port}`);
