import { Outlet, useNavigate } from "react-router-dom";

function App() {

  const navigate = useNavigate();

  function handleClick() {
    navigate('/login');
  }

  return (
    <div className="h-screen flex justify-center items-center bg-gray-50">
      
      <div className="w-full">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img className="mx-auto h-12 w-auto cursor-pointer" alt="Logo" onClick={handleClick} src="./kiwify-green-logo.png" />
        </div>

        <Outlet />

      </div>
    </div>
  );
}

export default App;
