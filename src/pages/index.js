import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
<<<<<<< HEAD
import { FaChevronDown } from "react-icons/fa/index"
import { IconContext } from "react-icons"
=======
>>>>>>> 063978d59f74103da45d5880a61ebd2e77798e3c

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
<<<<<<< HEAD
    <IconContext.Provider value={{ className: "icon" }}>
      <FaChevronDown />
    </IconContext.Provider>
=======
>>>>>>> 063978d59f74103da45d5880a61ebd2e77798e3c
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
