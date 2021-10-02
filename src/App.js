import React from 'react'
import { Gallery } from './components/Gallery/Gallery'
import './App.css'
import Title from './components/Title/Title'

const galleryImages = {
  title: 'Images',
  description: 'Best images in the World',
  images: [
    {
      id: '1',
      source:
        'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d37033a95e0230008f64eb2%2F2020-Aston-Martin-Rapide-E%2F960x0.jpg%3FcropX1%3D0%26cropX2%3D3000%26cropY1%3D157%26cropY2%3D1844',
    },
    {
      id: '2',
      source: 'https://kolesa-uploads.ru/-/83dbe048-3f57-4dcd-844f-c44a6c844492/25773-1394788268-52430x306714.jpg',
    },
    {
      id: '3',
      source: 'https://tlum.ru/uploads/0c11544ad5e1e16b61959b84e6fb9b2ad13e115c272c727854627aa20ce7ef53.jpeg',
    },
  ],
}
const { title, description, images } = galleryImages

function App() {
  return (
    <div className="App">
      FE-35 Module 1 Lesson 1
      <Gallery i={images}>
        {/* IF */}
        {title === 'images' && <Title value={title} />}
        {/* IF */}
        {/* if...else = TERNARY */}
        {title === 'Images' ? <h2>Условие выполнено</h2> : <h2>Условие НЕ выполнено</h2>}
        {/* if...else = TERNARY */}
        <p>Just Text</p>
      </Gallery>
    </div>
  )
}

export default App
