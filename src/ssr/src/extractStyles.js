import React from 'react'
import { renderStatic } from 'glamor/server'
import { extractStyles as boxExtractStyles } from 'ui-box'

export default function extractStyles(options = {}) {
  const { cache, styles } = boxExtractStyles()
  const { css, ids } = renderStatic(() => 'let glamor believe there is some html here')

  const soraCache = {
    uiBoxCache: cache,
    glamorIds: ids
  }

  const scriptProps = {
    type: 'application/json',
    id: 'sora-hydrate',
    dangerouslySetInnerHTML: { __html: JSON.stringify(soraCache) }
  }

  if (options.nonce) {
    scriptProps.nonce = options.nonce
  }

  return {
    css: styles + '\n' + css,
    cache: soraCache,
    hydrationScript: <script {...scriptProps} />
  }
}
