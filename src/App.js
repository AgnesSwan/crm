import ClientForm from './Components/ClientForm';
import Topbar from './Components/Topbar';
import {Route} from 'react-router-dom'
import FindPerfectHouse from './Components/FindPerfectHouse';
import AddHouse from './Components/AddHouse'
import ClientDetails from './Components/CardDetails/ClientDetails'
import HouseDetails from './Components/CardDetails/HouseDetails'

function App() {
  return (  
    <>
     {/* <ClientForm /> */}
     <Topbar />
     <Route exact path="/clientForm" component={ClientForm}></Route>
     <Route exact path="/addHouse" component={AddHouse}></Route>
     <Route exact path="/" component={FindPerfectHouse}></Route>
             <Route exact path="/houseList/:id" component={HouseDetails}/>
        <Route exact path="/clientList/:id" component={ClientDetails}/>
        </>

  );
}

export default App;
