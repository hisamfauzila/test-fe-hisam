'use client'
import Link from 'next/link';

const Navbar = () => (
  <nav style={styles.nav}>
    <div style={styles.menu}>
      <Link href="/" style={styles.link}>Beranda</Link>
      <Link href="/joke" style={styles.link}>Lihat Joke</Link>
    </div>
  </nav>
);

const styles = {
  nav: {
    width: '100%',
    padding: '15px 30px',
    position: 'fixed',
    top: 0,
    left: 0,
    background: '#ffffffee',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
    zIndex: 10,
  },
  menu: {
    display: 'flex',
    gap: '20px',
  },
  link: {
    fontWeight: 'bold',
    color: '#6a1b9a',
    textDecoration: 'none',
  },
};

export default Navbar;
