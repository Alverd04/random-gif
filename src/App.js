import { useEffect, useState } from 'react'
import './App.css'
import GifContainer from './components/GifContainer'
import SearchInput from './components/Input'
import searchGif from './http/searchGif'

function App() {
  const [value, setValue] = useState('')
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    const timer = setTimeout(() => {
      searchGif({ query: value, limit: 1 }).then((gifs) => setGifs(gifs))
    }, 300)
    return () => clearTimeout(timer)
  }, [value])

  const onChange = (value) => {
    setValue(value)
  }

  return (
    <div className='gifSearch'>
      <h1>Gif search</h1>
      <div className='gifSearch-searchInput-container'>
        <SearchInput
          value={value}
          onChange={onChange}
          placeholder='Type to search...'
          type='text'
        />
      </div>
      <div className='gifSearch-imageContainer'>
        <GifContainer gifUrl={gifs[0]?.images.downsized.url} />
      </div>
    </div>
  )
}

export default App
