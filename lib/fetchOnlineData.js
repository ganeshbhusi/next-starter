export async function getSomeOnlineContent() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const data = await res.json();
  return data || [];
}
