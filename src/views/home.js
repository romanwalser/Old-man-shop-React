import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Old man shop</title>
        <meta property="og:title" content="Old man shop" />
      </Helmet>
      <a
        href="https://thefeedsmart.com/short/89344?stream_uuid=371cec71-a4f9-4c8c-a173-2f167a596e41&amp;trek=1"
        className="home-link"
      >
        <img alt="image" src="/czbutton-400w-300w.jpg" className="home-image" />
      </a>
    </div>
  )
}

export default Home
