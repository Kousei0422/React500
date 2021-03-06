import axios from 'axios'

export class UserService{
    private static URL:string = `https://jsonplaceholder.typicode.com`

    public static getAllUsers(){
        const dataURL: string = `${this.URL}/users`
        return axios.get(dataURL)
    }

    public static getUser(id: string){
        const dataURL: string = `${this.URL}/users/${id}`
        return axios.get(dataURL)
    }
}