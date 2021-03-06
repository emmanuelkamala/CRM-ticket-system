import React from 'react'
import Footer from './partials/Footer'
import Header from './partials/Header'

function DefaultLayout({children}) {
  return (
    <div className='default-layout'>
      <header className='Header'>
        <Header />
      </header>
      <main className='main mt-3'>
        {children}
      </main>
      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  )
}

export default DefaultLayout
