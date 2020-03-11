import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 3d3210de9bc5f8dc89f0764de13b8a550c86e11a5efd7f5a69b4661056d23d44"
  }
});
