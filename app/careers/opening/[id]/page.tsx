"use client";

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import NotFound from './NotFound'
import { useParams } from "next/navigation";




type Job = {
    id: string
    role: string
    skills:string[]
    title: string
    disc:string
    location: string
    type: string
    team: string
    icon:React.ReactElement
    color:string
    summary: string
    responsibilities: string[]
    qualifications: string[]
} 

const JOBS: Job[] = [
    {
    id: "intern-1",
    role: "Software Engineer Intern",
    title: "Software Engineer Intern",
    location: "Remote",
    type: "Internship",
    team: "Engineering",
    skills: ["React", "Java", "Tailwind"],
    color: "from-yellow-400 to-orange-500",
    disc: "Work with mentors on real product features: implement UI components, write tests, and contribute to backend services. Great for learning full-stack engineering practices.",
    summary:
      "Work with senior engineers to ship real product features and learn full-stack engineering best practices.",
    responsibilities: [
      "Build and test UI components",
      "Assist backend tasks and debugging",
      "Collaborate with mentors on feature delivery",
    ],
    qualifications: [
      "Basic knowledge of React or Java",
      "Eager to learn full-stack development",
      "Good problem-solving skills",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="3" y="4" width="18" height="14" rx="2"></rect>
        <path d="M8 20h8"></path>
        <path d="M9 8h6"></path>
      </svg>
    ),
  },

  {
    id: "frontend-1",
    role: "Frontend Engineer",
    title: "Frontend Engineer",
    location: "Remote / Hybrid (NYC)",
    type: "Full-time",
    team: "Product",
    skills: ["React", "TypeScript", "CSS", "Next.js"],
    color: "from-sky-400 to-indigo-500",
    disc: "Design and implement performant, accessible user interfaces. Collaborate with product and design to ship pixel-perfect UIs and optimize client rendering and bundle size.",
    summary:
      "Build delightful user experiences using modern React. Own features from design to production.",
    responsibilities: [
      "Ship pixel-perfect UI components",
      "Collaborate with designers & backend",
      "Write tests and document APIs",
    ],
    qualifications: [
      "3+ years React/TypeScript",
      "Familiar with Next.js or similar frameworks",
      "Strong communication skills",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 7h18"></path>
        <rect x="3" y="7" width="18" height="13" rx="2"></rect>
        <path d="M7 3v4"></path>
        <path d="M17 3v4"></path>
      </svg>
    ),
  },

  {
    id: "backend-1",
    role: "Backend Engineer",
    title: "Backend Engineer",
    location: "Remote / NYC",
    type: "Full-time",
    team: "Infrastructure",
    skills: ["Node.js", "Postgres", "API design", "Docker"],
    color: "from-indigo-500 to-violet-500",
    disc: "Build scalable APIs and services, design data models, and optimize queries. Ownership of reliability, performance, and backend architecture decisions.",
    summary:
      "Design scalable services and take ownership of backend components, APIs, and data models.",
    responsibilities: [
      "Design & implement APIs",
      "Optimize performance and reliability",
      "Work on data modeling and infrastructure",
    ],
    qualifications: [
      "3+ years Node.js/TypeScript",
      "Database experience",
      "Interest in distributed systems",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2v6"></path>
        <path d="M6 8v6a6 6 0 0012 0V8"></path>
        <rect x="3" y="8" width="18" height="8" rx="2"></rect>
      </svg>
    ),
  },

  {
    id: "devops-1",
    role: "DevOps Engineer",
    title: "DevOps Engineer",
    location: "Onsite (London)",
    type: "Full-time",
    team: "SRE / Infrastructure",
    skills: ["Kubernetes", "Terraform", "CI/CD", "AWS"],
    color: "from-emerald-400 to-teal-600",
    disc: "Manage cloud infrastructure, automate deployments, and improve observability. Drive SRE practices to reduce incidents and improve recovery time.",
    summary:
      "Lead infrastructure automation, observability improvements, and SRE practices.",
    responsibilities: [
      "Manage CI/CD and cloud infra",
      "Automate deployments",
      "Improve monitoring and incident response",
    ],
    qualifications: [
      "Experience with AWS & Kubernetes",
      "Strong Terraform & CI/CD knowledge",
      "Understanding of SRE principles",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2v4"></path>
        <path d="M12 18v4"></path>
        <path d="M4.9 4.9l2.8 2.8"></path>
        <path d="M16.3 16.3l2.8 2.8"></path>
        <path d="M2 12h4"></path>
        <path d="M18 12h4"></path>
        <path d="M4.9 19.1l2.8-2.8"></path>
        <path d="M16.3 7.7l2.8-2.8"></path>
      </svg>
    ),
  },

  {
    id: "design-1",
    role: "Product Designer",
    title: "Product Designer",
    location: "Remote",
    type: "Full-time",
    team: "Design",
    skills: ["Figma", "UX research", "Prototyping"],
    color: "from-pink-400 to-rose-500",
    disc: "Lead user research, craft interaction patterns, and produce high-fidelity prototypes. Work closely with engineers to ensure designs are feasible and consistent.",
    summary:
      "Own research, experience design, and rapid prototyping for product teams.",
    responsibilities: [
      "Create high-fidelity prototypes",
      "Conduct UX research & testing",
      "Work closely with engineering",
    ],
    qualifications: [
      "Strong product design portfolio",
      "Experience with Figma",
      "Good UX research understanding",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 21l3-3 4 4 11-11a4 4 0 00-5.657-5.657L5 16l-2 5z"></path>
      </svg>
    ),
  },

  {
    id: "data-1",
    role: "Data Scientist",
    title: "Data Scientist",
    location: "Hybrid (Berlin)",
    type: "Full-time",
    team: "Data",
    skills: ["Python", "Pandas", "ML", "SQL"],
    color: "from-cyan-400 to-sky-600",
    disc: "Analyze product and usage data, build predictive models, and work with teams to turn insights into measurable product improvements.",
    summary:
      "Analyze data, build ML models, and help drive product decisions with insights.",
    responsibilities: [
      "Analyze datasets & create reports",
      "Build predictive models",
      "Collaborate with product & engineering",
    ],
    qualifications: [
      "Experience with ML & Python",
      "Strong SQL knowledge",
      "Ability to present insights clearly",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="8" r="3"></circle>
        <path d="M19 21v-6"></path>
        <path d="M5 21v-4"></path>
        <path d="M12 11v10"></path>
      </svg>
    ),
  },
]

