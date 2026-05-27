import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { getFocusArea, getProject } from '@/data/hub'

export const Route = createFileRoute('/$focusArea/$project')({
  component: ProjectPage,
  loader: ({ params }) => {
    const fa = getFocusArea(params.focusArea)
    if (!fa) throw notFound()
    const project = getProject(params.focusArea, params.project)
    if (!project) throw notFound()
    return { fa, project }
  },
})

function ProjectPage() {
  const { fa, project } = Route.useLoaderData()

  return (
    <div>
      {/* Breadcrumb */}
      <div style={{ background: '#D9E1E2', padding: '14px 4vw' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <Link to="/" style={{ textDecoration: 'none', fontFamily: 'Figtree, sans-serif', fontWeight: 600, fontSize: '0.85rem', color: '#1C8A70' }}>Home</Link>
          <span style={{ color: '#888', fontSize: '0.85rem' }}>›</span>
          <Link
            to="/$focusArea"
            params={{ focusArea: fa.id }}
            style={{ textDecoration: 'none', fontFamily: 'Figtree, sans-serif', fontWeight: 600, fontSize: '0.85rem', color: '#1C8A70' }}
          >
            {fa.title}
          </Link>
          <span style={{ color: '#888', fontSize: '0.85rem' }}>›</span>
          <span style={{ fontFamily: 'Figtree, sans-serif', fontWeight: 600, fontSize: '0.85rem', color: '#004357' }}>{project.title}</span>
        </div>
      </div>

      {/* Header */}
      <section style={{ background: '#004357', color: '#fff', padding: '56px 4vw 52px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(122,193,10,0.15)',
            border: '1px solid rgba(122,193,10,0.3)',
            borderRadius: '100px',
            padding: '5px 14px',
            marginBottom: '20px',
          }}>
            <span style={{ fontSize: '1rem' }}>{fa.icon}</span>
            <span style={{ fontFamily: 'Figtree, sans-serif', fontWeight: 600, fontSize: '0.78rem', color: '#7AC10A', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              {fa.title}
            </span>
          </div>
          <h1 style={{
            fontFamily: 'Figtree, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            margin: '0 0 20px',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
          }}>
            {project.title}
          </h1>
          <p style={{
            fontFamily: 'Figtree, sans-serif',
            fontWeight: 300,
            fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
            color: 'rgba(255,255,255,0.82)',
            maxWidth: '680px',
            lineHeight: 1.7,
            margin: 0,
          }}>
            {project.description}
          </p>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '32px', marginTop: '36px', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: 'Figtree, sans-serif', fontWeight: 900, fontSize: '1.8rem', color: '#7AC10A', lineHeight: 1 }}>
                {project.workstreams.length}
              </div>
              <div style={{ fontFamily: 'Figtree, sans-serif', fontWeight: 300, fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', marginTop: '4px' }}>
                Workstreams
              </div>
            </div>
            <div style={{ width: '1px', background: 'rgba(255,255,255,0.15)' }} />
            <div>
              <div style={{ fontFamily: 'Figtree, sans-serif', fontWeight: 900, fontSize: '1.8rem', color: '#7AC10A', lineHeight: 1 }}>
                {project.workstreams.reduce((a, ws) => a + ws.deliverables.length, 0)}
              </div>
              <div style={{ fontFamily: 'Figtree, sans-serif', fontWeight: 300, fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', marginTop: '4px' }}>
                Deliverables
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={{ height: '4px', background: '#D9E1E2' }} />

      {/* Workstreams */}
      <section style={{ padding: '56px 4vw 80px' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'Figtree, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
            color: '#004357',
            margin: '0 0 40px',
            letterSpacing: '-0.01em',
          }}>
            Deliverables by Workstream
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {project.workstreams.map((ws, wsIdx) => (
              <div
                key={wsIdx}
                style={{
                  background: '#fff',
                  border: '1.5px solid #D9E1E2',
                  borderRadius: '14px',
                  overflow: 'hidden',
                }}
              >
                {/* Workstream header */}
                <div style={{
                  background: '#D9E1E2',
                  padding: '18px 28px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                }}>
                  <span style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: '#004357',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Figtree, sans-serif',
                    fontWeight: 900,
                    fontSize: '0.82rem',
                    flexShrink: 0,
                  }}>
                    {wsIdx + 1}
                  </span>
                  <h3 style={{
                    fontFamily: 'Figtree, sans-serif',
                    fontWeight: 900,
                    fontSize: '1rem',
                    color: '#004357',
                    margin: 0,
                  }}>
                    {ws.title}
                  </h3>
                  <span style={{
                    marginLeft: 'auto',
                    fontFamily: 'Figtree, sans-serif',
                    fontWeight: 600,
                    fontSize: '0.78rem',
                    color: '#1C8A70',
                  }}>
                    {ws.deliverables.length} deliverable{ws.deliverables.length !== 1 ? 's' : ''}
                  </span>
                </div>

                {/* Deliverables */}
                <div style={{ padding: '24px 28px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  {ws.deliverables.map((del, delIdx) => (
                    <a
                      key={delIdx}
                      href={`/deliverables/${fa.id}/${project.id}/${del.file}`}
                      className="deliverable-link"
                      onClick={(e) => e.preventDefault()}
                      title={`${del.title} — ${del.file}`}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M9 2H4a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V6L9 2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
                        <path d="M9 2v4h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {del.title}
                      <span style={{ opacity: 0.55, fontSize: '0.75rem' }}>.html</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back navigation */}
      <div style={{ padding: '0 4vw 48px', borderTop: '1px solid #D9E1E2' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', paddingTop: '32px', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <Link
            to="/$focusArea"
            params={{ focusArea: fa.id }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
              fontFamily: 'Figtree, sans-serif',
              fontWeight: 600,
              fontSize: '0.9rem',
              color: '#1C8A70',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M11 8H5M8 11L5 8l3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to {fa.title}
          </Link>
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
              fontFamily: 'Figtree, sans-serif',
              fontWeight: 600,
              fontSize: '0.9rem',
              color: '#888',
            }}
          >
            All Focus Areas
          </Link>
        </div>
      </div>
    </div>
  )
}
