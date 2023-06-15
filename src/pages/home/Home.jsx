import React from 'react'
import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'
import Footer from '../../components/footer/Footer'
import MailList from '../../components/mailList/MailList'
import Featured1 from '../../components/featured1/Featured1'
import Featured2 from '../../components/featured2/Featured2'
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='homeContainer'>
        <Featured />
        <Featured1 />
        <Featured2 />
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Home
