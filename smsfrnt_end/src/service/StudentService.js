import axios from "axios";

const BASE_URL="http://localhost:8080/student";

class StudentService{

        //method to get all students from db
    getAllStudents(){
        return axios.get(BASE_URL);
    }
    updateStudent(id, studentData){
        return axios.put(`${BASE_URL}/${id}`, studentData)
    }
    getStudentById(id){
        return axios.get(`${BASE_URL}/${id}`);
    }
    deleteStudent(id){
        return axios.delete(BASE_URL +"/" +id);
    }

    saveStudent(studentData){
        return axios.post(BASE_URL,studentData);
    }
}
export default new StudentService();