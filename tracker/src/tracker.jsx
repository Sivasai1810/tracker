import { useState,useEffect } from "react"

export default function Tracker() {
      const [words,setWords]=useState(0)
    let count=0;
   
    useEffect(() => {
  const interval = setInterval(() => {
    count++;
    setTime(count);
  }, 1000);

 return () => clearInterval(interval);
}, [words]);
const [card,setCard]=useState([]);
        const  [time,setTime]=useState();
    const [inputs,setInputs]=useState("")
    const [list,SetList]=useState([
   "apple", "banana", "cherry", "date", "elephant",
        "forest", "grape", "house", "island", "jungle",
        "kite", "lemon", "mountain", "night", "ocean",
        "pencil", "queen", "river", "sun", "tree"
    ])

    const handleinputs=(e)=>{
        setInputs(e.target.value.trim(" "));    
    }


const handlechange=(e)=>{
 if(inputs.toLowerCase()===list[words]){
    setCard((card)=>[
      ...card,
   { time:time,
    finalword:list[words] }
    ])
setWords(words+1);
setInputs(" "); 

    }
    else{
alert("pls type correct word")
    }

}
  return (
    <div className="tracker">
<h1 className="heading">Tracker</h1>
<p className="words">{list[words].toUpperCase()}</p>
<p className="timer">{time}</p>
<input     className="inputbox"value={inputs} type="text" onChange={(e)=>handleinputs(e)} ></input><br/>
<button className="button"   onClick={handlechange}>Submit</button>
<ul className="history">
    {card.map((element,index)=>(
          <li  className="heading1" key={index}>
      Time:{element.time}s ,word:{element.finalword}
        </li>
    ))}
</ul>
    </div>
  )
}
