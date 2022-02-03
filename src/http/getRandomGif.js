const BASE_URL = 'api.giphy.com/v1/gifs/trending'
const API_KEY = 'jZZD55t7vAwmz0LVEHF2bLDziot2hg2k'

export default async function getRandomGif({ limit = 1 }) {
  const response = await fetch(
    `https://${BASE_URL}?api_key=${API_KEY}&limit=${limit}`
  ).then((res) => res.json())
  return response.data
}
