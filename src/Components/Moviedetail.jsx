import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { API_KEY } from "../App";

const Selectedcontainer = styled.div `
display: flex;
flex-direction: row;
padding: 18px 28px;
justify-content: center;
border-bottom: 1px solid black;



`



const CoverPhoto = styled.img`
    object-fit: cover;
     height: 300px;
`

const Movieinfo = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 12px

`

const Moviename = styled.span`
   font-size: 15px;
   color: black;
   font-weight: 800;
   margin: 15px 15px;
   white-space: nowrap;
   text-overflow: ellipsis;
   over-flow: hidden;
   text-transform: Capitalize;



`

const MovieDetail = styled.span `
color:black;
font-weight: 400;
font-size: 14px;
overflow: hidden;
margin: 6px 0;
text-transform: capitalize;
text-overflow: ellipsis;
margin-left: 15px;

& span {
    opacity: 0.8;
}

`

const Close = styled.img`

height: 25px;
width: 25px;
cusrsor:pointer;

`
const Moviedetail = (props) => {
    const [movieInfo, setMovieInfo] = useState()

    const {selectedmovie} = props;


    useEffect(() => {
        axios.get(
          `https://www.omdbapi.com/?i=${selectedmovie}&apikey=${API_KEY}`,
        ).then((response) => setMovieInfo(response.data));
      }, [selectedmovie]);
    
    

    return (
        <Selectedcontainer> 
            {movieInfo? <>

                <CoverPhoto src={movieInfo?.Poster}/>
            
            <Movieinfo>
            <Moviename>
               {movieInfo?.Type}: {movieInfo?.Title}
            </Moviename >
            <MovieDetail>
                IMDB rating: <span> {movieInfo?.imdbRating}  </span>
            </MovieDetail>
            <MovieDetail>
                Year: <span>{movieInfo?.Year}</span>
            </MovieDetail>
            <MovieDetail>
                Language: <span>{movieInfo?.Language}</span>
            </MovieDetail>
            <MovieDetail>
            Rated: <span>{movieInfo?.Rated}</span>
            </MovieDetail>
            <MovieDetail>
            Released: <span>{movieInfo?.Released}</span>
            </MovieDetail>
            <MovieDetail>
            Runtime: <span>{movieInfo?.Runtime}</span>
            </MovieDetail>
            <MovieDetail> 
            Genre: <span>{movieInfo?.Genre}</span>
            </MovieDetail>
            <MovieDetail>
            Plot: <span>{movieInfo?.Plot}</span>
            </MovieDetail>
            </Movieinfo>
          <Close src="/close.png" onClick={()=> props.setSelectedmovie()}/>

            </> : "Just a second..."}
            
        </Selectedcontainer>
    )

}

export default Moviedetail