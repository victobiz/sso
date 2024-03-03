// Footer.js

import Link from 'next/link';

const Footer = () => {

  // Define the dashboard routes
  const dashboardRoutes = [
    { path: '/dashboard', label: 'Dashboard 1' },
    { path: '/dashboard2', label: 'Dashboard 2' },
    { path: '/dashboard3', label: 'Dashboard 3' },
    { path: '/dashboard4', label: 'Dashboard 4' },
  ];

  return (
    <footer>
      <ul style={{
            display: 'flex',
            gap: '1em'
      }}>
        {dashboardRoutes.map((route) => (
          <li key={route.path}>
            <Link href={route.path}>
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;