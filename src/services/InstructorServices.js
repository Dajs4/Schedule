import axios from 'axios';

// Define la URL base del API
const CLIENT_BASE_REST_API_URL = 'http://localhost:8081/api/instructores';

class InstructorService {
    // Método para obtener todos los instructores
    getAllInstructores() {
        return axios.get(CLIENT_BASE_REST_API_URL);
    }

    // Método para crear un nuevo instructor
    createInstructor(instructor) {
        return axios.post(CLIENT_BASE_REST_API_URL, instructor);
    }
}

// Exportación por defecto
export default new InstructorService(); // Asegúrate de exportar una instancia de la clase
