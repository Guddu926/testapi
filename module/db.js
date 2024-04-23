const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/wapdatabase', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB!');
        const db = mongoose.connection.db;
        db.collection("posts").find().toArray((error, data) => {
            if (error) {
                console.error(error);
                return;
            }
            console.log(data);
            mongoose.connection.close(); // Close the connection after fetching data
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });


