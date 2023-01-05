// dateformat
import { Link } from "react-router-dom";
import ArticleById from "./ArticleById";


const ArticleDetails = (props) => {


return (

    <tr >

        <td>{props.article.id}</td>
        <td>{props.article.title}</td>
        <td>{props.article.content}</td>
        <td>{props.article.img}</td>
        {/* <td>{date}</td> */}

        <td><Link to={'/article/'+ props.article.id}> Sélectionner</Link></td>
    </tr>


)


}

export default ArticleDetails;







