import styled from "styled-components"


const Singlemoviecontainer = styled.div `

    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 280px;
    box-shadow: 0 3px 10px 0 #aaa;
    cursor: pointer;

`
const CoverPhoto = styled.img`
    object-fit: cover;
     height: 362px;
`
const Moviename = styled.span`
   font-size: 15px;
   color: black;
   font-weight: 500;
   margin: 15px 0px;
   white-space: nowrap;
   
   text-overflow: ellipsis;
   over-flow: hidden;


`
const Movieinfo = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    font-size: 12px

`


const Moviecomponent = (props) => {
    const {Title, Year, imdbID, Type, Poster} = props.movie;

    return (
        <Singlemoviecontainer onClick={() => props.setSelectedmovie(imdbID) }>
            <CoverPhoto src={Poster} />
        <Moviename>{Title}</Moviename>
        <Movieinfo>
            <span>Release year: {Year}</span>
            <span>Type: {Type}</span>
        </Movieinfo>
        </Singlemoviecontainer>
    )

}

export default Moviecomponent