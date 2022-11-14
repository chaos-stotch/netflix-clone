import "./listItem.scss"
import { PlayArrow, Add, ThumbUpOutlined, ThumbDownOutlined } from "@material-ui/icons";
import { useState } from "react"

function ListItem({index}) {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div
      className="listItem"
      onMouseEnter={()=>setIsHovered(true)}
      onMouseLeave={()=>setIsHovered(false)}
    >
      <div className="insideContent"
      style={{left: isHovered===true && index * 225 -50 + index*2.5}}
      >
        <img src="https://occ-0-1017-185.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABa6ZftDmNiowZZFYNbg_GtmwWbNC2DcW3CHb75UCuX9HhCSLqbG4m2C_HGmD4fmSHC3K7PI1aA1YjFZSWAuJEPHrsb7QhNXxizKvPEok9H2tOwsAU_ncoilWuqa5czQ-vpvq.jpg?r=086" alt="" />
        {isHovered &&(
        <>
          <iframe width="560" height="315" title="jojo" frameborder="0" src="https://www.youtube.com/embed/EeCX8Y0a278?controls=0&amp;&amp;showinfo=0;&autoplay=1;&loop=1;"></iframe>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon"/>
              <Add className="icon"/>
              <ThumbUpOutlined className="icon"/>
              <ThumbDownOutlined className="icon"/>
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nulla perspiciatis nisi mollitia!
            </div>
            <div className="genre">Action</div>
          </div>
        </>
        )}
      </div>
    </div>
  )
}

export default ListItem
