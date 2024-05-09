import * as Toast from '@radix-ui/react-toast'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './App.tsx'
import store from './states/store.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
    <Provider store={store}>
      <Toast.Provider>
        <App />
        <Toast.Viewport className="ToastViewport" />
      </Toast.Provider>
      </Provider>
	</React.StrictMode>
)
