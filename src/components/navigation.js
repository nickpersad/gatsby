import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import * as styles from './navigation.module.css'
import { StaticImage } from "gatsby-plugin-image"

const Navigation = () => {
  const data = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 230, height: 70, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`)
  return (
    <nav role="navigation" className={styles.container} aria-label="Main">
      <Link to="/" className={styles.logoLink}>
        <Img fixed={data.file.childImageSharp.fixed} className="logo" />
      </Link>
      <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <Link to="/" activeClassName="active">
            Home
          </Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/blog/" activeClassName="active">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navigation
