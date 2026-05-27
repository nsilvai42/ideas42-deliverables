import { HeadContent, Scripts, createRootRoute, Outlet, Link, useRouterState } from '@tanstack/react-router'
import { useState } from 'react'
import { focusAreas } from '@/data/hub'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'ideas42 Deliverables Hub' },
      { name: 'description', content: "Explore research, tools, and resources from ideas42's behavioral science partnerships." },
    ],
  }),
  shellComponent: RootDocument,
})

function Logo() {
  return (
    <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
      <span style={{
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        background: '#7AC10A',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }} />
      <span style={{
        fontFamily: 'Figtree, sans-serif',
        fontWeight: 900,
        fontSize: '1.35rem',
        color: '#FFFFFF',
        letterSpacing: '-0.01em',
      }}>
        ideas42
      </span>
    </Link>
  )
}

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const routerState = useRouterState()
  const pathname = routerState.location.pathname

  // Determine active focus area from path
  const activeFocusAreaId = focusAreas.find(fa => pathname.startsWith('/' + fa.id))?.id

  return (
    <nav style={{
      background: '#004357',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      padding: '0 4vw',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', maxWidth: '1400px', margin: '0 auto' }}>
        <Logo />

        {/* Desktop nav links */}
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Link
            to="/"
            style={{
              color: pathname === '/' ? '#7AC10A' : 'rgba(255,255,255,0.85)',
              textDecoration: 'none',
              fontFamily: 'Figtree, sans-serif',
              fontWeight: 600,
              fontSize: '0.9rem',
              padding: '6px 14px',
              borderRadius: '6px',
              transition: 'color 0.15s',
            }}
          >
            Home
          </Link>
          <div style={{ position: 'relative' }} className="focus-areas-dropdown-wrap">
            <button
              style={{
                color: activeFocusAreaId ? '#7AC10A' : 'rgba(255,255,255,0.85)',
                background: 'none',
                border: 'none',
                fontFamily: 'Figtree, sans-serif',
                fontWeight: 600,
                fontSize: '0.9rem',
                padding: '6px 14px',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}
              onClick={() => setMenuOpen(v => !v)}
              onBlur={() => setTimeout(() => setMenuOpen(false), 150)}
            >
              Focus Areas
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginTop: '1px' }}>
                <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {menuOpen && (
              <div style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                marginTop: '8px',
                background: '#fff',
                borderRadius: '10px',
                boxShadow: '0 8px 32px rgba(0,67,87,0.18)',
                minWidth: '240px',
                padding: '8px',
                zIndex: 200,
              }}>
                {focusAreas.map(fa => (
                  <Link
                    key={fa.id}
                    to={`/$focusArea`}
                    params={{ focusArea: fa.id }}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      fontFamily: 'Figtree, sans-serif',
                      fontWeight: fa.id === activeFocusAreaId ? 600 : 300,
                      fontSize: '0.9rem',
                      color: fa.id === activeFocusAreaId ? '#004357' : '#000',
                      background: fa.id === activeFocusAreaId ? '#D9E1E2' : 'transparent',
                      transition: 'background 0.12s',
                    }}
                  >
                    <span>{fa.icon}</span>
                    <span>{fa.title}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
          <a
            href="https://www.ideas42.org"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'rgba(255,255,255,0.85)',
              textDecoration: 'none',
              fontFamily: 'Figtree, sans-serif',
              fontWeight: 600,
              fontSize: '0.9rem',
              padding: '6px 14px',
              borderRadius: '6px',
            }}
          >
            ideas42.org ↗
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(v => !v)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            color: '#fff',
          }}
          aria-label="Open menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {menuOpen
              ? <path d="M6 6l12 12M6 18L18 6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              : <path d="M4 6h16M4 12h16M4 18h16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu" style={{
          position: 'absolute',
          top: '64px',
          left: 0,
          right: 0,
          background: '#004357',
          padding: '16px 4vw 24px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          display: 'none',
        }}>
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            style={{ display: 'block', color: '#fff', textDecoration: 'none', fontFamily: 'Figtree, sans-serif', fontWeight: 600, padding: '10px 0', fontSize: '1rem' }}
          >
            Home
          </Link>
          <div style={{ marginTop: '8px', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '8px' }}>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'Figtree, sans-serif', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Focus Areas</div>
            {focusAreas.map(fa => (
              <Link
                key={fa.id}
                to={`/$focusArea`}
                params={{ focusArea: fa.id }}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: fa.id === activeFocusAreaId ? '#7AC10A' : 'rgba(255,255,255,0.85)',
                  textDecoration: 'none',
                  fontFamily: 'Figtree, sans-serif',
                  fontWeight: 300,
                  padding: '8px 0',
                  fontSize: '0.95rem',
                }}
              >
                <span>{fa.icon}</span>
                <span>{fa.title}</span>
              </Link>
            ))}
          </div>
          <a
            href="https://www.ideas42.org"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block', color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontFamily: 'Figtree, sans-serif', fontWeight: 600, padding: '12px 0', marginTop: '8px', borderTop: '1px solid rgba(255,255,255,0.15)', fontSize: '1rem' }}
          >
            ideas42.org ↗
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
          .mobile-menu { display: block !important; }
        }
      `}</style>
    </nav>
  )
}

function Footer() {
  return (
    <footer style={{
      background: '#004357',
      color: '#fff',
      padding: '48px 4vw 32px',
      marginTop: '80px',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#7AC10A', display: 'inline-block', flexShrink: 0 }} />
              <span style={{ fontFamily: 'Figtree, sans-serif', fontWeight: 900, fontSize: '1.2rem' }}>ideas42</span>
            </div>
            <p style={{ fontFamily: 'Figtree, sans-serif', fontWeight: 300, fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, margin: 0 }}>
              A nonprofit behavioral design and research organization applying behavioral science to improve lives.
            </p>
          </div>
          <div>
            <div style={{ fontFamily: 'Figtree, sans-serif', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px', color: 'rgba(255,255,255,0.5)' }}>Links</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'ideas42.org', href: 'https://www.ideas42.org' },
                { label: 'Our Work', href: 'https://www.ideas42.org/our-work' },
                { label: 'About Us', href: 'https://www.ideas42.org/about' },
                { label: 'Contact', href: 'https://www.ideas42.org/contact' },
              ].map(link => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer"
                  style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontFamily: 'Figtree, sans-serif', fontWeight: 300, fontSize: '0.9rem', transition: 'color 0.15s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#7AC10A')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontFamily: 'Figtree, sans-serif', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px', color: 'rgba(255,255,255,0.5)' }}>Contact</div>
            <p style={{ fontFamily: 'Figtree, sans-serif', fontWeight: 300, fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, margin: 0 }}>
              ideas42<br/>
              New York, NY<br/>
              <a href="mailto:info@ideas42.org" style={{ color: '#7AC10A', textDecoration: 'none' }}>info@ideas42.org</a>
            </p>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <span style={{ fontFamily: 'Figtree, sans-serif', fontWeight: 300, fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)' }}>
            © {new Date().getFullYear()} ideas42. All rights reserved.
          </span>
          <span style={{ fontFamily: 'Figtree, sans-serif', fontWeight: 300, fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)' }}>
            Deliverables Hub
          </span>
        </div>
      </div>
    </footer>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Nav />
        <main style={{ paddingTop: '64px', minHeight: '100vh' }}>
          {children}
        </main>
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}
