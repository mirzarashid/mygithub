import { Box, Stack } from '@mui/material'
import React from 'react'
import list from './list'
import "../index.css"

const Drum = ({setName}) => {
    const start = (index) => {
        var sound = new Audio(list[index].audio);
        sound.play();
        setName(list[index].img);
    }

    return (
        <Box sx={{margin: "40px"}}>
         <Stack>
             <Stack direction={"row"} >
               {
                 list.map((item, index) => (
                  <button onClick={() => start(index)} className="btn"
                    style={{background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${item.img})`}}
                    />
                  ))
               }
             </Stack>
         </Stack>
        </Box>
    )
}

export default Drum
