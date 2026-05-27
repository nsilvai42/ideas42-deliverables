export interface Deliverable {
  title: string
  file: string
}

export interface Workstream {
  title: string
  deliverables: Deliverable[]
}

export interface Project {
  id: string
  title: string
  description: string
  workstreams: Workstream[]
}

export interface FocusArea {
  id: string
  title: string
  description: string
  icon: string
  projects: Project[]
}

const placeholderWorkstreams: Workstream[] = [
  {
    title: 'Research & Discovery',
    deliverables: [
      { title: 'Behavioral Landscape Analysis', file: 'behavioral-landscape-analysis.html' },
      { title: 'Stakeholder Interview Summary', file: 'stakeholder-interview-summary.html' },
    ],
  },
  {
    title: 'Design & Implementation',
    deliverables: [
      { title: 'Intervention Design Framework', file: 'intervention-design-framework.html' },
      { title: 'Implementation Playbook', file: 'implementation-playbook.html' },
    ],
  },
]

export const focusAreas: FocusArea[] = [
  {
    id: 'civic-engagement',
    title: 'Civic Engagement',
    icon: '🗳️',
    description:
      'Designing innovations that encourage active participation in democracy and hold government accountable.',
    projects: [
      {
        id: 'voter-turnout-behavioral-study',
        title: 'Voter Turnout Behavioral Study',
        description:
          'A comprehensive study applying behavioral science principles to increase voter participation across underrepresented communities, identifying key friction points in the voting process and designing targeted interventions.',
        workstreams: placeholderWorkstreams,
      },
      {
        id: 'government-transparency-toolkit',
        title: 'Government Transparency Toolkit',
        description:
          'A practitioner-facing resource designed to help government agencies communicate policy information clearly and accessibly, reducing cognitive barriers that prevent citizens from engaging with public services.',
        workstreams: placeholderWorkstreams,
      },
    ],
  },
  {
    id: 'economic-justice',
    title: 'Economic Justice',
    icon: '⚖️',
    description:
      'Advancing solutions that make it easier for people facing economic hardship to exercise their power for individual, community, and systems change.',
    projects: [
      {
        id: 'benefits-enrollment-simplifier',
        title: 'Benefits Enrollment Simplifier',
        description:
          'A project redesigning the enrollment experience for public benefit programs to reduce administrative burden, improve take-up rates, and ensure eligible individuals access the support they qualify for.',
        workstreams: placeholderWorkstreams,
      },
      {
        id: 'community-economic-empowerment-guide',
        title: 'Community Economic Empowerment Guide',
        description:
          'Resources and tools that equip community organizations with behaviorally informed strategies to help residents build economic resilience and advocate for systemic change in their communities.',
        workstreams: placeholderWorkstreams,
      },
    ],
  },
  {
    id: 'financial-health',
    title: 'Financial Health',
    icon: '💵',
    description:
      'Designing behaviorally informed products and services to remove barriers and ensure a financial system that works for everyone.',
    projects: [
      {
        id: 'emergency-savings-behavioral-program',
        title: 'Emergency Savings Behavioral Program',
        description:
          'An initiative working with financial institutions to redesign savings products and communications using behavioral insights, making it easier for lower-income consumers to build emergency financial buffers.',
        workstreams: placeholderWorkstreams,
      },
      {
        id: 'credit-access-building-toolkit',
        title: 'Credit Access & Building Toolkit',
        description:
          'A toolkit supporting lenders and credit counselors in helping underserved consumers navigate credit-building pathways, with behaviorally optimized communications and decision tools.',
        workstreams: placeholderWorkstreams,
      },
    ],
  },
  {
    id: 'giving',
    title: 'Giving',
    icon: '🎁',
    description:
      'Helping people give effectively so their generosity translates to social impact, and making it easier for non-profits to secure funding.',
    projects: [
      {
        id: 'effective-giving-behavioral-nudges',
        title: 'Effective Giving Behavioral Nudges',
        description:
          'Research and tools for charitable giving platforms and nonprofits to apply behavioral science nudges that help donors make more impactful giving decisions and sustain their philanthropic commitments.',
        workstreams: placeholderWorkstreams,
      },
      {
        id: 'nonprofit-donor-retention-playbook',
        title: 'Nonprofit Donor Retention Playbook',
        description:
          'A practical guide for nonprofit fundraising teams featuring behaviorally informed communication strategies, gift acknowledgment frameworks, and retention techniques grounded in social science research.',
        workstreams: placeholderWorkstreams,
      },
    ],
  },
  {
    id: 'global-development',
    title: 'Global Development',
    icon: '🌍',
    description:
      'Redesigning the delivery of anti-poverty and humanitarian programs to help people in contexts of extreme poverty improve their economic well-being.',
    projects: [
      {
        id: 'smallholder-farmer-support-toolkit',
        title: 'Smallholder Farmer Support Toolkit',
        description:
          'Behaviorally informed tools and resources for agricultural development organizations working with smallholder farmers in sub-Saharan Africa and South Asia to improve adoption of improved seeds, fertilizers, and financial products.',
        workstreams: placeholderWorkstreams,
      },
      {
        id: 'cash-transfer-program-optimization',
        title: 'Cash Transfer Program Optimization',
        description:
          'Research and design resources to help humanitarian organizations optimize cash transfer programs, improving enrollment, disbursement, and spending outcomes for recipient households in fragile contexts.',
        workstreams: placeholderWorkstreams,
      },
    ],
  },
  {
    id: 'global-health',
    title: 'Global Health',
    icon: '🌡️',
    description:
      'Transforming global health practices to improve lives in low- and middle-income countries, with a focus on women and children under 5.',
    projects: [
      {
        id: 'maternal-child-health-behavioral-guide',
        title: 'Maternal & Child Health Behavioral Guide',
        description:
          'A practitioner guide applying behavioral science to antenatal care, skilled birth attendance, and postnatal care programs, with communication templates and service delivery frameworks for frontline health workers.',
        workstreams: placeholderWorkstreams,
      },
      {
        id: 'immunization-uptake-enhancement-program',
        title: 'Immunization Uptake Enhancement Program',
        description:
          'Resources for immunization program managers and health system leaders to redesign reminder systems, community outreach, and clinic environments to increase vaccination rates in low- and middle-income countries.',
        workstreams: placeholderWorkstreams,
      },
    ],
  },
  {
    id: 'postsecondary-education',
    title: 'Postsecondary Education',
    icon: '🎓',
    description:
      'Removing small, mundane behavioral barriers to help more students apply, matriculate, persist, and graduate.',
    projects: [
      {
        id: 'calbright-impact-hub',
        title: 'Calbright Impact Hub',
        description:
          "A comprehensive partnership with Calbright College to apply behavioral science to the full student journey — from onboarding through learning and communications — improving student persistence and success at California's online community college.",
        workstreams: [
          {
            title: 'Onboarding',
            deliverables: [
              { title: 'Onboarding Flow Overview', file: 'onboarding-flow-overview.html' },
              { title: 'Welcome Email Templates', file: 'welcome-email-templates.html' },
            ],
          },
          {
            title: 'Personalized Learning Timelines',
            deliverables: [
              { title: 'Learning Timeline Tool', file: 'learning-timeline-tool.html' },
              { title: 'Advisor Guide', file: 'advisor-guide.html' },
            ],
          },
          {
            title: 'Communications',
            deliverables: [
              { title: 'Student Comms Playbook', file: 'student-comms-playbook.html' },
              { title: 'Notification Templates', file: 'notification-templates.html' },
            ],
          },
        ],
      },
      {
        id: 'bottom-line-partnership',
        title: 'Bottom Line Partnership',
        description:
          'Collaborating with Bottom Line to strengthen college access and success programming for first-generation college students from low-income backgrounds, applying behavioral insights to advising workflows and student communications.',
        workstreams: [
          {
            title: 'College Access Advising',
            deliverables: [
              { title: 'Advising Session Framework', file: 'advising-session-framework.html' },
              { title: 'Application Checklist Toolkit', file: 'application-checklist-toolkit.html' },
            ],
          },
          {
            title: 'Student Communications',
            deliverables: [
              { title: 'Outreach Message Templates', file: 'outreach-message-templates.html' },
              { title: 'Re-engagement Campaign Guide', file: 're-engagement-campaign-guide.html' },
            ],
          },
        ],
      },
      {
        id: 'year-up-united-partnership',
        title: 'Year Up United Partnership',
        description:
          'A partnership with Year Up United to apply behavioral science to workforce development programming, improving young adult engagement, skills development outcomes, and job placement rates.',
        workstreams: [
          {
            title: 'Program Engagement',
            deliverables: [
              { title: 'Participant Motivation Framework', file: 'participant-motivation-framework.html' },
              { title: 'Progress Feedback Templates', file: 'progress-feedback-templates.html' },
            ],
          },
          {
            title: 'Career Readiness',
            deliverables: [
              { title: 'Employer Partnership Toolkit', file: 'employer-partnership-toolkit.html' },
              { title: 'Job Search Behavioral Guide', file: 'job-search-behavioral-guide.html' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'safety-justice',
    title: 'Safety & Justice',
    icon: '🏛️',
    description:
      'Improving outcomes in the legal system to reduce harms, prevent negative impacts like incarceration, and build a more fair and equitable system.',
    projects: [
      {
        id: 'pretrial-diversion-behavioral-toolkit',
        title: 'Pretrial Diversion Behavioral Toolkit',
        description:
          'A toolkit for court administrators and pretrial service agencies to apply behavioral science to diversion program design, reducing failure-to-appear rates and improving participant outcomes in the pretrial period.',
        workstreams: placeholderWorkstreams,
      },
      {
        id: 'reentry-success-support-guide',
        title: 'Reentry Success Support Guide',
        description:
          'Resources for reentry service providers and corrections agencies to design behaviorally informed support systems that help individuals returning from incarceration navigate housing, employment, and benefit access.',
        workstreams: placeholderWorkstreams,
      },
    ],
  },
  {
    id: 'us-health',
    title: 'U.S. Health',
    icon: '🏥',
    description:
      'Promoting better outcomes, reduced disparities, and lower costs across clinical care, chronic condition management, and public health.',
    projects: [
      {
        id: 'chronic-condition-self-management-tools',
        title: 'Chronic Condition Self-Management Tools',
        description:
          'Behaviorally informed tools for healthcare providers and health systems to support patients in managing chronic conditions like diabetes and hypertension, improving medication adherence and self-care behaviors.',
        workstreams: placeholderWorkstreams,
      },
      {
        id: 'preventive-screening-outreach-program',
        title: 'Preventive Screening Outreach Program',
        description:
          'A program applying behavioral science to preventive screening outreach for cancer, cardiovascular disease, and other conditions, with communication frameworks and appointment reminder systems for healthcare organizations.',
        workstreams: placeholderWorkstreams,
      },
    ],
  },
]

export function getFocusArea(id: string): FocusArea | undefined {
  return focusAreas.find((fa) => fa.id === id)
}

export function getProject(focusAreaId: string, projectId: string): Project | undefined {
  const fa = getFocusArea(focusAreaId)
  return fa?.projects.find((p) => p.id === projectId)
}
