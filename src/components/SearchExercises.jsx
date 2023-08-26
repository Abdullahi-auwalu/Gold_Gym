import { useState, useEffect } from "react"
import { Box, Stack, Typography, Button, TextField } from "@mui/material"

import { exerciseOptions, fetchData } from "../../utils/fetchData"
import HorizontalScrolbar from "./HorizontalScrollbar";


const SearchExercises = ( setExercises, bodyPart, setBodyPart) => {
    const [search, setSearch] = useState("");
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

            setBodyParts(['all', ...bodyPartsData ])
        }

        fetchExercisesData();
    }, [])

    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

            const searchedExercises = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
            );

            setSearch('')
            setExercises(searchedExercises)
        }
    }

  return (
    <Stack 
        alignItems="center"
        justifyContent="center"
        mt="37px"
        p="20px"
    >
        <Typography
            fontWeight="700"
            sx= {{
                fontSize: { lg: "44px", xs: "30px"}
            }}
            mb="50px"
            textAlign="center"
        >
            Awesome Exercises You <br /> Should Know
        </Typography>
        <Box position="relative" mb='72px' ml="-65px">
            <TextField 
                sx={{
                    input: { 
                             fontWeight: "700",
                             border: "none",
                             borderRadius: '4px'
                           },
                    width: { lg: '800px', xs: '350px'}, 
                    backgroundColor: 'white',
                    borderRadius: "40px"    
                }}
                height="76px"
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                placeholder="Search Exercises"
                type="text"
            />
            <Button 
                className="search"
                sx={{
                    bgcolor: '#ff2625',
                    color: "#fff",
                    textTransform: "none",
                    width: { lg: '175px', xs: '80px'},
                    fontSize: { lg: '20px', xs: '14px'},
                    height: '56px',
                    position: 'absolute'

                }}
                onClick={handleSearch}
            >
                Search
            </Button>
        </Box>
        <Box
            sx ={{
                position: "relative",
                width: "100%",
                p: "20px"
            }}
        >
            <HorizontalScrolbar 
                data={bodyParts} 
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}

            />
        </Box>
    </Stack>
  )
}

export default SearchExercises