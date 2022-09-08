import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/index.css';
import { TimeTrackingApp } from './TimeTrackingApp'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TimeTrackingApp />
  </React.StrictMode>
)
