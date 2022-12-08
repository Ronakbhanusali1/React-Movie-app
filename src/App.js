import { useState } from "react";
import styled from "styled-components"
import Moviecomponent from "./Components/Moviecomponent";
import axios from 'axios'
import Moviedetail from "./Components/Moviedetail";

 export const  API_KEY = "db23ace2"

const Container = styled.div `
  display: flex;
  flex-direction: column;


`;

const NavHead = styled.div `
 display: flex;
 flex-direction: row;
 background-color: black;
 align-items: center;
 color: white;
 padding: 12px;
font-family:  'Roboto';
font-size: 24px;
font-weight: bold;
box-shadow: 0 -6px 10px 5px rgba(0,0,0,0.5);
justify-content: space-between;
`;

const MyName = styled.div `
  
  display: flex;

  align-items: center;
  flex-direction: row;
  gap: 2rem;



`
const Myimage = styled.img `

height: 50px;
width: 40px;
margin-left: 10px;

`

const SearchBox = styled.div `

display: flex;
flex-direction: row;
background-color: white;
padding: 12px 12px;
width: 50%;
border-radius: 5px;
margin-left: 40px;

`
const SearchImage = styled.img `
height: 20px;
width: 20px;
`

const Searchinput = styled.input `
   border: none;
   outline: none;
   font-weight: bold;
   margin-left: 10px;
   width: min-content;
`

const Moviecontainer = styled.div `

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 30px;
  gap: 2rem;

`
const Homescreen = styled.img `

    height: 200px;
    width: 200px;
    margin: 150px;
    opacity: 50%;

`



function App() {
  const [searchQuery, updateSearchQuery]  = useState();
  const [timeoutID, updateTimeout]=  useState();
  const [movielist, setMovielist] = useState([]);
  const [selectedmovie, setSelectedmovie] = useState();


  const FetchApi = async (searched) => {

   const res = await axios.get(`https://www.omdbapi.com/?s=${searched}&apikey=${API_KEY}`);
   console.log(res);
   setMovielist(res.data.Search)
    
  };

  const Searchresult = (e) => {
    clearTimeout(timeoutID)
    updateSearchQuery(e.target.value);
   const timeout = setTimeout(()=> FetchApi(e.target.value), 600);
   updateTimeout(timeout)
  }
  return (  
    <Container >
      
      <NavHead>
        <MyName>
      <Myimage src="/app-icon.png"/>
        Moviezone
        </MyName>
        <SearchBox>
          <SearchImage src="/search-icon.png" />
          <Searchinput value={searchQuery} onChange={Searchresult} placeholder="Type movie name" />
        </SearchBox>
      </NavHead>
      {selectedmovie && <Moviedetail 
      selectedmovie={selectedmovie} 
      setSelectedmovie={setSelectedmovie}/>}
    
         <Moviecontainer>

          {
            movielist?.length? movielist.map((movie, index)=>  <Moviecomponent setSelectedmovie={setSelectedmovie} key={index} movie={movie}/>): <Homescreen src="/app-icon.png" />
          }
          
        
         </Moviecontainer>
    </Container>
  );
}

export default App;
