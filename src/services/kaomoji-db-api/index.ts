import axios from "axios";

export default axios.create({
    baseURL: "http://api.kaomoji-db.com/alpha",
});

