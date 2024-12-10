import Main from "./pages/Main";
import {Routes,Route} from "react-router-dom";
import Profile from "./pages/Profile";


function App() {
  return (
    <div className="App">
<Routes>
<Route path='/' element={<Main/>}/>
<Route path='/profile' element={<Profile/>}/>
</Routes>  
</div>
  );
}

export default App;
