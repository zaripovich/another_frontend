
const Universities = () => {
  const [matches,setMatches] = useState(null);
  const [offset,setOffset] = useState(0);
  const [bothTeam, setBothTeam] = useState(false);
  const [sortType,setSortType] = useState(SortTypes.ByDate);
  const [teamsForSort,setTeamsForSort] = useState([]);
  const [teams,setTeams] = useState([]);

  const sT = (value) => {
    console.info(`value = `,parseInt(value.target.value,10));
    setSortType(parseInt(value.target.value,10))
  }

  

  const handleChange = () => {
    setBothTeam(!bothTeam);
  };

  useEffect(() => {
    if(offset<0){
      setOffset(0);
    }
    const requestOptions = {
      method: 'POST',
      headers: { 
        'Content-Type': 'text/plain'},
      body: JSON.stringify({
        "count": 30,
        "offset": offset,
        "sort_type": sortType,
        "teams_for_sort":teamsForSort,
        "both_team":bothTeam
      })
    };
    fetch('http://127.0.0.1:8000/getMatches',requestOptions)
    .then((response) => response.json())
    .then((data) => {
      if(data['status'] === 'ok'){
        setMatches(data["matches"]);
      }else{
        console.error('Error:', data['description']);
      }
    })
    fetch('http://127.0.0.1:8000/getTeams')
    .then((response) => response.json())
    .then((data) => {
      if(data['status'] === 'ok'){
        setTeams(data["teams"]);
      }else{
        console.error('Error:', data['description']);
      }
    })
  },[offset,bothTeam,teamsForSort,sortType]);
  
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