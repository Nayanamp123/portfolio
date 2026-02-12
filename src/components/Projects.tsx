import type { Project } from "../types/Project"

const Projects = () => {
  const projectData: Project[] = [
    {
      id: 1,
      title: "Uber Clone",
      description: "Ride booking UI clone application.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Nayanamp123/uber-responsive"
    },
    {
      id: 2,
      title: "Spotify Clone",
      description: "Music player UI built with React.",
      tech: ["React", "CSS"],
      github: "https://github.com/Nayanamp123/Spotify-Clone"

    },
     {
      id: 3,
      title: "Mapronez - Perfume E-Commerce",
      description:
        "Full-stack perfume e-commerce platform with gender-based product variations and secure payments.",
      tech: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "EJS",
        "AWS EC2",
        "Nginx",
        "Razorpay",
        "Multer",
        "Figma"
      ],
      github: "https://github.com/Nayanamp123/Mapronez"

    },
    {
      id: 4,
      title: "Make-Short - URL Shortener",
      description:
        "Secure and scalable URL shortener application with JWT authentication and full CRUD functionality.",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "REST API"
      ],
      github: "https://github.com/Nayanamp123/Make-Short-Backend"

    },
    {
      id: 5,
      title: "AadhaarXtract - OCR Aadhaar Extraction System",
      description:
        "OCR-based system to extract Aadhaar details including Name, DOB, Gender, Address, Pincode, and Aadhaar Number with high accuracy using a modular extraction pipeline.",
      tech: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "OCR",
        "REST API"
      ],
      github: "https://github.com/Nayanamp123/Aadhar-Extract-API"

    }
  ]

  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        {projectData.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <p>
              <strong>Tech Used:</strong> {project.tech.join(", ")}
            </p>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-btn"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects