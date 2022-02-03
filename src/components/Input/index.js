import './index.css'
import PropTypes from 'prop-types'

export default function SearchInput({ onChange, value, placeholder, type }) {
  const onChangeHandler = (e) => {
    onChange(e.target.value)
  }

  return (
    <input
      className='search-input'
      type={type}
      value={value}
      onChange={onChangeHandler}
      placeholder={placeholder}
    />
  )
}

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}
