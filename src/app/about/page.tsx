import { Button,  } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import React from 'react'
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
const AboutPage = () => {
  return (
    <div className="w-10/12 mx-auto  ">
      this is about page
        <Stack direction={{sm:"row", }} alignItems={{sm:"center"}} justifyContent='space-between' spacing={2}>
            <Button variant="contained" sx={{backgroundColor:"#1abc9c", '&:hover':{backgroundColor:"#16a085"}}}  startIcon={<AddAPhotoIcon />}>
                Add Photo
            </Button>
            <Button variant="outlined" endIcon={<DeleteIcon />}>
                Delete
            </Button>
            {/* <Button variant="outlined" endIcon={<DeleteIcon />}>
                Delete
            </Button>
            <Button variant="outlined" endIcon={<DeleteIcon />}>
                Delete
            </Button>
            <Button variant="outlined" endIcon={<DeleteIcon />}>
                Delete
            </Button> */}
        </Stack>

        {/* check box mui*/}
        <div>
           
            <FormControlLabel required control={<Checkbox/> } label="checkbox"/>
        </div>

    </div>
  )
}

export default AboutPage
