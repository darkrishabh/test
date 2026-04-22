import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const techStack = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
]

const projects = [
  {
    title: "GigaQR",
    description:
      "Dynamic QR code platform with analytics, campaigns, and custom landing pages.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "TaskFlow",
    description:
      "Project management tool to organize tasks, collaborate, and track progress.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "DevMetrics",
    description:
      "Developer analytics dashboard to track performance and productivity.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
  },
]

const blogPosts = [
  {
    title: "Building Scalable APIs with Node.js & Express",
    meta: "May 12, 2024 • 6 min read",
  },
  {
    title: "State Management in React: A Deep Dive",
    meta: "Apr 28, 2024 • 8 min read",
  },
  {
    title: "10 Useful VS Code Tips & Extensions",
    meta: "Apr 10, 2024 • 5 min read",
  },
]

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Arjun Sharma | Software Engineer" />
      <div className="portfolio-page">
        <header className="top-nav">
          <a href="/" className="brand-mark">
            A/
          </a>
          <nav className="nav-links" aria-label="Primary">
            <a href="/">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
            <button type="button" className="resume-btn">
              Resume
            </button>
          </nav>
        </header>

        <main>
          <section className="hero" id="about">
            <div className="hero-copy">
              <p className="eyebrow">Hi, I&apos;m</p>
              <h1>Arjun Sharma</h1>
              <p className="role">Software Engineer</p>
              <p className="hero-description">
                I build scalable and user-friendly web applications that solve
                real-world problems.
              </p>
              <div className="hero-actions">
                <button type="button" className="primary-btn">
                  View My Work
                </button>
                <button type="button" className="secondary-btn">
                  Contact Me
                </button>
              </div>
              <div className="socials" aria-label="Social links">
                <a href="/">GitHub</a>
                <a href="/">LinkedIn</a>
                <a href="/">X</a>
                <a href="/">Email</a>
              </div>
            </div>

            <div className="hero-image-wrap" aria-hidden="true">
              <div className="avatar-circle">
                <div className="avatar-placeholder">Placeholder Photo</div>
              </div>
              <span className="accent-dot" />
            </div>
          </section>

          <section className="section-block tech-block">
            <h2>Tech Stack</h2>
            <div className="chip-row">
              {techStack.map(item => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </section>

          <section className="section-block" id="projects">
            <div className="section-head">
              <h2>Projects</h2>
              <a href="/">View all projects</a>
            </div>
            <div className="project-grid">
              {projects.map(project => (
                <article className="project-card" key={project.title}>
                  <div className="project-thumb">Project Image Placeholder</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">
                    {project.tags.map(tag => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section-block" id="blog">
            <div className="section-head">
              <h2>Latest from the Blog</h2>
              <a href="/">View all posts</a>
            </div>
            <div className="blog-grid">
              {blogPosts.map(post => (
                <article className="blog-card" key={post.title}>
                  <h3>{post.title}</h3>
                  <p>{post.meta}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="contact-banner section-block" id="contact">
            <div>
              <h2>Interested in working together?</h2>
              <p>I&apos;m currently open to new opportunities.</p>
            </div>
            <button type="button" className="primary-btn">
              Get In Touch
            </button>
          </section>
        </main>

        <footer className="site-footer">
          <a href="/" className="brand-mark">
            A/
          </a>
          <p>© 2026 Arjun Sharma. All rights reserved.</p>
          <nav aria-label="Footer">
            <a href="/">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </nav>
        </footer>
      </div>
    </Layout>
  )
}

export default IndexPage
