import axios from 'axios';

const KEY = 'AIzaSyBEvaZKTeFDHmQb0JLjvx826CekRX0EngU';

//Create a pre-configured of axios with default URL and some params
//params: contains query string parameters we want in the request
export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: '5',
        key: KEY
    }
});