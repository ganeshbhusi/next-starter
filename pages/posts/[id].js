import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import {useRouter} from 'next/router';
import Head from "next/head";

const Post = ({postData}) => {
  const router = useRouter();
  console.log(router.query);
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div>
        <h2>Dynamic Route Testing</h2>
        <p>{postData.title}</p>
        <p>{postData.id}</p>
        <p>{postData.date}</p>
      </div>
    </Layout>
  );
};

export async function getStaticPaths(){
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({params}){
  const postData = getPostData(params.id);
  return {
    props:{
      postData
    }
  }
}

export default Post;