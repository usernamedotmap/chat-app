import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";


const Logout = () => {
  const {loading, logout} = useLogout();


  return (
    <div className="mt-auto pt-4">
      {!loading  ? (
        <BiLogOut className="w-7 h-7 cursor-pointer text-gray-300"
        onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  )
}

export default Logout;