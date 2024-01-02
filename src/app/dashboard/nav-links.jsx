import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,
    UserIcon,
    TruckIcon,
  } from '@heroicons/react/24/outline';
  
  const links = [
    { name: 'Home', href: '/dashboard', icon: HomeIcon },
    { name: 'User Profile', href: '/dashboard/profile', icon: UserIcon },
    { name: 'Services', href: '/dashboard/services', icon: TruckIcon },
    { name: 'Testimonies', href: '/dashboard/testimonies', icon: UserGroupIcon },
  ];
  
  function NavLinks() {
    return (
      <>
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <link.icon className="w-6" /> {/* Using link.icon directly for dynamic rendering */}
            <p className="hidden md:block">{link.name}</p>
          </a>
        ))}
      </>
    );
  }
  
  export default NavLinks;
  