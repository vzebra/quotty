import React from 'react'

import { Helmet } from 'react-helmet'

const PageHead = () => {
  return (
    <Helmet>
      <title>Quotty</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Palanquin&family=Oswald:wght@300&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  )
}

export default PageHead
