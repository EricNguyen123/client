type ComponentNavItem = { 
  title: string; 
  href: string; 
  description: string 
}

type ComponentNavMenu = { 
  link: string; 
  name: string 
}

type DataUser = {
  id: string
  roles: "admin" | "user" | "author"
  email: string
  name: string
  isActive: boolean
}
