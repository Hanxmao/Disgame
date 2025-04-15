import { useQuery } from "@tanstack/react-query";
import tagService from "../services/tag-service";

const useTags = () =>
  useQuery(["tags"], () => tagService.getAll({params:{
    page_size:100
  }}), {
    staleTime: 1000 * 60 * 60 * 24 * 30, // 30 days
  });

export default useTags
