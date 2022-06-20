const mongoose = require('mongoose');

const Documents = mongoose.model( 'Documents', {
    first_name: String,
    last_name: String,
    email: String,
} );

module.exports = {Documents};