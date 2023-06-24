import logo from './logo.svg';
import './App.css';
import Input from './Components/Input/Index';
import Product from './Pages/Product';

function App() {
  return (
    <div className="App">
<h1>Hello World</h1>  
<Input name="Frist Name"/>
<Input name="Last Name"/>
<Product/>
    </div>
  );
}

export default App;
