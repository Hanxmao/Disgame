import { DataFetched, Tag } from "../entites";
import ApiClient from "./api-client";

export default new ApiClient<DataFetched<Tag>>("/tags")