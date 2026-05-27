import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { getFocusArea } from '@/data/hub'

export const Route = createFileRoute('/$focusArea/')({
  component: FocusAreaPage,
  notFoundComponent: () => <div style={{ padding: '80px 4vw', textAlign: 'center' }}>Focus area not found.</div>,
  loader: ({ params }) => {
    const fa = getFocusArea(params.focusArea)
    if (!fa) throw notFound()
    return fa
  },
})

function FocusAreaPage() {
  const fa = Route.useLoaderData()

  return (
    <div>
      {/* Breadcrumb */}
      <div style={{ background: '#D9E1E2', padding: '14px 4vw' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Link to="/" style={{ textDecoration: 'none', fontFamily: 'Figtree, sans-serif', fontWeight: 600, fontSize: '0.85rem', color: '#1C8A70' }}>Home</Link>
          <span style={{ color: '#888', fontSize: '0.85rem' }}>›</span>
          <span style={{ fontFamily: 'Figtree, sans-serif', fontWeight: 600, fontSize: '0.85rem', color: '#004357' }}>{fa.title}</span>
        </div>
      </div>

      {/* Header */}
      <section style={{ background: '#004357', color: '#fff', padding: '56px 4vw 52px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <span style={{ fontSize: '2.4rem' }}>{fa.icon}</span>
            <span style={{
              fontFamily: 'Figtree, sans-serif',
              fontWeight: 600,
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#7AC10A',
            }}>Focus Area</span>
          </div>
          <h1 style={{
            fontFamily: 'Figtree, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            margin: '0 0 20px',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
          }}>
            {fa.title}
          </h1>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontWeight: 300,
            fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
            color: 'rgba(255,255,255,0.82)',
            maxWidth: '600px',
            lineHeight: 1.7,
            margin: 0,
          }}>
            {fa.description}
          </p>
        </div>
      </section>

      {/* Projects */}
      <section style={{ padding: '56px 4vw 80px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
            <h2 style={{
              fontFamily: 'Figtree, sans-serif',
              fontWeight: 900,
              fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
              color: '#004357',
              margin: 0,
              letterSpacing: '-0.01em',
            }}>
              Partner Projects
            </h2>
            <span style={{
              fontFamily: 'Figtree, sans-serif',
              fontWeight: 300,
              fontSize: '0.9rem',
              color: '#888',
            }}>
              {fa.projects.length} project{fa.projects.length !== 1 ? 's' : ''}
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '20px',
          }}>
            {fa.projects.map((project) => (
              <Link
                key={project.id}
                to="/$focusArea/$project"
                params={{ focusArea: fa.id, project: project.id }}
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="hub-card"
                  style={{
                    background: '#fff',
                    border: '1.5px solid #D9E1E2',
                    borderRadius: '14px',
                    padding: '28px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontFamily: 'Figtree, sans-serif',
                      fontWeight: 900,
                      fontSize: '1.05rem',
                      color: '#004357',
                      margin: '0 0 10px',
                      lineHeight: 1.25,
                    }}>
                      {project.title}
                    </h3>
                    <p style={{
                      fontFamily: 'Figtree, sans-serif',
                      fontWeight: 300,
                      fontSize: '0.88rem',
                      color: '#444',
                      margin: 0,
                      lineHeight: 1.65,
                    }}>
                      {project.description}
                    </p>
                  </div>
                  <div style={{
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
                    }}>
                      {project.workstreams.length} workstream{project.workstreams.length !== 1 ? 's' : ''} · {project.workstreams.reduce((a, ws) => a + ws.deliverables.length, 0)} deliverables
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
                      View
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

      {/* Back link */}
      <div style={{ padding: '0 4vw 48px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <Link to="/" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            fontFamily: 'Figtree, sans-serif',
            fontWeight: 600,
            fontSize: '0.9rem',
            color: '#1C8A70',
          }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M11 8H5M8 11L5 8l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to all focus areas
          </Link>
        </div>
      </div>
    </div>
  )
}
