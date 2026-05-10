const Project = () => {
  return (
    <div className="max-w-5xl  mx-auto px-6 pt-8 md:pt-16 pb-16">

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
          Projects
        </h1>
        <div className="h-[3px] w-10 bg-purple-500 rounded-full mb-4"></div>
        <p className="text-gray-500 dark:text-gray-400 text-base">
          A selection of my recent work
        </p>
      </div>

      {/* Project Cards Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {/* === Reusable Card START === */}
        <div className="group relative rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-purple-400 dark:hover:border-purple-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1">

          {/* Card Preview Banner */}
          <div className="w-full h-44 bg-gradient-to-br from-purple-100 via-purple-50 to-white dark:from-purple-900/30 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center border-b border-gray-100 dark:border-gray-800">
            <div className="text-center px-4">
              <div className="text-4xl mb-2">🚗</div>
              <p className="text-sm font-medium text-purple-600 dark:text-purple-300 tracking-wide">
                Dream Car Notes
              </p>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-5">

            {/* Title + Badge */}
            <div className="flex items-start justify-between mb-3">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                Dream Car Notes
              </h2>
              <span className="text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/20 whitespace-nowrap ml-2">
                Personal
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
              A simple React application that lets users add, view, and delete
              notes about their dream cars. One of my first projects — with more
              to come.
            </p>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 mb-5">
              {["React.js", "Tailwind CSS", "JavaScript"].map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-gray-100 dark:bg-gray-800 mb-4"></div>

            {/* Action Link */}
            <a
              href="https://github.com/isack44/DreamCar-note"
              className="inline-flex items-center gap-1 text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-200 transition-colors"
            >
              View Project →
            </a>

          </div>
        </div>
        {/* === Reusable Card END === */}

      </div>
    </div>
  );
};

export default Project;