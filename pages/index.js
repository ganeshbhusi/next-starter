import Link from "next/link";
import Head from "next/head";
import Login from "./login/login";
import CheckImage from "./Images/CheckImage";
import {getSortedPostsData} from "../lib/posts";
import {getSomeOnlineContent} from "../lib/fetchOnlineData";
import fetchUserData from "../lib/fetchUserData";

export default function Home(props) {
  const {allPostsData = [], onlineContent = [], userData = {}} = props;
  return (
    <div>
      <Head>
        <title>Ganesh&apos;s Next JS App</title>
      </Head>
      <Login />
      <Link
        href={{
          pathname: "/profile/[id]",
          query: {id: 1},
        }}
      >
        Open Person
      </Link>
      <CheckImage />
      <p>Online Content Count: {onlineContent.length}</p>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({id, date, title}) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const onlineContent = await getSomeOnlineContent();
  const allPostsData = getSortedPostsData();
  const userData = await fetchUserData();

  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
  const data = await res.json()


  return {
    props: { onlineContent: onlineContent, onlineContent2: data, allPostsData, userData },
  }
}
