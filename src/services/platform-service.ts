import { Platform } from "../entites";
import ApiClient from "./api-client";
import { DataFetched } from "../entites";

export default new ApiClient<DataFetched<Platform>>("/platforms/lists/parents");
