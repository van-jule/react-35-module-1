import PropTypes from 'prop-types'
import { GalleryItem } from '../GalleryItem/GalleryItem'

export function Gallery({ d, i: arrayOfImages, children }) {
  //   console.log('description', d)
  //   console.log('images', i)
  //   console.log('children:', children)

  return (
    <section>
      {children}
      <p>{d}</p>
      <ul>
        {arrayOfImages.map(({ source, id }) => (
          <GalleryItem source={source} id={id} />
        ))}
      </ul>
    </section>
  )
}

Gallery.defaultProp = {
  d: 'Default text for description',
}
// export default Gallery

Gallery.propTypes = {
  d: PropTypes.string,
  arrayOfImages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      source: PropTypes.string,
    }),
  ),
  children: PropTypes.arrayOf(PropTypes.element),
}
