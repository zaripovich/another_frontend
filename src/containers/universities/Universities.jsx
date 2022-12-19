import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import { FormControl, InputLabel,Select,MenuItem} from "@mui/material";
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper} from '@mui/material';
import './universities.css';

const SortTypes = {
  ByName:0,
  ByIndex:1,
  ByPrice:2
}


const Universities = () => {
  const [universities,setUniversities] = useState([]);
  const [sortType,setSortType] = useState(SortTypes.ByName);


  const sT = (value) => {
    console.info(`value = `,parseInt(value.target.value,10));
    setSortType(parseInt(value.target.value,10))
  }

  


  useEffect(() => {
    const requestOptions = {
      method: 'POST',
      headers: { 
        'Content-Type': 'text/plain'},
      body: JSON.stringify({
        "sort_type": sortType
      })
    };
    fetch('http://127.0.0.1:8000/getUniversities',requestOptions)
    .then((response) => response.json())
    .then((data) => {
      if(data['status'] === 'ok'){
        setUniversities(data["universities"]);
      }else{
        console.error('Error:', data['description']);
      }
    })
  },[sortType]);
  
  return (
    <div>
      <div align="left" style={{marginTop:"2rem",padding:"0 15% 0 15%"}}>
        <FormControl size="medium">
          <InputLabel id="demo-simple-select-label">Type Of Sort</InputLabel>
          <Select sx={{color:"#D4D4DC",fontSize:"1.25rem",fontFamily:"Russo One"}}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sortType}
            label="Type Of Sort"
            onChange={sT}
          >
            <MenuItem sx={{color:"#D4D4DC",fontSize:"1.25rem",fontFamily:"Russo One"}} value={SortTypes.ByName}>Sort By Name</MenuItem>
            <MenuItem sx={{color:"#D4D4DC",fontSize:"1.25rem",fontFamily:"Russo One"}} value={SortTypes.ByIndex}>Sort By Index</MenuItem>
            <MenuItem sx={{color:"#D4D4DC",fontSize:"1.25rem",fontFamily:"Russo One"}} value={SortTypes.ByPrice}>Sort By Price</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div style={{marginTop:"2rem",padding:"0 15% 0 15%"}}>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 400}} size="small" aria-label="a dense table" className="university__table">
          <TableHead>
            <TableRow>
              <TableCell sx={{color:"#D4D4DC",fontSize:"1.25rem",fontFamily:"Russo One"}} align="right">index</TableCell>
              <TableCell sx={{color:"#D4D4DC",fontSize:"1.25rem",fontFamily:"Russo One"}} align="right">name</TableCell>
              <TableCell sx={{color:"#D4D4DC",fontSize:"1.25rem",fontFamily:"Russo One"}} align="right">location</TableCell>
              <TableCell sx={{color:"#D4D4DC",fontSize:"1.25rem",fontFamily:"Russo One"}} align="right">rank</TableCell>
              {/* <TableCell sx={{color:"#D4D4DC",fontSize:"1.25rem",fontFamily:"Russo One"}} align="center">description</TableCell> */}
              <TableCell sx={{color:"#D4D4DC",fontSize:"1.25rem",fontFamily:"Russo One"}} align="right">tuition_and_fees</TableCell>
              <TableCell sx={{color:"#D4D4DC",fontSize:"1.25rem",fontFamily:"Russo One"}} align="right">in_state</TableCell>
              <TableCell sx={{color:"#D4D4DC",fontSize:"1.25rem",fontFamily:"Russo One"}} align="right">undergrad_enrollment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {universities.map((university) => (
              <TableRow
                key={university.index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
              >
                <TableCell sx={{color:"#D4D4DC",fontSize:"1.25rem",fontFamily:"Russo One"}} component="th" scope="row">
                  {university.index}
                </TableCell>
                <TableCell sx={{color:"#D4D4DC",fontSize:"1.25rem",fontFamily:"Russo One"}} align="right">{university.name}</TableCell>
                <TableCell sx={{color:"#D4D4DC",fontSize:"1.25rem",fontFamily:"Russo One"}} align="right">{university.location}</TableCell>
                <TableCell sx={{color:"#D4D4DC",fontSize:"1.25rem",fontFamily:"Russo One"}} align="right">{university.rank}</TableCell>
                {/* <TableCell sx={{color:"#D4D4DC",fontSize:"1.25rem",fontFamily:"Russo One"}} align="right">{university.description}</TableCell> */}
                <TableCell sx={{color:"#D4D4DC",fontSize:"1.25rem",fontFamily:"Russo One"}} align="right">{university.tuition_and_fees}</TableCell>
                <TableCell sx={{color:"#D4D4DC",fontSize:"1.25rem",fontFamily:"Russo One"}} align="right">{university.in_state}</TableCell>
                <TableCell sx={{color:"#D4D4DC",fontSize:"1.25rem",fontFamily:"Russo One"}} align="right">{university.undergrad_enrollment}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  </div>
  )
}


export default Universities