import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout';
import * as styles from '../styles/documentation.module.css'

export default function Documentation({data}) {
  const {html, timeToRead} = data.markdownRemark;
  console.log(html);
  const {title, description} = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <div className={styles.page}>
        <div className={styles.vpad}></div>
        <div>
          <div className={styles.header}>
            <div className={styles.title}>{title}</div>
            <div className={styles.readTime}>{timeToRead} mins</div>
          </div>
          <p className={styles.description}>{description}</p>
          <div className={styles.content}>
            <div dangerouslySetInnerHTML={{__html: html}} />
          </div>
        </div>
        <div className={styles.vpad}></div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query developerQuery($slug: String) {
    markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        stack
        tag
        slug
        description
      }
      timeToRead
    }
  }
`;