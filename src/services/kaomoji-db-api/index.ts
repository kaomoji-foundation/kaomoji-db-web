import type { kaomoji } from "@/types/kaomoji";
import axios from "axios";

export default axios.create({
    baseURL: "https://kaomoji-db-api.herokuapp.com/alpha",
});

