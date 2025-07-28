'use client'
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

export default function JokePage() {
  const [joke, setJoke] = useState({ setup: '', punchline: '' });

  useEffect(() => {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(res => res.json())
      .then(data => setJoke({ setup: data.setup, punchline: data.punchline }));
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ padding: '20px' }}>
        <h2>Random Joke</h2>
        <p><strong>Setup:</strong> {joke.setup}</p>
        <p><strong>Punchline:</strong> {joke.punchline}</p>
      </main>
    </>
  );
}
