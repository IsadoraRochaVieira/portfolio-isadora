'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { pages } from './data';
import { MotionLayer } from './motion-layer';
import { CodepenEffects } from './codepen-effects';

export function SiteShell({children}:{children:React.ReactNode}){
  const [open,setOpen]=useState(false); const path=usePathname();
  return <div className="site"><MotionLayer/><div className="aurora"/><div className="noise"/><div className="floating-type one">IMAGINE</div><div className="floating-type two">BUILD</div><header><Link href="/" className="brand"><span>IR</span><b>ISADORA<br/>ROCHA</b></Link><nav className="desktop-nav"><Link href="/sobre">Sobre</Link><Link href="/projetos">Projetos</Link><Link href="/sonhos">Sonhos</Link><Link href="/contato" className="nav-cta">Contato <ArrowUpRight size={14}/></Link></nav><button className="menu" aria-label="Abrir menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></header>{open&&<aside className="mobile-menu">{pages.map(p=><Link key={p.slug} onClick={()=>setOpen(false)} className={path===`/${p.slug}`?'active':''} href={`/${p.slug}`}>{p.eyebrow}<strong>{p.label}</strong></Link>)}</aside>}{children}{path==='/'&&<CodepenEffects/>}<footer><div><span>ISADORA ROCHA VIEIRA</span><span>BRASIL · 2026</span></div><p>Feito com código, curiosidade e uma quantidade pouco razoável de ideias.</p></footer></div>
}
