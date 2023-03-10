// @ts-nocheck
import React from 'react'
import './assets/styles/index.css'
import App from './App'

/** Store */
import { Provider } from 'react-redux'
import store from './store'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home'
import Details from './pages/details'
import { CountriesAllLoader } from './pages/home'
import { CountryDetailsLoader } from './pages/details'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    loader: CountriesAllLoader,
  },
  {
    path: '/details/:name',
    element: <Details />,
    loader: CountryDetailsLoader,
  },
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
)
