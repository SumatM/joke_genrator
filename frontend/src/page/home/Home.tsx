import { useState } from "react";
import axios from "axios";
import styled from 'styled-components'
import Loading from "../../component/Loading";

const Home = () => {
    const [englishjoke, setEnglishjoke] = useState("");
    const [loading, setLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("Funny");

    const categories = ["Tech", "Situational Humor", "School", "Corporate", "Nostalgia ", "Wordplay", "Relationships ", "Everyday Life Observations", "Poetic", "Spiritual"];

    const api = 'https://joke-app-zfq8.onrender.com/shayari'

    const generatejoke = async () => {
        setLoading(true);
        try {
            const response = await axios.post(`${api}?category=${selectedCategory}`);
            console.log(response);
            setEnglishjoke(response.data);
        } catch (error) {
            console.error("Error fetching joke:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <DIV>
            <div>
                <h1>Tune Your Mood With Joke</h1>
                <div className="buttondiv">
                    <button onClick={generatejoke} disabled={loading}>
                        Generate Joke
                    </button>
                </div>
                <div>
                    <Select value={selectedCategory} onChange={handleCategoryChange}>
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </Select>
                </div>
                <Loader>
                    <h2>Joke</h2>
                    { loading ? <Loading /> : (englishjoke ? <p>{englishjoke}</p> : <h3>Click on Genrate Joke to have fun!</h3>)}

                </Loader>
            </div>
        </DIV>
    );
};

export default Home;

const DIV = styled.div`
  width:70vw;
  margin:auto;
  padding:20px;
  text-align:center;
  border:1px solid gray;
  margin-top:25px;
  background-color:#58D68D;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  h3{
    color:#9B59B6;
  }

  button{
    padding:8px;
  }
`;

const Select = styled.select`
  margin-top:25px;
  padding:10px;
  font-family:sans-serif;
  font-style:1.2rem;
  font-weight:bold;
`;


const Loader = styled.div`
   display:flex;
   flex-direction:column;
   align-items:center;

   p{
    width:60%;
    font-size:0.9rem;
    margin-top:-10px;
    font-weight:500;
    background-color:white;
    padding:10px;
    border:1px solid;
   }
`;
