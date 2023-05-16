
import { useSelector } from "react-redux"


const Sidebar = () => {

  const isMenuOpen= useSelector(state=>state.app.isMenuOpen)
 
  //Early Return
  if(!isMenuOpen) return null; 

  return (

 
    <div className="p-5 col-span-1 scroll-my-10 ">
       <ul>
        <li className="p-2 m-2 flex justify-start items-center">   <img className="h-6 mr-6 " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAYFBMVEX///8AAAD8/Pw0NDRqamoFBQXl5eUnJyeYmJjz8/OUlJSJiYmkpKTq6urX19eNjY1GRkZSUlIvLy87OzsWFhaBgYG+vr6srKzNzc0aGhoODg5vb2+zs7N6enphYWFZWVkUzWP8AAABg0lEQVRoge3ZbW+CMBiFYU7ZQFRQEfEV9///5Ui2ZFCQAn1aYnburzW5EtKmLwYBY4wxxhhjjDH2JiXlZpsuQ6cHANdyCTrDT2v/dHn7tbFTnukz/rr7xXdoto880ne0O2a+5OSAThc/dLbv0sDDCx330cDKPV32y3WV6+m+fUkDz8QpvRqg67XmEFf62tLLnU335MtAA4UjPDoa6bqzCzorxtD11iJPlyNpYCO91oYneLuD6HRX6wl0vbVInqSqSTQQi+1rac++ZUroGBfNoIXWWnYzQ32d7OnX+5apyna6n83Gyyz3tWlrSy+3OUOerGggnI9fLOn6s8+2hw4pI3tLe8lvvuRcC9TjOHrb7nSNK9t7mtrMgQuhs9POTHWSuiIl0+lYiA5UPtn+ELND2v/bvq2iZpfOS4RDu9J+kXm09feNSH8HoU2bNm3atGm/n32XsrsXE6Mt9y9pql8OTPZT8Dk3OhWfjbDVx0M0RvO17Euyajc8LCozxhhjjDHGGBPuGw0xFR3Q0AOnAAAAAElFTkSuQmCC" alt="home-icon"   />   Home</li>
        <li className="p-1 m-2 flex justify-start items-center">   <img className="h-6 mr-6 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC56YvgN8x2hv6lVkMtTasrIFXE2zB4gWYzQ&usqp=CAU" alt="home-icon"   />   Shorts</li>
        <li className="p-1 m-2 flex justify-start items-center">  <img className="h-6 mr-6 " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAAClpaVhYWErKyt0dHSEhITc3Nzl5eX19fW0tLSUlJTLy8uioqKAgIDr6+u4uLhNTU0jIyPz8/MyMjKLi4sMDAybm5scHBzExMRSUlJbW1tubm52dnY7OztGRkYWFhZHR0cwMDA/Pz/W1tYwXPK3AAAER0lEQVR4nO2d6XbaMBBGZVYDDgQISxIgbcn7P2N7UuNFTr1Jo/nc893fOqpuIYwlzYyNIYQQQgghhBBCCCGEEFGe1rOQrJ+CG75HYXkPbjgObDimIQ1pSEMaDtDwspuEZHcJbkgIIYQQQgjxzj5GZO/R8BB4M9iOg0fDlbbMt6xoSEMaqkNDGhb5/+PhZo7IxqMhIYQQQgghRIj5aH2dDoXrejTvprdYvWhv/jrzslq0Fxxpr7Yno7YfYOh0J3+8t/sYb9rrdODWRvBNe5VOvDULYh6rtafxAC7WXqEzcYPhVHuBzlzrBRfFsR/jofBRXHb97+kyH+jzRFmews/HsnZg/iUNX6PixlPLr2n2sHYPtDB/3B9Lf6kddnwM83knEIbsbuVYOyz7qNs+4uGQP0zXDqMhMDRMoSEwNEyhITA0TKEhMDRMoWEnFsvVqeN1ggMKhsnXRBef+eZ1hDd8nEv+SJynakV4w0s218x5rjaENyxcf0xC/DUGN1xMogIBTu6UDaM38WRQbcMoenadsQF9Q+m4AWAYnV9dJ60DwVA2bmAYSsYNEMMoOrlO/C9gDMXihqLh4V5WbLjg64ui4XOl5EYkbiga/vnIknNZUSJu6BqaxaWsGK1d56+gbGjMs6W48x031A3Nxu4l6Tlu6BsWkwn+svUaNxAMTWzHSJ9xA8LQmJmlOO6Q9doAiKFg3EAxlIsbMIZicQPI0OztJF0vcQPJUCZuYBmauf+4AWYoEDfgDE2yKyu63m/gGVbjhts5FaBhNW44nVNBGpqNx7iBaWjMyVLs3xAZ1dDMf5UVez/EwRpW4kbfqAFsaMWNvpsNZMNlaUfVNyziGtrljn3/QVjD17Jf/1IdVMO1Jdh/P4xpOLcLqh2uwiEN7WrOrct9BqBh/NMSdEtJwTNclvWim+NxDZyhXRLvfMUPZphYfmf39D4sQ/sI4+Lh6BvJ0N5O+EmXAjK0t4SerqBgDDcfZT9vaYsohnaMuHu7CsYw9Hy8VgLCUCBG5CAY2jFi6u961CAYftr7CM+pUeqGQjEiR9kwlooRObqGcjEiRzNzrxIjRFpSKBpePV+j/QOcDFof+4jvgDEUK7sAMRQsncEwlCx/QjCUiBE5AIbCbYv0DaVLSbUN5V92q2woXZpnlKtk5csrjYZhfm8WprldeMN92vvt1tSM0hMKHQfir+9psNZ2Kn0xPkfLcG+7YeePFBoCQ8MUGgJDwxQaAkPDFBoCQ8OUbNTQWrIX6+Fqh2Udy8N0IPNJdode37E8O1ypb92OSHaJXv8mlvxwZWht5/PuIvWJ1IVaq+mQXkYbF9480nByGRU4TobCsbjshv8MO+dleDT9Rm60F+hM4x/XUN9I9qDFo8qw3xY0bRas5pgPiZYFmsP9tWn9JPZ6bp4MkE7JnMut9nI7s+2a67hJTofZUDickiE9gRFCCCGEEEIIIYQQQiD5DRf/VsChuDfgAAAAAElFTkSuQmCC" alt="subscriptions-icon"   />   Subscriptions</li>
         
      </ul>

      <div className="border-2 m-5"></div>

      <ul>
       <li className="p-1 m-2 flex flex-row justify-start items-center">   <img className="h-6 mr-6 " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAeFBMVEX///8AAAD8/PwJCQnj4+Py8vIpKSlCQkIEBATOzs4WFhb6+voODg5dXV0iIiJ5eXm0tLSWlpbX19fq6uozMzMdHR2Hh4dZWVmnp6ff399HR0dUVFTExMQ6OjrS0tIuLi5nZ2dxcXF/f39jY2OLi4ufn5+5ublMTEw5BBLOAAAEw0lEQVR4nO2da3eiMBBAeRYQUHlZVNZW2ur//4e73SU8PeuQhEzKmftNVuLcwoRJgKxhEARBEARBEARBEARBEARBEMTasBZmscCz/ef7Pd9ubN9Uhx8VL97r7isIJVlcdi8Kw3+A7X0exTUCD9eiwbsJetxUnkz/xRM7KshnVR+7FPBwsKMfkKxFxBQ4Jlvs2AfY/Hmy/5fs0WmX3IJjFi53rRpjhe4x+HP9yvvdzYm/vVtu2udKXfxT3PLUmVQCDWFKNFTtGf6KHYogGbsM2LLqFSwqdkhEr/Do5I3IATsQUWqJSTJv/CB5BLJvRH7NC/lS1rH3VkTAAYh/CrqdA8+ecY3rNWJHxZsX1+Xlkdal+dYWbpEl92h2FHZrEvBp9InuSTaOihVLEVQjjfkKd4818EvY4xs/Todxuc0/2DCN8Mo7/vCbDj6U4vHd4HVwybDYdpCH88b/u5ZkEdPMnX5sbCvIQ6DWlXxq/WXbN2EbAR4h//EwowtrRUKyt7z1zi62DSBy5f5B+37pmrmc5KlceUTSfp6/xIeyOmauwtLXcrO0Kg9xf5rA70ZScJH3ziJxnn99OZykc+kOCVgkZFdBP0EfgVif7OyI2ljAIm2hLDBXIY+ERdMOCcEih+aLW/Tj8Y1VNOG0ZTtY5HXaUWBybcKJ2QawCBu5iMznSaRswmnLdrAIO5bB028qIWBnOtsAFmGdFmrP2zEp28EirMNzF40PzKRsB4uwL2rRaXVVtM82zBZZNLwZjOMhEWxIhEQWgkRIZCFIhFtkoYd5VItcTrZ/X6L0Vyxy+Vf9x/KLf8Ui7M6xvZNd/isW6SYVN5JnkRSLmD1e9rOjnRGPQhHT9CRmPaqIzKxHFpGX9dgi0rIeX0RS1iOJjO7tSMh6JJHjqzlEOOuRRKYPCItmPZqIYexHz9aKZT2iiGElm6GKSNZjihiGu5OW9bgihuHEQxPurMcWkZb1+CKSsl4HESlZr4XIo6xPH+0+o2UkkWnWRzNNtBGZZP1drGVEkVHWg59GfNwyifD9XJ/RqXUWaxlNxBkV9j802VfS/a7lgriSEmUlRaO0wTuuyEoGVmsZ6q5k8mEl00GrmaBbzZTpgJ88id1jJbcV1nKjZyW33lZyM3TR29OTx2ehOwJR9sBA1nx8PvLnE7k3ey3+CEfafCzm7ggkVfVQza35mM/dEUp6jqKzgsec2Hs6z+diOEUWYxQPK0nruTuiM4yHvQUOWCpBbxF2QOznfYrWIqzzhUxXai3COl/IAi9ai7C3PSFL7mgt0vS+NmTeVW8Ro/5TDG1BKwdpLmK41cPVOZ7viA13PKsT0fX1PTC6v1AJRvdXXMHo/tIxGN1fAwej+4v5YNgQrNCi2wonSyWAaRev0GJxNPZn5VjPsF1OxKzRV94L2UJt5obj/HhnO5vFYe7dfamkddGGwpOxx/6SO8W5Lqs0c9Wt+WmFrpNWX/W56IXhcy1eejW1Y8f1NxFZlmoZcs5sFVkobAm23OWSkz9vXR25QNkX7rRZzNvfiV0F0g+JS6/xY3+ILxXvfnEsOCmV6Pwla1SUlvXHSfH/QeDbm21++jiUqFdjgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiC04jcUoTzDWhQsVgAAAABJRU5ErkJggg==" alt="library-icon"    />   Library</li>
       <li className="p-1 m-2 flex flex-row justify-start items-center">   <img className="h-6 mr-6 " src="data:image/png;base64,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" alt="history-icon"    />   History</li>
       <li className="p-1 m-2 flex flex-row justify-start items-center">  <img className="h-6 mr-6 " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAclBMVEX///8AAAAbGxtjY2MXFxdfX1/Ly8vPz8+rq6unp6cvLy9LS0sEBATz8/P8/PzW1tY+Pj51dXVDQ0Px8fE5OTlRUVFWVlaXl5fn5+e0tLQoKCi7u7tpaWmJiYkfHx/a2toODg6fn5+BgYGGhoZ7e3vCwsJ0o+/VAAAE20lEQVR4nO2c6ZbiIBCFiVu7JSZxS1yidtvv/4oTcRQSZo4CBUU89f0PcuMlFFAUYwRBEARBEARBEARBEARBEARBEARBEMSnEJfHfjqtBo6ppmn/WMauVBQ/q3nkkfnqWDiQUeY+RTzI99AyphgybqwgpRRrLBk3NmAGG58xdUTReQwiIzngyriRJfY64hm2ihtr629xnGJruJNaKkmU/2O+m236jtnMdsqMNbNz17DZWi/bO5tvm8T7bND87b5Nc9tGU9MxwJh7n2Sya/z8xbypL/kPPm+9yriRbOUP/3lh3M5KamblIu55yUnuQmraimysjfe/404sBxWG5oql0TZE0lHbYiN9a8x6cRQt5Gg6aiXSTLY1aqAn3gTK+HhQCGdUJi+0FC+iBO+cFmPRE5OYXnhzBt41TUR4MdR/OBZzyBd81/QYiblE31t7MdIddE0TMd5/tZ+92n69IREz2rf2s8KXSwc906R4dmat/Wz1eHTqoGPaPPc+drpPJs93YBU+Q/FcTsx1R7v4M49OeqbJj7HRTyGNdXm0nzSf/Ho+qbUXk4yzK/Tm4I2J8aQ2MhJS8OVDarwC+i+ehcR/16bzDPqT7VmICPx7E83fe4FnIfKGPay/PAtpbNmD+gtTCKi/cIUA+gtbCJi/0IVA+SsAITD+CkIIhL/CEALgLywhVetIwNpfWEJmy0P7pMbOX2hC6nWAcmZn4y9EIfWP96IW5v5CFcLiDMxfuELqBbNyljow8xe2EMbKKmph5C98ISz+hvBXAEJqfykpOfr+CkIIY/vmObOBvwIRwpJjO8FI01+hCGGsaOVQaPorHCGM/dqsH0MS0spj0PNXUEIYWyo5bO/6KzAhdSi5ilq856/ghDB2aS9V5tkbmVMBCvlHKDl9PVJCFMLYop0LvXnZcphCGBu3QsmXKSKhCmHLZtDyMkckVCHt4KujQopN1KKT1lIDyDdSZQIUooZcnfz8qkFwJydENWyMoryDIcpIddW7m3YhCVn2zVzFCUiIEiy+6ypOMELU8F1vKzgQIerevIarOGEImVi56t5EAEIW6p0g/QMGfCHqMkrXVRx0IWPljETbVRxkISf1WqzhsRWqkPgK4ioOphD1ZMTMVRw8IepZVScPQ3PldMfcVZxQMh9sXMUJRUhnUzggXcUJQoilqzgBCPmQxDMAV3GwhUC4ioOcLgtTq+EGbgIz4NV3xJRyMFdxPAsR11UAXcXxfe1i6sBVHJyLMLCu4pgLMb2aVF6v+pc3XyOE6L6kj7ksFtj1ve9nd3ST1j7mQuXHXHH9nEvHH3MNXFzMN66rAoc4lND/tidiH2TkoGta/D67YlAqIaTiFSIYNShe8TnlRKQCL4NOF3iRayB1uuROowgSVjGnWoeUkG5YBIldRBPRGqsslbwZbryz1CgUpht2gnCStwHMJ7QFdum2RkbU2eJVyuaqA7aJ32J6l2aendWWZSt/ZHBwV064SVweWqfzB6v21IKTUZWvh45Z5+qxne3XJpQSoLl9MVPUWr8PIOaxJMNWAVMmt6ZELlw8AAta1URdnwwhQ9a9mjjmiRR6v28/81o0/s585mLbsjimfgvgp04K4HPi/faQr3ZVzynVbpUftr5KJBMEQRAEQRAEQRAEQRAEQRAEQRAEQRAe+AMOd09X/Kl2pQAAAABJRU5ErkJggg==" alt="yourVideos-icon"  /> Your Videos</li>
       <li className="p-1 m-2 flex flex-row justify-start items-center">   <img className="h-5 pr-2 mr-6 " src="data:image/png;base64,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" alt="watch-later-icon"   />   Watch Later</li>
        <li className="p-1 m-2 flex flex-row justify-start items-center">   <img className="h-6 mr-6" src="data:image/png;base64,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" alt="liked-videos-icon"   />   Liked Videos</li>
         <li className="p-1 m-2 flex flex-row justify-start items-center">   <img className="h-6 mr-6" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAAClpaVhYWErKyt0dHSEhITc3Nzl5eX19fW0tLSUlJTLy8uioqKAgIDr6+u4uLhNTU0jIyPz8/MyMjKLi4sMDAybm5scHBzExMRSUlJbW1tubm52dnY7OztGRkYWFhZHR0cwMDA/Pz/W1tYwXPK3AAAER0lEQVR4nO2d6XbaMBBGZVYDDgQISxIgbcn7P2N7UuNFTr1Jo/nc893fOqpuIYwlzYyNIYQQQgghhBBCCCGEEFGe1rOQrJ+CG75HYXkPbjgObDimIQ1pSEMaDtDwspuEZHcJbkgIIYQQQgjxzj5GZO/R8BB4M9iOg0fDlbbMt6xoSEMaqkNDGhb5/+PhZo7IxqMhIYQQQgghRIj5aH2dDoXrejTvprdYvWhv/jrzslq0Fxxpr7Yno7YfYOh0J3+8t/sYb9rrdODWRvBNe5VOvDULYh6rtafxAC7WXqEzcYPhVHuBzlzrBRfFsR/jofBRXHb97+kyH+jzRFmews/HsnZg/iUNX6PixlPLr2n2sHYPtDB/3B9Lf6kddnwM83knEIbsbuVYOyz7qNs+4uGQP0zXDqMhMDRMoSEwNEyhITA0TKEhMDRMoWEnFsvVqeN1ggMKhsnXRBef+eZ1hDd8nEv+SJynakV4w0s218x5rjaENyxcf0xC/DUGN1xMogIBTu6UDaM38WRQbcMoenadsQF9Q+m4AWAYnV9dJ60DwVA2bmAYSsYNEMMoOrlO/C9gDMXihqLh4V5WbLjg64ui4XOl5EYkbiga/vnIknNZUSJu6BqaxaWsGK1d56+gbGjMs6W48x031A3Nxu4l6Tlu6BsWkwn+svUaNxAMTWzHSJ9xA8LQmJmlOO6Q9doAiKFg3EAxlIsbMIZicQPI0OztJF0vcQPJUCZuYBmauf+4AWYoEDfgDE2yKyu63m/gGVbjhts5FaBhNW44nVNBGpqNx7iBaWjMyVLs3xAZ1dDMf5UVez/EwRpW4kbfqAFsaMWNvpsNZMNlaUfVNyziGtrljn3/QVjD17Jf/1IdVMO1Jdh/P4xpOLcLqh2uwiEN7WrOrct9BqBh/NMSdEtJwTNclvWim+NxDZyhXRLvfMUPZphYfmf39D4sQ/sI4+Lh6BvJ0N5O+EmXAjK0t4SerqBgDDcfZT9vaYsohnaMuHu7CsYw9Hy8VgLCUCBG5CAY2jFi6u961CAYftr7CM+pUeqGQjEiR9kwlooRObqGcjEiRzNzrxIjRFpSKBpePV+j/QOcDFof+4jvgDEUK7sAMRQsncEwlCx/QjCUiBE5AIbCbYv0DaVLSbUN5V92q2woXZpnlKtk5csrjYZhfm8WprldeMN92vvt1tSM0hMKHQfir+9psNZ2Kn0xPkfLcG+7YeePFBoCQ8MUGgJDwxQaAkPDFBoCQ8OUbNTQWrIX6+Fqh2Udy8N0IPNJdode37E8O1ypb92OSHaJXv8mlvxwZWht5/PuIvWJ1IVaq+mQXkYbF9480nByGRU4TobCsbjshv8MO+dleDT9Rm60F+hM4x/XUN9I9qDFo8qw3xY0bRas5pgPiZYFmsP9tWn9JPZ6bp4MkE7JnMut9nI7s+2a67hJTofZUDickiE9gRFCCCGEEEIIIYQQQiD5DRf/VsChuDfgAAAAAElFTkSuQmCC" alt="liked-videos-icon" />View More</li>
        
      </ul>

      <div className="border-2 m-5"></div>

      <h1 className="font-medium py-5">Subsriptions</h1>
      <ul>
       <li className="p-1 m-2 flex flex-row justify-start items-center">   <img className="h-6 mr-6" src="data:image/jpeg;base64,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" alt="trending-icon" />Trending</li>
       <li className="p-1 m-2 flex flex-row justify-start items-center">   <img className="h-6 mr-6" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWszyralqwgbOGntFnauK72qEBy-o5adoiJw&usqp=CAU" alt="music-icon"  />Music</li>
       <li className="p-1 m-2 flex flex-row justify-start items-center">  <img className="h-6 mr-6" src="data:image/png;base64,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" alt="gaming-icon"   /> Gaming</li>
       <li className="p-1 m-2 flex flex-row justify-start items-center">   <img className="h-5 pr-2 mr-6" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2-G3bVdlqZD2eO_zUZ10lBd7bnL7f7P9wDw&usqp=CAU" alt="news-icon"  />News</li>
        <li className="p-1 m-2 flex flex-row justify-start items-center">   <img className="h-6 mr-6" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGYrWNcYUjkySkN46Wm1OKwAxUqkrqND1EiQ&usqp=CAU" alt="sports-icon"  />Sports</li>
        
      </ul>


      <h1 className="font-medium py-5">Explore</h1>
      <ul>
      <li className="p-1 flex flex-row justify-start items-center">   <img className="h-10 mr-6" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAYFBMVEX///8AAAD8/Pw0NDRqamoFBQXl5eUnJyeYmJjz8/OUlJSJiYmkpKTq6urX19eNjY1GRkZSUlIvLy87OzsWFhaBgYG+vr6srKzNzc0aGhoODg5vb2+zs7N6enphYWFZWVkUzWP8AAABg0lEQVRoge3ZbW+CMBiFYU7ZQFRQEfEV9///5Ui2ZFCQAn1aYnburzW5EtKmLwYBY4wxxhhjjDH2JiXlZpsuQ6cHANdyCTrDT2v/dHn7tbFTnukz/rr7xXdoto880ne0O2a+5OSAThc/dLbv0sDDCx330cDKPV32y3WV6+m+fUkDz8QpvRqg67XmEFf62tLLnU335MtAA4UjPDoa6bqzCzorxtD11iJPlyNpYCO91oYneLuD6HRX6wl0vbVInqSqSTQQi+1rac++ZUroGBfNoIXWWnYzQ32d7OnX+5apyna6n83Gyyz3tWlrSy+3OUOerGggnI9fLOn6s8+2hw4pI3tLe8lvvuRcC9TjOHrb7nSNK9t7mtrMgQuhs9POTHWSuiIl0+lYiA5UPtn+ELND2v/bvq2iZpfOS4RDu9J+kXm09feNSH8HoU2bNm3atGm/n32XsrsXE6Mt9y9pql8OTPZT8Dk3OhWfjbDVx0M0RvO17Euyajc8LCozxhhjjDHGGBPuGw0xFR3Q0AOnAAAAAElFTkSuQmCC" alt="home-icon"  />   Music</li>
       <li className="p-1 flex flex-row justify-start items-center">   <img className="h-10 mr-6" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAYFBMVEX///8AAAD8/Pw0NDRqamoFBQXl5eUnJyeYmJjz8/OUlJSJiYmkpKTq6urX19eNjY1GRkZSUlIvLy87OzsWFhaBgYG+vr6srKzNzc0aGhoODg5vb2+zs7N6enphYWFZWVkUzWP8AAABg0lEQVRoge3ZbW+CMBiFYU7ZQFRQEfEV9///5Ui2ZFCQAn1aYnburzW5EtKmLwYBY4wxxhhjjDH2JiXlZpsuQ6cHANdyCTrDT2v/dHn7tbFTnukz/rr7xXdoto880ne0O2a+5OSAThc/dLbv0sDDCx330cDKPV32y3WV6+m+fUkDz8QpvRqg67XmEFf62tLLnU335MtAA4UjPDoa6bqzCzorxtD11iJPlyNpYCO91oYneLuD6HRX6wl0vbVInqSqSTQQi+1rac++ZUroGBfNoIXWWnYzQ32d7OnX+5apyna6n83Gyyz3tWlrSy+3OUOerGggnI9fLOn6s8+2hw4pI3tLe8lvvuRcC9TjOHrb7nSNK9t7mtrMgQuhs9POTHWSuiIl0+lYiA5UPtn+ELND2v/bvq2iZpfOS4RDu9J+kXm09feNSH8HoU2bNm3atGm/n32XsrsXE6Mt9y9pql8OTPZT8Dk3OhWfjbDVx0M0RvO17Euyajc8LCozxhhjjDHGGBPuGw0xFR3Q0AOnAAAAAElFTkSuQmCC" alt="home-icon"  />   Sports</li>
       <li className="p-1 flex flex-row justify-start items-center">  <img className="h-10 mr-6" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAYFBMVEX///8AAAD8/Pw0NDRqamoFBQXl5eUnJyeYmJjz8/OUlJSJiYmkpKTq6urX19eNjY1GRkZSUlIvLy87OzsWFhaBgYG+vr6srKzNzc0aGhoODg5vb2+zs7N6enphYWFZWVkUzWP8AAABg0lEQVRoge3ZbW+CMBiFYU7ZQFRQEfEV9///5Ui2ZFCQAn1aYnburzW5EtKmLwYBY4wxxhhjjDH2JiXlZpsuQ6cHANdyCTrDT2v/dHn7tbFTnukz/rr7xXdoto880ne0O2a+5OSAThc/dLbv0sDDCx330cDKPV32y3WV6+m+fUkDz8QpvRqg67XmEFf62tLLnU335MtAA4UjPDoa6bqzCzorxtD11iJPlyNpYCO91oYneLuD6HRX6wl0vbVInqSqSTQQi+1rac++ZUroGBfNoIXWWnYzQ32d7OnX+5apyna6n83Gyyz3tWlrSy+3OUOerGggnI9fLOn6s8+2hw4pI3tLe8lvvuRcC9TjOHrb7nSNK9t7mtrMgQuhs9POTHWSuiIl0+lYiA5UPtn+ELND2v/bvq2iZpfOS4RDu9J+kXm09feNSH8HoU2bNm3atGm/n32XsrsXE6Mt9y9pql8OTPZT8Dk3OhWfjbDVx0M0RvO17Euyajc8LCozxhhjjDHGGBPuGw0xFR3Q0AOnAAAAAElFTkSuQmCC" alt="home-icon"  />   Gaming</li>
       <li className="p-1 flex flex-row justify-start items-center">   <img className="h-10 mr-6" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAYFBMVEX///8AAAD8/Pw0NDRqamoFBQXl5eUnJyeYmJjz8/OUlJSJiYmkpKTq6urX19eNjY1GRkZSUlIvLy87OzsWFhaBgYG+vr6srKzNzc0aGhoODg5vb2+zs7N6enphYWFZWVkUzWP8AAABg0lEQVRoge3ZbW+CMBiFYU7ZQFRQEfEV9///5Ui2ZFCQAn1aYnburzW5EtKmLwYBY4wxxhhjjDH2JiXlZpsuQ6cHANdyCTrDT2v/dHn7tbFTnukz/rr7xXdoto880ne0O2a+5OSAThc/dLbv0sDDCx330cDKPV32y3WV6+m+fUkDz8QpvRqg67XmEFf62tLLnU335MtAA4UjPDoa6bqzCzorxtD11iJPlyNpYCO91oYneLuD6HRX6wl0vbVInqSqSTQQi+1rac++ZUroGBfNoIXWWnYzQ32d7OnX+5apyna6n83Gyyz3tWlrSy+3OUOerGggnI9fLOn6s8+2hw4pI3tLe8lvvuRcC9TjOHrb7nSNK9t7mtrMgQuhs9POTHWSuiIl0+lYiA5UPtn+ELND2v/bvq2iZpfOS4RDu9J+kXm09feNSH8HoU2bNm3atGm/n32XsrsXE6Mt9y9pql8OTPZT8Dk3OhWfjbDVx0M0RvO17Euyajc8LCozxhhjjDHGGBPuGw0xFR3Q0AOnAAAAAElFTkSuQmCC" alt="home-icon"  />   Movies</li>

      </ul>

      {/* <h1 className="font-medium py-5">Subsriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul> */}


    </div>
  )
}

export default Sidebar