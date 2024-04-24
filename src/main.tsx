import './sass/global.scss'
import './i18n';

import * as Toast from '@radix-ui/react-toast'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
    <Toast.Provider>
      <App />
      <Toast.Viewport className="ToastViewport" />
    </Toast.Provider>
	</React.StrictMode>
)
