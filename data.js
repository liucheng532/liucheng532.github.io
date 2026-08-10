/*
 * Website content map
 * -------------------
 * Add new material to the matching folder under /media, then update only
 * this file. Missing images automatically become clean placeholders.
 */
const siteData = {
  profile: {
    name: "Liu Cheng",
    nameZh: "刘铖",
    role: "Robotics researcher at HKUST(GZ).",
    focus: [
      "humanoid robotics.",
      "reinforcement learning.",
      "robot soccer.",
      "embodied intelligence."
    ],
    portrait: "media/ABOUT/正面照.png",
    resume: "Liucheng_resume.pdf",
    email: "cliu425@connect.hkust-gz.edu.cn"
  },

  about: [
    "I’m Liu Cheng (刘铖), an M.Phil. student in Robotics and Autonomous Systems at the Hong Kong University of Science and Technology (Guangzhou). My research interests include humanoid locomotion, whole-body control, reinforcement learning, and embodied intelligence.",
    "I work across algorithms and robot systems, with a particular interest in turning policies that succeed in simulation into physical skills that remain reliable in the real world."
  ],

  links: [
    { label: "Resume / CV", url: "Liucheng_resume.pdf" },
    { label: "GitHub", url: "https://github.com/liucheng532" },
    { label: "Email", url: "mailto:cliu425@connect.hkust-gz.edu.cn" }
  ],

  researchIntro: "I study how humanoid robots can learn robust and reusable behaviors, from fall recovery and locomotion to competitive robot soccer.",

  research: [
    {
      title: "Learning Robust Humanoid Motion Control for Robot Soccer",
      year: "2026",
      image: "media/RESEARCH/2026unify recovery locomotion.png",
      imageAlt: "Unified humanoid recovery and locomotion framework",
      description: "A unified recovery–locomotion framework designed to recover from diverse falls, resume walking, and remain robust under physical variation.",
      tags: ["Humanoid", "Reinforcement Learning", "Sim-to-Real"],
      links: [
        { label: "RoboCup demo", url: "media/PROJECTS/Robocup/2026robocup.mp4" },
        { label: "G1 recovery", url: "media/RESEARCH/2026G1摔倒起身行走.gif" },
        { label: "T1 recovery", url: "media/RESEARCH/2026T1摔倒起身行走.gif" }
      ]
    },
    {
      title: "Self-Play Dribbling for Humanoid Robot Soccer",
      year: "2026",
      image: "media/RESEARCH/2026self-play dribble framework.png",
      imageAlt: "Self-play humanoid dribbling framework",
      description: "A self-play learning framework for agile dribbling policies in competitive multi-agent environments.",
      tags: ["Self-Play", "Robot Soccer", "Deep RL"],
      links: [
        { label: "Video", url: "media/RESEARCH/2026self-play dribble policy.mp4" }
      ]
    },
    {
      title: "From Video to G1 Dance",
      year: "2025",
      image: "media/PROJECTS/2025 IROS competition/2025gmr-retargeting.gif",
      imageAlt: "Human motion retargeted to a humanoid robot",
      description: "A motion-retargeting and whole-body-control pipeline for transferring human motion from video to a Unitree G1 humanoid robot.",
      tags: ["Motion Retargeting", "Whole-Body Control", "IROS"],
      links: [
        { label: "GitHub", url: "https://github.com/liucheng532/From-Video-to-G1-Dance" }
      ]
    }
  ],

  publications: [
    {
      title: "Towards Exploratory and Focused Manipulation with Bimanual Active Perception: A New Problem, Benchmark and Strategy",
      authors: "Yuxin He, Ruihao Zhang, Tianao Shen, Cheng Liu, Qiang Nie",
      venue: "IEEE International Conference on Robotics and Automation (ICRA)",
      year: "2026",
      image: null,
      links: []
    }
  ],

  projects: [
    {
      title: "RoboCup 3D Simulation Champion",
      year: "2026",
      image: "media/PROJECTS/Robocup/2026robocup championship.jpg",
      imageAlt: "HKUST Guangzhou RoboCup championship team",
      links: [
        { label: "Video", url: "media/PROJECTS/Robocup/2026robocup.mp4" }
      ]
    },
    {
      title: "RoboCup First Place",
      year: "2026",
      image: "media/PROJECTS/Robocup/2026robocup_Fristplace.jpg",
      imageAlt: "RoboCup first-place award"
    },
    {
      title: "HKUST(GZ) RoboCup Team",
      year: "2026",
      image: "media/PROJECTS/Robocup/2026robocup_hkustgz.jpg",
      imageAlt: "HKUST Guangzhou RoboCup team"
    },
    {
      title: "From Video to G1 Dance",
      year: "2025",
      image: "media/PROJECTS/2025 IROS competition/2025iros-presentation.jpg",
      imageAlt: "IROS Mecha Challenge presentation"
    },
    {
      title: "G1 Robot Dance Deployment",
      year: "2025",
      image: "media/PROJECTS/2025 IROS competition/real robot dance.gif",
      imageAlt: "Unitree G1 humanoid robot performing the retargeted dance"
    },
    {
      title: "ATEC Real-World Extreme Challenge",
      year: "2025",
      image: "media/PROJECTS/2025ATECup competition/2025atec-certificate.jpg",
      imageAlt: "ATEC award certificate",
      links: [
        { label: "Demo 1", url: "media/PROJECTS/2025ATECup competition/real robot locomanipulation.mp4" },
        { label: "Demo 2", url: "media/PROJECTS/2025ATECup competition/real robot locomanipulation2.mp4" }
      ]
    },
    {
      title: "YC China Startup Camp",
      year: "2024",
      image: "media/PROJECTS/2024 startup - YC China/合照.jpg",
      imageAlt: "Team photograph at the 2024 YC China startup camp"
    },
    {
      title: "Future Dynamics",
      year: "2024—Now",
      image: "media/PROJECTS/2024future-dynamics-humanoid.jpg",
      imageAlt: "Future Dynamics humanoid robot concept"
    },
    {
      title: "DJI RoboMaster High-School Camp",
      year: "2019",
      image: "media/PROJECTS/2019 DJI Robomaster high-school summer-camp/robot.png",
      imageAlt: "Robot built at the DJI RoboMaster high-school summer camp"
    }
  ],

  notes: []
};
