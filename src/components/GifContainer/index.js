import './index.css'
import PropTypes from 'prop-types'

const BASE_CLASS = 'gif-container'

export default function GifContainer({ gifUrl = '' }) {
  if (!gifUrl) return null
  return (
    <div className={`${BASE_CLASS}`}>
      <img
        src={gifUrl}
        alt='gif'
        placeholder='https://media4.giphy.com/media/26n6WywJyh39n1pBu/giphy.gif?cid=ecf05e47bdeon9en48kotaq5s22j5gmh9096f9x18ox8vyy5&rid=giphy.gif&ct=g'
      />
    </div>
  )
}

GifContainer.propTypes = {
  gifUrl: PropTypes.string.isRequired,
}
