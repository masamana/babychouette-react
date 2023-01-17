// dateformat
import { Link } from "react-router-dom";


const ArticleDetails = (props) => {


return (

    <tr>
        <td colSpan={2}>{props.article.id}</td>
        <td colSpan={6}>{props.article.title}</td>
        <td colSpan={12}>{props.article.content}</td>
        <td colSpan={4}>{props.article.img}</td>
        {/* <td>{date}</td> */}
        <td colSpan={4}><Link to={'/article/admin/'+ props.article.id}> Sélectionner</Link></td>
    </tr>


    );
};

export default ArticleDetails;







