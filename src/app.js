import './styles/app.css'
import './styles/Main.css'
import './styles/Nav.css'
import './styles/header.css'

import Header from './Header.js'
import Nav from './Nav.js'
import Main from './Main.js'

function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Main />
    </div>
  )
}

export default App
