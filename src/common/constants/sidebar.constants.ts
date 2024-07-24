import { RiHome5Fill, RiMailFill, RiUserSearchLine } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import { SiElasticstack } from "react-icons/si";
import { FaInbox } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";

export const sidebarLinks = [
  {
    icon: RiHome5Fill,
    href: "/",
  },
  {
    icon: RiUserSearchLine,
    href: "/search",
  },
  {
    icon: RiMailFill,
    href: "/mail",
  },
  {
    icon: IoIosSend,
    href: "/send",
  },
  {
    icon: SiElasticstack,
    href: "/stack",
  },
  {
    icon: FaInbox,
    href: "/inbox",
  },
  {
    icon: IoStatsChartSharp,
    href: "/stacks",
  },
];
