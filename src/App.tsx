import "primereact/resources/themes/mira/theme.css"; // theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import './App.css';
import { PrimeReactProvider } from 'primereact/api';
import Cards from "./components/Cards/Cards";

function App() {
  return (
    <PrimeReactProvider>
      <Cards/>
    </PrimeReactProvider>
  )
}

export default App;