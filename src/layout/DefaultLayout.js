import React from 'react'
import Footer from './partials/Footer'
import Header from './partials/Header'

function DefaultLayout() {
  return (
    <div className='default-layout'>
      <header className='Header'>
        <Header />
      </header>
      <main className='main'>

      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  )
}

export default DefaultLayout
