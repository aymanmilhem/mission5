import React from 'react'
import FooterMain from '../Components/FooterMain'
import HeaderBar from '../Components/HeaderBar/HeaderBar'
import HomePageImage from './img/HomePageImage.jpg'


function HomePage() {
  return (
    <div>
        <header>
            <HeaderBar/>
        </header>

        <body className='body-img'>
            <img src={HomePageImage} alt="" className="home-image" />
        </body>


        <footer>
            <FooterMain/>
        </footer>

    </div>
  )
}

export default HomePage;