import axios from 'axios'

let instance = axios.create({
    baseURL: "https://movie.douban.com/j/",
    timeout: 2500
})


// Add a request interceptor
instance.interceptors.request.use( (config) => {
    //add auth
    //add header
    return config;
},  (error) => {

    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use( (response) => {
    // 返回错误判断
    return response;
},  (error) => {
    // 可以在后面的请求中catch
    return Promise.reject(error);
});

const requests = {
    get: url =>
        instance.get(url)
            .then(res => {
                console.log(res)
                return res.data
            })
}

const Movies = {
    all: () => requests.get('/new_search_subjects?tags=%E4%B8%AD%E5%9B%BD&start=0')
}

export default {
    Movies,
}