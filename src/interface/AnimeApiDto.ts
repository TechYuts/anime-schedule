import { Day } from '../objects/Day';

export interface AnimeApiDto {
  day: Day;
  id: number;
  title: string;
  imageUrl: string;
  genres: string[];
  synopsis: string;
}
