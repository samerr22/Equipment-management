
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { signoutSuccess } from "../redux/user/userSilce";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
 

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/auth/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
       
        
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="bg-[#054e3c]  border border-black shadow-sm shadow-black">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto p-4">
        
        <ul className="flex flex-col md:flex-row gap-2 md:gap-4 mt-2 md:mt-0">
    
          <h1 className="font-serif text-3xl underline text-green-300 text-opacity-50 whitespace-nowrap  ">Equipment </h1>
       
          
          
            
         
          {currentUser ? (
            <>
              <Link to="/profile" className="flex items-center lg:ml-[600px] md:ml-[400px] ml-[100px] xl:ml-[800px]">
                <img
                  src={currentUser.profilePicture}
                  alt="profile"
                  className="h-10 w-10 rounded-full object-cover"
                />
              </Link>
              <button
                onClick={handleSignout}
                className="text-white px-3 py-1 rounded-lg text-base md:text-lg font-serif hover:bg-blue-800 transition"
              >
                LogOut
              </button>
            </>
          ) : (
            <Link to="/" className="text-white ml-[900px] hover:text-gray-200">
              <li  >Sign In</li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
}
