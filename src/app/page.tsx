export default async function Home() {
  const res = await fetch("https://api.github.com/users/dev-raul");
  const user = await res.json();

  return (
    <main>
      <p>{JSON.stringify(user, null, 2)}</p>
    </main>
  );
}
