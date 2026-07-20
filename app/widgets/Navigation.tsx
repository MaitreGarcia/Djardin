import { NavLink } from "react-router"

function NavigationItem({ children, to }: { children: any, to: string }) {
  return (
    <NavLink to={to} className="flex items-center justify-center text-dj-green-600 min-h-15" >
      {children}
    </NavLink>
  )
}

export default function Navigation() {
  return (
    <nav
      className="navigation-bar grid grid-cols-4 md:grid-cols-1 md:max-w-25 md:min-h-screen ga-2 fixed md:relative bottom-0 left-0 w-full border-t md:border-t-0 md:border-r border-dj-green-600"
    >
      <NavigationItem to="/">
        Home
      </NavigationItem>
      <NavigationItem to="/flowers">
        Flowers
      </NavigationItem>
      <NavigationItem to="/wiki">
        Wiki
      </NavigationItem>
      <NavigationItem to="/settings">
        Settings
      </NavigationItem>
    </nav>
  )
}
