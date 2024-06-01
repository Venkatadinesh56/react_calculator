import React from 'react';
import "./Home.css";
import { useState } from 'react';
function Home() {
     const [val,setVal]=useState("")
    const sk=()=>{
      try{
          setVal(eval(val).toString());
      }
      catch (e) {
        setVal("Error");
      }
    }

  
    const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        sk();
      } else if (e.key === 'Backspace') {
        setVal(val.slice(0, -1));
      } else if (/[0-9+\-*/.]/.test(e.key)) {
        setVal(val + e.key);
      }
    };
  return (
    
    <div class="k1">
      <center>
          <h1 style={{"color":"blue"}}>Calculator</h1>
      </center>
    
    
    <div className='cal'>
       
    <input style={{"width":"98%", "height":"60px", "font-size":"30px" , "color": 
    "black"}} type='text' value={val}  onKeyDown={handleKeyPress} />
      <table text-align={"center"} width={"400px"} height={"400px"} fontSize={"20px"}>
        <tr>
          <td >
          <button class="button_style" onClick={()=>setVal(val+"1")}>1</button>
          </td>
          <td>
          <button class="button_style" onClick={()=>setVal(val+"2")}>2</button>
          </td>
          <td>
          <button class="button_style" onClick={()=>setVal(val+"3")}>3</button>
          </td>
          <td>
          <button class="button_style" onClick={()=>setVal(val+"+")}>+</button>
          </td>
          <td>
          <button class="button_style" onClick={()=>setVal(val+"/")}>/</button>
          </td>
        </tr>
        <tr>
          <td>
          <button class="button_style" onClick={()=>setVal(val+"4")}>4</button>
          </td>
          <td>
          <button class="button_style" onClick={()=>setVal(val+"5")}>5</button>
          </td>
          <td>
          <button class="button_style" onClick={()=>setVal(val+"6")}>6</button>
          </td>
          <td>
          <button class="button_style" onClick={()=>setVal(val+"*")}>*</button>
          </td>
          <td>
          <button class="button_style" onClick={()=>setVal(val**2)}>x²</button>
          </td>
        </tr>
        <tr>
          <td>
          <button class="button_style" onClick={()=>setVal(val+"7")}>7</button>
          </td>
          <td>
          <button class="button_style" onClick={()=>setVal(val+"8")}>8</button>
          </td>
          <td>
          <button class="button_style" onClick={()=>setVal(val+"9")}>9</button>
          </td>
          <td>
          <button class="button_style" onClick={()=>setVal(val+"-")}>-</button>
          </td>
          <td>
          <button class="button_style" onClick={()=>setVal(val/100)}>%</button>
          </td>
        </tr>
        <tr>
          <td>
          <button className="button_style" onClick={()=>setVal("")}>c</button>
          </td>
          <td>
          <button class="button_style" onClick={()=>setVal(val+"0")}>0</button>
          </td>
          <td>
          <button class="button_style" onClick={()=>setVal(val.slice(0,-1))}>D</button>
          </td>
          <td colSpan={2}>
          <button class="button_style" onClick={sk} >=</button>
          </td>
          
        </tr>
      </table>
      
</div>
    </div>  
   
  );
}
export default Home;
