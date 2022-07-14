import './App.css';
import Payments from './Pages/Payments' 

function App() {
  // fetch(" https://connect.squareupsandbox.com/v2/payments",{
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' ,
  //   'Cors':  "Access-Control-Allow-Origin "},  
  //   body: JSON.stringify({       
  //     sourceId: sourceId
  // }).then( console.log(json(body)))
 
// })
  return(
    <>

      <Payments/>
    </>
  );
}

export default App;
