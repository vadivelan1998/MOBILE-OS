import logo from './logo.svg';
import './App.css';


function App() {
  let datas = [
    {
      heading: "Mobile Operating Systems",
      types: ["android", "iphone", "blackberry", "window phones"],
    },
    {
      heading: "Mobile Manufacturers",
      types: ["samsung", "HTC", "samsung", "micromax"],
    },
  ];
  return (
  
    <div>
      {datas.map((e) => {
        return <Mobile data={e} />;
      })}
    </div>
  )
  
}
function Mobile(props){
  console.log(props)
  
  return (
    <div>
      <h1>{props.data.heading}</h1>
      <ul>
        {props.data.types.map((e)=>{
          return <li>{e}</li>
        })}
      </ul>
    </div>
  )
}

export default App;
