import Character from "./pages/Character"
import Intro from "./pages/Intro"
import Places from "./pages/Places"
import Reflect from "./pages/Reflect"
import Sources from "./pages/Reference"
function App() {
  return (
    <>
    <header className="flex fixed justify-center md:justify-end w-screen px-12 h-[75px] z-100 backdrop-blur-md items-center">
      <h1 className="text-xs text-white font-medium fixed left-1/2 md:left-1 top-1 transform w-screen text-center -translate-x-1/2 md:translate-0">
        "Made by Mark Cantimbuhan and Mark only"
      </h1>
      <nav>
        <ul className="flex space-x-4 text-xs md:text-md text-white">
          <li><a href="#intro" className="hover:underline">Intro</a></li>
          <li><a href="#character" className="hover:underline">Character</a></li>
          <li><a href="#symbolism" className="hover:underline">Symbolism</a></li>
          <li><a href="#reflect" className="hover:underline">Reflection</a></li>
          <li><a href="#sources" className="hover:underline">Sources</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <Intro />
      <Character />
      <Places />
      <Reflect />
      <Sources />
    </main>
    </>
  )
}

export default App
