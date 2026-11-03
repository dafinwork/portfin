'use client';
import { useEffect, useState } from 'react';
import { useI18n } from '../lib/i18n';

export default function TopBar() {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useI18n();

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
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
          <a href="#works" data-i18n="nav.works" onClick={() => setOpen(false)}>Works</a>
          <a href="#systems" data-i18n="nav.systems" onClick={() => setOpen(false)}>Systems</a>
          <a href="#experience" data-i18n="nav.exp" onClick={() => setOpen(false)}>Experience</a>
          <a href="#about" data-i18n="nav.about" onClick={() => setOpen(false)}>About</a>
          <a href="#contact" data-i18n="nav.contact" onClick={() => setOpen(false)}>Contact</a>
        </nav>
        <div className="topbar-actions">
          <div className="lang" role="group" aria-label="Language selector">
            <button
              type="button"
              data-lang="en"
              className={lang === 'en' ? 'on' : ''}
              aria-pressed={lang === 'en'}
              onClick={() => setLang('en')}
            >
              EN
            </button>
            <button
              type="button"
              data-lang="id"
              className={lang === 'id' ? 'on' : ''}
              aria-pressed={lang === 'id'}
              onClick={() => setLang('id')}
            >
              ID
            </button>
          </div>
          <a className="btn btn-gold btn-sm" href="mailto:muhamaddafinaldzaky@gmail.com" data-i18n="nav.cta">
            Contact me <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}
