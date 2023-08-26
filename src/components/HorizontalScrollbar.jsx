import { Box, Typography } from "@mui/material"
import BodyPart from "./BodyPart"
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu"

import BodyPart from "./BodyPart"

import RightArrowIcon from "../assets/icons/right-arrow.png"
import LeftArrowIcon from "../assets/icons/left-arrow.png"
import { useContext } from "react"


const HorizontalScrollbar = ({data, bodyPart, setBodyPart, }) => {
  const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext)
  
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src={LeftArrowIcon} alt="left-arrow" />
      </Typography>
    )
  };

  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext)
  
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src={LeftArrowIcon} alt="left-arrow" />
      </Typography>
    )
  };

  return (
    <ScrollMenu>
        {data.map((item) => (
        <Box
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
            m="0 4px"
        >
            <BodyPart 
               item={item} 
               bodyPart={bodyPart} 
               setBodyPart={setBodyPart}
            />   
        </Box>
        ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar