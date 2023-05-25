import Button from "../Button/Button"

 
const ButtonList = () => {
  const buttonsList=["Gaming","Songs","Shorts",
                     "Live","Badminton","Thala",
                     "Songs","Shorts","Live","Badminton",
                     "Songs","Shorts","Live","Badminton",
                    
                    ]


  const buttons= buttonsList.map((btn,idx)=>{
    return <Button name={btn} key={idx}/>
  })
  return (
    <div className="flex flex-wrap justify-between items-center ml-2">


      <button className="border-2 bg-black text-white h-8 w-10 rounded-lg" >All</button>

      {buttons}

 
    </div>
  )
}

export default ButtonList