import React from 'react';
import './style.css';
import logoSign from './assets/logo-sign-bw.png';
import photoHero from './photos/hero-glasses.jpg';
import photoWhiskey from './photos/whiskey-glass.jpg';
import photoBeer from './photos/beer-tap.jpg';
import photoWine from './photos/wine-cellar.jpg';
import photoBarrels from './photos/barrels.jpg';

const PHONE = '(713) 789-5348';
const PHONE_TEL = 'tel:+17137895348';
const ADDRESS = '9376 Richmond Ave, Suite A, Houston, TX 77063';
const MAPS = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('9376 Richmond Ave Ste A, Houston, TX 77063');

const SHELVES = [
  { src: photoWhiskey, alt: 'Stock photo of a glass of whiskey with ice', name: 'Whiskey & bourbon', text: 'Bourbon, rye, scotch, and more.' },
  { src: photoBeer, alt: 'Stock photo of a brass beer tap in warm light', name: 'Beer & kegs', text: 'Cold beer, plus kegs for parties and events.' },
  { src: photoWine, alt: 'Stock photo of wine bottles resting in a dark cellar rack', name: 'Wine', text: 'Everyday bottles and something for the weekend.' },
  { src: photoBarrels, alt: 'Stock photo of oak barrels aging', name: 'Spirits, mixers & ice', text: 'Vodka, tequila, rum, mixers, and bagged ice.' },
];

export function App() {
  return (
    <main className="site">
      <section className="hero">
        <img className="hero-photo" src={photoHero} alt="Stock photo of two whiskey glasses on a dark table" />
        <div className="hero-scrim" />
        <div className="hero-content">
          <img className="hero-logo" src={logoSign} alt="Richmond Liquor - Houston, Texas" />
        </div>
      </section>

      <section className="section carry" id="carry">
        <div className="section-inner">
          <div className="section-head">
            <div>
              <div className="section-kicker">The good stuff</div>
              <h2>What we carry</h2>
            </div>
            <p className="section-note">Stock photos as stand-ins &mdash; real photos of the store will take these spots.</p>
          </div>
          <div className="carry-grid">
            {SHELVES.map((s, i) => (
              <figure className="carry-tile" key={s.name}>
                <img src={s.src} alt={s.alt} loading="lazy" />
                <figcaption className="carry-overlay">
                  <span className="carry-index">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{s.name}</h3>
                  <p>{s.text}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="wholesale">
        <div className="wholesale-inner">
          <div>
            <div className="section-kicker">For clubs &amp; venues</div>
            <h2>Wholesale</h2>
            <p>Richmond Liquor also supplies clubs and other venues. Call the store to talk through what your venue needs.</p>
          </div>
          <a className="btn btn-amber" href={PHONE_TEL}>Call about wholesale</a>
        </div>
      </section>

      <section className="section visit" id="visit">
        <div className="section-inner">
          <div className="section-head">
            <div>
              <div className="section-kicker">Visit</div>
              <h2>Find us</h2>
            </div>
          </div>
          <div className="visit-facts">
            <div className="fact"><span className="fact-label">Address</span><span><a href={MAPS} target="_blank" rel="noreferrer">{ADDRESS}</a></span></div>
            <div className="fact"><span className="fact-label">Phone</span><span><a href={PHONE_TEL}>{PHONE}</a></span></div>
            <div className="fact"><span className="fact-label">Hours</span><span>Monday&ndash;Saturday, <span className="nowrap">10 AM&ndash;9 PM</span> &middot; Closed Sunday</span></div>
          </div>
        </div>
      </section>

    </main>
  );
}
