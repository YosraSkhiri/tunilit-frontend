import './sass/react-toastify/main.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Slide, ToastContainer } from 'react-toastify'

import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
		<ToastContainer
			autoClose={false}
			closeButton={false}
			hideProgressBar={true}
      limit={1}
      position='bottom-left'
      transition={Slide}
		/>
	</React.StrictMode>
)
