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
    <div className="flex flex-wrap justify-between">

      {buttons}

 
    </div>
  )
}

export default ButtonList