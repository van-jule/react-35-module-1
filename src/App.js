<<<<<<< HEAD
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
=======
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import { Gallery } from './components/Gallery/Gallery'
import { Hero } from './components/Hero/Hero'
import Title from './components/Title/Title'
import array from './db/gallery.json'
console.log(array)
const galleryImages = {
  title: 'images',
  description: 'Best images in the World!!!',
  images: array,
}
const newStylesForBtn = {
  // color: 'white',
  // background: 'black',
>>>>>>> 6522d3e40c37758aa8be6221a82d790fd747421f
}
const { title, description, images } = galleryImages

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
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
=======
      <h1>FE-35 Module 1</h1>
      <Hero />
      <Button style={newStylesForBtn} id="bsBtn" variant="outline-success">
        Success
      </Button>
      <section>
        <h2>Lesson 1</h2>
        <Gallery i={images}>
          {/* IF */}
          {title === 'images' && <Title value={title} />}
          {/* IF */}
          {/* if...else = TERNARY */}
          {title === 'Images' ? (
            <h2>Условие выполнено</h2>
          ) : (
            <h2>Условие НЕ выполнено</h2>
          )}
          {/* if...else = TERNARY */}
          <p>Just Text</p>
        </Gallery>
      </section>
      <section className="frame">
        <div className="titleWrapper">
          <h2 className="title">Lesson 2</h2>
        </div>
        <h3>Animation Buttons</h3>
        <ul className="btnList">
          <li>
            <button className="custom-btn btn-1">Read More</button>
          </li>
          <li>
            <button className="custom-btn btn-2">Read More</button>
          </li>
          <li>
            <button className="custom-btn btn-3">
              <span>Read More</span>
            </button>
          </li>
          <li>
            <button className="custom-btn btn-4">
              <span>Read More</span>
            </button>
          </li>
          <li>
            <button className="custom-btn btn-5">
              <span>Read More</span>
            </button>
          </li>
          <li>
            <button className="custom-btn btn-6">
              <span>Read More</span>
            </button>
          </li>
          <li>
            <button className="custom-btn btn-7">
              <span>Read More</span>
            </button>
          </li>
          <li>
            <button className="custom-btn btn-8">
              <span>Read More</span>
            </button>
          </li>
          <li>
            <button className="custom-btn btn-9">Read More</button>
          </li>
          <li>
            <button className="custom-btn btn-10">Read More</button>
          </li>
          <li>
            <button className="custom-btn btn-11">
              Read More<div className="dot"></div>
            </button>
          </li>
          <li>
            <button className="custom-btn btn-12">
              <span>Click!</span>
              <span>Read More</span>
            </button>
          </li>
          <li>
            <button className="custom-btn btn-13">Read More</button>
          </li>
          <li>
            <button className="custom-btn btn-14">Read More</button>
          </li>
          <li>
            <button className="custom-btn btn-15">Read More</button>
          </li>
          <li>
            <button className="custom-btn btn-16">Read More</button>
          </li>
        </ul>
      </section>
>>>>>>> 6522d3e40c37758aa8be6221a82d790fd747421f
    </div>
  )
}

export default App
