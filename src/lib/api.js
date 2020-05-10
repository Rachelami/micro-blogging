import axios from "axios";

const baseUrl = 'https://itc-bootcamp-19-dot-charcha-dev.appspot.com';


export function getData() {
    return axios.get(`${baseUrl}/tweet`);
}


export async function postData(tweet) {
    await axios
        .post(`${baseUrl}/tweet`, tweet)
        .then((response) => {
            console.log(response);
          }, (error) => {
            console.log(error);
            this.setState({loading: false})
        });
}
