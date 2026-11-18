import './App.css';

// function App() {

//   return (
//     <div className="App">
//       <header className="App-header">
//        <h1>Welcome to reactjs</h1>
//       </header>
//     </div>
//   );
// }
 
// export default App;


import React, { useState } from 'react';
import {
  ArrowRight, ArrowUpRight, Menu, X, Zap, Settings2,
  Wrench, Factory, CheckCircle2, Phone, Mail, MapPin,
  MoveRight, Sparkles
} from 'lucide-react';

const photos = {
  hero: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SaIkcxXedJzN67Wz63R6lHUOL0eR_rfTav2VdwoHabYhnlSjuNS9WFh-T_spshthkkLB82CXffu7Hd1EbZU8T-hpZuc2hXLNjdKcQMxgHLRnDB00mIRsLT4faLE3ab0NPxmnSFPA=s1360-w1360-h1020-rw',
  machine: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RQoYZDfYAfALFuL86t_YMwiX_mExhKJ9HutG5I4KJK_geWQenUEbRwdqR3tyqzVr49Q2PC1IostgllcS5cnq_3Ex1ocFwvGPPyhw6lovEjXz_AydV5jsduX3nlHIGHFrZTZ9Zd=s1360-w1360-h1020-rw',
  laser: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QD7dqq_2JuZ7b8NHKC2-SNkOznFSXKypSgnQwgXGJA6XjCb3bvxI1lokmDa4MjfDv6VATrjFZwOsO1YJbFyaB73_jcfyrp0UzOZbkB_tiSKlFH0nbc9Fh1SAaGJvYUI-DfCoHa=s1360-w1360-h1020-rw',
  workshop: 'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qt2LYahRlklKgctC-kK76WUX8n44jMcxNMTqDV_B7vNYgRa2CqAFkxFzbzO6sejRD0jYdgxY5OWIPbAwKS0ezF-D3jwH_aHJlZNrcwaBl7nix_KVdEZqWHpMV27H9GL6o_YwiI=s1360-w1360-h1020-rw',
  metal: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=85',
};

const offerings = [
  { n: '01', title: 'Laser Equipment', text: 'Explore equipment options for precision-focused industrial applications.', icon: Zap, image: photos.machine },
  { n: '02', title: 'Laser Solutions', text: 'Practical solutions shaped around your process, material and production needs.', icon: Settings2, image: photos.laser },
  { n: '03', title: 'Technical Support', text: 'Guidance to help you evaluate, operate and maintain your equipment.', icon: Wrench, image: photos.workshop },
];

