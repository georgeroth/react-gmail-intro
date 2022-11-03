import './styles/app.css'

import Header from './header.js'
import LeftMenu from './leftMenu.js'
import MainEmailView from './mainEmailView.js'

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <MainEmailView />
    </div>
  )
}

export default App
