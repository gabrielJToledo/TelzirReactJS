import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/template/Header'
import Content from './components/template/Content'
import Footer from './components/template/Footer'
import Contact from './components/template/Contact'
import React from 'react'

function App() {
  return (
    <div className="App">
        <Contact/>
        <Header/>
        <Content/>
        <Footer/>
    </div>
  );
}

export default App

