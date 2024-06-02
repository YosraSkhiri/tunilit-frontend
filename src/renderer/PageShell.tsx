export { PageShell }
import '~/sass/global.scss'
import 'react-loading-skeleton/dist/skeleton.css'

import * as Toast from '@radix-ui/react-toast'
import React from 'react'
import type { PageContext } from 'vike/types'

import Layout from '../pages/PageLayout/PageLayout';
import { PageContextProvider } from './usePageContext'

function PageShell({ children, pageContext }: { children: React.ReactNode; pageContext: PageContext }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <Toast.Provider>
          <Layout>
            {children}
          </Layout>
          <Toast.Viewport className="ToastViewport" />
        </Toast.Provider>
      </PageContextProvider>
    </React.StrictMode>
  )
}
