import '@assets/styles/app.scss';

import { Footer } from "@components/Footer"
import { Header } from "@components/Header"
import { Post } from '@components/Post';
import { Sidebar } from '@components/Sidebar';

const posts = [
  {
    id: 1,
    author: {
      name: "Victor Souza",
      role: "Dev Front-end",
      avatarUrl: "https://github.com/euosouza.png",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-08-04 11:00:00"),
  },
  {
    id: 2,
    author: {
      name: "David Peres",
      role: "Dev Front-end",
      avatarUrl: "https://github.com/davidperesdev.png",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-08-03 11:00:00"),
  }
];

function App() {
  return (
    <>
      <Header />
      <main className="wrapper-main">
        <Sidebar />

        <div className="list-posts">
          { posts.map(post => {
            return (
              <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              />
            )
          })}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
