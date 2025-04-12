import { Genre } from "../entites";
import ApiClient from "./api-client";
import { DataFetched } from "../entites";

export default new ApiClient<DataFetched<Genre>>("/genres");
