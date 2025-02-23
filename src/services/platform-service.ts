import { DataFetched } from "../hooks/useData";
import { Platform } from "../hooks/usePlatforms";
import ApiClient from "./api-client";

export default new ApiClient<DataFetched<Platform>>("/platforms/lists/parents")