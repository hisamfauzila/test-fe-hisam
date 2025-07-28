import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={styles.main}>
        <div style={styles.hero}>
          <h1 style={styles.title}>Halo, saya <span style={styles.name}>HISAM FAUZIL AFKAR</span></h1>
          <p style={styles.subtitle}>
            Saya sangat antusias bergabung dengan <strong>TMA</strong>!<br /><br />
            Harapan saya, TMA menjadi tempat terbaik untuk berkembang, belajar, dan memberikan kontribusi nyata dalam dunia teknologi yang terus tumbuh.
          </p>
          <a href="/joke" style={styles.button}>Lihat Joke Seru</a>
        </div>
      </main>
    </>
  );
}

const styles = {
  main: {
    height: '100vh',
    background: 'linear-gradient(135deg, #e3f2fd, #f3e5f5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    boxSizing: 'border-box',
  },
  hero: {
    maxWidth: '700px',
    textAlign: 'center',
    background: '#ffffffdd',
    padding: '50px',
    borderRadius: '24px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '20px',
    fontWeight: 'bold',
    color: '#4a148c',
  },
  name: {
    color: '#00838f',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#444',
    lineHeight: '1.7',
  },
  button: {
    display: 'inline-block',
    marginTop: '30px',
    padding: '12px 24px',
    backgroundColor: '#6a1b9a',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '10px',
    fontWeight: 'bold',
    transition: 'background 0.3s ease',
  },
};
