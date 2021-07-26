import axios from "axios";
import { useEffect, useState } from "react";

const CardFilm = ({ film }) => {
  const slugTitle =
    "./img/img-ghibli-film/" + film.title.split(" ").join("-") + ".jpg";
  const [srcImg, setSrcImg] = useState();
  const [playOnce, setPlayOnce] = useState(true);

  useEffect(() => {
    if (playOnce) {
      axios
        .get(slugTitle)
        .then(() => setSrcImg(slugTitle))
        .catch(() => {
          setSrcImg("./img/img-ghibli-film/not-img.png");
        });
      setPlayOnce(false);
    }
  }, [playOnce, slugTitle]);

  return (
    <div className="film-container">
      <div className="photo">
        <img src={srcImg} alt={srcImg} />
      </div>
      <div className="description">
        <h1>{film.title}</h1>
        <p><span className="meta-span">Titre original: </span><span className="result-span">{film.original_title}</span> ({film.original_title_romanised})</p>
        <p><span className="meta-span">Réalisateur: </span><span className="result-span">{film.director}</span></p>
        <p><span className="meta-span">Producteur: </span><span className="result-span">{film.producer}</span></p>
        <p><span className="meta-span">Date de sortie: </span><span className="result-span">{film.release_date}</span></p>
        <p><span className="meta-span">Durée: </span><span className="result-span">{film.running_time} min</span></p>
        <p><span className="meta-span">Rotten Tomatoes score: </span><span className="result-span">{film.rt_score}%</span></p>
        <p><span className="meta-span">Déscription:</span></p>
        <p>{film.description}</p>
      </div>
    </div>
  );
};

export default CardFilm;
