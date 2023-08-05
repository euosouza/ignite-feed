import '@assets/styles/app.scss';

import { Footer } from "@components/Footer"
import { Header } from "@components/Header"
import { Sidebar } from '@components/Sidebar';

function App() {
  return (
    <>
      <Header />
      <main className="wrapper-main">
        <Sidebar />

        <div className="list-posts">
          <span>Lista de posts</span>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
