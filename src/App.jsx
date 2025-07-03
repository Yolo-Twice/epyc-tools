import TaskCard from "./components/card"
import Header from "./components/header"
import WhatsappCard from "./components/whatsappCard.jsx"
import {Footer} from "./components/footer.jsx"

function App() {
  
  return (<>
    <Header/>
    <div className="flex flex-col p-12 mt-10 items-center">
    <WhatsappCard/>
    </div>
    <Footer/>
    </>
  )
}

export default App
