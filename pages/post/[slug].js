import ReactMarkdown from "react-markdown/with-html";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import dark from "theme-dark"
import Layout from "components/Layout";
import Image from "components/Image";
import SEO from "components/Seo";
import { getPostBySlug, getPostsSlugs } from "utils/posts";
import Link from "next/link";
const CodeBlock = ({ language, value }) => {
  return <SyntaxHighlighter language={language} style={dark}>{value}</SyntaxHighlighter>;
};

const MarkdownImage = ({ alt, src }) => (
  <Image
    alt={alt}
    src={require(`../../content/assets/${src}`)}
    previewSrc={require(`../../content/assets/${src}?lqip`)}
    className="w-full"
  />
);

export default function Post({ post, frontmatter }) {
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || post.excerpt}
      />

      <article>
        <header>
          <h1 className="my-0">{frontmatter.title}</h1>
          <p className="text-xs">{frontmatter.date}</p>
        </header>
        <ReactMarkdown
          escapeHtml={false}
          source={post.content}
          renderers={{ code: CodeBlock, image: MarkdownImage }}
        />
      </article>
      <Link href={ frontmatter.previous }><a> ⬅ previous </a></Link>
      <Link href={ frontmatter.previous }><a className="md:float-right ">  next ➜ </a></Link>
    </Layout>
    
  );
}

export async function getStaticPaths() {
  const paths = getPostsSlugs();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const postData = getPostBySlug(slug);

  return { props: postData };
}
