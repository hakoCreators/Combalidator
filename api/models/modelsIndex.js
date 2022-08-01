import 'dotenv/config'
import moongose from 'mongoose';
import creator from './datacreator.js'
import Degree from './degrees.js';
import User from './users.js';
import University from './universities.js';

//El objeto moongose arrastra los cambios de escamas y modelos entre archivos
const connectDB = () => {
  return moongose.connect(process.env.DATABASE_URL)
};



//Despues de crear nuestros esquema establecemos los modelos con estos tres respectivos nombres
const models = { Degree, User, University };

export { connectDB,creator };

export default models;
