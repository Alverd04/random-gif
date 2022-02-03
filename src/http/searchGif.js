const BASE_URL = 'api.giphy.com/v1/gifs/search'
const API_KEY = 'jZZD55t7vAwmz0LVEHF2bLDziot2hg2k'

export default async function searchGif({ query = '', limit = 1 }) {
  const response = await fetch(
    `https://${BASE_URL}?api_key=${API_KEY}&q=${query}&limit=${limit}`
  ).then((res) => res.json())
  return response.data
}
