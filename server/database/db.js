import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = "mongodb+srv://shvetaverma9111:OIODTYEp1I47zx7r@cluster0.l6uhcvn.mongodb.net/?retryWrites=true&w=majority";
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;