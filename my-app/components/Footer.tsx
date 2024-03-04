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
    <footer className="text-center">
      <ul style={{
          display: 'grid',
          gap: '1em',
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          justifyContent: 'space-around',
          margin: 'auto',
          maxWidth: '400px',
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