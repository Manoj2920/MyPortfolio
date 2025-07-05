export default function About() {
  return (
    <section id="about" className="py-16 px-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-gray-300 leading-7">
        I'm a software engineer with a passion for building clean and scalable
        applications. I specialize in full-stack development with JavaScript, React,
        and Node.js. I enjoy solving complex problems and building meaningful software.
      </p>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block text-blue-400 underline"
      >
        View Resume
      </a>
    </section>
  );
}
