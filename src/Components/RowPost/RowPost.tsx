import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import "./RowPost.css";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../Constant/constants";
import { Movies } from "../../Types/Movies";
import { Videos } from "../../Types/Videos";

type test = {
  url:string;
  title:string;
  isSmall?:boolean
}

const RowPost = ({url,title,isSmall}:test) => {
  const [movies, setMovies] = useState<Movies[] | []>([]);
  const [urlId,setUrlId] = useState<Videos | null>(null)
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        //console.log(response.data);
        setMovies(response.data.results);
      })
      .catch((error) => {
        alert("Network Error");
        console.log(error.message);
      });
  });
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id:number) =>{
    console.log('id-',id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      //console.log(response.data)
      if(response.data.results.length !== 0){
        setUrlId(response.data.results[0])
      }else{
        alert('Cannot load the video')
        console.log('Array is empty');
      }
    })
  }
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="posters">
        {movies &&
          movies?.map((item,index) => {
            return (
              
                <img onClick={()=>handleMovie(item.id)} key={index}
                  className={isSmall?"smallPoster":"poster"}
                  src={`${imageUrl + item.backdrop_path}`}
                  alt="poster"
                />
             
            );
          })}
      </div>
     {urlId && <YouTube videoId={urlId.key} opts={opts} /> } 
    </div>
  );
};

export default RowPost;
