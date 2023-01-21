import { useNavigate } from "react-router-dom";


const LogoutBtn = () => {
    const navigate = useNavigate();
    const logOut = () => {
        localStorage.removeItem('jwt');
        navigate('/');
    };

    return (
        <>
            <button className="logout" onClick={() => logOut()}>Déconnexion</button>
        </>

    )
};

export default LogoutBtn;