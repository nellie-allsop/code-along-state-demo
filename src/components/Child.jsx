import guineapig from "../assets/guineapig.jpeg";
import {useState} from 'react'

export default function Child({ name }) {
  const [likes, setLikes] = useState(0)

  function handleLikes(){
    setLikes(likes + 1)
  }
	return (
		<div>
			<p>{name} is the child</p>
			<img src={guineapig} alt="guinea pig" onClick={handleLikes} />
			<span>❤️{likes}</span>
		</div>
	);
}
