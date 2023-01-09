import Head from "next/head";
import Layout from "../../components/Layout";
import { getAllPathIds, getPostData } from "../../lib/post";
import utilsStyles from "../../styles/utils.module.css";

export const getStaticPaths = () => {
  const paths = getAllPathIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
};

const Post = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilsStyles.headingX1}>{postData.title}</h1>
        <p className={utilsStyles.lightText}>{postData.date}</p>
        <div dangerouslySetInnerHTML={{ __html: postData.blogContentHTML }} />
      </article>
    </Layout>
  );
};

export default Post;
