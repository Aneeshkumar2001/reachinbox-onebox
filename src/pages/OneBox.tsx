import NavBar from "@/components/common/Navbar";
import SideBarNav from "@/components/common/SidebarNav";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function OneBox() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", `Bearer ${token}`);
      navigate("/"); // Redirect to inbox after storing the token
    } else if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [token]);

  return (
    <div className="h-screen w-screen dark:bg-black bg-white pl-14">
      <SideBarNav />
      <NavBar />
      <Outlet />
    </div>
  );
}

export default OneBox;
