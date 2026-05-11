import React from "react";

const Contact = () => {
  return (
    <section className="max-w-3xl mx-auto px-6 pt-8 md:pt-16 pb-16">
      <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 shadow-sm">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
          Contact
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          Want to work together or ask a question? Reach out and I will get back
          to you soon.
        </p>

        <div className="space-y-4">
          <a
            href="mailto:bahatiisack61@gmail.com"
            className="block w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-3 text-gray-800 dark:text-gray-100 hover:border-purple-400 dark:hover:border-purple-500 transition-colors"
          >
            Email: bahatiisack61@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/isack-bahati-b603a9364?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-3 text-gray-800 dark:text-gray-100 hover:border-purple-400 dark:hover:border-purple-500 transition-colors"
          >
            LinkedIn: isack-bahati
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;