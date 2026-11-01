import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function About() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/posts.json")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.posts);
      });
  }, []);

  const authors = posts
    .filter((post) => {
      const firstPost = posts.find(
        (item) => item.author.name === post.author.name,
      );

      return firstPost === post;
    })
    .map((post) => post.author);

  const stats = [
    {
      value: "+2مليون",
      label: "قارئ شهرياً",
      icon: "users",
    },
    {
      value: "+500",
      label: "مقالة منشورة",
      icon: "newspaper",
    },
    {
      value: "+50",
      label: "كاتب خبير",
      icon: "pen",
    },
    {
      value: "+15",
      label: "تصنيف",
      icon: "book",
    },
  ];

  const values = [
    {
      title: "الجودة أولاً",
      description: "محتوى مدروس ومكتوب بخبرة",
      icon: "target",
    },
    {
      title: "تركيز عملي",
      description: "أمثلة واقعية يمكنك تطبيقها اليوم",
      icon: "bolt",
    },
    {
      title: "المجتمع",
      description: "تعلم مع آلاف المصورين",
      icon: "handshake",
    },
    {
      title: "دائماً محدث",
      description: "أحدث الاتجاهات وأفضل الممارسات",
      icon: "refresh",
    },
  ];

  return (
    <main className="flex-grow pt-20">
      <div className="bg-[#0a0a0a]">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-[#0a0a0a]"></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

          {/* Background Glow */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-[100px]"></div>

            <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]"></div>
          </div>

          {/* Hero Content */}
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Section Label */}
            <span className="section-label inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              من نحن
            </span>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              مهمتنا هي <span className="gradient-text">الإعلام والإلهام</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
              ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
              المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card p-6">
                  <div className="flex justify-center mb-2">
                    {stat.icon === "users" && (
                      <svg
                        className="w-7 h-7 text-orange-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    )}

                    {stat.icon === "newspaper" && (
                      <svg
                        className="w-7 h-7 text-orange-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4 22h16a2 2 0 0 0 2-2V4H6v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2V6h4M10 8h8v4h-8zM10 16h8M10 19h8" />
                      </svg>
                    )}

                    {stat.icon === "pen" && (
                      <svg
                        className="w-7 h-7 text-orange-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 19l7-7 3 3-7 7-3-3zM18 13l-7-7-9 9v7h7zM2 22l8-8" />
                      </svg>
                    )}

                    {stat.icon === "book" && (
                      <svg
                        className="w-7 h-7 text-orange-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 7v14M3 18V5a2 2 0 0 1 2-2h3a4 4 0 0 1 4 4 4 4 0 0 1 4-4h3a2 2 0 0 1 2 2v13h-5a4 4 0 0 0-4 3 4 4 0 0 0-4-3z" />
                      </svg>
                    )}
                  </div>

                  <div className="text-3xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>

                  <div className="text-sm text-neutral-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20 bg-[#111111] border-y border-[#262626]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Heading */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <span className="w-1.5 h-8 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-full"></span>
                قيمنا
                <span className="w-1.5 h-8 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full"></span>
              </h2>

              <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                المبادئ التي توجه كل ما نقوم بإنشائه
              </p>
            </div>

            {/* Values Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="group p-6 bg-[#161616] rounded-2xl border border-[#262626] hover:border-orange-500/30 transition-all duration-300 text-center relative overflow-hidden"
                >
                  {/* Hover Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

                  <div className="relative">
                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                      <svg
                        className="w-10 h-10 text-orange-500"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        {value.icon === "target" && (
                          <>
                            <circle cx="12" cy="12" r="9" />
                            <circle cx="12" cy="12" r="5" />
                            <circle cx="12" cy="12" r="1" />
                          </>
                        )}

                        {value.icon === "bolt" && (
                          <path d="m13 2-10 12h8l-1 8 11-13h-8V2z" />
                        )}

                        {value.icon === "handshake" && (
                          <>
                            <path d="m2 12 4-4 4 1 3-2 3 1 6 6-4 4-2-1-3 3-3-2-2 1-6-7z" />
                            <path d="m6 8 3-3h4l3 3M9 12l4 4" />
                          </>
                        )}

                        {value.icon === "refresh" && (
                          <>
                            <path d="M20 11a8 8 0 0 0-14-5L4 8" />
                            <path d="M4 4v4h4" />
                            <path d="M4 13a8 8 0 0 0 14 5l2-2" />
                            <path d="M16 16h4v4" />
                          </>
                        )}
                      </svg>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p className="text-neutral-400 text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Heading */}
            <div className="text-center mb-16">
              <span className="section-label mb-4">فريقنا</span>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                تعرف على كتابنا
              </h2>

              <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع
                المجتمع.
              </p>
            </div>

            {/* Authors Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {authors.map((author) => (
                <div
                  key={author.name}
                  className="group bg-[#161616] rounded-2xl p-6 text-center border border-[#262626] hover:border-orange-500/30 transition-all duration-300"
                >
                  {/* Author Image */}
                  <div className="relative inline-block mb-4">
                    <img
                      src={author.avatar}
                      alt={author.name}
                      className="w-24 h-24 rounded-full object-cover ring-4 ring-[#262626] group-hover:ring-orange-500/30 transition-all"
                    />

                    {/* Verified Badge */}
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full border-2 border-[#161616] flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Author Name */}
                  <h3 className="font-bold text-white text-lg">
                    {author.name}
                  </h3>

                  {/* Author Role */}
                  <p className="text-orange-500 text-sm font-medium mb-4">
                    {author.role}
                  </p>

                  {/* Social Media Icons */}
                  <div className="flex justify-center gap-3">
                    {/* X */}
                    <span
                      title="X"
                      className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-orange-500 hover:text-white transition-colors cursor-pointer"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </span>

                    {/* GitHub */}
                    <span
                      title="GitHub"
                      className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-neutral-700 hover:text-white transition-colors cursor-pointer"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>

                    {/* LinkedIn */}
                    <span
                      title="LinkedIn"
                      className="w-9 h-9 bg-[#262626] rounded-lg flex items-center justify-center text-neutral-500 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-500 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 right-10 w-64 h-64 bg-white/20 rounded-full blur-[100px]"></div>

            <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/20 rounded-full blur-[80px]"></div>
          </div>

          {/* Content */}
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              لديك أسئلة؟ دعنا نتحدث!
            </h2>

            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة،
              أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {/* Contact Button */}
              <a
                href="mailto:hello@adasah.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0a0a0a] text-white font-semibold rounded-xl hover:bg-neutral-900 transition-all duration-300 hover:-translate-y-0.5"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                تواصل معنا
              </a>

              {/* Browse Articles Button */}
              <Link
                to="/blog"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white hover:text-[#0a0a0a] transition-all duration-300"
              >
                تصفح المقالات
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
