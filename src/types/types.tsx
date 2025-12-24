export interface Game {
  description: string;
  releaseDate: string;
  score: number;
  slug: string;
  title: string;
  image: string;
}

export interface Review {
  quote: string;
  score: number;
  date: string;
  publicationName: string;
  author: string;
}

export interface GameDetails {
  img: string;
  title: string;
  slug: string;
  description: string;
  score: number;
  reviews: Review[];
}
