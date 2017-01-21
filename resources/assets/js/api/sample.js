import axios from 'axios';

export default{
    sendRequest(url, callback, errorCallBack){
        axios.get(url)
            .then(response => {
                callback(response.data)
            })
            .catch(error => {
                errorCallBack(error);
            })
    },
}