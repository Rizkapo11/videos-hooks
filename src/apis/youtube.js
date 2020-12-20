import axios from 'axios';

const KEY ='AIzaSyDp2tmlTvGtL3GPUgt3YWsrbD-PQ2sUqt0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key : KEY

    }
});
