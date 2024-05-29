import React from 'react';
import "./Home.css";
import { useState } from 'react';
function Home() {
     const [val,setVal]=useState("")
    const sk=()=>{
          setVal(eval(val).toString());
    }
  return (
    
    <div className='cal'>
       
    <input style={{"width":"98%", "height":"60px", "font":"20px" , "color": 
    "black"}} type='text' value={val} />
      <table text-align={"center"} width={"400px"} height={"400px"}>
        <tr>
          <td >
          <button style={{"width":"100%", "height":"100%", "border-radius":"10px"}} onClick={()=>setVal(val+"1")}>1</button>
          </td>
          <td>
          <button style={{"width":"100%", "height":"100%","border-radius":"10px"}} onClick={()=>setVal(val+"2")}>2</button>
          </td>
          <td>
          <button style={{"width":"100%", "height":"100%","border-radius":"10px"}} onClick={()=>setVal(val+"3")}>3</button>
          </td>
          <td>
          <button style={{"width":"100%", "height":"100%","border-radius":"10px"}} onClick={()=>setVal(val+"+")}>+</button>
          </td>
        </tr>
        <tr>
          <td>
          <button style={{"width":"100%", "height":"100%","border-radius":"10px"}} onClick={()=>setVal(val+"4")}>4</button>
          </td>
          <td>
          <button style={{"width":"100%", "height":"100%","border-radius":"10px"}} onClick={()=>setVal(val+"5")}>5</button>
          </td>
          <td>
          <button style={{"width":"100%", "height":"100%","border-radius":"10px"}} onClick={()=>setVal(val+"6")}>6</button>
          </td>
          <td>
          <button style={{"width":"100%", "height":"100%","border-radius":"10px"}} onClick={()=>setVal(val+"*")}>*</button>
          </td>
        </tr>
        <tr>
          <td>
          <button style={{"width":"100%", "height":"100%","border-radius":"10px"}} onClick={()=>setVal(val+"7")}>7</button>
          </td>
          <td>
          <button style={{"width":"100%", "height":"100%","border-radius":"10px"}} onClick={()=>setVal(val+"8")}>8</button>
          </td>
          <td>
          <button style={{"width":"100%", "height":"100%","border-radius":"10px"}} onClick={()=>setVal(val+"9")}>9</button>
          </td>
          <td>
          <button style={{"width":"100%", "height":"100%","border-radius":"10px"}} onClick={()=>setVal(val+"-")}>-</button>
          </td>
        </tr>
        <tr>
          <td>
          <button style={{"width":"100%", "height":"100%","border-radius":"10px"}} onClick={()=>setVal("")}>c</button>
          </td>
          <td>
          <button style={{"width":"100%", "height":"100%","border-radius":"10px"}} onClick={()=>setVal(val+"0")}>0</button>
          </td>
          <td>
          <button style={{"width":"100%", "height":"100%","border-radius":"10px"}} onClick={()=>setVal(val.slice(0,-1))}>D</button>
          </td>
          <td>
          <button style={{"width":"100%", "height":"100%","border-radius":"10px"}} onClick={sk} >=</button>
          </td>
        </tr>
      </table>
      

    </div>    
  );
}
export default Home;
