const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado a MongoDB local'))
  .catch((err: Error) => console.error('Error conectando a MongoDB local:', err.message));


  export default mongoose