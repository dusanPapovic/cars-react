import axios from "axios";

class CarService {
  constructor() {
    this.httpClient = axios.create({
      baseURL: "http://localhost:3000/api",
    });
  }

  async getAll() {
    try {
      const { data } = await this.httpClient.get("/cars");
      console.log(data);
      return data;
    } catch (error) {
      console.log("error", error);
    }

    return null;
  }

  async add(car) {
    try {
      const { data } = await this.httpClient.post("/cars", car);
      console.log(data);
      return data;
    } catch (error) {
      console.log("error", error);
    }

    return null;
  }
}

export default new CarService();
