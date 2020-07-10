import Link from "next/link";
import Layout from "components/Layout";
import Bio from "components/Bio";
import SEO from "components/Seo";
import { getSortedPosts } from "utils/posts";

export default function Home({ posts }) {
  return (
    <Layout>
      <SEO title="All posts" />
      <Bio />
      {posts.map(({ frontmatter: { title, description, date }, slug }) => (
        <article className="bg-gray-100 text-gray-700 font-sans quicksand" key={slug}>
          <header>
            <h3 className="mb-2">
              <Link href={"/post/[slug]"} as={`/post/${slug}`}>
                <a>{title}</a>
              </Link>
            </h3>
            <span className="mb-4 text-xs">{date}</span>
          </header>
    <div className="absolute top-0 right-0 h-12 w-18 p-4">
        <button className="js-change-theme focus:outline-none">🌙</button>
    </div>
          <section>
            <p className="mb-8">{description}</p>
          </section>
        </article>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const posts = getSortedPosts();

  return {
    props: {
      posts,
    },
  };
}
