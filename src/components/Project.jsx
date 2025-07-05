const projects = [
  {
    title: "DevTrack",
    description: "Issue tracker built with MERN stack and JWT auth.",
    link: "https://devtrack.example.com",
    github: "https://github.com/alexdoe/devtrack",
  },
  {
    title: "AlgoVisual",
    description: "Algorithm visualizer for data structures in React.",
    link: "https://algovisual.example.com",
    github: "https://github.com/alexdoe/algovisual",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-8">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold">{proj.title}</h3>
            <p className="text-gray-400 mt-2">{proj.description}</p>
            <div className="mt-4">
              <a href={proj.link} className="text-blue-500 mr-4" target="_blank">Live</a>
              <a href={proj.github} className="text-blue-400" target="_blank">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
