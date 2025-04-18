import { Movie } from "shared/types/movie";

export interface CastMember {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}

export interface CrewMember {
  id: number;
  name: string;
  job: string;
  department: string;
  profile_path: string | null;
}


export interface MovieCredits {
  cast: CastMember[];
  crew: CrewMember[];
}

export interface MovieDetail extends Movie {
  genres: { id: number; name: string }[];
  runtime: number | null;
  credits: MovieCredits;
}