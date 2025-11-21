export default function TeamCulture() {
  const pillars = [
    { title: "Curiosity", desc: "We ask better questions and learn fast.", color: "from-green-400 to-blue-500" },
    { title: "Craftsmanship", desc: "Quality over shortcuts—every time.", color: "from-yellow-400 to-orange-500" },
    { title: "Collaboration", desc: "Cross-functional teams, shared outcomes.", color: "from-purple-400 to-pink-500" },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-transparent text-gray-900 dark:text-gray-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl font-extrabold mb-4">Our team culture</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">We foster an environment that empowers people to do their best work.</p>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="flex flex-col gap-4 p-6 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg">
              <div className={`w-12 h-12 rounded-md bg-linear-to-br ${p.color} flex items-center justify-center text-white font-bold`}>
                {p.title.charAt(0)}
              </div>
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-lg p-6">
          <blockquote className="text-gray-700 dark:text-gray-200 italic">“We hire for character, train for skills, and celebrate the small wins every day.”</blockquote>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">This approach helps teams move faster while keeping a humane workplace.</p>
        </div>
      </div>
    </section>
  );
}
