import './index.css'
import PropTypes from 'prop-types'

const BASE_CLASS = 'gif-container'

export default function GifContainer({ gifUrl = '' }) {
  return (
    <div className={`${BASE_CLASS}`}>
      <img src={gifUrl} alt='gif' />
    </div>
  )
}

GifContainer.propTypes = {
  gifUrl: PropTypes.string.isRequired,
}
