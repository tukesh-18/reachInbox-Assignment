import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LoginPage from './LoginPage.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./app/Store.jsx";
import { Provider } from "react-redux";


createRoot(document.getElementById('root')).render(
 <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
