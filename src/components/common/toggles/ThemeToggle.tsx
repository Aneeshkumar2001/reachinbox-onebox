import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeProvider";
import Switch from "@/components/ui/switch";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = (checked: boolean) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <div className="flex items-center space-x-2">
      <Sun className={`h-5 w-5 ${theme === "dark" ? "hidden" : "block"}`} />
      <Switch
        checked={theme === "dark"}
        onCheckedChange={toggleTheme}
        className="relative inline-flex items-center h-6 rounded-full w-11"
      />
      <Moon className={`h-5 w-5 ${theme === "dark" ? "block" : "hidden"}`} />
    </div>
  );
}
