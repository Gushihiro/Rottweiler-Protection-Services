import { BrowserRouter as Router, Route} from 'react-router-dom';
import Main from './pages/Main'
import About from './pages/About'
import Team from './pages/Team'
import Services from './pages/Services'
import Contact from './pages/Contact'
function App() {
  return (
   <Router>
     <Route exact path ="/">
       <Main/>
     </Route>
     <Route exact path ="/services">
       <Services/>
     </Route>
     <Route exact path ="/about">
       <About/>
     </Route>
     <Route exact path ="/theteam">
       <Team/>
     </Route>
     <Route exact path ="/contactus">
       <Contact />
     </Route>
   </Router>
  );
}

export default App;
