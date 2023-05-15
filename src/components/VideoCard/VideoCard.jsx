
const VideoCard = ({info,maxlength}) => {

    // console.log(info);
 
    const {snippet, statistics} = info;
    const {channelTitle,title,thumbnails} =snippet;

    const shortenedTitle=title.length>maxlength ?title.slice(0,maxlength)+ '...' : title



  return (
    <div className="m-4 p-2 w-72 shadow-md">
         <img className="rounded-md w-80" src={thumbnails.medium.url}/>

         <ul>
            <li className="font-medium py-1">{shortenedTitle}</li>
            <li className="text-gray-600">{channelTitle}</li>
            <li>{statistics.viewCount} views`</li>
         </ul>
 
    </div>
  )
}

export default VideoCard