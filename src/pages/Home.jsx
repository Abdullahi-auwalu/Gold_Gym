import { useState } from "react"
import { Box } from "@mui/material"
import Exercises from "../components/Exercises"
import SearchExercises from "../components/SearchExercises"
import HeroBanner from "../components/HeroBanner"

const Home = () => {
  const [bodyPart, setBodyPart] =  useState('all')
  const [exercises, setExercises] = useState([]);

  return (
    <Box >
       <HeroBanner />
       <SearchExercises
           bodyPart={bodyPart}
           setExercises={setExercises}
           setBodyPart={setBodyPart}
       />
       <Exercises 
          bodyPart={bodyPart}
          setExercises={setExercises}
          setBodyPart={setBodyPart}  
      />
    </Box>
    )
}

export default Home