/*
Printelligence — Next.js Starter Page (single-file)
Place this file at: ./app/page.tsx (Next.js 14 app directory)

This is a compact, production-ready starter that implements the primary
sections from your design doc: Hero, Client Showcase, Value Props,
Interactive Product Explorer (placeholder), Process Timeline, Portfolio,
AI Assistant (UI), Pricing Calculator, Testimonials, and Footer.

Notes:
- Uses Tailwind CSS classes (install Tailwind in your project).
- Places placeholders for Three.js, AR, and backend calls.
- Replace placeholder assets and wire backend endpoints as needed.

How to use:
1. npx create-next-app@latest --experimental-app --typescript printelligence
2. Install deps: npm i three framer-motion @headlessui/react @heroicons/react
3. Install Tailwind (follow official docs), then replace ./app/page.tsx with this file.
4. Start dev: npm run dev

This single-file approach is for quick copy-paste to GitHub. Break into
components/files for a real repo.
*/

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu } from '@headlessui/react';
import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function Page() {
  const [savedDesigns, setSavedDesigns] = useState<any[]>([]);
  const [priceEstimate, setPriceEstimate] = useState(850);
  const [qty, setQty] = useState(100);

  function handleSaveDesign() {
    setSavedDesigns(s => [...s, { id: Date.now(), name: `Design ${s.length+1}` }]);
  }

  function recalcPrice(q: number) {
    // simple pricing model with volume discounts
    let base = 850; // base AOV
    if (q >= 1000) base *= 0.6;
    else if (q >= 500) base *= 0.72;
    else if (q >= 250) base *= 0.84;
    else base *= 1;
    setPriceEstimate(Math.round(base));
  }

  return (
    <main className="min-h-screen bg-[#0A1A35] text-slate-50 font-inter">
      {/* NAV */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 to-amber-500 flex items-center justify-center text-[#0A1A35] font-semibold">P</div>
          <div>
            <div className="text-lg font-bold">Printelligence</div>
            <div className="text-xs text-slate-300">Luxury Printing & Design</div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a className="text-sm hover:underline">Products</a>
          <a className="text-sm hover:underline">Portfolio</a>
          <a className="text-sm hover:underline">Pricing</a>
          <button className="px-4 py-2 bg-amber-400 text-[#0A1A35] rounded-md font-semibold">Book Consultation</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 -z-10 bg-gradient-to-b from-[#021026] to-[#021426]" />
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-playfair font-bold leading-tight">
              Where Luxury <span className="text-amber-300">Meets Precision</span> in Printing
            </motion.h1>
            <p className="mt-6 text-slate-200 max-w-xl">Bespoke materials, artisan finishing, and white-glove service — designed for brands that demand excellence.</p>
            <div className="mt-8 flex gap-4">
              <button className="px-6 py-3 bg-amber-400 text-[#0A1A35] rounded-md font-semibold flex items-center gap-2">Explore Collection <ArrowRightIcon className="w-4 h-4"/></button>
              <button className="px-6 py-3 border border-slate-600 rounded-md">Book Design Consultation</button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {/* Floating luxury previews (static placeholders) */}
              {['Card', 'Invite', 'Box'].map((t,i)=> (
                <div key={t} className="bg-slate-800/40 p-4 rounded-xl backdrop-blur-sm">
                  <div className="w-48 h-32 bg-gradient-to-br from-slate-700 to-slate-600 rounded-md flex items-center justify-center">{t} Preview</div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-sm text-slate-400">Trusted by 500+ luxury brands</div>
          </div>

          <div className="flex-1">
            {/* Cinematic video background placeholder — replace with <video> or Lottie */}
            <div className="w-full rounded-2xl overflow-hidden shadow-2xl bg-black/50 border border-slate-700 p-6">
              <div className="h-80 bg-gradient-to-tr from-slate-900 via-[#08192b] to-slate-800 rounded-lg flex items-center justify-center">Cinematic craftsmanship video (replace)</div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT SHOWCASE */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold">Clients & Case Studies</h3>
        <div className="mt-6 flex items-center gap-6 overflow-x-auto py-4">
          {['Tiffany', 'Mercedes', 'Rolex', 'Chanel', 'Dior'].map(c=> (
            <div key={c} className="min-w-[160px] bg-slate-800/50 p-4 rounded-lg flex items-center justify-center">{c} Logo</div>
          ))}
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[1,2,3].map(i=> (
            <article key={i} className="bg-slate-900/60 p-4 rounded-lg">
              <div className="h-40 bg-slate-800 rounded-md mb-3 flex items-center justify-center">Case study hero {i}</div>
              <h4 className="font-semibold">Project {i}: Luxury Invite</h4>
              <p className="text-sm text-slate-300 mt-2">Before & after transformation with material upgrades and artisan finishing.</p>
              <div className="mt-3 flex gap-2">
                <button className="text-sm px-3 py-1 border rounded">View</button>
                <button className="text-sm px-3 py-1 bg-amber-400 text-[#0A1A35] rounded">Download PDF</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          [
            {title: 'Artisan Craftsmanship', desc: 'Hand-finished by master printers.'},
            {title: 'Premium Materials', desc: 'Curated paper and textiles from global mills.'},
            {title: 'White-Glove Service', desc: 'Dedicated account managers and concierge delivery.'}
          ].map(p=> (
            <motion.div key={p.title} whileHover={{ y: -6 }} className="bg-slate-900/50 p-6 rounded-xl">
              <h5 className="font-semibold text-xl mb-2">{p.title}</h5>
              <p className="text-slate-300">{p.desc}</p>
              <div className="mt-4 text-sm text-slate-400">Material samples on hover (microinteraction)</div>
            </motion.div>
          ))
        </div>
      </section>

      {/* INTERACTIVE PRODUCT EXPLORER (PLACEHOLDER) */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold">Interactive Product Explorer</h3>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="h-96 bg-slate-900/50 rounded-xl flex flex-col items-center justify-center">
            {/* TODO: replace with Three.js 3D configurator using <Canvas> + glTF models */}
            <div>3D Product Configurator (WebGL placeholder)</div>
            <div className="mt-4 text-sm text-slate-400">Material selector • Finish options • Live pricing</div>
          </div>
          <div className="p-6 bg-slate-900/50 rounded-xl">
            <h4 className="font-semibold">Material & Finish</h4>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <select className="bg-slate-800 p-2 rounded">{Array.from({length:6}).map((_,i)=>(<option key={i}>Paper Option {i+1}</option>))}</select>
              <select className="bg-slate-800 p-2 rounded">{['Foil', 'Emboss', 'Spot UV'].map(o=>(<option key={o}>{o}</option>))}</select>
            </div>
            <div className="mt-6">
              <label className="text-sm">Quantity</label>
              <input type="range" min={50} max={5000} value={qty} onChange={(e)=>{const q=Number(e.target.value); setQty(q); recalcPrice(q)}} className="w-full mt-3" />
              <div className="mt-2 flex items-center justify-between text-sm text-slate-300"><span>{qty} pcs</span><span>Est. price: ${priceEstimate}</span></div>
              <div className="mt-4 flex gap-2">
                <button onClick={handleSaveDesign} className="px-4 py-2 bg-amber-400 text-[#0A1A35] rounded">Save Design</button>
                <button className="px-4 py-2 border rounded">Get Exact Quote</button>
              </div>
              {savedDesigns.length>0 && <div className="mt-4 text-sm text-slate-300">Saved designs: {savedDesigns.length}</div>}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold">Our Process</h3>
        <div className="mt-6 overflow-x-auto py-4">
          <div className="flex gap-8 min-w-[900px]">
            {['Consult', 'Design', 'Proof', 'Print', 'Finish', 'Deliver'].map(step=> (
              <div key={step} className="bg-slate-900/50 p-6 rounded-xl w-56">
                <div className="font-semibold">{step}</div>
                <div className="mt-2 text-sm text-slate-300">Behind-the-scenes video and artisan popup</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO GALLERY */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold">Portfolio</h3>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({length:8}).map((_,i)=>(
            <div key={i} className="h-40 bg-slate-800 rounded-lg flex items-end p-3">
              <div className="text-sm">Project {i+1}</div>
            </div>
          ))}
        </div>
      </section>

      {/* AI DESIGN ASSISTANT (UI) */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold">AI Design Assistant</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="col-span-2 bg-slate-900/50 p-6 rounded-xl">
            <p className="text-slate-300">Hello — I'm your AI Design Assistant. Answer a few questions and get tailored templates and material recommendations.</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <input placeholder="Business type (e.g. boutique hotel)" className="bg-slate-800 p-2 rounded" />
              <select className="bg-slate-800 p-2 rounded"><option>Style: Minimalist</option></select>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="px-4 py-2 bg-amber-400 text-[#0A1A35] rounded">Start with AI</button>
              <button className="px-4 py-2 border rounded">Upload Brand Assets</button>
            </div>
          </div>
          <div className="bg-slate-900/50 p-6 rounded-xl">
            <h4 className="font-semibold">Template Picks</h4>
            <ul className="mt-3 text-sm text-slate-300 space-y-2">
              <li>Luxury business card — foil edge</li>
              <li>Folded invitation — letterpress</li>
              <li>Premium box — soft-touch lamination</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PRICING CALCULATOR */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold">Pricing Calculator</h3>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900/50 p-6 rounded-xl">
            <label className="text-sm">Select product</label>
            <select className="w-full mt-2 bg-slate-800 p-2 rounded"><option>Business Cards</option></select>
            <label className="text-sm mt-4 block">Quantity</label>
            <input type="number" value={qty} onChange={(e)=>{const q=Number(e.target.value); setQty(q); recalcPrice(q)}} className="w-full mt-2 p-2 bg-slate-800 rounded" />
            <div className="mt-4">Estimated total: <span className="font-semibold">${priceEstimate}</span></div>
            <div className="mt-4 flex gap-2">
              <button className="px-4 py-2 bg-amber-400 text-[#0A1A35] rounded">Get Exact Quote</button>
              <button className="px-4 py-2 border rounded">Save Quote</button>
            </div>
          </div>

          <div className="bg-slate-900/50 p-6 rounded-xl">
            <h4 className="font-semibold">Compare with standard print</h4>
            <div className="mt-3 text-sm text-slate-300">Our premium vs. standard shows the value-add of materials and finishing.</div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              <div>Standard</div><div>$420</div>
              <div>Printelligence</div><div>${priceEstimate}</div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h3 className="text-2xl font-semibold">What clients say</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[1,2,3].map(i=> (
            <div key={i} className="bg-slate-900/50 p-6 rounded-xl">
              <div className="h-24 bg-slate-800 rounded mb-3">Video testimonial {i}</div>
              <div className="text-sm text-slate-300">"Exceptional craftsmanship and care from start to finish."</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-800 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div>
            <div className="font-semibold">Printelligence</div>
            <div className="text-sm text-slate-400">© {new Date().getFullYear()} Printelligence Inc.</div>
          </div>
          <div className="text-sm text-slate-400">Contact • Privacy • Terms</div>
        </div>
      </footer>
    </main>
  );
}