export default function Page() {
    const router = useRouter()
    const params = useParams();
  const { id } = params; 
 

   

    
    const job = JOBS.find((j) => j.id === id) ?? null

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cover, setCover] = useState('')
    const [resume, setResume] = useState<File | null>(null)
    const [submitting, setSubmitting] = useState(false)
    const [success, setSuccess] = useState(false)
    const [errors, setErrors] = useState<string[]>([])

    useEffect(() => {
        setSuccess(false)
        setSubmitting(false)
        setErrors([])
    }, [id])

    if (!job) {
        return (
           <NotFound></NotFound>
        )
    }

    function validate() {
        const errs: string[] = []
        if (!name.trim()) errs.push('Name is required.')
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.push('Valid email is required.')
        if (!resume) errs.push('Resume is required.')
        setErrors(errs)
        return errs.length === 0
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        if (!validate()) return
        setSubmitting(true)
        setErrors([])

        // Simulate upload + API call
        await new Promise((r) => setTimeout(r, 1100))
        console.log('Application submitted', {
            jobId: job!.id,
            name,
            email,
            cover,
            resumeName: resume?.name ?? null,
        })
        setSubmitting(false)
        setSuccess(true)
        // clear form
        setName('')
        setEmail('')
        setCover('')
        setResume(null)
    }

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const f = e.target.files?.[0] ?? null
        if (f && f.size > 5 * 1024 * 1024) {
            setErrors(['Resume must be smaller than 5 MB.'])
            e.currentTarget.value = ''
            return
        }
        setResume(f)
        setErrors([])
    }

    return (
        <main className="container">
            <div className="card">
                <header className="header">
                    <div>
                        <h1 className="title">{job.title}</h1>
                        <p className="meta">
                            {job.team} • {job.type} • {job.location}
                        </p>
                    </div>
                    <div className="actions">
                        <button className="btn ghost" onClick={() => router.push('/careers')}>
                            ← Back
                        </button>
                        <button
                            className="btn"
                            onClick={() => {
                                document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' })
                            }}
                        >
                            Apply now
                        </button>
                    </div>
                </header>

                <section className="content">
                    <p className="summary">{job.summary}</p>

                    <div className="grid">
                        <div className="panel">
                            <h3>Responsibilities</h3>
                            <ul>
                                {job.responsibilities.map((r) => (
                                    <li key={r}>{r}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="panel">
                            <h3>Qualifications</h3>
                            <ul>
                                {job.qualifications.map((q) => (
                                    <li key={q}>{q}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                <form id="apply-form" className="form" onSubmit={handleSubmit}>
                    <h2>Apply for this role</h2>

                    {errors.length > 0 && (
                        <div className="notice error" role="alert">
                            <ul>
                                {errors.map((err) => (
                                    <li key={err}>{err}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {success && <div className="notice success">Application submitted — we'll be in touch.</div>}

                    <label className="field">
                        <span className="label">Full name</span>
                        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Doe" />
                    </label>

                    <label className="field">
                        <span className="label">Email</span>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" />
                    </label>

                    <label className="field">
                        <span className="label">Cover letter (short)</span>
                        <textarea value={cover} onChange={(e) => setCover(e.target.value)} placeholder="Why you're a fit..." />
                    </label>

                    <label className="field">
                        <span className="label">Resume (PDF)</span>
                        <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
                        {resume && <div className="resume-meta">Selected: {resume.name}</div>}
                    </label>

                    <div className="form-row">
                        <button className="btn primary" type="submit" disabled={submitting}>
                            {submitting ? 'Submitting…' : 'Submit application'}
                        </button>
                        <button
                            type="button"
                            className="btn ghost"
                            onClick={() => {
                                setName('')
                                setEmail('')
                                setCover('')
                                setResume(null)
                                setErrors([])
                            }}
                        >
                            Reset
                        </button>
                    </div>
                </form>
            </div>

            <style jsx>{styles}</style>
        </main>
    )
}

const styles = `
:root{
    --bg: #0f1724;
    --card: linear-gradient(180deg,#071126 0%, #0b1530 100%);
    --primary: #7c5cff; /* theme primary */
    --accent: #17e5a7;
    --text: #e6eef8;
    --muted: #9fb0c8;
    --glass: rgba(255,255,255,0.03);
}

*{box-sizing:border-box}

.container{
    min-height:100vh;
    padding:48px 20px;
    display:flex;
    align-items:flex-start;
    justify-content:center;
    background:linear-gradient(180deg, #071025 0%, #071126 60%);
    color:var(--text);
    font-family:Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
}

.card{
    width:100%;
    max-width:980px;
    background:var(--card);
    border-radius:14px;
    padding:28px;
    box-shadow: 0 8px 30px rgba(2,6,23,0.6), inset 0 1px 0 rgba(255,255,255,0.02);
    border: 1px solid rgba(124,92,255,0.08);
    animation: fadeInUp .45s ease both;
}

.notfound{ text-align:center; padding:48px }

.header{
    display:flex;
    gap:16px;
    align-items:center;
    justify-content:space-between;
    margin-bottom:18px;
}

.title{
    margin:0;
    font-size:22px;
    letter-spacing:-0.2px;
}

.meta{
    margin:6px 0 0 0;
    color:var(--muted);
    font-size:13px;
}

.actions{ display:flex; gap:8px }

.content{ margin:10px 0 20px 0 }

.summary{
    margin:8px 0 18px 0;
    color:var(--muted);
    line-height:1.5;
}

.grid{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:12px;
}

.panel{
    background:var(--glass);
    padding:12px;
    border-radius:10px;
    border:1px solid rgba(255,255,255,0.02);
    animation: fadeIn .5s ease;
}

.panel h3{ margin:0 0 8px 0; font-size:14px }
.panel ul{ margin:0; padding-left:18px; color:var(--muted) }

.form{
    margin-top:18px;
    padding-top:16px;
    border-top:1px dashed rgba(255,255,255,0.03);
}

.field{ display:block; margin:12px 0 }
.label{ display:block; font-size:13px; color:var(--muted); margin-bottom:6px }

input[type="text"], input[type="email"], input[type="file"], textarea, input {
    width:100%;
    padding:10px 12px;
    background:rgba(255,255,255,0.02);
    border:1px solid rgba(255,255,255,0.04);
    border-radius:8px;
    color:var(--text);
    outline:none;
    transition: box-shadow .18s ease, transform .12s ease;
}

input:focus, textarea:focus{ box-shadow:0 6px 20px rgba(124,92,255,0.12); transform:translateY(-2px) }

textarea{ min-height:100px; resize:vertical }

.form-row{ display:flex; gap:10px; margin-top:12px; align-items:center }

.btn{
    display:inline-flex;
    align-items:center;
    gap:8px;
    padding:10px 14px;
    border-radius:10px;
    border:1px solid rgba(255,255,255,0.04);
    background:transparent;
    color:var(--text);
    cursor:pointer;
    transition: transform .12s ease, box-shadow .12s ease, background .12s ease;
    font-weight:600;
}

.btn:hover{ transform:translateY(-3px); box-shadow:0 10px 30px rgba(2,6,23,0.6) }

.btn.primary{
    background: linear-gradient(90deg, var(--primary), #5a44ff);
    border: none;
    color: white;
    box-shadow:0 10px 30px rgba(124,92,255,0.18);
}

.btn.ghost{
    background: transparent;
    border: 1px solid rgba(255,255,255,0.04);
}

.notice{
    padding:10px 12px;
    border-radius:8px;
    margin-bottom:8px;
    font-size:14px;
}

.notice.error{ background: linear-gradient(90deg, rgba(255,120,120,0.08), rgba(255,110,110,0.04)); border:1px solid rgba(255,80,80,0.08); color:#ffd9d9 }
.notice.success{ background: linear-gradient(90deg, rgba(23,229,167,0.06), rgba(23,229,167,0.03)); border:1px solid rgba(23,229,167,0.06); color:#bff7e6 }

.resume-meta{ margin-top:8px; color:var(--muted); font-size:13px }

@keyframes fadeInUp{
    from{ transform: translateY(10px); opacity:0 }
    to{ transform: translateY(0); opacity:1 }
}
@keyframes fadeIn{
    from{ opacity:0 }
    to{ opacity:1 }
}

@media (max-width:720px){
    .grid{ grid-template-columns:1fr; }
    .header{ flex-direction:column; align-items:flex-start; gap:10px }
    .form-row{ flex-direction:column; }
}
`