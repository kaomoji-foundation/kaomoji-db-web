import axios from "axios";

export default axios.create({
    baseURL: "https://api.kaomoji-db.com/alpha",
});

