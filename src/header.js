import { useNavigate } from 'react-router-dom';
import './header.css';
  
  function Head(){
    const k=new useNavigate();
    const ssk=()=>{
      k("/home");
    }
    const ssr=()=>{
      k("/cimage");
    }
    return (
        <div >
        <font class="fstyle" ><h1>About Calculator</h1></font>
      <hr></hr>
      <p>
      &nbsp;&nbsp;&nbsp; An electronic calculator is typically a portable electronic device used to perform calculations, ranging from basic arithmetic to complex mathematics.
      
          The first solid-state electronic calculator was created in the early 1960s. Pocket-sized devices became available in the 1970s, especially after the Intel 4004, the first microprocessor, was developed by Intel for the Japanese calculator company Busicom.
 </p>  <img style={{"border":"solid", "float":"left","height":"20%","width":"30%","border-radius":"10px"}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Casio_calculator_JS-20WK_in_201901_002.jpg/255px-Casio_calculator_JS-20WK_in_201901_002.jpg'></img>
      <p>&nbsp;&nbsp;&nbsp;Modern electronic calculators vary from cheap, give-away, credit-card-sized models to sturdy desktop models with built-in printers. They became popular in the mid-1970s as the incorporation of integrated circuits reduced their size and cost. By the end of that decade, prices had dropped to the point where a basic calculator was affordable to most and they became common in schools.

Computer operating systems as far back as early Unix have included interactive calculator programs such as dc and hoc, and interactive BASIC could be used to do calculations on most 1970s and 1980s home computers. Calculator functions are included in most smartphones, tablets, and personal digital assistant (PDA) type devices.</p>
        
        <img style={{"border":"solid","float":"right","width":"18%","border-radius":"10px"}} src="https://upload.wikimedia.org/wikipedia/commons/1/18/Casio_fx-991EX.png"></img>
        <p>
      &nbsp;&nbsp;&nbsp;  In addition to general purpose calculators, there are those designed for specific markets. For example, there are scientific calculators, which include trigonometric and statistical calculations. Some calculators even have the ability to do computer algebra. Graphing calculators can be used to graph functions defined on the real line, or higher-dimensional Euclidean space. As of 2016, basic calculators cost little, but scientific and graphing models tend to cost more.[1]
<br></br>
&nbsp;&nbsp;&nbsp;
With the very wide availability of smartphones and the like, dedicated hardware calculators, while still widely used, are less common than they once were. In 1986, calculators still represented an estimated 41% of the world's general-purpose hardware capacity to compute information. By 2007, this had diminished to less than 0.05%.[2]
        </p>
        <button className='btstyle' onClick={ssk}>Calculator</button>&nbsp;&nbsp;&nbsp;
        <button className='btstyle' onClick={ssr}>images</button>
<br></br><br></br><br></br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Electronic calculators contain a keyboard with buttons for digits and arithmetical operations; some even contain "00" and "000" buttons to make larger or smaller numbers easier to enter. Most basic calculators assign only one digit or operation on each button; however, in more specific calculators, a button can perform multi-function working with key combinations.
Calculators usually have liquid-crystal displays (LCD) as output in place of historical light-emitting diode (LED) displays and vacuum fluorescent displays (VFD); details are provided in the section Technical improvements.

Large-sized figures are often used to improve readability; while using decimal separator (usually a point rather than a comma) instead of or in addition to vulgar fractions. Various symbols for function commands may also be shown on the display. Fractions such as 1⁄3 are displayed as decimal approximations, for example rounded to 0.33333333. Also, some fractions (such as 1⁄7, which is 0.14285714285714; to 14 significant figures) can be difficult to recognize in decimal form; as a result, many scientific calculators are able to work in vulgar fractions or mixed numbers.
The most basic calculator is the four-function calculator, which can perform basic arithmetic such as addition, subtraction, multiplication and division.

These are sometimes called pocket calculators or hand-held electronic calculators because they are small enough to fit in a shirt pocket. They are also the least expensive calculator, costing around $5 or less.
<br></br>
&nbsp;&nbsp;&nbsp;
Four-function calculators usually have a +, -, x and / sign to denote the operations and can produce decimal numbers. Some also have a % button, which is used to calculate percentages.
The next type of calculator is the graphing calculator. The graphing calculator is similar to the scientific calculator in that it can perform many of the same operations.

However, the graphing calculator also can graph equations, for example, with more advanced mathematics like trigonometry, on a coordinate plane. This is a valuable tool for visual learners or those studying mathematics that requires a lot of graphing, such as calculus.

Financial calculators
The last type of calculator we will discuss is the financial calculator. The financial calculator is an electronic device designed for solving financial problems and uses paper tape to print calculations for hard-copy record-keeping.

This calculating machine can usually compute the present, future, rate of return and other critical financial concepts such as return on investment. Financial calculators are essential for anyone studying finance or working in the financial industry.
        </div>
    )
  }
  export default Head;