import React from 'react'
import ReactDOM from 'react-dom/client'
// import {FirstApp}  from './FirstApp'
import {CouterApp}  from './CouterApp'
import './index.css'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <FirstApp title="pepe" subtitle={1} /> */}
    <CouterApp  value={15} />
  </React.StrictMode>
)
