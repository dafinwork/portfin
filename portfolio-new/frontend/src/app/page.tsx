'use client';
import TopBar from '../components/TopBar';

export default function Page() {
  return (
    <>
      <a className="skip" href="#works" data-i18n="skip">Skip to works</a>
      <TopBar />
      <main id="top">

  {/* HERO */}
  <section className="wrap hero" aria-label="Introduction">
    <div className="hero-main card">
      <h1 data-i18n="hero.h1">Hi<br />there<span className="dot">!</span></h1>
      <p className="lede" data-i18n="hero.lede">I&rsquo;m <strong>Muhamad Dafin Al Dzaky</strong>, full-stack web developer and software engineer based in Bekasi, Indonesia. I build robust web applications with Laravel, PHP, and modern JavaScript, building end-to-end management systems, API automations, and data-driven platforms. I also handle computer hardware assembly, diagnostics, and system setup.</p>
      <div className="hero-cta">
        <a className="btn btn-gold" href="#works" data-i18n="hero.see">See works <span aria-hidden="true">↓</span></a>
        <a className="btn btn-paper" href="mailto:muhamaddafinaldzaky@gmail.com" data-i18n="hero.email">Email me</a>
        <a className="btn btn-ghost" href="https://linkedin.com/in/muhamad-dafin-al-dzaky" target="_blank" rel="noopener">LinkedIn</a>
      </div>
      <dl className="stats">
        <div><dt>3+</dt><dd data-i18n="stat.sites">production sites shipped</dd></div>
        <div><dt>5</dt><dd data-i18n="stat.roles">dev roles, remote freelance</dd></div>
        <div><dt>3</dt><dd data-i18n="stat.certs">pro certs · IBM &amp; Cisco</dd></div>
      </dl>
    </div>
    <aside className="hero-side">
      <div className="card side-card">
        <p className="side-label" data-i18n="side.curLabel">Currently</p>
        <p className="side-big" data-i18n="side.curTitle">Full-Stack Web Developer @ Z3 Techno Solution</p>
        <p className="side-small" data-i18n="side.curDesc">High-rise ticketing, multi-outlet POS &amp; inventory, and Hotel PMS with OCR (Laravel, SQLite, MySQL, Python).</p>
      </div>
      <div className="card side-card wine">
        <p className="side-label" data-i18n="side.prevLabel">Previously</p>
        <p className="side-big" data-i18n="side.prevTitle">AI &amp; Automation Developer @ KLIK Rekrut</p>
        <p className="side-small" data-i18n="side.prevDesc">LinkedIn lead-gen system (Google X-Ray), Gemini + Groq intent filter, Baileys WhatsApp bot.</p>
        <a className="btn btn-gold btn-sm" href="#experience" data-i18n="side.prevBtn">Work history <span aria-hidden="true">↓</span></a>
      </div>
      <div className="card side-card mini">
        <span aria-hidden="true" className="diamond"></span>
        <p data-i18n="side.mini">Full-stack + hardware. Remote-ready.</p>
      </div>
    </aside>
  </section>

  {/* WORKS : website-in-website */}
  <section className="wrap section" id="works" aria-label="Selected works">
    <div className="sec-head">
      <p className="sec-no" data-i18n="works.no">01 / Gallery</p>
      <h2 data-i18n="works.h2">Selected Works<span className="dot">.</span></h2>
      <p className="sec-sub" data-i18n="works.sub">Live sites embedded below. Browse each site <em>inside</em> this page. If a site blocks embedding, use <strong>Open live ↗</strong>.</p>
    </div>

    {/* WORK 1 */}
    <article className="card work">
      <div className="work-info">
        <p className="work-index">W-01</p>
        <h3>Secondhand Marketplace</h3>
        <p data-i18n="w1.desc">Front-end demo for a second-hand marketplace. Product listings, categories, detail views - static build deployed on GitHub Pages.</p>
        <ul className="tags">
          <li>HTML</li><li>CSS</li><li>JavaScript</li><li>GitHub Pages</li>
        </ul>
        <div className="work-btns">
          <a className="btn btn-gold btn-sm" href="https://dafinwork.github.io/secondhand-marketplace/" target="_blank" rel="noopener" data-i18n="openlive">Open live <span aria-hidden="true">↗</span></a>
          <button className="btn btn-paper btn-sm" type="button" data-reload="frame-market" data-i18n="reload">Reload preview</button>
        </div>
      </div>
      <div className="browser" role="group" aria-label="Live preview: Secondhand Marketplace">
        <div className="browser-bar">
          <span className="dots" aria-hidden="true"><i></i><i></i><i></i></span>
          <span className="url">dafinwork.github.io/secondhand-marketplace/</span>
          <span className="live"><i></i>LIVE</span>
        </div>
        <iframe id="frame-market" title="Live preview of Secondhand Marketplace website" src="https://dafinwork.github.io/secondhand-marketplace/" loading="lazy" referrerPolicy="no-referrer" sandbox="allow-scripts allow-same-origin allow-forms"></iframe>
      </div>
    </article>

    {/* WORK 2 */}
    <article className="card work">
      <div className="work-info">
        <p className="work-index">W-02</p>
        <h3>Klik Rekrut - Recruitment Platform</h3>
        <p data-i18n="w2.desc">Company platform I worked on as web developer: voucher-code promo system and wallet with withdrawal, wired with Google Apps Script.</p>
        <ul className="tags">
          <li>GAS</li><li>JavaScript</li><li>PHP</li><li>HTML</li><li>CSS</li>
        </ul>
        <div className="work-btns">
          <a className="btn btn-gold btn-sm" href="https://klikrekrut.com/" target="_blank" rel="noopener" data-i18n="openlive">Open live <span aria-hidden="true">↗</span></a>
          <button className="btn btn-paper btn-sm" type="button" data-reload="frame-klik" data-i18n="reload">Reload preview</button>
        </div>
      </div>
      <div className="browser" role="group" aria-label="Live preview: Klik Rekrut">
        <div className="browser-bar">
          <span className="dots" aria-hidden="true"><i></i><i></i><i></i></span>
          <span className="url">klikrekrut.com</span>
          <span className="live"><i></i>LIVE</span>
        </div>
        <iframe id="frame-klik" title="Live preview of Klik Rekrut website" src="https://klikrekrut.com/" loading="lazy" referrerPolicy="no-referrer" sandbox="allow-scripts allow-same-origin allow-forms"></iframe>
        <p className="embed-note" data-i18n="embednote.klik">If this frame shows blank, the site blocks embedding: click <a href="https://klikrekrut.com/" target="_blank" rel="noopener">Open live ↗</a>.</p>
      </div>
    </article>

    {/* WORK 3 */}
    <article className="card work">
      <div className="work-info">
        <p className="work-index">W-03</p>
        <h3>Kaos Dilio - Apparel Storefront</h3>
        <p data-i18n="w3.desc">Live catalog and custom-order site for the Kaos Dilio apparel brand, built with React + Supabase. Browse the real storefront inside this frame.</p>
        <ul className="tags">
          <li>React</li><li>Vite</li><li>Tailwind</li><li>Supabase</li><li>Vercel</li>
        </ul>
        <div className="work-btns">
          <a className="btn btn-gold btn-sm" href="https://kaosdilio.com/" target="_blank" rel="noopener" data-i18n="openlive">Open live <span aria-hidden="true">↗</span></a>
          <button className="btn btn-paper btn-sm" type="button" data-reload="frame-dilio" data-i18n="reload">Reload preview</button>
        </div>
      </div>
      <div className="browser" role="group" aria-label="Live preview: Kaos Dilio">
        <div className="browser-bar">
          <span className="dots" aria-hidden="true"><i></i><i></i><i></i></span>
          <span className="url">kaosdilio.com</span>
          <span className="live"><i></i>LIVE</span>
        </div>
        <iframe id="frame-dilio" title="Live preview of Kaos Dilio website" src="https://kaosdilio.com/" loading="lazy" referrerPolicy="no-referrer" sandbox="allow-scripts allow-same-origin allow-forms"></iframe>
        <p className="embed-note" data-i18n="embednote.dilio">If this frame shows blank, the site blocks embedding: click <a href="https://kaosdilio.com/" target="_blank" rel="noopener">Open live ↗</a>.</p>
      </div>
    </article>

    {/* WORK 4 */}
    <article className="card work">
      <div className="work-info">
        <p className="work-index">W-04</p>
        <h3>IRIJ Jakarta - Research Institute</h3>
        <p data-i18n="w4.desc">Company profile and research publication site for Indonesia Research Institute Japan. Built and customized in WordPress with custom PHP, HTML, CSS, and JavaScript.</p>
        <ul className="tags">
          <li>WordPress</li><li>PHP</li><li>HTML</li><li>CSS</li><li>JavaScript</li>
        </ul>
        <div className="work-btns">
          <a className="btn btn-gold btn-sm" href="https://irij-jakarta.com/" target="_blank" rel="noopener" data-i18n="openlive">Open live <span aria-hidden="true">↗</span></a>
        </div>
      </div>
      <div className="browser site-shot" role="group" aria-label="Website preview: IRIJ Jakarta">
        <div className="browser-bar">
          <span className="dots" aria-hidden="true"><i></i><i></i><i></i></span>
          <span className="url">irij-jakarta.com</span>
          <span className="live"><i></i>LIVE</span>
        </div>
        <div className="browser-screen" tabIndex={0} role="region" aria-label="Scrollable preview of IRIJ Jakarta">
          <img src="/preview-irij.png" alt="IRIJ Jakarta website hero preview" loading="lazy" />
        </div>
        <p className="embed-note" data-i18n="embednote.irij">Preview image shown because the live site may block iframe embedding.</p>
      </div>
    </article>
  </section>

  {/* SYSTEMS : off-screen work, no iframe possible */}
  <section className="wrap section" id="systems" aria-label="Systems and automation">
    <div className="sec-head">
      <p className="sec-no" data-i18n="sys.no">02 / Automation</p>
      <h2 data-i18n="sys.h2">Off-screen Work<span className="dot">.</span></h2>
      <p className="sec-sub" data-i18n="sys.sub">This project runs headless. The useful part is the pipeline: where leads enter, how they are filtered, and when the bot sends them to WhatsApp.</p>
    </div>

    <article className="card sys bot-system">
      <div className="sys-head">
        <p className="work-index">S-01</p>
        <h3>LinkedIn Lead-Gen + WhatsApp Dispatch Bot</h3>
        <p className="job-org">AI &amp; Automation · KLIK Rekrut · Node.js</p>
      </div>
      <ol className="pipe">
        <li><strong>1 · Hybrid Ingestion</strong><span data-i18n="s1.d1">Dual-engine scraping using persistent Playwright Chromium for real-time past-24h feeds and Google X-Ray for unauthenticated deep search.</span></li>
        <li aria-hidden="true" className="arr">→</li>
        <li><strong>2 · Snowflake &amp; Pre-Filter</strong><span data-i18n="s1.d2">Decodes LinkedIn Snowflake activity IDs for millisecond-precision age filtering, SQLite deduplication, and eliminates non-personal/foreign posts.</span></li>
        <li aria-hidden="true" className="arr">→</li>
        <li><strong>3 · Dual-LLM Intent Filter</strong><span data-i18n="s1.d3">Gemini &amp; Groq semantic analysis with automated key pooling to detect genuine B2B buyer intent (seeking recruitment vendors vs posting jobs).</span></li>
        <li aria-hidden="true" className="arr">→</li>
        <li><strong>4 · WhatsApp Dispatch</strong><span data-i18n="s1.d4">Built on Baileys socket. Dispatches consolidated leads via a staggered 2-hour queue and handles real-time interactive query commands in sales groups.</span></li>
      </ol>
      <ul className="tags">
        <li>Node.js</li><li>JavaScript</li><li>Playwright</li><li>Gemini API</li><li>Groq API</li><li>Baileys WA API</li><li>SQLite</li><li>Automation</li>
      </ul>
      <p className="sys-note" data-i18n="s1.note">Headless by design. 24/7 background worker. Architecture walkthrough and source code available on request.</p>
    </article>

  </section>

  {/* EXPERIENCE */}
  <section className="wrap section" id="experience" aria-label="Experience">
    <div className="sec-head">
      <p className="sec-no" data-i18n="exp.no">03 / Work log</p>
      <h2 data-i18n="exp.h2">Experience<span className="dot">.</span></h2>
    </div>

    <article className="card job">
      <div className="job-top">
        <p className="job-role" data-i18n="jz3.role">Full-Stack Web Developer / Software Engineer</p>
        <p className="job-date" data-i18n="jz3.date">2025 – Present</p>
      </div>
      <p className="job-org">Z3 Techno Solution · Bekasi, Indonesia</p>
      <ul>
        <li data-i18n="jz3.li1"><strong>Building Engineering &amp; Inspection Ticketing System:</strong> Developed high-rise facility engineering and ticketing platform (Laravel 11, SQLite) featuring interactive 2D floor plans with percentage-based (x%, y%) vector pin placement, equipment lifecycle tracking, and 6-tier RBAC security.</li>
        <li data-i18n="jz3.li2"><strong>Multi-Outlet Inventory &amp; POS Platform:</strong> Engineered a multi-branch inventory and POS system (Laravel 12, MySQL) with tiered unit conversions (Box -&gt; Pack -&gt; Pcs), real-time stock balance audit ledgers, global barcode search, and tablet-optimized cashier UI.</li>
        <li data-i18n="jz3.li3"><strong>Hotel Property Management System (PMS):</strong> Built an end-to-end Hotel PMS integrating a local Python Tesseract OCR service for automated KTP identity scanning, repeat-guest duplicate resolution, OTA reservation workflows, and 41 PHPUnit automated tests.</li>
        <li data-i18n="jz3.li4"><strong>Corporate Web &amp; Automation Tooling:</strong> Built company web profile and catalog alongside custom Python deployment scripts for automated FTP deployments, database backups, and live data verification.</li>
      </ul>
      <p className="job-skills">Laravel (11/12) · PHP 8.2+ · MySQL · SQLite · Python (Tesseract OCR) · Blade · Vite · Tailwind CSS · PHPUnit</p>
    </article>

    <article className="card job">
      <div className="job-top"><p className="job-role">AI &amp; Automation Developer</p><p className="job-date">Aug 2026 - Now</p></div>
      <p className="job-org">KLIK Rekrut · Jakarta Pusat (remote)</p>
      <ul>
        <li data-i18n="j1.li1">Automated LinkedIn lead generation with Google X-Ray queries for HR / Talent Acquisition / Founders.</li>
        <li data-i18n="j1.li2">Filtering engine with Google Gemini + Groq LLMs: semantic intent analysis, drops company pages.</li>
        <li data-i18n="j1.li3">WhatsApp dispatch bot (Baileys) with cron scheduling + query commands to sales groups.</li>
        <li data-i18n="j1.li4">Fixed timestamp drift by decoding LinkedIn snowflake activity IDs for exact post age.</li>
      </ul>
      <p className="job-skills">Node.js · JavaScript · Gemini API · Groq API · Baileys WA API · Scraping · Automation</p>
    </article>

    <article className="card job">
      <div className="job-top"><p className="job-role">Web Developer</p><p className="job-date">May 2026 - Jul 2026</p></div>
      <p className="job-org">KLIK Rekrut · Jakarta Pusat (remote)</p>
      <ul>
        <li data-i18n="j2.li1">Voucher-code promo system integrated into the platform.</li>
        <li data-i18n="j2.li2">Wallet system with withdrawal / cash-out of in-platform balance.</li>
        <li data-i18n="j2.li3">Built on Google Apps Script connecting web logic to backend data.</li>
      </ul>
      <p className="job-skills">Google Apps Script · JavaScript · PHP · HTML · CSS</p>
    </article>

    <article className="card job">
      <div className="job-top"><p className="job-role">WordPress Developer</p><p className="job-date">Mar 2026 - May 2026</p></div>
      <p className="job-org">PT Institute Research Japan Indonesia · Jakarta Pusat (remote)</p>
      <ul>
        <li data-i18n="j3.li1">Redesigned company WordPress profile site: structure, visual consistency, content organization.</li>
        <li data-i18n="j3.li2">Custom PHP / HTML / CSS / JS extensions beyond default WP behavior.</li>
        <li data-i18n="j3.li3">Delivered on schedule with project-management tooling, fully remote.</li>
      </ul>
      <p className="job-skills">WordPress · PHP · HTML · CSS · JavaScript · Project Management</p>
    </article>

    <article className="card job">
      <div className="job-top"><p className="job-role">Web Developer - Internship &amp; Freelance</p><p className="job-date">Jun 2025 - Jul 2025</p></div>
      <p className="job-org">KLIK Rekrut · Jakarta (remote)</p>
      <ul>
        <li data-i18n="j4.li1">Modular Blade templates, responsive mobile-friendly layouts, JS animations.</li>
        <li data-i18n="j4.li2">Git-based remote collaboration.</li>
      </ul>
      <p className="job-skills">Laravel · Blade · Bootstrap · JavaScript · Git · HTML · CSS</p>
    </article>

    <article className="card job dim">
      <div className="job-top"><p className="job-role">Barista</p><p className="job-date">2023 - 2025</p></div>
      <p className="job-org">Kopi Konnichiwa · Bekasi</p>
      <p data-i18n="barista.p">Prepared and served coffee and beverage orders in a fast-paced café; maintained service standards.</p>
    </article>

    <div className="center">
      <a className="btn btn-gold" href="#contact" data-i18n="exp.cta">Let&rsquo;s work together <span aria-hidden="true">↓</span></a>
    </div>
  </section>

  {/* ABOUT */}
  <section className="wrap section" id="about" aria-label="About">
    <div className="sec-head">
      <p className="sec-no" data-i18n="about.no">04 / Profile</p>
      <h2 data-i18n="about.h2">About<span className="dot">.</span></h2>
    </div>
    <div className="about-grid">
      <div className="card about-main">
        <p className="side-label">Bio</p>
        <p data-i18n="about.bio">S1 Informatics graduate (Software Engineering concentration), Universitas Bhayangkara Jakarta Raya, 2022–2026. Vocational RPL background (SMKN 5 Bekasi, 2019–2022). I build full-stack websites end to end, and I also handle hardware: assembly, config, troubleshooting, installs.</p>
        <div className="edu">
          <div><strong>S1 - Univ. Bhayangkara Jakarta Raya</strong><span>Informatics · Software Engineering · GPA 3.33 · 2022–2026</span></div>
          <div><strong>SMK Negeri 5 Kota Bekasi</strong><span>Rekayasa Perangkat Lunak (RPL) · 2019–2022 · final project: healthcare site, Laravel + MySQL</span></div>
        </div>
      </div>
      <div className="card">
        <p className="side-label" data-i18n="about.tech">Tech Stack</p>
        <div className="tech-group">
          <p className="tech-label">Backend &amp; Core</p>
          <ul className="tech-tags">
            <li>Laravel 11/12</li><li>PHP 8.2+</li><li>Blade</li><li>Node.js</li><li>Python</li>
          </ul>
        </div>
        <div className="tech-group">
          <p className="tech-label">Databases</p>
          <ul className="tech-tags">
            <li>MySQL</li><li>SQLite</li>
          </ul>
        </div>
        <div className="tech-group">
          <p className="tech-label">Frontend</p>
          <ul className="tech-tags">
            <li>JavaScript (ES6+)</li><li>React</li><li>Vite</li><li>Tailwind CSS</li><li>Bootstrap</li><li>HTML5/CSS3</li>
          </ul>
        </div>
        <div className="tech-group">
          <p className="tech-label">Automation &amp; APIs</p>
          <ul className="tech-tags">
            <li>Tesseract OCR</li><li>Google Apps Script</li><li>Gemini API</li><li>Groq API</li><li>Baileys WA</li><li>Playwright</li>
          </ul>
        </div>
        <div className="tech-group">
          <p className="tech-label">Testing &amp; Tools</p>
          <ul className="tech-tags">
            <li>PHPUnit</li><li>Git</li><li>VS Code</li>
          </ul>
        </div>
      </div>
      <div className="card">
        <p className="side-label" data-i18n="about.hw">Hardware &amp; support</p>
        <ul className="plain">
          <li>PC assembly &amp; component installs</li>
          <li>Windows fresh install, drivers, apps</li>
          <li>PC / laptop fault diagnosis</li>
          <li>Technical &amp; user support</li>
        </ul>
        <p className="side-label" style={{ marginTop: "16px" }} data-i18n="about.certs">Certs</p>
        <ul className="plain">
          <li>Python for Data Science - IBM (Nov 2024)</li>
          <li>Intro to Cybersecurity - Cisco (Nov 2024)</li>
          <li>Junior Cybersecurity Analyst - Cisco</li>
        </ul>
      </div>
    </div>
  </section>

  {/* CONTACT */}
  <section className="wrap section" id="contact" aria-label="Contact">
    <div className="card contact-card">
      <div className="contact-left">
        <p className="sec-no" data-i18n="contact.no">05 / Contact</p>
        <h2 data-i18n="contact.h2">Wanna tell me something?</h2>
        <p data-i18n="contact.desc">Open for full-time, freelance, and project work. Fastest reply: email or WhatsApp. Based in Bekasi Utara. Remote OK.</p>
        <p className="contact-lines">
          <span>muhamaddafinaldzaky@gmail.com</span>
          <span>+62 812-8184-5863</span>
        </p>
        <div className="work-btns">
          <a className="btn btn-gold" href="mailto:muhamaddafinaldzaky@gmail.com">Email <span aria-hidden="true">↗</span></a>
          <a className="btn btn-paper" href="https://wa.me/6281281845863" target="_blank" rel="noopener">WhatsApp</a>
          <a className="btn btn-ghost" href="https://linkedin.com/in/muhamad-dafin-al-dzaky" target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </div>
      <div className="contact-right">
        <p className="avail-label" data-i18n="contact.availLabel">CURRENTLY TAKING</p>
        <p className="avail"><span aria-hidden="true">●</span> PROJECTS</p>
        <p data-i18n="contact.avail2">Full-time · Freelance · Project work</p>
        <span className="avail-rule" aria-hidden="true"></span>
        <p className="avail-note" data-i18n="contact.availNote">Web builds, WordPress work, and automation systems.</p>
      </div>
    </div>
  </section>

      </main>
      <footer>
  <div className="wrap foot-in">
    <p>© 2026 Muhamad Dafin Al Dzaky.</p>
    <a className="btn btn-gold btn-sm" href="#top" data-i18n="foot.top">Back to top ↑</a>
  </div>
</footer>
    </>
  );
}
