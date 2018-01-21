import axios from 'axios'
import routerStore from '../mobx/RouterStore'

let instance = axios.create({
    baseURL: "http://www.swensun.com/api/v1/",
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
    // 判断如果需要登录，routerStore.history.replace("/login")
    // routerStore.history.replace("/login")
    return response;
},  (error) => {
    // 可以在后面的请求中catch
    console.log("interceptors response error")
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
            //         console.log(error.response.data);
            //         console.log(error.response.status);
            //         console.log(error.response.headers);
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
    all: () => requests.get('/zhihu/image')
}

export default {
    Movies,
}