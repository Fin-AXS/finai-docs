import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../components/Layout"
// import Navbar from "../components/Navbar"
import * as styles from "../styles/home.module.css"

const IndexPage = ({data}) => {
  console.log('data',data);
  return (
    <Layout>
      <div className={styles.home}>
        <h1 className={styles.homeTitle}>
          {data.site.siteMetadata.title}
        </h1>
        <p className={styles.pageDescription}>
            {data.site.siteMetadata.description}
        </p>
        <a href="https://github.com/Fin-AXS" className={styles.button}>View on GitHub</a>
      </div>
    </Layout>
  )
}

export default IndexPage
export const query = graphql`
query SiteInfo {
  site {
    siteMetadata {
      description
      title
    }
  }
}`;
