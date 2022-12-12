import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
 
function App() {
  
  return (
    <Router>
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <Routes>
              <Route path='/' element={<UserList/>}/> 
              <Route path='/add' element={<AddUser />}/> 
              <Route path='/edit/:id' element={<EditUser />}/> 
          </Routes>
        </div>
      </div>
    </div>
    </Router>
  );
}
 
export default App;