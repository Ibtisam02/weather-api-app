
import { useState } from "react";
import ApiData from "./Hooks/ApiData";

function App() {
  let [input,setinput]=useState("")
  let [sity,setcity]=useState("");
  let [temp,settemp]=useState("");
  let [Country,setcountry]=useState("");
  let [src,setsrc]=useState("")
  let Data=ApiData(input);
  let convert=()=>{
    setsrc(Data.current.condition.icon)
    setcity(Data.location.name)
    setcountry(Data.location.country)
    settemp(Data.current.temp_c)
  }
  

  
  return (
    <>
      <div className="w-screen flex justify-center items-center h-screen bg-yellow-400">
        <div className="w-1/2 h-1/2 bg-white">
          <div className="w-full flex justify-center items-center">
            <input
              className="w-1/2 outline-none h-10 text-2xl border-b-4"
              type="text"
              value={input}
              onChange={(e)=>setinput(e.target.value)
              }
            />
            <button className="bg-blue-600 rounded-md border-none px-5 text-white ml-3 text-2xl h-full"
            onClick={()=>{
              convert();
            }}
            >
              search
            </button>
          </div>
          <div className="h-full  flex flex-col text-white justify-center items-center bg-purple-500 w-full">
            <h1>Temp:{temp}</h1>
            <h1>City:{sity}</h1>
            <h1>Country:{Country}</h1>
            <img src={src} alt="ico" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
