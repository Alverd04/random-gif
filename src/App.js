import { useState } from 'react'
import './App.css'
import GifContainer from './components/GifContainer'
import SearchInput from './components/Input'

function App() {
  const [value, setValue] = useState('')

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
        <GifContainer gifUrl='https://user-images.githubusercontent.com/59662722/152339294-15ae3954-5357-4197-b567-5f5470318c7f.gif' />
      </div>
    </div>
  )
}

export default App
