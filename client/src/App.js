import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter as Router} from "react-router-dom";
import Nav from './components/Nav';
import Heading from './components/SectionHeading'
import Main from './components/Main'
import './App.css';

function App() {
  return <Router>
    <Nav/>
    <div style={{height: "25vh", textAlign:"center",marginTop:"20vh"}}>
      <Typography variant="h3">
        Welcome to my portfolio!
      </Typography>
    <Heading text="Work."/>
    </div>
    <Main/>
    
  </Router>
}

export default App;
