const axios = require('axios')

const getPost = async (url, form) => {
    const response = await axios.post(url, form);
    return await response
}
const getData = async (url) => {
    const response = await axios.get(url);
    return response
}
module.exports = {
    getPost: getPost,
    getData: getData
}