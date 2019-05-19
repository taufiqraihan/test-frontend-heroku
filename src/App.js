import React, {Component} from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './component/Navbar'
import ContainerRoutes from './component/ContainerRoutes'

class App extends Component {
    render() {
      return(
        <Router>
          <div>
            <Navbar />
            <ContainerRoutes />
          </div>
        </Router>
    )
  }
}



export default App
