import {useRouter} from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import fetchUserData from '../../lib/fetchUserData';
import { useEffect, useState } from 'react';

const Profile = (props) => {
  const {userData} = props;
  const [profileData, setProfileData] = useState({});
  const router = useRouter();
  const {
    query: {id}
  } = router;
  useEffect(() => {
    setProfileData(userData);
  }, [userData]);

  // const fetchData = async () => {
  //   const data1 = await fetchUserData(id);
  //   setProfileData(data1);
  // }

  const {name, username, email } = profileData || {};
  return (
    <div>
      <Head>
        <title>Dynamic ID</title>
      </Head>
      <p>Welcome {id} </p>
      <p>Name: {name}</p>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
      <p>
        <Link href="/">Go Home</Link>
      </p>
    </div>
  )
}

// Profile.getInitialProps = ({ query: { example } }) => {
//   return { example }
// }

export async function getServerSideProps(context){
  const userData = await fetchUserData(1);
  return {
    props: {userData}
  }
}

export default Profile;