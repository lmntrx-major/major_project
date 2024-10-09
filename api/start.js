
import { useNavigate } from 'react-router-dom';


const Start = () =>{
    const navigate = useNavigate();
    const handleNavigation = () => {
    navigate('/Predict');
  };
    return(
      <div>
      <center><h1>Mangoes Species Detector</h1>
      <button onClick={handleNavigation}>Browse</button>
      </center>
    </div>
    );
}

export default Start;