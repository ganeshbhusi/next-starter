const fetchUserData = async (userid) => {
  const userData = await fetch("https://jsonplaceholder.typicode.com/users/"+userid);
  const responseData = await userData.json();
  return responseData || {};
}

export default fetchUserData;