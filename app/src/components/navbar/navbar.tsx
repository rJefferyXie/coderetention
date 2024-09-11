"use client"

// Styles
import '../../app/styles/navbar.scss';

// React + Next
import { useRouter } from 'next/navigation';

// MUI
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import DashboardIcon from '@mui/icons-material/Dashboard'
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

const Navbar = () => {
  const router = useRouter();

  const navLinks = [
    {
      name: "FIGHT FOREVER",
      href: "/",
      icon: <AllInclusiveIcon></AllInclusiveIcon>
    },
    {
      name: "Dashboard",
      href: "dashboard",
      icon: <DashboardIcon></DashboardIcon>
    },
    {
      name: "Wrestlers",
      href: "wrestlers",
      icon: <SportsKabaddiIcon></SportsKabaddiIcon>
    },
  ]

  const navigate = (destination: string) => {
    router.push(destination);
  }

  return (
    <nav className="nav z-40 bg-white bg-opacity-20 shadow-lg">
      {navLinks.map((link, idx) => {
        return (
          <div
            key={idx}
            onClick={() => navigate(link.href)}
            className="nav-link cursor-pointer"
          >
            <p className="nav-link-icon">{link.icon}</p>
            <p className="nav-link-text">{link.name}</p>
          </div>
        )
      })}
    </nav>
  )
}

export default Navbar;