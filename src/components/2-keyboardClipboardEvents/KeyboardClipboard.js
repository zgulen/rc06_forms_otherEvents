import { useState } from "react"


const KeyboardClipboard = () => {
  const [inputValue, setInpuValue] = useState("")
  const handleKeyDown = (e) => {
    e.target.value = e.target.value.toUpperCase()
    e.keyCode === 13 && alert("you have entered")
  }
  const handleAreaPaste = (e) => {
    e.target.value += e.clipboardData.getData("text").toLowerCase()
    e.target.style.border = "2px solid red"
    e.target.style.backgroundColor = "lightgray"
    e.preventDefault()
  }
  const handleBack = (e) => {
    if (!e.target.value) {
      e.target.style.border = "2px solid black"
      e.target.style.backgroundColor = "white"
    }
  }
  return (
    <div className="container text-center">
      <h2>CLIPBOARD EVENTS</h2>
      <input type="text" value={inputValue} onKeyDown={handleKeyDown} onChange={(e) => setInpuValue(e.target.value)} />
      <p className="text-start m-4" onCopy={() => alert("copied")}>{inputValue}</p>
      <textarea name="area" id="area" cols="50" rows="10" onChange={handleBack} onPaste={handleAreaPaste}></textarea>
    </div>
  )
}

export default KeyboardClipboard
