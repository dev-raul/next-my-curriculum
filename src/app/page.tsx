import { SideBar } from '@/components/SideBar'

export default async function Home() {
  const res = await fetch('https://api.github.com/users/dev-raul')
  const user = await res.json()

  return (
    <main style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar avatarUrl={user.avatar_url} />
      <section style={{ display: 'flex', flex: 7, background: 'blue' }}>
        Teste
      </section>
    </main>
  )
}
