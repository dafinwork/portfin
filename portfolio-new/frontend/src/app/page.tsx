import TopBar from '../components/TopBar';

export default function Page() {
  return (
    <>
      <a className="skip" href="#works">Skip to works</a>
      <TopBar />
      <main id="top">
        {/* HERO */}
        <section className="wrap hero" aria-label="Introduction">
          <div className="hero-main card">
            <h1>Hi<br />there<span className="dot">!</span></h1>
            <p className="lede">
              I&rsquo;m Muhamad Dafin Al Dzaky, a full-stack developer using Next.js, React, Supabase, Go, Docker, Laravel, PHP, JavaScript, and Node.js. I also provide IT support for PC and laptop setup, troubleshooting, and maintenance.
            </p>
            <div className="hero-cta">
              <a className="btn btn-gold" href="#works">See works <span aria-hidden="true">↗</span></a>
              <a className="btn btn-paper" href="mailto:muhamaddafinaldzaky@gmail.com">Email me</a>
              <a className="btn btn-ghost" href="https://linkedin.com/in/muhamad-dafin-al-dzaky" target="_blank" rel="noopener">LinkedIn</a>
            </div>
            <dl className="stats">
              <div><dt>3+</dt><dd>production sites shipped</dd></div>
              <div><dt>4</dt><dd>dev roles, freelance</dd></div>
              <div><dt>Remote</dt><dd>ready to work</dd></div>
            </dl>
          </div>
          <aside className="hero-side">
            <div className="card side-card">
              <p className="side-label">Currently</p>
              <p className="side-big">AI &amp; Automation Developer @ KLIK Rekrut</p>
              <p className="side-small">LinkedIn lead-gen system (Google X-Ray), Gemini + Groq intent filter, Baileys WhatsApp dispatch bot with cron.</p>
            </div>
            <div className="card side-card wine">
              <p className="side-label">Previously</p>
              <p className="side-big">WordPress company profile and platform-side web development.</p>
              <a className="btn btn-gold btn-sm" href="#experience">Work history <span aria-hidden="true">↗</span></a>
            </div>
            <div className="card side-card mini">
              <span aria-hidden="true" className="diamond"></span>
              <p>Full-stack + IT support.</p>
            </div>
          </aside>
        </section>

        {/* STACK */}
        <section className="wrap stack-section" aria-label="Tech stack">
          <div className="stack-intro">
            <p className="sec-no">Tools I actually use</p>
            <h2>The stack follows the work<span className="dot">.</span></h2>
            <p>I pick the tool for the job. The projects below show where Laravel, WordPress, React, and Node.js fit.</p>
          </div>
          <div className="stack-list">
            <div className="stack-row"><strong>Web</strong><span>HTML · CSS · JavaScript · PHP · Laravel · Blade</span></div>
            <div className="stack-row"><strong>Frontend</strong><span>React · Next.js · Vite · Tailwind · Bootstrap</span></div>
            <div className="stack-row"><strong>CMS</strong><span>WordPress · Custom PHP · Theme customization</span></div>
            <div className="stack-row"><strong>Backend</strong><span>Go · Node.js · Supabase · SQLite</span></div>
            <div className="stack-row"><strong>Automation</strong><span>Node.js · Playwright · Google Apps Script · Docker</span></div>
            <div className="stack-row"><strong>APIs</strong><span>Gemini · Groq · Baileys WhatsApp API</span></div>
          </div>
        </section>

        {/* WORKS */}
        <section className="wrap section" id="works" aria-label="Selected works">
          <div className="sec-head">
            <p className="sec-no">01 / Gallery</p>
            <h2>Selected Works<span className="dot">.</span></h2>
            <p className="sec-sub">Live sites embedded below. Browse each site <em>inside</em> this page. If a site blocks embedding, use <strong>Open live ↗</strong>.</p>
          </div>

          <article className="card work">
            <div className="work-info">
              <p className="work-index">W-01</p>
              <h3>Secondhand Marketplace</h3>
              <p>Front-end demo for a second-hand marketplace. Product listings, categories, detail views - static build deployed on GitHub Pages.</p>
              <ul className="tags"><li>HTML</li><li>CSS</li><li>JavaScript</li><li>GitHub Pages</li></ul>
              <div className="work-btns">
                <a className="btn btn-gold btn-sm" href="https://dafinwork.github.io/secondhand-marketplace/" target="_blank" rel="noopener">Open live <span aria-hidden="true">↗</span></a>
              </div>
            </div>
            <div className="browser" role="group" aria-label="Live preview: Secondhand Marketplace">
              <div className="browser-bar">
                <span className="dots" aria-hidden="true"><i></i><i></i><i></i></span>
                <span className="url">dafinwork.github.io/secondhand-marketplace/</span>
                <span className="live"><i></i>LIVE</span>
              </div>
              <iframe title="Live preview of Secondhand Marketplace website" src="https://dafinwork.github.io/secondhand-marketplace/" loading="lazy" referrerPolicy="no-referrer" sandbox="allow-scripts allow-same-origin allow-forms"></iframe>
            </div>
          </article>

          <article className="card work">
            <div className="work-info">
              <p className="work-index">W-02</p>
              <h3>Klik Rekrut - Recruitment Platform</h3>
              <p>Landing page for the Klik Rekrut website that I worked on as a web developer.</p>
              <ul className="tags"><li>GAS</li><li>JavaScript</li><li>PHP</li><li>HTML</li><li>CSS</li></ul>
              <div className="work-btns">
                <a className="btn btn-gold btn-sm" href="https://klikrekrut.com/" target="_blank" rel="noopener">Open live <span aria-hidden="true">↗</span></a>
              </div>
            </div>
            <div className="browser" role="group" aria-label="Live preview: Klik Rekrut">
              <div className="browser-bar">
                <span className="dots" aria-hidden="true"><i></i><i></i><i></i></span>
                <span className="url">klikrekrut.com</span>
                <span className="live"><i></i>LIVE</span>
              </div>
              <iframe title="Live preview of Klik Rekrut" src="https://klikrekrut.com/" loading="lazy" referrerPolicy="no-referrer" sandbox="allow-scripts allow-same-origin allow-forms"></iframe>
              <p className="embed-note">If this frame shows blank, the site blocks embedding: click <a href="https://klikrekrut.com/" target="_blank" rel="noopener">Open live ↗</a>.</p>
            </div>
          </article>

          <article className="card work">
            <div className="work-info">
              <p className="work-index">W-03</p>
              <h3>Kaos Dilio - Apparel Storefront</h3>
              <p>Live catalog and custom-order site for the Kaos Dilio apparel brand, built with React, Vite, Tailwind, Supabase, and Vercel.</p>
              <ul className="tags"><li>React</li><li>Vite</li><li>Tailwind</li><li>Supabase</li><li>Vercel</li></ul>
              <div className="work-btns">
                <a className="btn btn-gold btn-sm" href="https://kaosdilio.com/" target="_blank" rel="noopener">Open live <span aria-hidden="true">↗</span></a>
              </div>
            </div>
            <div className="browser" role="group" aria-label="Live preview: Kaos Dilio">
              <div className="browser-bar">
                <span className="dots" aria-hidden="true"><i></i><i></i><i></i></span>
                <span className="url">kaosdilio.com</span>
                <span className="live"><i></i>LIVE</span>
              </div>
              <iframe title="Live preview of Kaos Dilio" src="https://kaosdilio.com/" loading="lazy" referrerPolicy="no-referrer" sandbox="allow-scripts allow-same-origin allow-forms"></iframe>
              <p className="embed-note">If this frame shows blank, the site blocks embedding: click <a href="https://kaosdilio.com/" target="_blank" rel="noopener">Open live ↗</a>.</p>
            </div>
          </article>

          <article className="card work">
            <div className="work-info">
              <p className="work-index">W-04</p>
              <h3>IRIJ Jakarta - Research Institute</h3>
              <p>Company profile and research publication site for Indonesia Research Institute Japan. Built and customized in WordPress with custom PHP, HTML, CSS, and JavaScript.</p>
              <ul className="tags"><li>WordPress</li><li>PHP</li><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>
              <div className="work-btns">
                <a className="btn btn-gold btn-sm" href="https://irij-jakarta.com/" target="_blank" rel="noopener">Open live <span aria-hidden="true">↗</span></a>
              </div>
            </div>
            <div className="browser site-shot" role="group" aria-label="Website preview: IRIJ Jakarta">
              <div className="browser-bar">
                <span className="dots" aria-hidden="true"><i></i><i></i><i></i></span>
                <span className="url">irij-jakarta.com</span>
                <span className="live"><i></i>LIVE</span>
              </div>
              <a href="https://irij-jakarta.com/" target="_blank" rel="noopener" aria-label="Open IRIJ Jakarta website">
                <img src="https://irij-jakarta.com/wp-content/uploads/2026/04/Desain-tanpa-judul.jpg.jpeg" alt="IRIJ Jakarta website hero preview" loading="lazy" />
              </a>
              <p className="embed-note">Preview image shown because the live site may block iframe embedding.</p>
            </div>
          </article>
        </section>

        {/* SYSTEMS */}
        <section className="wrap section" id="systems" aria-label="Systems and automation">
          <div className="sec-head">
            <p className="sec-no">02 / Automation</p>
            <h2>Off-screen Work<span className="dot">.</span></h2>
            <p className="sec-sub">This project runs headless. The useful part is the pipeline: where leads enter, how they are filtered, and when the bot sends them to WhatsApp.</p>
          </div>

          <article className="card sys bot-system">
            <div className="sys-head">
              <p className="work-index">S-01</p>
              <h3>LinkedIn Lead-Gen + WhatsApp Dispatch Bot</h3>
              <p className="job-org">AI &amp; Automation · KLIK Rekrut · Node.js</p>
            </div>
            <ol className="pipe">
              <li><strong>1 · Hybrid Ingestion</strong><span>Dual-engine scraping using persistent Playwright Chromium for real-time past-24h feeds and Google X-Ray for unauthenticated deep search.</span></li>
              <li aria-hidden="true" className="arr">→</li>
              <li><strong>2 · Snowflake &amp; Pre-Filter</strong><span>Decodes LinkedIn Snowflake activity IDs for millisecond-precision age filtering, SQLite deduplication, and eliminates non-personal/foreign posts.</span></li>
              <li aria-hidden="true" className="arr">→</li>
              <li><strong>3 · Dual-LLM Intent Filter</strong><span>Gemini &amp; Groq semantic analysis with automated key pooling to detect genuine B2B buyer intent.</span></li>
              <li aria-hidden="true" className="arr">→</li>
              <li><strong>4 · WhatsApp Dispatch</strong><span>Built on Baileys socket. Dispatches consolidated leads via a staggered 2-hour queue and handles real-time interactive query commands in sales groups.</span></li>
            </ol>
            <ul className="tags">
              <li>Node.js</li><li>JavaScript</li><li>Playwright</li><li>Gemini API</li><li>Groq API</li><li>Baileys WA API</li><li>SQLite</li><li>Automation</li>
            </ul>
            <p className="sys-note">Headless by design. 24/7 background worker. Architecture walkthrough and source code available on request.</p>
          </article>
        </section>

        {/* EXPERIENCE */}
        <section className="wrap section" id="experience" aria-label="Experience">
          <div className="sec-head">
            <p className="sec-no">03 / Work log</p>
            <h2>Experience<span className="dot">.</span></h2>
          </div>

          <article className="card job">
            <div className="job-top"><p className="job-role">AI &amp; Automation Developer</p><p className="job-date">Aug 2026 - Now</p></div>
            <p className="job-org">KLIK Rekrut · Jakarta Pusat (remote)</p>
            <ul>
              <li>Automated LinkedIn lead generation with Google X-Ray queries for HR / Talent Acquisition / Founders.</li>
              <li>Filtering engine with Google Gemini + Groq LLMs: semantic intent analysis, drops company pages.</li>
              <li>WhatsApp dispatch bot (Baileys) with cron scheduling + query commands to sales groups.</li>
              <li>Fixed timestamp drift by decoding LinkedIn snowflake activity IDs for exact post age.</li>
            </ul>
            <p className="job-skills">Node.js · JavaScript · Gemini API · Groq API · Baileys WA API · Scraping · Automation</p>
          </article>

          <article className="card job">
            <div className="job-top"><p className="job-role">Web Developer</p><p className="job-date">May 2026 - Jul 2026</p></div>
            <p className="job-org">KLIK Rekrut · Jakarta Pusat (remote)</p>
            <ul>
              <li>Voucher-code promo system integrated into the platform.</li>
              <li>Wallet system with withdrawal / cash-out of in-platform balance.</li>
              <li>Built on Google Apps Script connecting web logic to backend data.</li>
            </ul>
            <p className="job-skills">Google Apps Script · JavaScript · PHP · HTML · CSS</p>
          </article>

          <article className="card job">
            <div className="job-top"><p className="job-role">WordPress Developer</p><p className="job-date">Mar 2026 - May 2026</p></div>
            <p className="job-org">PT Institute Research Japan Indonesia · Jakarta Pusat (remote)</p>
            <ul>
              <li>Redesigned company WordPress profile site: structure, visual consistency, content organization.</li>
              <li>Custom PHP / HTML / CSS / JS extensions beyond default WP behavior.</li>
              <li>Delivered on schedule with project-management tooling, fully remote.</li>
            </ul>
            <p className="job-skills">WordPress · PHP · HTML · CSS · JavaScript · Project Management</p>
          </article>

          <article className="card job">
            <div className="job-top"><p className="job-role">Web Developer - Internship &amp; Freelance</p><p className="job-date">Jun 2025 - Jul 2025</p></div>
            <p className="job-org">KLIK Rekrut · Jakarta (remote)</p>
            <ul>
              <li>Modular Blade templates, responsive mobile-friendly layouts, JS animations.</li>
              <li>Git-based remote collaboration.</li>
            </ul>
            <p className="job-skills">Laravel · Blade · Bootstrap · JavaScript · Git · HTML · CSS</p>
          </article>

          <article className="card job dim">
            <div className="job-top"><p className="job-role">Barista</p><p className="job-date">2023 - 2025</p></div>
            <p className="job-org">Kopi Konnichiwa · Bekasi</p>
            <p>Prepared and served coffee and beverage orders in a fast-paced café; maintained service standards.</p>
          </article>

          <div className="center">
            <a className="btn btn-gold" href="#contact">Let&rsquo;s work together <span aria-hidden="true">↗</span></a>
          </div>
        </section>

        {/* ABOUT */}
        <section className="wrap section" id="about" aria-label="About">
          <div className="sec-head">
            <p className="sec-no">04 / Profile</p>
            <h2>About<span className="dot">.</span></h2>
          </div>
          <div className="about-grid">
            <div className="card about-main">
              <p className="side-label">Bio</p>
              <p>S1 Informatics graduate with an RPL background. I build full-stack web apps with Next.js, React, Supabase, Go, Docker, Laravel, PHP, JavaScript, Node.js, and WordPress. I also handle IT support: PC assembly, OS installs, drivers, troubleshooting, and basic maintenance.</p>
              <div className="edu">
                <div><strong>S1 - Univ. Bhayangkara Jakarta Raya</strong><span>Informatics · Software Engineering · 2022–2026</span></div>
                <div><strong>SMK Negeri 5 Kota Bekasi</strong><span>Rekayasa Perangkat Lunak (RPL) · 2019–2022 · final project: healthcare site, Laravel + MySQL</span></div>
              </div>
            </div>
            <div className="card">
              <p className="side-label">Code</p>
              <ul className="plain">
                <li>Laravel (PHP) - auth, routing, DB</li>
                <li>JavaScript - interactivity, GAS automation</li>
                <li>PHP / HTML / CSS / Bootstrap</li>
                <li>Node.js · Web scraping · Automation</li>
                <li>Next.js · Go · Supabase · Docker</li>
                <li>WordPress · Blade · Git · VSCode</li>
                <li>Gemini API · Groq API · Baileys WA API</li>
              </ul>
            </div>
            <div className="card">
              <p className="side-label">Hardware &amp; support</p>
              <ul className="plain">
                <li>PC assembly &amp; component installs</li>
                <li>Windows fresh install, drivers, apps</li>
                <li>PC / laptop fault diagnosis</li>
                <li>Technical &amp; user support</li>
              </ul>
              <p className="side-label" style={{ marginTop: '16px' }}>Certs</p>
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
              <p className="sec-no">05 / Contact</p>
              <h2>Wanna tell me something?</h2>
              <p>Open for full-time, freelance, and project work. Fastest reply: email or WhatsApp. Based in Bekasi Utara.</p>
              <div className="work-btns">
                <a className="btn btn-gold" href="mailto:muhamaddafinaldzaky@gmail.com">Email <span aria-hidden="true">↗</span></a>
                <a className="btn btn-paper" href="https://wa.me/6281281845863" target="_blank" rel="noopener">WhatsApp</a>
                <a className="btn btn-ghost" href="https://linkedin.com/in/muhamad-dafin-al-dzaky" target="_blank" rel="noopener">LinkedIn</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap foot-in">
          <p>© 2026 Muhamad Dafin Al Dzaky.</p>
          <a className="btn btn-gold btn-sm" href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
