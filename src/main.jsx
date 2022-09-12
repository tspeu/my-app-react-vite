import React from 'react'
import ReactDOM from 'react-dom/client'
import {FirstApp}  from './FirstApp'
import './index.css'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp title="hola tu" subtitle={1} />
  </React.StrictMode>
)
