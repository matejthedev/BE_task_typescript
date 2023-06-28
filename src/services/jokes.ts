import { jokeApiUrl } from "../constants";

type Joke = {
  categories: Array<string>
  created_at: string
  icon_url: string
  id: string
  updated_at: string
  url: string
  value: string
}

export const getJoke = async (): Promise<Joke> => {
  const response = await fetch(jokeApiUrl);
  const joke = await response.json();
  return joke;
};