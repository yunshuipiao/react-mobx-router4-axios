import axios from 'axios'

let instance = axios.create({
    baseURL: "https://movie.douban.com/j/",
    timeout: 2500
})


// Add a request interceptor
instance.interceptors.request.use( (config) => {
    //add auth
    //add header
    console.log("add headers and auth")
    return config;
},  (error) => {

    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use( (response) => {
    // 返回错误判断
    console.log("filter error code")
    return response;
},  (error) => {
    // 可以在后面的请求中catch
    return Promise.reject(error);
});

const requests = {
    get: url =>
        instance.get(url)
            .then(res => {
                return res.data
            })
            // also catch in this。but not recommend. after catch and then also invoked.
            // so catch every request selectively
            // .catch( error => {
            //     // Error
            //     console.log("error==========")
            //     if (error.response) {
            //         console.log("error=")
            //         // The request was made and the server responded with a status code
            //         // that falls out of the range of 2xx
            //         // console.log(error.response.data);
            //         // console.log(error.response.status);
            //         // console.log(error.response.headers);
            //     } else if (error.request) {
            //         console.log("error==")
            //         // The request was made but no response was received
            //         // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            //         // http.ClientRequest in node.js
            //         console.log(error.request);
            //     } else {
            //         // Something happened in setting up the request that triggered an Error
            //         console.log('Error', error.message);
            //     }
            //     console.log(error.config);
            // })
    // post:(body)
    // put: (body)
    // delete:
}

const Movies = {
    all: () => requests.get('/new_search_subjects?tags=%E4%B8%AD%E5%9B%BD&start=0')
}

export default {
    Movies,
}