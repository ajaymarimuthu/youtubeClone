import Button from "../Button/Button"

 
const ButtonList = () => {
  const buttonsList=["Gaming","Songs","Shorts",
                     "Live","Badminton","Thala",
                     "Songs","Shorts","Live","Badminton",
                    
                    ]


  const buttons= buttonsList.map((btn,idx)=>{
    return <Button name={btn} key={idx}/>
  })
  return (
    <div className="flex flex-wrap justify-between items-center">


      <button className="border-2 bg-black text-white h-10 w-12 rounded-lg" >All</button>

      {buttons}

 
    </div>
  )
}

export default ButtonList