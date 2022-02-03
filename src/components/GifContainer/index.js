import './index.css'

const BASE_CLASS = 'gif-container'

export default function GifContainer({ gifUrl = '' }) {
  return (
    <div className={`${BASE_CLASS}`}>
      <img src={gifUrl} alt='gif' />
    </div>
  )
}
