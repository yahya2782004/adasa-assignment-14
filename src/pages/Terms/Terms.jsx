import { Link } from "react-router-dom";

export default function Terms() {
  const sections = [
    {
      number: 1,
      title: "الموافقة على الشروط",
      text: "بالوصول أو استخدام عدسة، فإنك توافق على الالتزام بشروط الخدمة هذه وجميع القوانين واللوائح المعمول بها. إذا لم توافق على أي من هذه الشروط، فأنت ممنوع من استخدام هذا الموقع أو الوصول إليه.",
    },
    {
      number: 2,
      title: "رخصة الاستخدام",
      text: "يُمنح الإذن للوصول المؤقت إلى المواد على موقع عدسة للعرض الشخصي غير التجاري فقط. هذا منح ترخيص وليس نقل ملكية.",
      listTitle: "بموجب هذا الترخيص لا يجوز لك:",
      items: [
        "تعديل أو نسخ المواد",
        "استخدام المواد لأي غرض تجاري أو للعرض العام",
        "محاولة فك أو عكس هندسة أي برنامج على الموقع",
        "إزالة أي حقوق نشر أو علامات ملكية من المواد",
        "نقل المواد إلى شخص آخر أو نسخها على أي خادم آخر",
      ],
    },
    {
      number: 3,
      title: "إخلاء المسؤولية",
      text: 'المواد الموجودة على موقع عدسة مقدمة على أساس "كما هي". عدسة لا يقدم أي ضمانات، صريحة أو ضمنية، ويخلي مسؤوليته من جميع الضمانات الأخرى.',
    },
    {
      number: 4,
      title: "القيود",
      text: "في أي حال من الأحوال، لن يكون عدسة أو مورديه مسؤولين عن أي أضرار ناتجة عن استخدام أو عدم القدرة على استخدام المواد على الموقع.",
    },
    {
      number: 5,
      title: "محتوى المستخدم",
      text: "إذا نشرت محتوى على موقعنا (مثل التعليقات)، فإنك تمنحنا ترخيصاً غير حصري وعالمي ومجاني لاستخدام هذا المحتوى وإعادة إنتاجه وتعديله وتوزيعه.",
      listTitle: "يجب ألا يكون محتواك:",
      items: [
        "أن يكون تشهيرياً أو فاحشاً أو مسيئاً",
        "انتهاك حقوق الملكية الفكرية للآخرين",
        "احتواء فيروسات أو أكواد ضارة",
        "انتهاك أي قوانين أو لوائح معمول بها",
        "الإعلان عن منتجات أو خدمات غير مصرح بها",
      ],
    },
    {
      number: 6,
      title: "التعديلات",
      text: "قد يراجع عدسة شروط الخدمة هذه في أي وقت دون إشعار. باستخدام هذا الموقع، فإنك توافق على الالتزام بالنسخة الحالية من شروط الخدمة.",
    },
    {
      number: 7,
      title: "معلومات الاتصال",
      text: "إذا كان لديك أي أسئلة حول شروط الخدمة هذه، يرجى التواصل معنا:",
      email: "hello@adasah.com",
    },
  ];

  return (
    <main className="flex-grow pt-20" dir="rtl">
      <div className="bg-[#0a0a0a]">
        {/* Terms Hero */}
        <header className="relative py-20 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-[#0a0a0a]"></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

          {/* Yellow Background Glow */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-yellow-500/20 rounded-full blur-[100px]"></div>
          </div>

          {/* Header Content */}
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

              <span className="text-orange-500 font-medium">شروط الخدمة</span>
            </nav>

            {/* Document Icon */}
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
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>

            {/* Page Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              شروط الخدمة
            </h1>

            {/* Last Updated */}
            <p className="text-neutral-400 text-lg">آخر تحديث: 15 يناير 2026</p>
          </div>
        </header>

        {/* Terms Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Important Notice */}
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6 mb-12">
            <div className="flex gap-4">
              {/* Warning Icon */}
              <div className="flex-shrink-0">
                <svg
                  className="w-6 h-6 text-yellow-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>

              {/* Notice Text */}
              <div>
                <h3 className="font-semibold text-yellow-500 mb-1">
                  إشعار مهم
                </h3>

                <p className="text-yellow-300/80 text-sm">
                  يرجى قراءة شروط الخدمة هذه بعناية قبل استخدام موقعنا. بالوصول
                  أو استخدام عدسة، فإنك توافق على الالتزام بهذه الشروط.
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
                  {/* Section Number */}
                  <span className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-500 text-white text-sm font-bold rounded-lg">
                    {section.number}
                  </span>

                  {section.title}
                </h2>

                {/* Section Body */}
                <div className="pr-11">
                  {/* Description */}
                  <p className="text-neutral-400 leading-relaxed mb-4">
                    {section.text}
                  </p>

                  {/* List Heading */}
                  {section.listTitle && (
                    <p className="text-neutral-300 font-medium mb-3">
                      {section.listTitle}
                    </p>
                  )}

                  {/* Restricted Actions List */}
                  {section.items && (
                    <ul className="space-y-2">
                      {section.items.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-neutral-400"
                        >
                          {/* Red X Icon */}
                          <svg
                            className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>

                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Contact Email */}
                  {section.email && (
                    <a
                      href={`mailto:${section.email}`}
                      className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 font-medium"
                    >
                      {/* Email Icon */}
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
              باستخدام موقعنا، فإنك توافق على شروط الخدمة هذه. انظر أيضاً{" "}
              <Link
                to="/privacy"
                className="text-orange-500 hover:text-orange-400 font-medium"
              >
                سياسة الخصوصية
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
