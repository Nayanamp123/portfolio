const Skills: React.FC = () => {
  const skills: string[] = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TypeScript",
    "Node.js",
    "MongoDB"
  ]

  return (
<section id="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  )
}

export default Skills
