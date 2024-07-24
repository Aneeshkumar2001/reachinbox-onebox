import { ModeToggle } from "./toggles/ThemeToggle";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";

function NavBar() {
  return (
    <>
      <div className="h-16 w-screen bg-white  dark:bg-[#1F1F1F] fixed text-[#5B5F66] dark:text-white top-0 left-16 px-5 flex justify-between items-center border-b-2 dark:border-[#343A40] border-[#E0E0E0]">
        <h1 className="text-xl font-bold">Onebox</h1>
        <div className="pr-20 flex items-center gap-5">
          <ModeToggle />
          <span className="flex">
            {" "}
            Tim's Workspace <ChevronDown className="text-3xl ml-3" />
          </span>
        </div>
      </div>
      <Separator />
    </>
  );
}

export default NavBar;
