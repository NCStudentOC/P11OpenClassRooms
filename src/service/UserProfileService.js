import axios from "axios";

export const getUserProfile = async (token) => {
    console.log("le token est là", token); // Imprimez le token pour le vérifier
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json',
            Authorization: `Bearer ${token}`
        }
    }
    return axios.post('http://localhost:3001/api/v1/user/profile', {}, config)
        .then(response => {
            console.log("la reponse de l'api", response.data.body)
            return response.data.body;
        });
}

export const updateUserName = async ({ token, newUserName }) => {
    const response = await axios.put('http://localhost:3001/api/v1/user/profile',
        { userName: newUserName },
        {
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        })
    return response.data
}