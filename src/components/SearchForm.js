import React, {useState, useEffect} from "react";
import axios from 'axios';
import styled from "styled-components";


const StyledSearchDiv = styled.div`
margin: 0px;
padding: 20px 0px 10px 0px; 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
button {
  border: none;
  background-color: green;
  color: white;
  margin: 5px;
  padding: 5px 20px;
}
}`

const StyledContentDiv = styled.div`
padding: 10px;
margin: 5px;
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
align-items: center;`

const StyledCardImageDiv = styled.img`
align-items: center;
width: 100px;`



export default function SearchForm(props) {
  const [searchTerm, setSearch] = useState('');
  const[char, setChar] = useState([]);

  const handleChange = (event) => {
    setSearch(event.target.value);
    }

    const search = (event) => {
      event.preventDefault();
      setChar(char.filter(info => {
        return info.name.includes(searchTerm)
      }))
    }

    useEffect(() => {
      axios.get('https://rickandmortyapi.com/api/character')
        .then(response => {
          setChar(response.data.results)
        })
    }, []);
      return (
    <StyledSearchDiv>
      <input type="text" name="search" value={searchTerm} onChange={handleChange} />
      <button onClick={search}>Search</button>
      {char.map(info => {
        return (
          <StyledContentDiv>
            <h1>{info.name}</h1>
            <StyledCardImageDiv className="character-image" src={info.image} alt={info.name}/>
          </StyledContentDiv>
        )
      })}
    </StyledSearchDiv>
    );
}



//   const {search, setSearch} = props;
//   const handleChange = e => {
//       console.log(e.target.value);setSearch(e.target.value);
//     };
   
//    return (
//     <>
//     <section className="search-form">
// {/*     
//       <h3>Search by Name</h3>
//       <form onSubmit={(e) =>{ e.preventDefault(); search(search)}}>
//         <input
//           onChange={handleChange}
//           placeholder="name"
//           value={search}
//           name="name"
//           />

//         <Button type="submit">Search</Button> */}

//       {<form onSubmit={e => e.preventDefault()}>
//         <label htmlFor="search">Search: </label>
//         <input
//           id="name"
//           name="name"
//           type="text"
//           value={search.name}
//           onChange={handleChange}
//           placeHolder="Search character name"
//         /> }
//       </form>
//     </section>
//   );

