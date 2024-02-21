import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './sass/react-toastify/main.scss'
import { Slide, ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
		<ToastContainer
			limit={1}
			autoClose={false}
			hideProgressBar={true}
      position='bottom-left'
      closeButton={false}
      transition={Slide}
		/>
	</React.StrictMode>
)
