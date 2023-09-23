import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {useState} from 'react'
import Alert from './components/Alert';
import About from './components/About '

import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
   const [mode,setMode]= useState("light");
   const [alert,setAlert]= useState(null);

   const showAlert =(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 3000);
   }
   const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#042743";
      showAlert("Dark Mode Has been Enabled","sucess");
      document.title = 'Text-conversion - Dark Mode';
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light Mode Has been Enabled","sucess");
      document.title ='Text-conversion - Light Mode';
       }
    }
  return (
    <>
     <Router> 
    <Navbar title="Text-Conversion" abouttext="About" mode={mode}  toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container mx-5 my-3">
    {/* <Textform  showAlert={showAlert}  heading="Enter Your Text for conversion" mode={mode}/> */}
     <Routes> 
          <Route path="/about" element={<About mode={mode}/>}>
            
          </Route>
          
          <Route path="/" element={<Textform  showAlert={showAlert}  heading="Try- Text- Convo | Word counter | Character Counter | Remove Spaces" mode={mode}/>}>
             {/* <Textform  showAlert={showAlert}  heading="Enter Your Text for conversion" mode={mode}/>  */}
          </Route>
    </Routes>
    </div>
    </Router> 

    {/* <div className='container'>
      <About/>
    </div> */}
    
    </>

  );
}

export default App;
