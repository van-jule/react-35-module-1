import PropTypes from 'prop-types'
import s from './Title.module.css'

<<<<<<< HEAD
const stylesForTitle = {
  color: 'green',
  // text-transform: 'uppercase',
}

const Title = ({ value }) => {
  return <h2 style={stylesForTitle}>{value}</h2>
=======
// создадим объект инлайн стилей
const stylesForTitle = {
  color: 'green',
  textTransform: 'uppercase',
}

const Title = ({ value }) => {
  return (
    <div className="titleWrapper">
      <h2 className={s.title} style={stylesForTitle}>
        {value}
      </h2>
    </div>
  )
>>>>>>> 6522d3e40c37758aa8be6221a82d790fd747421f
}

export default Title

Title.defaultProps = {
<<<<<<< HEAD
  value: 'title def',
=======
  value: 'title',
>>>>>>> 6522d3e40c37758aa8be6221a82d790fd747421f
}

Title.propTypes = {
  value: PropTypes.string,
}
