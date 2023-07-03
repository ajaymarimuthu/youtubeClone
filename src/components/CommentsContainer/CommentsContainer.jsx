 import PropTypes from "prop-types"

const commentsData=[
    {
        name:"Ajay",
        text:"Lorem ipsum dolor sit amet,",
        replie:[]

    },
    {
        name:"Ajay",
        text:"Lorem ipsum dolor sit amet,",
        replie:[
            {
                name:"Ajay",
                text:"Lorem ipsum dolor sit amet,",
                replie:[]
        
            },
            {
                name:"Ajay",
                text:"Lorem ipsum dolor sit amet,",
                replie:[
                    {
                        name:"Ajay",
                        text:"Lorem ipsum dolor sit amet,",
                        replie:[
                            {
                                name:"Ajay",
                                text:"Lorem ipsum dolor sit amet,",
                                replie:[
                                    {
                                        name:"Ajay",
                                        text:"Lorem ipsum dolor sit amet,",
                                        replie:[
                                            {
                                                name:"Ajay",
                                                text:"Lorem ipsum dolor sit amet,",
                                                replie:[]
                                        
                                            },
                                        ]
                                
                                    },
                                ]
                        
                            },
                        ]
                
                    },
                ]
        
            },          
        ]

    },
    {
        name:"Ajay",
        text:"Lorem ipsum dolor sit amet,",
        replie:[]

    },
    {
        name:"Ajay",
        text:"Lorem ipsum dolor sit amet,",
        replie:[]

    },
       {
        name:"Ajay",
        text:"Lorem ipsum dolor sit amet,",
        replie:[]

    }
]


const Comment = ( {data} )=>{

    const{name,text,replies}=data;

    console.log(name);
    console.log(text);

    return(
        <div className="flex shadow-sm bg-gray-200 p-2 rounded-lg w-1/2" >
            <img className="w-8 h-7" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt=""/>
            <div className="px-3">
                <p className="font-bold ">{name}</p>
                <p className="text-sm">Comment:{text}</p>
            </div>
        </div>
    )
};

Comment.propTypes = {
    data: PropTypes.shape({
      name: PropTypes.string,
      text: PropTypes.string,
      replie: PropTypes.array,
    }).isRequired,
  };


const CommentsContainer = () => {
     console.log("commentsData",commentsData[0]);
  return (
    <div className="m-5 pl-5">


        <h1 className="font-bold">Comments:</h1>

        <Comment data={commentsData[0]}/>
        

    </div>
  )
}

export default CommentsContainer