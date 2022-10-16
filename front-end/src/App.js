import './components/App.css';
import Nav from './components/nav'
import { BrowserRouter ,Route ,Routes} from "react-router-dom"
import Footer from './components/footer'
import SignUp from "./components/signup"
import Login from "./components/login"
import Privatecomponents from './components/privatecomponents'
import Addproduct from "./components/addproduct"
import Product from "./components/Products"
import UpdateData from './components/UpdateProducts';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Nav/>
      <Routes>
  
       <Route element={<Privatecomponents/>}>  
       <Route path="/" element={<h1><Product/></h1>}/>
       <Route path="/Add" element={<Addproduct/>}/>
       <Route path="/update/:id" element={<UpdateData/>}/>
       {/* <Route path="/update" element={<UpdateData/>}/> */}
       <Route path="/logout" element={<h1>This is a alogout product</h1>}/>
       <Route path="/profile" element={<h1>This is a profile product</h1>}/>
       </Route>

       <Route path="/login"  element={<Login/>}/>
       <Route path="SignUp" element={<SignUp/>}/>


      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
