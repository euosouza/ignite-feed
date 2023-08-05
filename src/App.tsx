import '@assets/styles/app.scss';

import { Footer } from "@components/Footer"
import { Header } from "@components/Header"

function App() {
  return (
    <>
      <Header />
      <main className="wrapper-main">
        <aside>
          <span>Sidebar</span>
        </aside>
        <div className="list-posts">
          <span>Lista de posts</span>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
