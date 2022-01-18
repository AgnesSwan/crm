import ClientForm from './Components/ClientForm';
import Topbar from './Components/Topbar';
import {Route} from 'react-router-dom'
import FindPerfectHouse from './Components/FindPerfectHouse';

function App() {
  return (  
    <>
     {/* <ClientForm /> */}
     <Topbar />
     <Route exact path="/clientForm" component={ClientForm}></Route>
     <Route exact path="/houseList" component={FindPerfectHouse}></Route></>
  );
}

export default App;
