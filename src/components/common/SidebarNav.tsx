import { sidebarLinks } from "@/common/constants/sidebar.constants";
import { cn } from "@/lib/utils";
import { User2Icon } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/icons/logo.svg";

const SideBarNav = () => {
  const currentPath = useLocation().pathname;
  const isProfile = currentPath === "/profile";
  return (
    <div className="fixed inset-y-0 left-0 z-10 hidden w-16 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-5 px-2 sm:py-2">
        <div className="h-20 flex justify-center items-center">
          <img
            src={logo}
            className="h-8 rounded-xl object-left overflow-visible"
            alt="Logo"
          />
        </div>
        {sidebarLinks.map((link, index) => {
          const isActive = currentPath === link.href;
          return (
            <React.Fragment key={index}>
              <Link
                to={link.href}
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 py-5",
                  { "bg-accent text-accent-foreground": isActive }
                )}
              >
                <link.icon className="h-5 w-5" />
              </Link>
            </React.Fragment>
          );
        })}
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          to={"/profile"}
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
            { "bg-accent text-accent-foreground": isProfile }
          )}
        >
          <User2Icon className="h-5 w-5" />
          <span className="sr-only">Profile</span>
        </Link>
      </nav>
    </div>
  );
};

export default SideBarNav;
