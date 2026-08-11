import { type FormEvent, useState } from 'react';

export function ContactSection() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio inquiry from ${data.get('name')}`);
    const body = encodeURIComponent(`${data.get('message')}\n\nReply to: ${data.get('email')}`);
    window.location.href = `mailto:hello@hannandev.com?subject=${subject}&body=${body}`;
    setSent(true);
  }
  return (
    <section id="contact" className="grid-bg px-5 py-28 md:px-8 md:py-40">
      <div className="mx-auto max-w-7xl"><div className="font-mono text-xs uppercase tracking-[.2em] text-lime">04 — Contact</div><div className="mt-7 grid gap-16 lg:grid-cols-2"><div><h2 className="text-6xl font-bold leading-[.88] tracking-[-.065em] md:text-8xl">HAVE AN<br/><span className="text-lime">IDEA?</span><br/>LET'S TALK.</h2><p className="mt-8 max-w-md text-white/50">Have a project in mind or simply want to say hello? My inbox is always open.</p><a href="mailto:hello@hannandev.com" className="mt-10 inline-block border-b border-lime pb-2 text-xl text-lime">hello@hannandev.com ↗</a></div>
        <form onSubmit={submit} className="rounded-[2rem] border border-white/10 bg-panel/70 p-7 backdrop-blur md:p-10"><label className="block font-mono text-[10px] uppercase tracking-widest text-white/40">Your name<input required name="name" className="mt-3 w-full border-b border-white/15 bg-transparent pb-4 text-lg text-white outline-none transition focus:border-lime" placeholder="Jane Smith" /></label><label className="mt-8 block font-mono text-[10px] uppercase tracking-widest text-white/40">Email address<input required type="email" name="email" className="mt-3 w-full border-b border-white/15 bg-transparent pb-4 text-lg text-white outline-none transition focus:border-lime" placeholder="jane@company.com" /></label><label className="mt-8 block font-mono text-[10px] uppercase tracking-widest text-white/40">Tell me about it<textarea required name="message" rows={4} className="mt-3 w-full resize-none border-b border-white/15 bg-transparent pb-4 text-lg text-white outline-none transition focus:border-lime" placeholder="Project, timeline, ambitions…" /></label><button type="submit" className="mt-8 w-full rounded-full bg-lime py-4 font-mono text-xs font-bold uppercase tracking-wider text-ink transition hover:scale-[1.02]">Open email draft ↗</button>{sent && <p className="mt-4 text-center text-sm text-lime">Your email app should now be open.</p>}</form></div></div>
    </section>
  );
}
