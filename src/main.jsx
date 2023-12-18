import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MapContextProvider from './contexts/mapContext/mapContextProvider.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(

    <MapContextProvider>
      <App />
    </MapContextProvider>

)
