import {useRouter} from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

const Profile = () => {
  const router = useRouter();
  const {
    query: {id}
  } = router;
  return (
    <div>
      <Head>
        <title>Dynamic ID</title>
      </Head>
      <p>Welcome {id} </p>
      <p>
        <Link href="/">Go Home</Link>
      </p>
    </div>
  )
}

Profile.getInitialProps = ({ query: { example } }) => {
  return { example }
}

export default Profile;