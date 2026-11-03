'use client';
import { useEffect, useState } from 'react';

export default function TopBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  useEffect(() => {
    const close = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, []);

  return (
    <header className="topbar">
      <div className="wrap topbar-in">
        <button
          type="button"
          className="burger"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>
        <nav id="primary-nav" aria-label="Primary">
          <a href="#works" onClick={() => setOpen(false)}>Works</a>
          <a href="#systems" onClick={() => setOpen(false)}>Systems</a>
          <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </nav>
        <div className="topbar-actions">
          <a className="btn btn-gold btn-sm" href="mailto:muhamaddafinaldzaky@gmail.com">
            Contact me <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}
