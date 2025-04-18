import { MovieCategory } from "../services/movieService";

export const CATEGORY_MAP: Record<string, MovieCategory> = {
  "top-rated": "top_rated",
  upcoming: "upcoming",
  "now-playing": "now_playing",
  "": "popular",
} as const;