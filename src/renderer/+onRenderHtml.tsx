// https://vike.dev/onRenderHtml
export { onRenderHtml }

import ReactDOMServer from 'react-dom/server'
import { dangerouslySkipEscape,escapeInject } from 'vike/server'
import type { OnRenderHtmlAsync } from 'vike/types'

import { getPageDescription } from './getPageDescription'
import { getPageTitle } from './getPageTitle'
import { PageShell } from './PageShell'

const onRenderHtml: OnRenderHtmlAsync = async (pageContext): ReturnType<OnRenderHtmlAsync> => {
  const { Page } = pageContext

  // This onRenderHtml() hook only supports SSR, see https://vike.dev/render-modes for how to modify
  // onRenderHtml() to support SPA
  if (!Page) throw new Error('My onRenderHtml() hook expects pageContext.Page to be defined')

  // Alternativly, we can use an HTML stream, see https://vike.dev/streaming
  const pageHtml = ReactDOMServer.renderToString(
    <PageShell pageContext={pageContext}>
      <Page />
    </PageShell>
  )

  // See https://vike.dev/head
  const title = getPageTitle(pageContext) || "Tunilit"
  const description = getPageDescription(pageContext) || "Find the best learning path for you."

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${description}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`

  return {
    documentHtml,
    pageContext: {
      // We can add custom pageContext properties here, see https://vike.dev/pageContext#custom
    }
  }
}