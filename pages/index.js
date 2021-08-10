import Link from "next/link";
import Head from "next/head";
import Login from "./login/login";
import CheckImage from "./Images/CheckImage";
import {getSortedPostsData} from "../lib/posts";

export default function Home(props) {
  console.log(props);
  return (
    <div>
      <Head>
        <title>Ganesh&apos;s Next JS App</title>
      </Head>
      <Login />
      <Link
        href={{
          pathname: "/profile/[id]",
          query: {id: "123"},
        }}
      >
        Open Person
      </Link>
      <CheckImage />
      <div>
        <h3>About Me</h3>
        <p>Some short description about me</p>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
