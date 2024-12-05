import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Mycompany from "./basic/company";
import Myitem from "./basic/item";
import Mycity from "./basic/city";
import Mycustomer from "./basic/customer";
import Myemployee from "./basic/employee";
import ApiOne from "./api/api1";

function App() {
  return (
    <HashRouter>
      <header>
        <Link to ="/company-list" className="toplink">Company</Link>
        <Link to ="/item-list" className="toplink">Item</Link>
        <Link to="/city-list" className="toplink">City</Link>
        <Link to="/customer-list" className="toplink">Customer</Link>
        <Link to="/employee-list" className="toplink">Employee</Link>
        <Link to="/ApiOne" className="toplink">Api-1</Link>
      </header>
      <Routes>
        <Route exact path="/company-list" element={<Mycompany/>}/>
    <Route exact path="/item-list" element={<Myitem/>}/>
    <Route exact path="/city-list" element={<Mycity/>}/>
    <Route exact path="/customer-list" element={<Mycustomer/>}/>
    <Route exact path="/employee-list" element={<Myemployee/>}/>
    <Route exact path="/ApiOne" element={<ApiOne/>}/>
      </Routes>
    </HashRouter>
   
  );
}

export default App;
