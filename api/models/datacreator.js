import Degree from './degrees.js';
import User from './users.js';
import University from './universities.js';


//Create user
const createUser = async(nombreUsuario) => {
    const user = new User({
      username:nombreUsuario,
    })
    user.save();
  }
  
  //Create degree
  const createDegree = async(degreeName,degreeSubjects) => {
    const degree = new Degree({
      name:degreeName,
      subjects:degreeSubjects,
      subject_qt:degreeSubjects.length,
    })
  
    degree.save();
  }
  
  //Create university
  const createUniversity = async(universityName,degrees) => {
    const university = new University({
      name:universityName,
      college_degree:degrees,
      college_degree_qt:degrees.length,
    })
  
    university.save();
  }


  const creator = {createUser,createDegree,createUniversity}

  export default creator;