import Link from 'next/link'
import Layout from 'components/Layout'
import Bio from "components/Bio";
import SEO from "components/Seo";
import Image from "components/Image";

export default function FirstPost() {
    return (
      <Layout>
                <SEO title="Coming soon" />
      <Bio />
       <br></br>
       <h1> This page does not exist...yet</h1>
       <Link href="/">
         <a>  🏡 back to the home page   </a>
       </Link>
       <br></br>
      </Layout>
    )
  }
