import { Link, createFileRoute } from '@tanstack/react-router'
import { focusAreas } from '@/data/hub'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{
        background: '#004357',
        color: '#fff',
        padding: '80px 4vw 72px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '-40%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'rgba(122, 193, 10, 0.07)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-30%',
          left: '20%',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          background: 'rgba(28, 138, 112, 0.08)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(122,193,10,0.15)',
            border: '1px solid rgba(122,193,10,0.3)',
            borderRadius: '100px',
            padding: '6px 16px',
            marginBottom: '28px',
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#7AC10A', display: 'inline-block' }} />
            <span style={{ fontFamily: 'Figtree, sans-serif', fontWeight: 600, fontSize: '0.8rem', color: '#7AC10A', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Behavioral Science Resources</span>
          </div>
          <h1 style={{
            fontFamily: 'Figtree, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
            lineHeight: 1.1,
            margin: '0 0 24px',
            letterSpacing: '-0.02em',
            maxWidth: '700px',
          }}>
            ideas42<br />Deliverables Hub
          </h1>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontWeight: 300,
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: 'rgba(255,255,255,0.82)',
            maxWidth: '560px',
            lineHeight: 1.7,
            margin: 0,
          }}>
            Explore research, tools, and resources from ideas42's behavioral science partnerships across nine focus areas.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div style={{ height: '4px', background: '#D9E1E2' }} />

      {/* Focus Areas Grid */}
      <section style={{ padding: '64px 4vw 80px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <h2 style={{
              fontFamily: 'Figtree, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              color: '#004357',
              margin: '0 0 12px',
              letterSpacing: '-0.01em',
            }}>
              Focus Areas
            </h2>
            <p style={{
              fontFamily: 'Figtree, sans-serif',
              fontWeight: 300,
              fontSize: '1rem',
              color: '#555',
              margin: 0,
              maxWidth: '520px',
              lineHeight: 1.6,
            }}>
              Browse deliverables organized by our nine areas of behavioral science work.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '20px',
          }}>
            {focusAreas.map((fa) => (
              <Link
                key={fa.id}
                to="/$focusArea"
                params={{ focusArea: fa.id }}
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="hub-card"
                  style={{
                    background: '#fff',
                    border: '1.5px solid #D9E1E2',
                    borderRadius: '14px',
                    padding: '28px 28px 24px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <span style={{
                      fontSize: '1.8rem',
                      lineHeight: 1,
                      flexShrink: 0,
                      marginTop: '2px',
                    }}>{fa.icon}</span>
                    <div style={{ flex: 1 }}>
                      <h3 style={{
                        fontFamily: 'Figtree, sans-serif',
                        fontWeight: 900,
                        fontSize: '1.05rem',
                        color: '#004357',
                        margin: '0 0 8px',
                        lineHeight: 1.2,
                      }}>
                        {fa.title}
                      </h3>
                      <p style={{
                        fontFamily: 'Figtree, sans-serif',
                        fontWeight: 300,
                        fontSize: '0.88rem',
                        color: '#444',
                        margin: 0,
                        lineHeight: 1.6,
                      }}>
                        {fa.description}
                      </p>
                    </div>
                  </div>
                  <div style={{
                    marginTop: 'auto',
                    paddingTop: '16px',
                    borderTop: '1px solid #D9E1E2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                    <span style={{
                      fontFamily: 'Figtree, sans-serif',
                      fontWeight: 600,
                      fontSize: '0.8rem',
                      color: '#7AC10A',
                      letterSpacing: '0.04em',
                    }}>
                      {fa.projects.length} project{fa.projects.length !== 1 ? 's' : ''}
                    </span>
                    <span style={{
                      fontFamily: 'Figtree, sans-serif',
                      fontWeight: 600,
                      fontSize: '0.82rem',
                      color: '#1C8A70',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}>
                      View projects
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Strip */}
      <section style={{ background: '#D9E1E2', padding: '48px 4vw' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '32px', flexWrap: 'wrap' }}>
          <div>
            <h2 style={{
              fontFamily: 'Figtree, sans-serif',
              fontWeight: 900,
              fontSize: '1.3rem',
              color: '#004357',
              margin: '0 0 8px',
            }}>
              About ideas42
            </h2>
            <p style={{
              fontFamily: 'Figtree, sans-serif',
              fontWeight: 300,
              fontSize: '0.95rem',
              color: '#333',
              margin: 0,
              maxWidth: '600px',
              lineHeight: 1.7,
            }}>
              ideas42 is a nonprofit that uses behavioral science to design solutions that improve lives. We partner with organizations to understand human behavior and create lasting change.
            </p>
          </div>
          <a
            href="https://www.ideas42.org"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#7AC10A',
              color: '#fff',
              padding: '12px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontFamily: 'Figtree, sans-serif',
              fontWeight: 600,
              fontSize: '0.95rem',
              flexShrink: 0,
              transition: 'background 0.15s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#6aab09')}
            onMouseLeave={e => (e.currentTarget.style.background = '#7AC10A')}
          >
            Visit ideas42.org
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>
    </div>
  )
}
