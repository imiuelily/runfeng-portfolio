"use client";

import { useState } from "react";

export default function Home() {
  const [language, setLanguage] = useState<'zh' | 'en'>('zh');

  const basePath = process.env.NODE_ENV === "production" ? "/runfeng-portfolio" : "";
  const withBasePath = (path: string) => `${basePath}${path}`;

  const content = {
    zh: {
      name: "李润风",
      title: "计算机科学硕士研究生 | 项目管理专员",
      nav: {
        about: "关于我",
        education: "教育背景",
        experience: "经验",
        life: "生活兴趣",
        projects: "项目",
        contact: "联系我"
      },
      buttons: {
        aboutMe: "了解我",
        viewWork: "查看作品",
        downloadResume: "下载简历"
      },
      about: {
        title: "关于我",
        subtitle: "持续学习的技术爱好者",
        description: "我是澳大利亚国立大学计算机科学硕士在读学生，本科毕业于上海海洋大学信息管理与信息系统专业。在学习期间积累了一些项目管理、需求分析和系统优化的经验，对多种编程语言和开发工具都有所涉猎。在学生工作中锻炼了组织协调能力，希望能将所学的技术知识运用到实际业务场景中。",
        highlights: [
          "澳大利亚国立大学(QS:34)计算机科学硕士在读",
          "本科GPA 3.5/4.0，成绩排名前30%",
          "项目管理与需求分析实战经验",
          "多次获得奖学金和优秀个人奖项"
        ]
      },
      education: {
        title: "教育背景",
        items: [
          {
            period: "2023.7 - 2026.6",
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
            position: "院团委主席/院团委学生负责人",
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
            title: "植物病害检测系统 - 核心成员 (文档/测试/前端)",
            description: "澳洲国立大学年度小组项目（两学期）。敏捷协作：主导 6 个 Sprint 的全流程文档管理，产出 SRS/测试报告/用户手册等 10+ 份交付物；测试与数据闭环：设计并执行单元/集成测试，完成 200+ 张图片采集与精标，多轮测试反馈显著提升复杂场景鲁棒性；Web 呈现：负责官网前端设计与搭建（HTML/CSS/JS），主导最终 Pitch 与 Poster 展示产品价值与技术实现。",
            tags: ["Agile", "文档", "测试", "计算机视觉", "前端", "HTML/CSS/JS"],
            links: [
              { label: "GitHub", url: "https://github.com/spsaswat/plantdis" },
              { label: "项目网站", url: "https://plantdis.github.io/" },
              { label: "YouTube 演示", url: "https://youtu.be/NUCTFa1jxMM?si=3Tq5Men3W-2DfbF8" }
            ],
            image: withBasePath("/images/plant-disease/plantdis.PNG"),
            gradient: "from-green-300 to-green-500"
          },
          {
            title: "Java游戏开发 - Race to the Raft",
            description: "基于Java语言开发的交互式游戏，实现完整的游戏机制和用户界面。通过JavaFX创建丰富的图形与动画效果，提升用户体验。",
            tags: ["Java", "JavaFX", "游戏开发", "UI设计"],
            image: withBasePath("/images/java-race-to-the-raft/cover.jpg"),
            gradient: "from-orange-300 to-orange-500"
          },
          {
            title: "预算管理系统优化",
            description: "在上海数划云科技实习期间，设计并完成30余张预算表单的数据采集系统，优化数据录入流程，显著提升数据处理效率。",
            tags: ["数据分析", "系统优化", "流程管理", "数据库"],
            image: withBasePath("/images/budget-optimization/shuhua.PNG"),
            gradient: "from-blue-300 to-blue-500"
          },
          {
            title: "大型活动策划与组织",
            description: "主导策划并组织10余场大型校内活动，包括学术讲座、社会实践等，累计吸引超过2000名师生参与，建立品牌活动影响力。",
            tags: ["活动策划", "项目管理", "团队协作", "品牌建设"],
            image: withBasePath("/images/campus-events/cover.jpg"),
            gradient: "from-orange-400 to-blue-400"
          },
          {
            title: "获奖创意设计项目",
            description: "参与多项创意设计比赛并获奖，包括中国好创意大赛省赛优秀奖、微视频创作比赛等，展现创新思维和设计能力。",
            tags: ["创意设计", "UI设计", "视频制作", "Photoshop"],
            image: withBasePath("/images/creative-design/design.PNG"),
            gradient: "from-blue-400 to-orange-400"
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
      life: {
        title: "生活 & 兴趣",
        subtitle: "除了工作，我还热爱生活中的这些美好",
        travel: {
          title: "🌍 旅行足迹",
          description: "走过山川湖海，每一段旅程都是独特的故事",
          places: {
            international: "日本 • 韩国 • 越南 • 马来西亚 • 澳大利亚 • 库克群岛 • 俄罗斯",
            domestic: "北京 • 重庆 • 甘肃 • 青海 • 陕西 • 黑龙江 • 吉林 • 山东 • 江苏 • 浙江 • 安徽 • 江西 • 湖北 • 湖南 • 广东 • 台湾"
          },
          adventures: ["深潜", "跳伞", "冲浪", "沙漠滑沙"]
        },
        baking: {
          title: "🧁 烘焙创作",
          description: "把甜蜜揉进面团里，让生活多一点温暖的味道",
          items: ["黄油小饼干", "提拉米苏蛋糕", "抹茶红豆乳酪奶酥欧包", "巴斯克蛋糕", "圣诞树造型蛋糕"]
        },
        sports: {
          title: "🏃‍♀️ 运动健身",
          description: "热爱挥汗如雨的感觉，在运动中保持活力与健康",
          activities: ["健身房训练", "羽毛球", "游泳", "徒步"]
        },
        photography: {
          title: "📸 精彩瞬间",
          description: "记录旅行中的美好时光和运动中的激情瞬间",
          categories: [
            { name: "冒险时刻", emoji: "🏂" },
            { name: "旅行足迹", emoji: "🌍" },
            { name: "运动时光", emoji: "💪" },
            { name: "美食记录", emoji: "🍰" }
          ]
        }
      },
      contact: {
        title: "一起聊聊机会与合作",
        description: "专注项目管理与计算技术结合，擅长需求分析、流程优化与数据驱动改进。如有岗位、项目或交流话题，欢迎邮件或微信联系。",
        email: "imiuelily@outlook.com",
        phone: "13818364092",
        wechat: "imiuelily"
      },
      footer: "© 2025 李润风个人主页."
    },
    en: {
      name: "Lily Runfeng Li",
      title: "Master of Computing | Project Management Specialist",
      nav: {
        about: "About",
        education: "Education",
        experience: "Experience",
        life: "Life & Interests",
        projects: "Projects", 
        contact: "Contact"
      },
      buttons: {
        aboutMe: "ABOUT ME",
        viewWork: "VIEW WORK",
        downloadResume: "Download Resume"
      },
      about: {
        title: "About Me",
        subtitle: "Continuous Learning Technology Enthusiast",
        description: "I am a Master of Computer Science student at The Australian National University, with a Bachelor's degree in Information Management and Information Systems from Shanghai Ocean University. During my studies, I have gained some experience in project management, requirements analysis, and system optimization, and I am familiar with various programming languages and development tools.",
        highlights: [
          "Master of Computer Science at ANU (QS:34)",
          "Bachelor's GPA 3.5/4.0, Top 30% ranking",
          "Practical experience in project management & analysis",
          "Multiple scholarships and excellence awards"
        ]
      },
      education: {
        title: "Education Background",
        items: [
          {
            period: "2023.7 - 2026.6",
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
            position: "Student Committee SecretaryStudent Leader",
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
            title: "Plant Disease Detection System - Core Member (Docs/Testing/Frontend)",
            description: "Year-long ANU team project. Agile: led documentation across 6 sprints, delivering 10+ artifacts (SRS, test reports, user manual). QA & data loop: designed unit/integration tests, collected and finely labeled 200+ images, notably improving robustness in complex scenarios. Web: designed and helped implement the site (HTML/CSS/JS); led the final pitch and poster to communicate business value and technical implementation.",
            tags: ["Agile", "Documentation", "Testing", "Computer Vision", "Frontend", "HTML/CSS/JS"],
            links: [
              { label: "GitHub", url: "https://github.com/spsaswat/plantdis" },
              { label: "Website", url: "https://plantdis.github.io/" },
              { label: "YouTube", url: "https://youtu.be/NUCTFa1jxMM?si=3Tq5Men3W-2DfbF8" }
            ],
            image: withBasePath("/images/plant-disease/plantdis.PNG"),
            gradient: "from-green-300 to-green-500"
          },
          {
            title: "Java Game Development - Race to the Raft",
            description: "Developed an interactive game using Java with complete game mechanics and user interface. Created rich graphics and animations using JavaFX to enhance user experience.",
            tags: ["Java", "JavaFX", "Game Development", "UI Design"],
            image: withBasePath("/images/java-race-to-the-raft/cover.jpg"),
            gradient: "from-orange-300 to-orange-500"
          },
          {
            title: "Budget Management System Optimization",
            description: "Designed and completed data collection for 30+ budget forms during internship, optimizing data entry processes and significantly improving data processing efficiency.",
            tags: ["Data Analysis", "System Optimization", "Process Management", "Database"],
            image: withBasePath("/images/budget-optimization/shuhua.PNG"),
            gradient: "from-blue-300 to-blue-500"
          },
          {
            title: "Large-scale Event Planning & Organization", 
            description: "Led planning and organization of 10+ large-scale campus activities including academic lectures and social practices, attracting 2000+ participants and establishing branded activities.",
            tags: ["Event Planning", "Project Management", "Team Collaboration", "Brand Building"],
            image: withBasePath("/images/campus-events/cover.jpg"),
            gradient: "from-orange-400 to-blue-400"
          },
          {
            title: "Award-winning Creative Design Projects",
            description: "Participated in multiple creative design competitions with awards including Excellence Award in China Creativity Competition and micro-video creation contests.",
            tags: ["Creative Design", "UI Design", "Video Production", "Photoshop"],
            image: withBasePath("/images/creative-design/design.PNG"),
            gradient: "from-blue-400 to-orange-400"
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
      life: {
        title: "Life & Interests",
        subtitle: "Beyond work, I embrace the beautiful moments in life",
        travel: {
          title: "🌍 Travel Adventures",
          description: "Wandering through mountains and seas, each journey tells a unique story",
          places: {
            international: "Japan • Korea • Vietnam • Malaysia • Australia",
            domestic: "Northwest China • Beijing • Xi'an • Mt. Tai • Changsha • Sanqing Mountain • Huangshan • Hangzhou • Nanjing • Guangzhou • Chongqing • Taiwan"
          },
          adventures: ["Deep diving", "Skydiving", "Surfing", "Sand sledding in desert"]
        },
        baking: {
          title: "🧁 Baking Creations",
          description: "Kneading sweetness into dough, adding a touch of warmth to life",
          items: ["Butter cookies", "Tiramisu cake", "Matcha red bean cheese bread", "Basque cake", "Christmas tree shaped cakes"]
        },
        sports: {
          title: "🏃‍♀️ Sports & Fitness",
          description: "Love the feeling of breaking a sweat and staying active and healthy through sports",
          activities: ["Gym training", "Badminton", "Swimming", "Hiking"]
        },
        photography: {
          title: "📸 Precious Moments",
          description: "Capturing beautiful moments from travels and passionate moments from sports",
          categories: [
            { name: "Adventure", emoji: "🏂" },
            { name: "Travel", emoji: "🌍" },
            { name: "Sports", emoji: "💪" },
            { name: "Food", emoji: "🍰" }
          ]
        }
      },
      contact: {
        title: "Let’s discuss roles and collaborations",
        description: "I focus on bridging computing and product management—requirements, process optimization, and data-driven improvements. Email/WeChat welcome.",
        email: "imiuelily@outlook.com",
        phone: "+86 13818364092 / +61 436964864", 
        wechat: "imiuelily"
      },
      footer: "© 2025 Runfeng Li Portfolio."
    }
  };

  const t = content[language];
  const resumeUrl = '中文简历-新.pdf';

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFDF2] via-white to-[#FFF4D6]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-[#FFF4D6] z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-800">
              {language === 'zh' ? 'RL. Li' : 'RL. Li'}
            </div>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-8">
                <a href="#about" className="text-gray-600 hover:text-[#ED7511] transition-colors font-medium">{t.nav.about}</a>
                <a href="#education" className="text-gray-600 hover:text-[#ED7511] transition-colors font-medium">{t.nav.education}</a>
                <a href="#experience" className="text-gray-600 hover:text-[#ED7511] transition-colors font-medium">{t.nav.experience}</a>
                <a href="#life" className="text-gray-600 hover:text-[#ED7511] transition-colors font-medium">{t.nav.life}</a>
                <a href="#projects" className="text-gray-600 hover:text-[#ED7511] transition-colors font-medium">{t.nav.projects}</a>
                <a href="#contact" className="text-gray-600 hover:text-[#ED7511] transition-colors font-medium">{t.nav.contact}</a>
              </div>
              {/* Language Switch */}
                             <div className="flex bg-white/70 rounded-lg p-1 border border-[#F6EFD3]">
                <button
                  onClick={() => setLanguage('zh')}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    language === 'zh' ? 'btn-accent-gradient text-white shadow-sm' : 'text-gray-600 hover:text-[#ED7511]'
                  }`}
                >
                  中文
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                    language === 'en' ? 'btn-accent-gradient text-white shadow-sm' : 'text-gray-600 hover:text-[#ED7511]'
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
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-left space-y-8">
            <div className="space-y-4">
              <div className="text-sm uppercase tracking-wider text-gray-500 font-medium">
                {language === 'zh' ? '计算机科学' : 'COMPUTER SCIENCE'}
              </div>
                             <h1 className="text-6xl md:text-7xl font-light text-gray-900 leading-tight">
                 {language === 'zh' ? (
                   <><span className="font-normal">李润风</span></>
                 ) : (
                   <>Lily<br/><span className="font-normal">Runfeng</span></>
                 )}
               </h1>
                             <div className="w-24 h-1 linear-accent-gradient"></div>
            </div>
            
            <div className="space-y-6">
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                {language === 'zh' ? 
                  '澳大利亚国立大学在读硕士，项目管理与技术开发双重背景，热爱探索生活的多种可能性。' :
                  'Master\'s student at ANU with dual expertise in project management and technical development, passionate about exploring life\'s endless possibilities.'
                }
              </p>
              
              {/* Minimal interest indicators */}
                             <div className="flex space-x-8 text-sm text-gray-500">
                 <span className="flex items-center space-x-2">
                   <div className="w-2 h-2 circle-accent-gradient rounded-full"></div>
                   <span>{language === 'zh' ? '旅行探索' : 'Explorer'}</span>
                 </span>
                 <span className="flex items-center space-x-2">
                   <div className="w-2 h-2 circle-accent-gradient rounded-full"></div>
                   <span>{language === 'zh' ? '创意烘焙' : 'Creator'}</span>
                 </span>
                 <span className="flex items-center space-x-2">
                   <div className="w-2 h-2 circle-accent-gradient rounded-full"></div>
                   <span>{language === 'zh' ? '运动爱好者' : 'Athlete'}</span>
                 </span>
               </div>
              
              <div className="flex space-x-4 pt-4">
                <a
                  href="#about"
                  className="px-8 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
                >
                  {language === 'zh' ? '了解我' : 'ABOUT ME'}
                </a>
                <a
                  href="#projects"
                  className="px-8 py-3 border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  {language === 'zh' ? '查看作品' : 'VIEW WORK'}
                </a>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  {language === 'zh' ? '下载简历' : 'DOWNLOAD RESUME'}
                </a>
              </div>
            </div>
          </div>
          
          {/* Right side - Visual */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src={withBasePath("/images/hero/hero-profile.PNG")}
                alt={language === 'zh' ? '李润风 个人照片' : 'Runfeng Li profile photo'}
                className="w-full h-full object-contain bg-transparent"
                loading="eager"
              />
            </div>
          </div>
        </div>
        
                 {/* Scroll button */}
         <button 
           onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
           className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group cursor-pointer"
         >
           <div className="flex flex-col items-center text-gray-400 hover:text-gray-600 transition-colors">
             <div className="text-xs uppercase tracking-wider mb-2">{language === 'zh' ? '向下滚动' : 'Scroll'}</div>
             <div className="mt-2 transform group-hover:translate-y-1 transition-transform">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
               </svg>
             </div>
           </div>
         </button>
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
                    <div className="w-2 h-2 linear-accent-gradient rounded-full mr-4"></div>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#FFFDF2] to-[#FFF4D6] rounded-2xl p-8 shadow-lg">
              <div className="text-center">
                <div className="text-4xl mb-6">🌟</div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/50 rounded-lg p-4">
                    <div className="text-2xl mb-2">✈️</div>
                    <div className="text-sm text-gray-600">{language === 'zh' ? '足迹遍布多国' : 'Global Explorer'}</div>
                  </div>
                  <div className="bg-white/50 rounded-lg p-4">
                    <div className="text-2xl mb-2">🧁</div>
                    <div className="text-sm text-gray-600">{language === 'zh' ? '甜蜜创作者' : 'Sweet Creator'}</div>
                  </div>
                  <div className="bg-white/50 rounded-lg p-4">
                    <div className="text-2xl mb-2">🏃‍♀️</div>
                    <div className="text-sm text-gray-600">{language === 'zh' ? '运动爱好者' : 'Active Lifestyle'}</div>
                  </div>
                  <div className="bg-white/50 rounded-lg p-4">
                    <div className="text-2xl mb-2">📸</div>
                    <div className="text-sm text-gray-600">{language === 'zh' ? '生活记录者' : 'Life Capturer'}</div>
                  </div>
                </div>
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
                    <div className="bg-[#F3EDD1]/60 text-[#0F1616] px-3 py-1 rounded-full text-sm font-medium inline-block mb-2">
                      {edu.period}
                    </div>
                    <p className="text-gray-500 text-sm">{edu.location}</p>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{edu.school}</h3>
                    <h4 className="text-lg text-slate-700 font-medium mb-3">{edu.degree}</h4>
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
              <div key={index} className="bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-300 transition-all">
                <div className="text-3xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{skill.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{skill.description}</p>
                <div className="text-xs text-gray-500 font-medium">{skill.tools}</div>
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
          <div className="space-y-16">
            {t.projects.items.map((project, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 0 ? "order-1" : "order-2"}>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-light text-gray-900 mb-4">{project.title}</h3>
                      <div className="w-16 h-0.5 linear-accent-gradient"></div>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {(project.links ?? []).length > 0 && (
                        <div className="flex flex-wrap gap-3 pt-2">
                          {(project.links ?? []).map((link, i) => (
                            <a
                              key={i}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-4 py-2 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      )}
                      {project.tags.map((tag, i) => (
                                                   <span key={i} className="px-4 py-2 bg-[#F3EDD1]/60 text-[#0F1616] text-sm font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 0 ? "order-2" : "order-1"}>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden border border-[#FFF4D6] bg-white flex items-center justify-center">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={typeof project.title === 'string' ? project.title : 'project image'}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-4xl mb-4">
                            {index === 0 ? '🎮' : index === 1 ? '📊' : index === 2 ? '🎯' : '🎨'}
                          </div>
                          <div className="text-sm text-[#ED7511] font-medium">{language === 'zh' ? '项目截图' : 'Project Screenshot'}</div>
                          <div className="text-xs text-[#E4A267] mt-1">{language === 'zh' ? '即将上传...' : 'Coming soon...'}</div>
                        </div>
                      </div>
                    )}
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
          <div className="rounded-xl overflow-hidden mt-8 bg-white flex items-center justify-center">
            <img
              src={withBasePath("/images/awards-and-achievements/award.PNG")}
              alt={language === 'zh' ? '获奖与成就' : 'Awards & Achievements'} 
              className="w-full h-56 object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Life & Interests Section */}
      <section id="life" className="py-20 bg-gradient-to-br from-[#FFFDF2] to-[#FFF4D6]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#F3CB1E] via-[#E4A267] to-[#ED7511] bg-clip-text text-transparent mb-4">{t.life.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.life.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Travel */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.life.travel.title}</h3>
              <p className="text-gray-600 mb-6">{t.life.travel.description}</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#ED7511] mb-2">{language === 'zh' ? '国际旅行' : 'International'}</h4>
                  <p className="text-gray-600 text-sm">{t.life.travel.places.international}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#ED7511] mb-2">{language === 'zh' ? '国内旅行' : 'Domestic'}</h4>
                  <p className="text-gray-600 text-sm">{t.life.travel.places.domestic}</p>
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold text-[#E4A267] mb-3">{language === 'zh' ? '冒险体验' : 'Adventures'}</h4>
                  <div className="flex flex-wrap gap-2">
                    {t.life.travel.adventures.map((adventure, index) => (
                      <span key={index} className="px-3 py-1 bg-gradient-to-r from-[#FFFAE4] to-[#F3EDD1] text-gray-700 text-sm rounded-full">
                        {adventure}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Baking */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.life.baking.title}</h3>
              <p className="text-gray-600 mb-6">{t.life.baking.description}</p>
              
              {/* content removed as requested */}
              <div className="rounded-xl overflow-hidden mt-4 bg-white flex items-center justify-center">
                <img
                  src={withBasePath("/images/life/baking-banner.JPG")}
                  alt={language === 'zh' ? '烘焙横幅' : 'Baking banner'}
                  className="w-full h-56 object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Sports */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.life.sports.title}</h3>
              <p className="text-gray-600 mb-6">{t.life.sports.description}</p>
              
              <div className="flex flex-wrap gap-3">
                {t.life.sports.activities.map((activity, index) => (
                  <span key={index} className="px-4 py-2 bg-gradient-to-r from-[#FFFDF2] to-[#FFF4D6] text-gray-700 rounded-lg font-medium">
                    {activity}
                  </span>
                ))}
              </div>
            </div>

            {/* Photography */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.life.photography.title}</h3>
              <p className="text-gray-600 mb-6">{t.life.photography.description}</p>
              
              {/* content removed as requested */}
              
              {/* Photo banner gallery */}
              <div className="rounded-xl overflow-hidden bg-white flex items-center justify-center">
                <img
                  src={withBasePath("/images/life/travel-banner.PNG")}
                  alt={language === 'zh' ? '精彩瞬间' : 'Precious moments'}
                  className="w-full h-56 object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-[#FFFDF2] via-white to-[#FFF4D6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-[#F3CB1E] via-[#E4A267] to-[#ED7511] bg-clip-text text-transparent mb-4">{t.contact.title}</h2>
            <p className="text-xl text-gray-600 mb-8">{t.contact.description}</p>
          </div>
          
          {/* Contact Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left side - Contact Info */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 circle-accent-gradient rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-lg">📧</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{language === 'zh' ? '邮箱' : 'Email'}</h3>
                      <p className="text-[#ED7511] font-medium">{t.contact.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 circle-accent-gradient rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-lg">📱</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{language === 'zh' ? '电话' : 'Phone'}</h3>
                      <p className="text-[#ED7511] font-medium">{t.contact.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 circle-accent-gradient rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-lg">💬</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{language === 'zh' ? '微信' : 'WeChat'}</h3>
                      <p className="text-[#ED7511] font-medium">{t.contact.wechat}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right side - CTA */}
              <div className="text-center md:text-left">
                <div className="relative">
                  <div className="absolute inset-0 linear-accent-gradient rounded-2xl opacity-10"></div>
                  <div className="relative p-8 space-y-6">
                    <div className="w-20 h-20 circle-accent-gradient rounded-full flex items-center justify-center mx-auto md:mx-0 mb-6">
                      <span className="text-white text-3xl">🤝</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.contact.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{t.contact.description}</p>
                    <div className="pt-4">
                      <a 
                        href={`mailto:${t.contact.email}`}
                        className="inline-flex items-center px-6 py-3 btn-accent-gradient text-white font-medium rounded-full hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                      >
                        <span>{language === 'zh' ? '邮件联系' : 'Email me'}</span>
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#0F1616] via-[#0F1616] to-[#0F1616] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          
          {/* Bottom Bar */}
          <div className="border-t border-gray-700/50 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">© 2025 {language === 'zh' ? '李润风个人主页' : 'Runfeng Li Portfolio'}.</p>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>{language === 'zh' ? '可立即开始工作' : 'Available for opportunities'}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
