import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Global from "./styles/global"
import { TaskProvider } from "./Context/index.tsx"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Global />
    <TaskProvider>
      <App />
    </TaskProvider>
  </React.StrictMode>,
)
