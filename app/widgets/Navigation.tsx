import { BookOpenText, House, Settings } from "lucide-react"
import { NavLink } from "react-router"

function NavigationItem({ children, to }: { children: React.ReactNode, to: string }) {
  return (
    <NavLink to={to} className="flex flex-col gap-2 items-center justify-center text-dj-green-600 min-h-15">
      {children}
    </NavLink>
  )
}

export default function Navigation() {
  return (
    <nav
      className="navigation-bar z-10 grid grid-cols-3 md:grid-cols-1 md:max-w-25 md:min-h-screen ga-2 fixed md:relative bottom-0 left-0 w-full border-t md:border-t-0 md:border-r border-dj-green-600 bg-dj-green-50"
    >
      <NavigationItem to="/">
        <House />
        Home
      </NavigationItem>
      <NavigationItem to="/wiki">
        <BookOpenText />
        Wiki
      </NavigationItem>
      <NavigationItem to="/settings">
        <Settings />
        Settings
      </NavigationItem>
    </nav>
  )
}
