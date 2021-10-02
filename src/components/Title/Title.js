import PropTypes from 'prop-types'
import s from './Title.module.css'

const stylesForTitle = {
  color: 'green',
  // text-transform: 'uppercase',
}

const Title = ({ value }) => {
  return <h2 style={stylesForTitle}>{value}</h2>
}

export default Title

Title.defaultProps = {
  value: 'title def',
}

Title.propTypes = {
  value: PropTypes.string,
}
