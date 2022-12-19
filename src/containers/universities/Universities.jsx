import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import { FormControl, InputLabel,Select,MenuItem,Switch,FormControlLabel,Button,ButtonGroup} from "@mui/material";
import './universities.css';

const SortTypes = {
  ByName:0,
  ByIndex:1,
  ByPrice:2
}


const Universities = () => {
  const [universities,setUniversities] = useState(null);
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
    <div position="absolute">
      <div align="center">
        <FormControl size="medium">
          <InputLabel id="demo-simple-select-label">Type Of Sort</InputLabel>
          <Select sx={{color:"#D4D4DC",fontSize:"1.25rem",fontFamily:"Russo One"}}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sortType}
            label="Type Of Sort"
            onChange={sT}
          >
            <MenuItem sx={{color:"#D4D4DC",fontSize:"1.25rem",fontFamily:"Russo One"}} value={SortTypes.ByDate}>Sort By Date</MenuItem>
            <MenuItem sx={{color:"#D4D4DC",fontSize:"1.25rem",fontFamily:"Russo One"}} value={SortTypes.ByTeam}>Sort By Team</MenuItem>
            <MenuItem sx={{color:"#D4D4DC",fontSize:"1.25rem",fontFamily:"Russo One"}} value={SortTypes.ById}>Sort By Id</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div align = "center">
        {MultipleSelectChip(teams,teamsForSort,setTeamsForSort)}
      </div>
      <div align="center">
        <FormControlLabel sx={{color:"#D4D4DC",fontSize:"1.25rem",fontFamily:"Russo One"}}
        control=
          {<Switch 
            checked={bothTeam}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />} label="Both Team"/>
      </div>
      <div>
        {matches && (
          matches.map(match => (Match_block(match)))
        )}
      </div>
      <div className="csgo__matches_pagination">
        <ButtonGroup
          size="medium" 
          aria-label="medium outlined button group"
        >
          <Button onClick={() => setOffset(offset-30)}>
            Prev
          </Button>
          <Button onClick={() => setOffset(offset+30)}>
            Next
          </Button>
        </ButtonGroup>
      </div>
  </div>
  )
}


export default Universities