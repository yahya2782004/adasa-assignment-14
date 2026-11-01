import { Link } from "react-router-dom";

export default function Privacy() {
  const sections = [
    {
      number: 1,
      title: "مقدمة",
      text: "مرحباً بك في عدسة. نحن نحترم خصوصيتك وملتزمون بحماية بياناتك الشخصية. ستعلمك سياسة الخصوصية هذه بكيفية العناية ببياناتك الشخصية عند زيارة موقعنا وتخبرك عن حقوق الخصوصية الخاصة بك.",
    },
    {
      number: 2,
      title: "المعلومات التي نجمعها",
      items: [
        {
          label: "بيانات الهوية:",
          text: "تشمل الاسم الأول، الاسم الأخير، اسم المستخدم أو معرف مشابه.",
        },
        {
          label: "بيانات الاتصال:",
          text: "تشمل عنوان البريد الإلكتروني.",
        },
        {
          label: "البيانات التقنية:",
          text: "تشمل عنوان IP، نوع المتصفح، المنطقة الزمنية، ونظام التشغيل.",
        },
        {
          label: "بيانات الاستخدام:",
          text: "تشمل معلومات حول كيفية استخدامك لموقعنا وخدماتنا.",
        },
      ],
    },
    {
      number: 3,
      title: "كيف نستخدم معلوماتك",
      items: [
        { text: "لتقديم خدمتنا والحفاظ عليها" },
        { text: "لإخطارك بالتغييرات في خدمتنا" },
        { text: "لتقديم دعم العملاء" },
        { text: "لجمع تحليلات أو معلومات قيمة لتحسين خدمتنا" },
        { text: "لمراقبة استخدام خدمتنا" },
        { text: "لاكتشاف ومنع ومعالجة المشاكل التقنية" },
      ],
    },
    {
      number: 4,
      title: "ملفات تعريف الارتباط",
      text: "نستخدم ملفات تعريف الارتباط وتقنيات التتبع المشابهة لتتبع النشاط على موقعنا. يمكنك توجيه متصفحك لرفض جميع ملفات تعريف الارتباط أو للإشارة عند إرسال ملف تعريف ارتباط. ومع ذلك، إذا لم تقبل ملفات تعريف الارتباط، فقد لا تتمكن من استخدام بعض أجزاء موقعنا.",
    },
    {
      number: 5,
      title: "أمان البيانات",
      text: "لقد وضعنا تدابير أمنية مناسبة لمنع فقدان بياناتك الشخصية أو استخدامها أو الوصول إليها بشكل غير مصرح به عن طريق الخطأ. نحن نحد الوصول إلى بياناتك الشخصية لأولئك الذين لديهم حاجة عملية للمعرفة.",
    },
    {
      number: 6,
      title: "حقوقك",
      items: [
        { text: "طلب الوصول إلى بياناتك الشخصية" },
        { text: "طلب تصحيح بياناتك الشخصية" },
        { text: "طلب مسح بياناتك الشخصية" },
        { text: "الاعتراض على معالجة بياناتك الشخصية" },
        { text: "طلب تقييد معالجة بياناتك الشخصية" },
        { text: "الحق في سحب الموافقة" },
      ],
    },
    {
      number: 7,
      title: "تواصل معنا",
      text: "إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا:",
      email: "hello@adasah.com",
    },
  ];

  return (
    <main className="flex-grow pt-20" dir="rtl">
      <div className="bg-[#0a0a0a]">
        {/* Privacy Hero */}
        <header className="relative py-20 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-[#0a0a0a]"></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

          {/* Orange Glow */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 right-20 w-72 h-72 bg-orange-500/20 rounded-full blur-[100px]"></div>
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-sm mb-8">
              <Link
                to="/"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                الرئيسية
              </Link>

              <svg
                className="w-4 h-4 text-neutral-600 rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>

              <span className="text-orange-500 font-medium">
                سياسة الخصوصية
              </span>
            </nav>

            {/* Lock Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/10 backdrop-blur-sm rounded-2xl border border-orange-500/30 mb-6">
              <svg
                className="w-8 h-8 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              سياسة الخصوصية
            </h1>

            {/* Last Updated */}
            <p className="text-neutral-400 text-lg">آخر تحديث: 15 يناير 2026</p>
          </div>
        </header>

        {/* Privacy Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Privacy Notice */}
          <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-6 mb-12">
            <div className="flex gap-4">
              {/* Shield Icon */}
              <div className="flex-shrink-0">
                <svg
                  className="w-6 h-6 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>

              <div>
                <h3 className="font-semibold text-orange-500 mb-1">
                  خصوصيتك تهمنا
                </h3>

                <p className="text-orange-300/80 text-sm">
                  نحن ملتزمون بحماية معلوماتك الشخصية والشفافية بشأن ما نجمعه.
                </p>
              </div>
            </div>
          </div>

          {/* Numbered Sections */}
          <div className="space-y-12">
            {sections.map((section) => (
              <section key={section.number} className="group">
                {/* Section Heading */}
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  {/* Number */}
                  <span className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                    {section.number}
                  </span>

                  {section.title}
                </h2>

                {/* Section Body */}
                <div className="pr-11">
                  {/* Lists */}
                  {section.items ? (
                    <ul className="space-y-3">
                      {section.items.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-neutral-400"
                        >
                          {/* Check Icon */}
                          <svg
                            className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>

                          {/* Text */}
                          <span>
                            {item.label && (
                              <strong className="text-white">
                                {item.label}{" "}
                              </strong>
                            )}

                            {item.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p
                      className={`text-neutral-400 leading-relaxed ${
                        section.email ? "mb-4" : ""
                      }`}
                    >
                      {section.text}
                    </p>
                  )}

                  {/* Contact Email */}
                  {section.email && (
                    <a
                      href={`mailto:${section.email}`}
                      className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-medium"
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

                      {section.email}
                    </a>
                  )}
                </div>
              </section>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="mt-16 pt-8 border-t border-[#262626]">
            <p className="text-neutral-500 text-sm text-center">
              باستخدام موقعنا، فإنك توافق على سياسة الخصوصية هذه. انظر أيضاً{" "}
              <Link
                to="/terms"
                className="text-orange-500 hover:text-orange-400 font-medium"
              >
                شروط الخدمة
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
