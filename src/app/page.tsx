"use client";

import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState<'zh' | 'en'>('zh');

  const content = {
    zh: {
      name: "李润风",
      title: "高级产品经理",
      subtitle: "专注于创造用户喜爱的产品，通过数据驱动决策和用户体验设计，推动业务增长和产品创新",
      nav: {
        about: "关于我",
        skills: "技能",
        experience: "经验", 
        projects: "项目",
        contact: "联系我"
      },
      buttons: {
        viewProjects: "查看我的项目",
        downloadResume: "下载简历"
      },
      about: {
        title: "关于我",
        subtitle: "产品管理专家",
        description: "我是一名经验丰富的产品经理，拥有多年的产品管理经验。专长于用户研究、产品策略制定、团队协作和数据分析。致力于通过深入了解用户需求，创造真正有价值的产品。",
        highlights: [
          "5+ 年产品管理经验",
          "成功推出 10+ 款产品",
          "用户体验设计背景",
          "数据驱动决策专家"
        ],
        philosophy: "我的理念",
        quote: "好的产品不仅仅是功能的堆砌，而是用户需求、商业价值和技术可行性的完美平衡"
      },
      skills: {
        title: "核心技能",
        items: [
          {
            icon: "📊",
            title: "数据分析",
            description: "运用数据驱动决策，进行用户行为分析和产品性能监控",
            tools: "Google Analytics • Mixpanel • SQL • Python"
          },
          {
            icon: "🎨", 
            title: "用户体验",
            description: "深入理解用户需求，设计直观易用的产品体验",
            tools: "Figma • Sketch • 用户研究 • 原型设计"
          },
          {
            icon: "⚡",
            title: "敏捷开发",
            description: "熟练运用敏捷方法论，高效协调跨职能团队",
            tools: "Scrum • Kanban • Jira • Confluence"
          },
          {
            icon: "🚀",
            title: "产品策略",
            description: "制定产品路线图，市场分析和竞品研究",
            tools: "产品规划 • 市场调研 • OKR • PRD"
          }
        ]
      },
      experience: {
        title: "工作经验",
        items: [
          {
            period: "2022 - 至今",
            position: "高级产品经理",
            company: "科技公司",
            description: "负责核心产品线的战略规划和执行，带领跨职能团队成功推出多个重要功能，用户活跃度提升40%，收入增长60%。",
            achievements: [
              "制定产品路线图，优先级排序和资源分配",
              "领导用户研究，深入了解用户痛点和需求", 
              "协调工程、设计和运营团队，确保产品按时交付",
              "通过A/B测试优化核心功能，提升转化率35%"
            ]
          },
          {
            period: "2020 - 2022",
            position: "产品经理",
            company: "互联网公司", 
            description: "专注于移动端产品的设计和优化，通过A/B测试和数据分析持续改进用户体验，成功提升用户留存率25%。",
            achievements: [
              "设计和执行产品实验，验证功能假设",
              "分析用户行为数据，优化产品流程",
              "与设计团队紧密合作，提升用户界面体验",
              "管理产品需求池，确保开发优先级"
            ]
          }
        ]
      },
      projects: {
        title: "项目案例",
        items: [
          {
            title: "电商平台重构",
            description: "领导团队重新设计电商平台的用户体验，通过优化购物流程和个性化推荐，转化率提升35%，用户满意度大幅提升。",
            tags: ["用户研究", "A/B测试", "数据分析", "个性化推荐"],
            gradient: "from-blue-400 to-blue-600"
          },
          {
            title: "移动应用创新",
            description: "从0到1打造创新移动应用，深入市场调研和竞品分析，产品上线6个月内获得50万+用户，获得行业认可。",
            tags: ["市场调研", "MVP开发", "增长策略", "用户获取"],
            gradient: "from-purple-400 to-purple-600"
          },
          {
            title: "AI智能客服系统",
            description: "设计并推出AI驱动的智能客服系统，提升客户服务效率70%，客户满意度从3.2提升到4.6。",
            tags: ["AI产品", "用户体验", "数据分析", "服务优化"],
            gradient: "from-green-400 to-green-600"
          },
          {
            title: "企业SaaS平台",
            description: "主导企业级SaaS产品开发，设计灵活的权限系统和工作流，为企业客户节省运营成本30%。",
            tags: ["B2B产品", "系统设计", "工作流", "企业服务"],
            gradient: "from-orange-400 to-orange-600"
          }
        ]
      },
      contact: {
        title: "联系我",
        description: "如果您对我的经验感兴趣，或者想要讨论潜在的合作机会，欢迎与我联系",
        email: "runfeng.li@example.com",
        wechat: "runfeng_li"
      },
      footer: "© 2024 李润风作品集. 专注于创造用户喜爱的产品."
    },
    en: {
      name: "Runfeng Li",
      title: "Senior Product Manager", 
      subtitle: "Focused on creating products users love through data-driven decisions and user experience design, driving business growth and product innovation",
      nav: {
        about: "About",
        skills: "Skills", 
        experience: "Experience",
        projects: "Projects",
        contact: "Contact"
      },
      buttons: {
        viewProjects: "View My Projects",
        downloadResume: "Download Resume"
      },
      about: {
        title: "About Me",
        subtitle: "Product Management Expert",
        description: "I am an experienced product manager with years of product management experience. Specialized in user research, product strategy development, team collaboration, and data analysis. Dedicated to creating truly valuable products through deep understanding of user needs.",
        highlights: [
          "5+ years of product management experience",
          "Successfully launched 10+ products",
          "User experience design background",
          "Data-driven decision expert"
        ],
        philosophy: "My Philosophy",
        quote: "Good products are not just a pile of features, but the perfect balance of user needs, business value, and technical feasibility"
      },
      skills: {
        title: "Core Skills",
        items: [
          {
            icon: "📊",
            title: "Data Analysis",
            description: "Using data-driven decisions, conducting user behavior analysis and product performance monitoring",
            tools: "Google Analytics • Mixpanel • SQL • Python"
          },
          {
            icon: "🎨",
            title: "User Experience", 
            description: "Deep understanding of user needs, designing intuitive and easy-to-use product experiences",
            tools: "Figma • Sketch • User Research • Prototyping"
          },
          {
            icon: "⚡",
            title: "Agile Development",
            description: "Proficient in agile methodologies, efficiently coordinating cross-functional teams",
            tools: "Scrum • Kanban • Jira • Confluence"
          },
          {
            icon: "🚀",
            title: "Product Strategy",
            description: "Developing product roadmaps, market analysis and competitive research",
            tools: "Product Planning • Market Research • OKR • PRD"
          }
        ]
      },
      experience: {
        title: "Work Experience",
        items: [
          {
            period: "2022 - Present",
            position: "Senior Product Manager",
            company: "Technology Company",
            description: "Responsible for strategic planning and execution of core product lines, leading cross-functional teams to successfully launch multiple important features, increasing user activity by 40% and revenue by 60%.",
            achievements: [
              "Develop product roadmap, prioritization and resource allocation",
              "Lead user research to deeply understand user pain points and needs",
              "Coordinate engineering, design and operations teams to ensure timely product delivery",
              "Optimize core functions through A/B testing, improving conversion rate by 35%"
            ]
          },
          {
            period: "2020 - 2022", 
            position: "Product Manager",
            company: "Internet Company",
            description: "Focused on mobile product design and optimization, continuously improving user experience through A/B testing and data analysis, successfully increasing user retention by 25%.",
            achievements: [
              "Design and execute product experiments to validate feature hypotheses",
              "Analyze user behavior data to optimize product processes",
              "Work closely with design team to improve user interface experience",
              "Manage product backlog to ensure development priorities"
            ]
          }
        ]
      },
      projects: {
        title: "Project Portfolio",
        items: [
          {
            title: "E-commerce Platform Redesign",
            description: "Led team to redesign e-commerce platform user experience, improving conversion rate by 35% and significantly enhancing user satisfaction through optimized shopping flow and personalized recommendations.",
            tags: ["User Research", "A/B Testing", "Data Analysis", "Personalization"],
            gradient: "from-blue-400 to-blue-600"
          },
          {
            title: "Mobile App Innovation",
            description: "Built innovative mobile application from 0 to 1, conducting in-depth market research and competitive analysis, gaining 500K+ users within 6 months of launch and receiving industry recognition.",
            tags: ["Market Research", "MVP Development", "Growth Strategy", "User Acquisition"],
            gradient: "from-purple-400 to-purple-600"
          },
          {
            title: "AI Customer Service System",
            description: "Designed and launched AI-driven customer service system, improving customer service efficiency by 70% and customer satisfaction from 3.2 to 4.6.",
            tags: ["AI Product", "User Experience", "Data Analysis", "Service Optimization"],
            gradient: "from-green-400 to-green-600"
          },
          {
            title: "Enterprise SaaS Platform",
            description: "Led enterprise SaaS product development, designed flexible permission system and workflows, saving 30% operational costs for enterprise clients.",
            tags: ["B2B Product", "System Design", "Workflow", "Enterprise Service"],
            gradient: "from-orange-400 to-orange-600"
          }
        ]
      },
      contact: {
        title: "Contact Me",
        description: "If you are interested in my experience or want to discuss potential collaboration opportunities, please feel free to contact me",
        email: "runfeng.li@example.com",
        wechat: "runfeng_li"
      },
      footer: "© 2024 Runfeng Li Portfolio. Focused on creating products users love."
    }
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900">{t.name}</div>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-8">
                <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">{t.nav.about}</a>
                <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">{t.nav.skills}</a>
                <a href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors">{t.nav.experience}</a>
                <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">{t.nav.projects}</a>
                <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">{t.nav.contact}</a>
              </div>
              {/* Language Switch */}
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setLanguage('zh')}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    language === 'zh' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  中文
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    language === 'en' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
            {language === 'zh' ? '李' : 'RL'}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {language === 'zh' ? (
              <>您好，我是<span className="text-blue-600">李润风</span></>
            ) : (
              <>Hello, I&apos;m <span className="text-blue-600">Runfeng Li</span></>
            )}
          </h1>
          <p className="text-2xl text-blue-600 font-semibold mb-4">{t.title}</p>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg hover:shadow-xl"
            >
              {t.buttons.viewProjects}
            </a>
            <a
              href="/resume.pdf"
              className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              {t.buttons.downloadResume}
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">{t.about.title}</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{t.about.subtitle}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t.about.description}
              </p>
              <div className="space-y-4">
                {t.about.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">{t.about.philosophy}</h4>
                <p className="text-gray-600 italic">&ldquo;{t.about.quote}&rdquo;</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">{t.skills.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.skills.items.map((skill, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{skill.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{skill.description}</p>
                <div className="text-xs text-gray-500">{skill.tools}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">{t.experience.title}</h2>
          <div className="space-y-12">
            {t.experience.items.map((exp, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-2">
                    {exp.period}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{exp.position}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
                  <ul className="space-y-2 text-gray-600">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>• {achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">{t.projects.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {t.projects.items.map((project, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className={`h-48 bg-gradient-to-br ${project.gradient}`}></div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">{t.contact.title}</h2>
          <p className="text-xl text-gray-600 mb-12">
            {t.contact.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href={`mailto:${t.contact.email}`} 
              className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                📧
              </div>
              <span className="font-medium">{t.contact.email}</span>
            </a>
            <div className="flex items-center gap-3 text-gray-600">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                💬
              </div>
              <span className="font-medium">{language === "zh" ? "微信: " : "WeChat: "}{t.contact.wechat}</span>
            </div>
            <a 
              href="https://linkedin.com/in/runfeng-li" 
              className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                💼
              </div>
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">{t.footer}</p>
        </div>
      </footer>
    </div>
  );
}
