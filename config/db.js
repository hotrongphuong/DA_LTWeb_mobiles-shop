const mongoose = require('mongoose');

// password: 5KaRSkLUJ4rIQG34

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://htp:200100@cluster0.cxknj.mongodb.net/Eshop?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('Connect successfully!')
    } catch (error) {
        console.log('Connect failure.' + error);
    }
}

module.exports = { connect };