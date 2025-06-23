"use client";

import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState<'zh' | 'en'>('zh');

  const content = {
    zh: {
      name: "李润风",
      title: "计算机科学硕士研究生 | 项目管理专员",
      subtitle: "澳大利亚国立大学计算机科学在读，具备项目管理、需求分析和系统优化经验，专注于技术与业务的结合",
      nav: {
        about: "关于我",
        education: "教育背景",
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
        subtitle: "技术与管理并重的复合型人才",
        description: "我是澳大利亚国立大学计算机科学硕士在读学生，本科毕业于上海海洋大学信息管理与信息系统专业。拥有项目管理、需求分析和系统优化实战经验，熟练掌握多种编程语言和开发工具。在学生工作中展现出色的组织协调能力，致力于将技术知识与实际业务需求相结合。",
        highlights: [
          "澳大利亚国立大学(QS:34)计算机科学硕士在读",
          "本科GPA 3.5/4.0，成绩排名前30%",
          "项目管理与需求分析实战经验",
          "多次获得奖学金和优秀个人奖项"
        ],
        philosophy: "我的理念",
        quote: "技术服务于业务，创新源于实践。在不断学习中成长，在实践中创造价值"
      },
      education: {
        title: "教育背景",
        items: [
          {
            period: "2023.9 - 2025.6",
            school: "澳大利亚国立大学",
            degree: "计算机科学硕士",
            location: "堪培拉，澳大利亚",
            description: "QS世界排名第34位，专注于软件工程、数据分析等领域的深入学习"
          },
          {
            period: "2019.9 - 2023.6", 
            school: "上海海洋大学/塔斯马尼亚大学",
            degree: "信息管理与信息系统学士",
            location: "上海，中国",
            description: "中外合作办学项目，GPA: 3.5/4.0，均绩：86，成绩排名：36/160（前30%）"
          }
        ]
      },
      experience: {
        title: "实习与实践经验",
        items: [
          {
            period: "2022.6 - 2023.8",
            position: "业务交付助理",
            company: "上海数划云信息科技有限公司 - 客户成功中心",
            description: "负责预算管理、数据分析、项目管理等核心业务，通过系统优化和流程改进显著提升工作效率。",
            achievements: [
              "参与全面预算编制，制定并分解超过20项关键预算指标，预算执行率达95%以上",
              "设计并完成30余张预算表单的数据采集，优化数据录入流程，提升数据处理效率50%", 
              "运用TAPD进行项目规划与任务分配，通过系统配置优化将项目交付周期缩短15%",
              "完善预算数据设计与数据库管理，实现资源利用率最大化"
            ]
          },
          {
            period: "2021.9 - 2022.6",
            position: "学生团委书记",
            company: "共青团上海海洋大学爱恩学院委员会",
            description: "统筹管理6个部门，协调50余名学生骨干，主导策划并组织多场大型校内活动。",
            achievements: [
              "撰写50+篇新闻稿及人物访谈，参与20+项学院重要文件制度修订",
              "主导策划并组织10余场大型校内活动，累计吸引超过2000名师生参与",
              "推动多个跨部门项目落地，活动参与度和影响力提升20%以上",
              "成功建立\"AIEN青春·学习荟\"品牌活动，提升学院影响力与知名度"
            ]
          }
        ]
      },
      skills: {
        title: "核心技能",
        items: [
          {
            icon: "💻",
            title: "编程开发",
            description: "熟练掌握多种编程语言和开发技术",
            tools: "Java • Python • C语言 • SQL • Oracle • JavaScript"
          },
          {
            icon: "🌐", 
            title: "Web开发",
            description: "具备全栈Web开发能力和前端设计经验",
            tools: "HTML/CSS • JavaScript • UI设计 • Photoshop"
          },
          {
            icon: "📊",
            title: "数据分析",
            description: "具备数据处理和分析能力，熟练使用相关工具",
            tools: "VLOOKUP • 数据透视表 • 数据库管理 • 数据可视化"
          },
          {
            icon: "🚀",
            title: "项目管理",
            description: "拥有项目规划、需求分析和团队协调实战经验",
            tools: "TAPD • 需求分析 • 项目规划 • 团队管理"
          }
        ]
      },
      projects: {
        title: "项目经验",
        items: [
          {
            title: "Java游戏开发 - Race to the Raft",
            description: "基于Java语言开发的交互式游戏，实现完整的游戏机制和用户界面。通过JavaFX创建丰富的图形与动画效果，提升用户体验。",
            tags: ["Java", "JavaFX", "游戏开发", "UI设计"],
            gradient: "from-blue-400 to-blue-600"
          },
          {
            title: "预算管理系统优化",
            description: "在上海数划云科技实习期间，设计并完成30余张预算表单的数据采集系统，优化数据录入流程，显著提升数据处理效率。",
            tags: ["数据分析", "系统优化", "流程管理", "数据库"],
            gradient: "from-green-400 to-green-600"
          },
          {
            title: "大型活动策划与组织",
            description: "主导策划并组织10余场大型校内活动，包括学术讲座、社会实践等，累计吸引超过2000名师生参与，建立品牌活动影响力。",
            tags: ["活动策划", "项目管理", "团队协作", "品牌建设"],
            gradient: "from-purple-400 to-purple-600"
          },
          {
            title: "获奖创意设计项目",
            description: "参与多项创意设计比赛并获奖，包括中国好创意大赛省赛优秀奖、微视频创作比赛等，展现创新思维和设计能力。",
            tags: ["创意设计", "UI设计", "视频制作", "Photoshop"],
            gradient: "from-orange-400 to-orange-600"
          }
        ]
      },
      awards: {
        title: "获奖经历",
        items: [
          "2021年\"知行杯\"上海市大学生社会实践大赛三等奖",
          "2020上海市大学生国家安全教育主题活动微视频创作比赛三等奖", 
          "第16届中国好创意大赛省赛优秀奖",
          "5次上海海洋大学人民奖学金",
          "4次先进个人（优秀学生、优秀团干部）",
          "青马工程优秀学员"
        ]
      },
      contact: {
        title: "联系我",
        description: "欢迎与我交流学习和工作机会，期待与您的沟通",
        email: "1153643420@qq.com",
        phone: "13818364092",
        wechat: "li_runfeng"
      },
      footer: "© 2024 李润风个人主页. 在学习中成长，在实践中创新."
    },
    en: {
      name: "Lily Runfeng Li",
      title: "Master of Computer Science | Project Management Specialist",
      subtitle: "Graduate student at ANU with hands-on experience in project management, requirements analysis, and system optimization",
      nav: {
        about: "About",
        education: "Education",
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
        subtitle: "Technology & Management Professional",
        description: "I am a Master of Computer Science student at The Australian National University, with a Bachelor's degree in Information Management and Information Systems from Shanghai Ocean University. I have practical experience in project management, requirements analysis, and system optimization, with proficiency in multiple programming languages and development tools.",
        highlights: [
          "Master of Computer Science at ANU (QS:34)",
          "Bachelor's GPA 3.5/4.0, Top 30% ranking",
          "Practical experience in project management & analysis",
          "Multiple scholarships and excellence awards"
        ],
        philosophy: "My Philosophy", 
        quote: "Technology serves business, innovation stems from practice. Growing through continuous learning and creating value through hands-on experience"
      },
      education: {
        title: "Education Background",
        items: [
          {
            period: "2023.7 - Present",
            school: "The Australian National University",
            degree: "Master of Computer Science", 
            location: "Canberra, Australia",
            description: "QS World Ranking #34, focusing on software engineering and data analysis"
          },
          {
            period: "2019.9 - 2023.6",
            school: "Shanghai Ocean University / University of Tasmania",
            degree: "Bachelor of Information Management and Information Systems",
            location: "Shanghai, China", 
            description: "Joint Program, GPA: 3.5/4.0, Average Score: 86 (Top 30%)"
          }
        ]
      },
      experience: {
        title: "Work & Leadership Experience",
        items: [
          {
            period: "2022.6 - 2022.9",
            position: "Business Delivery Assistant",
            company: "Shanghai Shuhua Cloud Information Technology Co., Ltd.",
            description: "Led SIG projects including requirements analysis, progress tracking, and cross-department coordination, achieving significant improvements in efficiency and system performance.",
            achievements: [
              "Led 4 SIG projects with requirements analysis and cross-department coordination",
              "Utilized TAPD for planning and task allocation, improving system response speed by 15%",
              "Conducted research for 2 core business requirements, reducing rework rates by 30%",
              "Completed system configurations and optimized resource utilization effectively"
            ]
          },
          {
            period: "2021.9 - 2022.6",
            position: "Student Committee Secretary",
            company: "Communist Youth League of AIEN College",
            description: "Managed 6 departments and coordinated 50+ student leaders, organizing large-scale campus activities with significant impact.",
            achievements: [
              "Organized 10+ large-scale campus activities attracting 2000+ participants",
              "Wrote 50+ news articles and conducted 20+ institutional reviews",
              "Successfully established branded activities enhancing college reputation", 
              "Improved team collaboration and project execution efficiency by 20%"
            ]
          }
        ]
      },
      skills: {
        title: "Core Skills",
        items: [
          {
            icon: "💻",
            title: "Programming",
            description: "Proficient in multiple programming languages and development technologies",
            tools: "Java • Python • C • SQL • Oracle • JavaScript"
          },
          {
            icon: "🌐",
            title: "Web Development",
            description: "Full-stack web development capabilities with front-end design experience",
            tools: "HTML/CSS • JavaScript • UI Design • Photoshop"
          },
          {
            icon: "📊", 
            title: "Data Analysis",
            description: "Strong data processing and analysis skills with relevant tools",
            tools: "VLOOKUP • Pivot Tables • Database Management • Data Visualization"
          },
          {
            icon: "🚀",
            title: "Project Management",
            description: "Hands-on experience in project planning, requirements analysis and team coordination",
            tools: "TAPD • Requirements Analysis • Project Planning • Team Management"
          }
        ]
      },
      projects: {
        title: "Project Portfolio",
        items: [
          {
            title: "Java Game Development - Race to the Raft",
            description: "Developed an interactive game using Java with complete game mechanics and user interface. Created rich graphics and animations using JavaFX to enhance user experience.",
            tags: ["Java", "JavaFX", "Game Development", "UI Design"],
            gradient: "from-blue-400 to-blue-600"
          },
          {
            title: "Budget Management System Optimization",
            description: "Designed and completed data collection for 30+ budget forms during internship, optimizing data entry processes and significantly improving data processing efficiency.",
            tags: ["Data Analysis", "System Optimization", "Process Management", "Database"],
            gradient: "from-green-400 to-green-600"
          },
          {
            title: "Large-scale Event Planning & Organization", 
            description: "Led planning and organization of 10+ large-scale campus activities including academic lectures and social practices, attracting 2000+ participants and establishing branded activities.",
            tags: ["Event Planning", "Project Management", "Team Collaboration", "Brand Building"],
            gradient: "from-purple-400 to-purple-600"
          },
          {
            title: "Award-winning Creative Design Projects",
            description: "Participated in multiple creative design competitions with awards including Excellence Award in China Creativity Competition and micro-video creation contests.",
            tags: ["Creative Design", "UI Design", "Video Production", "Photoshop"],
            gradient: "from-orange-400 to-orange-600"
          }
        ]
      },
      awards: {
        title: "Awards & Achievements",
        items: [
          "3rd Prize, 'Zhixing Cup' Shanghai College Student Social Practice Competition (2021)",
          "3rd Prize, Shanghai College Student National Security Education Micro-Video Competition (2021)",
          "Excellence Award, 16th China Creativity Competition (Provincial Level, 2022)",
          "5× Shanghai Ocean University People's Scholarship",
          "4× Advanced Individual Awards (Outstanding Student & Group Leader)",
          "Outstanding Trainee of Youth Marxist Project"
        ]
      },
      contact: {
        title: "Contact Me",
        description: "Welcome to connect for learning and career opportunities. Looking forward to hearing from you",
        email: "U7749827@anu.edu.au",
        phone: "0436964864", 
        wechat: "lily_runfeng"
      },
      footer: "© 2024 Lily Runfeng Li Portfolio. Growing through learning, innovating through practice."
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
                <a href="#education" className="text-gray-600 hover:text-blue-600 transition-colors">{t.nav.education}</a>
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
              <>Hello, I&apos;m <span className="text-blue-600">Lily Runfeng Li</span></>
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

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">{t.education.title}</h2>
          <div className="space-y-8">
            {t.education.items.map((edu, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4">
                    <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-2">
                      {edu.period}
                    </div>
                    <p className="text-gray-500 text-sm">{edu.location}</p>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{edu.school}</h3>
                    <h4 className="text-lg text-blue-600 font-medium mb-3">{edu.degree}</h4>
                    <p className="text-gray-600 leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">{t.skills.title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.skills.items.map((skill, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
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
      <section id="experience" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">{t.experience.title}</h2>
          <div className="space-y-12">
            {t.experience.items.map((exp, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-2">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">{t.projects.title}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {t.projects.items.map((project, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border">
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

      {/* Awards Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">{t.awards.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {t.awards.items.map((award, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm">🏆</span>
                  </div>
                  <p className="text-gray-700">{award}</p>
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
                📱
              </div>
              <span className="font-medium">{t.contact.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                💬
              </div>
              <span className="font-medium">{language === "zh" ? "微信: " : "WeChat: "}{t.contact.wechat}</span>
            </div>
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
