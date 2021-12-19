const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect('mongodb+srv://user:admin@cluster0.wlssv.mongodb.net/mernstack?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
}

module.exports = connect