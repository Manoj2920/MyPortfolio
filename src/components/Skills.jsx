const skills = ["JavaScript", "React", "Node.js", "TypeScript", "MongoDB", "Git", "Docker"];

export default function Skills() {
  return (
    <section className="py-16 px-8 bg-gray-800">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, i) => (
          <span key={i} className="bg-gray-700 px-4 py-2 rounded text-sm">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
