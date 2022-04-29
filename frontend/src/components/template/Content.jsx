import React from 'react'
import './Content.css'
import CardCallValue from '../callValue/CardCallValue'
import { Routes, Route } from 'react-router-dom'

function Content() {
  return (
      <main className="content">
          <Routes>
            <Route path="/" element={<CardCallValue/>}/>
          </Routes>
      </main>
  )
}

export default Content