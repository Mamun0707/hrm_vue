import axios from "axios";

export default axios.create({
  baseURL: "https://weeblecode.com/hrm/public/api",
  headers: {
    "Content-type": "multipart/form-data"
  }
});

// import axios from "axios";

// export default axios.create({
//   baseURL: "http://127.0.0.1:8000/api",
//   headers: {
//     "Content-type": "multipart/form-data"
//   }
// });