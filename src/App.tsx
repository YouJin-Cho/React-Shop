import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import MainContainer from './MainPage/MainContainer'
import { ThemeProvider } from './Common/Theme'

function App() {
  return (
    <BrowserRouter >
      <ThemeProvider>
        <Header />
        <MainContainer />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
