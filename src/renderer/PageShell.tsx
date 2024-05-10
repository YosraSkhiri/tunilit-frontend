export { PageShell }
import * as Toast from '@radix-ui/react-toast'
import React from 'react'
import { Provider } from 'react-redux'
import type { PageContext } from 'vike/types'

import Layout from '../pages/PageLayout/PageLayout';
import store from '../states/store'
import { PageContextProvider } from './usePageContext'

function PageShell({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
      <Provider store={store}>
        <Toast.Provider>
          <Layout>
            {children}
          </Layout>
          <Toast.Viewport className="ToastViewport" />
        </Toast.Provider>
        </Provider>
      </PageContextProvider>
    </React.StrictMode>
  )
}
