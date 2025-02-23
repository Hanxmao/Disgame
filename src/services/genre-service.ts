import { DataFetched } from "../hooks/useData";
import { Genre } from "../hooks/useGenres";
import ApiClient from "./api-client";

export default new ApiClient<DataFetched<Genre>>('/genres')