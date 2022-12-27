const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        mongoose.set('strictQuery', false);

        mongoose.connect(process.env.DB_CNN, { useNewUrlParser: true });

        console.log('Conexión exitosa');

    } catch (error) {
        console.log(error);
        throw new Error('Error al inciar la consexión de base de datos');
    }
}

module.exports = {
    dbConnection
}