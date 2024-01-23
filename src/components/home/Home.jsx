import React from 'react'

import About from '../about/About';
import Client from '../client/Client';
import Items from '../items/Items';
import Youtube from '../youtube/Youtube';
import Slider from '../slider/Slider';

const Home = () => {
  return (
    <div>
        <Slider/>
        <Items />
        <About />
        <Youtube />
        <Client />
    </div>
  )
}

export default Home;