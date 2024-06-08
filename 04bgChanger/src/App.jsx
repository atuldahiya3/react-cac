import { useState } from "react"

function App() {

  const [colour,setColour]=useState("olive")

  return (
    <>
    <div className="w-full h-screen p-8" style={{backgroundColor:colour}}>
      

      <button onClick={()=> setColour("pink")}  className="border-2 rounded-xl p-2 my-2 bg-white">pink</button>
      <br/>
      <button onClick={()=> setColour("blue")} className="border-2 rounded-xl p-2 my-2 bg-white">blue</button>
      <br/>
      <button onClick={()=> setColour("red")} className="border-2 rounded-xl p-2 my-2 bg-white">red</button>
      <br/>
      <button onClick={()=> setColour("green")} className="border-2 rounded-xl p-2 my-2 bg-white">green</button>
      <br/>
      <button onClick={()=> setColour("yellow")} className="border-2 rounded-xl p-2 my-2 bg-white">yellow</button>
      <br/>
      <button onClick={()=> setColour("gray")} className="border-2 rounded-xl p-2 my-2 bg-white">gray</button>
      
    </div>
    </>
  )
}

export default App
