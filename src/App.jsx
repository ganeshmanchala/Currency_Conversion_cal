import { useEffect, useState } from 'react'
import { InputBox } from './components'
import useCurrencyinfo from './hooks/useCurrencyinfo'
// import './App.css'

function App() {
  const today = new Date().toISOString().split('T')[0];
  const [date, setDate] = useState(today);
  console.log(date)
  const [amount,setAmount]=useState("");
  const [to,setTo]=useState("inr")
  const [from,setFrom]=useState("usd")
  const [convertedAmount,setConvertedAmount]=useState("")
  const currencyInfo=useCurrencyinfo({currency:from,date})
  const options=  Object.keys(currencyInfo)
  

  const swap=()=>{
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }
const convert=()=>{
  setConvertedAmount(amount*currencyInfo[to])
}
const changeDate=(val)=>{
   setDate(val);
}
  return (
    <div
    className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
    style={{
        backgroundImage: `url('https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=600')`,
    }}
>
    <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    convert()
                   
                }}
            >
                <div className="w-full mb-1 ">
                  <div className='p-3 my-1 flex justify-between' >
                  <label htmlFor=""><h2>Date of converting:</h2></label><input type="date" value={date}  onChange={(e)=>changeDate(e.target.value)} />
                  </div>
                    <InputBox
                        label="From"
                        amount={amount}
                        currencyOptions={options}
                        oncurrencyChange={(currency)=>setFrom(currency)
                        }
                        selectCurrency={from}
                        onAmountChange={(amount)=>
                          setAmount(amount)
                        }
                    />
                </div>
                <div className="relative w-full h-0.5">
                    <button
                        type="button"
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                        onClick={swap}
                    >
                        swap
                    </button>
                </div>
                <div className="w-full mt-1 mb-4">
                    <InputBox
                        label="To"
                        amount={convertedAmount}
                        currencyOptions={options}
                        oncurrencyChange={(currency)=> setTo(currency)}
                        selectCurrency={to}
                        amountDisable={true}
                    />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                    Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>
            </form>
        </div>
    </div>
</div>
  )
}

export default App
