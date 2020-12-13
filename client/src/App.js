import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav';
import Heading from './components/SectionHeading'
import Main from './components/Main'
// import About from './pages/About';
// import Portfolio from './pages/Portfolio'
// import Contact from './pages/Contact'
// import './App.css';

function App() {
  return <Router>
    <Nav/>
    <div style={{height: "25vh", textAlign:"center",marginTop:"20vh"}}>
      <Typography variant="h3">
        Hi, I'm Karuna, Welcome to my portfolio!
      </Typography>
    <Heading text="Work."/>
    </div>
    <Main/>
    
  </Router>
}

export default App;