const benefits = [
  ['Application-first approach', 'We start by understanding your material, workflow and production goals.'],
  ['Reliable guidance', 'Clear information to help you make a confident equipment decision.'],
  ['Industrial focus', 'A practical understanding of the needs of modern manufacturing environments.'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const submit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <div className="site-shell">
      <div className="topline"><div className="container topline-inner"><span><span className="status-dot" /> Industrial laser equipment & solutions</span><span className="topline-right">Pune, Maharashtra, India <span className="topline-sep">|</span> Enquiries welcome</span></div></div>
      <header className="header">
        <div className="container nav-wrap">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="Navkar Laser India home">
            <span className="brand-mark"><span /></span><span className="brand-copy"><strong>NAVKAR <em>LASER</em></strong><small>INDIA PVT. LTD.</small></span>
          </a>
          <button className="mobile-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
          <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
            <a href="#home" onClick={closeMenu}>Home</a><a href="#about" onClick={closeMenu}>About us</a><a href="#solutions" onClick={closeMenu}>Solutions</a><a href="#industries" onClick={closeMenu}>Industries</a><a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Get in touch <ArrowUpRight size={16} /></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-photo" style={{ backgroundImage: `url(${photos.hero})` }} />
          <div className="hero-shade" />
          <div className="container hero-content">
            <div className="eyebrow light"><span /> PRECISION. PERFORMANCE. POSSIBILITIES.</div>
            <h1>Powering precision<br />through <span>laser technology.</span></h1>
            <p className="hero-lead">Industrial laser equipment and solution-led support for businesses looking to work smarter, faster and with greater precision.</p>
            <div className="hero-actions"><a className="btn btn-orange" href="#solutions">Explore solutions <ArrowRight size={18} /></a><a className="text-link light-link" href="#about">Discover Navkar <ArrowUpRight size={17} /></a></div>
            <div className="hero-foot"><span className="hero-line" /> <span>LASER EQUIPMENT <b>•</b> INDUSTRIAL SOLUTIONS <b>•</b> PUNE, INDIA</span></div>
          </div>
          <div className="hero-corner"><Zap size={18} /> ENGINEERED FOR ACCURACY</div>
        </section>

        <section className="intro section-pad" id="about">
          <div className="container intro-grid">
            <div className="intro-label"><span className="section-index">01 / ABOUT NAVKAR</span><div className="orange-rule" /></div>
            <div className="intro-main"><p className="eyebrow"><span /> WHO WE ARE</p><h2>Technology that helps<br />industry move <span>forward.</span></h2></div>
            <div className="intro-copy"><p>Navkar Laser India Pvt. Ltd. is presented as a Pune-based business focused on laser equipment, services and industrial solutions.</p><p>We believe the right technology starts with understanding the job it needs to do. Our focus is to help businesses explore practical options for their production and application requirements.</p><a className="text-link dark-link" href="#contact">Talk to our team <ArrowUpRight size={17} /></a></div>
          </div>
        </section>

        <section className="solutions section-pad" id="solutions">
          <div className="container">
            <div className="section-heading"><div><span className="section-index">02 / WHAT WE DO</span><p className="eyebrow"><span /> OUR CAPABILITIES</p><h2>Solutions built around<br /><span>your application.</span></h2></div><p className="heading-note">From exploring the right equipment to understanding how it fits your workflow, start with a conversation about your requirements.</p></div>
            <div className="offering-grid">{offerings.map((item) => { const Icon = item.icon; return <article className="offering-card" key={item.n}><div className="offering-image"><img src={item.image} alt="Industrial equipment demonstration" loading="lazy" /><span className="offering-number">{item.n}</span></div><div className="offering-body"><div className="offering-icon"><Icon size={21} /></div><h3>{item.title}</h3><p>{item.text}</p><a href="#contact" aria-label={`Enquire about ${item.title}`}><ArrowUpRight size={19} /></a></div></article>; })}</div>
          </div>
        </section>

        <section className="feature-band" id="industries"><div className="container feature-grid"><div className="feature-image"><img src={photos.metal} alt="Metal fabrication and industrial workshop" loading="lazy" /><div className="image-stamp"><span>BUILT FOR</span><strong>INDUSTRY</strong><Zap size={20} /></div></div><div className="feature-content"><span className="section-index light-index">03 / INDUSTRY FOCUS</span><p className="eyebrow light"><span /> APPLICATIONS & INDUSTRIES</p><h2>Made for the demands<br />of <span>modern industry.</span></h2><p className="feature-desc">Laser technology can support a wide range of industrial workflows. Tell us what you make, process or need to improve, and let's explore the right direction.</p><div className="industry-tags"><span><Factory size={16} /> Manufacturing</span><span><Settings2 size={16} /> Engineering</span><span><Sparkles size={16} /> Fabrication</span></div><a className="btn btn-outline" href="#contact">Discuss your application <ArrowRight size={18} /></a></div></div></section>

        <section className="why section-pad"><div className="container why-grid"><div className="why-heading"><span className="section-index">04 / THE NAVKAR APPROACH</span><p className="eyebrow"><span /> WHY WORK WITH US</p><h2>A clearer path to<br /><span>the right solution.</span></h2><p>Good equipment decisions begin with the right questions. Let's understand your requirements before recommending a direction.</p></div><div className="benefit-list">{benefits.map(([title, text], i) => <div className="benefit" key={title}><span className="benefit-no">0{i + 1}</span><div><h3>{title}</h3><p>{text}</p></div><CheckCircle2 size={21} /></div>)}</div></div></section>

        <section className="contact section-pad" id="contact"><div className="container contact-grid"><div className="contact-copy"><span className="section-index light-index">05 / GET IN TOUCH</span><p className="eyebrow light"><span /> LET'S START A CONVERSATION</p><h2>Have a project<br />in <span>mind?</span></h2><p>Share a few details about your requirement. Our team can connect with you to understand the application and discuss next steps.</p><div className="contact-detail"><MapPin size={19} /><span>Pune, Maharashtra, India</span></div><div className="contact-detail"><Mail size={19} /><span>Contact details to be added</span></div><div className="contact-detail"><Phone size={19} /><span>Phone number to be added</span></div></div><form className="contact-form" onSubmit={submit}><div className="form-head"><h3>Send an enquiry</h3><span>We'd be glad to hear from you.</span></div><div className="form-row"><label>Your name<input required name="name" placeholder="Full name" /></label><label>Company<input name="company" placeholder="Company name" /></label></div><div className="form-row"><label>Email address<input required type="email" name="email" placeholder="you@company.com" /></label><label>Phone number<input name="phone" type="tel" placeholder="Your phone number" /></label></div><label>What are you looking for?<select name="requirement" defaultValue=""><option value="" disabled>Select a requirement</option><option>Laser equipment</option><option>Laser services</option><option>Technical consultation</option><option>Other enquiry</option></select></label><label>Message<textarea required name="message" rows="4" placeholder="Tell us a little about your application..." /></label><button className="btn btn-orange form-submit" type="submit">Submit enquiry <ArrowRight size={18} /></button>{sent && <p className="form-success" role="status">Thanks for your interest. This demo form is ready to be connected to your email or backend.</p>}<p className="form-note">Demo form — connect an email service or backend before publishing.</p></form></div></section>
      </main>

      <footer className="footer"><div className="container footer-main"><a className="brand footer-brand" href="#home"><span className="brand-mark"><span /></span><span className="brand-copy"><strong>NAVKAR <em>LASER</em></strong><small>INDIA PVT. LTD.</small></span></a><p>Precision-focused laser equipment<br />& industrial solutions.</p><a className="back-top" href="#home">BACK TO TOP <MoveRight size={17} /></a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Navkar Laser India Pvt. Ltd. All rights reserved.</span><span>Designed for industry. Built for the web.</span></div></footer>
    </div>
  );
}

export default App;
