import React from "react"
import { useEffect} from "react";
import { useState} from "react";
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
    <div className="university__table_block">
      <div align="left" style={{marginTop:"2rem",padding:"0 15% 0 15%"}}>
        <FormControl size="medium">
          <InputLabel id="demo-simple-select-label">Типы сортировки</InputLabel>
          <Select sx={{color:"#000000",fontSize:"1.25rem"}}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sortType}
            label="Типы сортировки"
            onChange={sT}
          >
            <MenuItem sx={{color:"#000000",fontSize:"1.25rem"}} value={SortTypes.ByName}>По имени</MenuItem>
            <MenuItem sx={{color:"#000000",fontSize:"1.25rem"}} value={SortTypes.ByIndex}>По индексу</MenuItem>
            <MenuItem sx={{color:"#000000",fontSize:"1.25rem"}} value={SortTypes.ByPrice}>По цене обучения</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div style={{marginTop:"2rem",padding:"0 15% 0 15%"}}>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 400}} size="small" aria-label="a dense table" className="university__table">
          <TableHead>
            <TableRow>
              <TableCell sx={{color:"",fontSize:"1.25rem"}} align="right">index</TableCell>
              <TableCell sx={{color:"#000000",fontSize:"1.25rem"}} align="right">name</TableCell>
              <TableCell sx={{color:"#000000",fontSize:"1.25rem"}} align="right">location</TableCell>
              <TableCell sx={{color:"#000000",fontSize:"1.25rem"}} align="right">rank</TableCell>
              <TableCell sx={{color:"#000000",fontSize:"1.25rem"}} align="right">tuition_and_fees</TableCell>
              <TableCell sx={{color:"#000000",fontSize:"1.25rem"}} align="right">in_state</TableCell>
              <TableCell sx={{color:"#000000",fontSize:"1.25rem"}} align="right">undergrad_enrollment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {universities.map((university) => (
              <TableRow
                key={university.index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
              >
                <TableCell sx={{color:"#000000",fontSize:"1.25rem"}} component="th" scope="row">
                  {university.index}
                </TableCell>
                <TableCell sx={{color:"#000000",fontSize:"1.25rem"}} align="right">{university.name}</TableCell>
                <TableCell sx={{color:"#000000",fontSize:"1.25rem"}} align="right">{university.location}</TableCell>
                <TableCell sx={{color:"#000000",fontSize:"1.25rem"}} align="right">{university.rank}</TableCell>
                <TableCell sx={{color:"#000000",fontSize:"1.25rem"}} align="right">{university.tuition_and_fees}</TableCell>
                <TableCell sx={{color:"#000000",fontSize:"1.25rem"}} align="right">{university.in_state}</TableCell>
                <TableCell sx={{color:"#000000",fontSize:"1.25rem"}} align="right">{university.undergrad_enrollment}</TableCell>
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