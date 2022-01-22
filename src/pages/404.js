import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Strony nie znaleziono" />
    <div className="page-size-vertical d-flex-column-c">
      <h1 style={{ fontSize: "max(10vw,64px)" }} className="mb-3">
        404
      </h1>
      <h2 className="text-center">Niestety, strony nie znaleziono.</h2>
    </div>
  </Layout>
)

export default NotFoundPage
