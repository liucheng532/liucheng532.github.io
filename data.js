/*
 * Personal content lives here. Update this file when your CV, projects,
 * links, or biography changes; layout and visual design live elsewhere.
 */
const siteData = {
  profile: {
    name: "Liu Cheng",
    nameZh: "刘铖",
    kicker: "A human exploring the unknown with intelligent machines.",
    role: "Robotics researcher at HKUST(GZ).",
    specialties: [
      "humanoid robotics.",
      "reinforcement learning.",
      "robot soccer.",
      "embodied intelligence."
    ],
    academicRole: "M.Phil. Student in Robotics & Autonomous Systems",
    institution: "The Hong Kong University of Science and Technology (Guangzhou)",
    email: "cliu425@connect.hkust-gz.edu.cn",
    photo: "media/ABOUT/正面照.png",
    cv: "Liucheng_resume.pdf"
  },

  about: [
    "I’m Liu Cheng (刘铖), a robotics researcher and builder pursuing an M.Phil. in Robotics and Autonomous Systems at HKUST(GZ). My work sits at the intersection of humanoid locomotion, whole-body control, reinforcement learning, and embodied intelligence.",
    "I care about the difficult last mile between a policy that succeeds in simulation and a robot that can recover, adapt, and collaborate in the physical world. I enjoy moving between algorithms, hardware, and the experiments that turn an idea into a reliable system."
  ],

  stats: [
    { value: "05+", label: "Years building robots" },
    { value: "09", label: "Robotics projects" },
    { value: "03", label: "Competition podiums" }
  ],

  links: [
    { label: "Resume / CV", url: "Liucheng_resume.pdf" },
    { label: "GitHub", url: "https://github.com/liucheng532" },
    { label: "Email", url: "mailto:cliu425@connect.hkust-gz.edu.cn" }
  ],

  researchIntro: "My research asks how humanoid robots can acquire robust, reusable physical skills through learning and interaction — from fall recovery and locomotion to competitive robot soccer.",

  research: [
    {
      number: "01",
      year: "2026",
      title: "Learning Robust Humanoid Motion Control for Robot Soccer",
      description: "A unified recovery–locomotion framework for humanoid robots, designed to recover from diverse falls, resume walking, and stay reliable under physical variation.",
      image: "media/RESEARCH/2026unify recovery locomotion.png",
      imageAlt: "Unified humanoid recovery and locomotion framework",
      tags: ["Humanoid", "Reinforcement Learning", "Sim-to-Real"],
      links: [
        { label: "RoboCup demo", url: "media/PROJECTS/2026robocup.mp4" },
        { label: "G1 recovery", url: "media/RESEARCH/2026G1摔倒起身行走.gif" },
        { label: "T1 recovery", url: "media/RESEARCH/2026T1摔倒起身行走.gif" }
      ]
    },
    {
      number: "02",
      year: "2026",
      title: "Self-Play Dribbling for Humanoid Robot Soccer",
      description: "A self-play learning framework for agile dribbling policies, connecting decision-making and whole-body control in competitive multi-agent settings.",
      image: "media/RESEARCH/2026self-play dribble framework.png",
      imageAlt: "Self-play humanoid dribbling policy framework",
      tags: ["Self-Play", "Robot Soccer", "Deep RL"],
      links: [
        { label: "Watch policy", url: "media/RESEARCH/2026self-play dribble policy.mp4" }
      ]
    },
    {
      number: "03",
      year: "2025",
      title: "From Video to G1 Dance",
      description: "A motion-retargeting and whole-body-control pipeline that transfers human movement from video to a Unitree G1 humanoid robot. Awarded third place at the IROS 2025 Mecha Challenge.",
      image: "media/PROJECTS/2025gmr-retargeting.gif",
      imageAlt: "Human motion retargeted to a simulated humanoid robot",
      tags: ["Motion Retargeting", "Whole-Body Control", "IROS"],
      links: [
        { label: "GitHub", url: "https://github.com/liucheng532/From-Video-to-G1-Dance" }
      ]
    }
  ],

  projects: [
    {
      year: "2026",
      title: "RoboCup 3D Simulation Champion",
      description: "First place with the HKUST(GZ) team, developing learned recovery and robot-soccer behaviors.",
      image: "media/PROJECTS/2026robocup championship.jpg",
      imageAlt: "HKUST Guangzhou RoboCup championship team"
    },
    {
      year: "2026",
      title: "Recovery on G1 & Booster T1",
      description: "Robust fall-recovery policies across humanoid platforms and changing initial states.",
      image: "media/RESEARCH/2026G1摔倒起身行走.gif",
      imageAlt: "Unitree G1 humanoid robot recovering from a fall"
    },
    {
      year: "2025",
      title: "ATEC Real-World Extreme Challenge",
      description: "Led a team to eighth place nationally through teleoperation, data pipelines, and bimanual robotics work.",
      image: "media/PROJECTS/2025atec-certificate.jpg",
      imageAlt: "ATEC 2025 eighth-place award certificate"
    },
    {
      year: "2024—Now",
      title: "Future Dynamics",
      description: "Co-founding a robotics effort focused on turning hardware–software integration into working prototypes.",
      image: "media/PROJECTS/2024future-dynamics-humanoid.jpg",
      imageAlt: "Future Dynamics humanoid robot concept"
    }
  ],

  publications: [
    {
      year: "2026",
      title: "Towards Exploratory and Focused Manipulation with Bimanual Active Perception: A New Problem, Benchmark and Strategy",
      authors: "Yuxin He, Ruihao Zhang, Tianao Shen, Cheng Liu, Qiang Nie",
      venue: "IEEE International Conference on Robotics and Automation (ICRA) · Accepted"
    }
  ],

  experience: [
    {
      period: "2026—Now",
      title: "M.Phil. Thesis · Text2HumanoidAction",
      organization: "HKUST(GZ)",
      detail: "Exploring physical priors from large-scale video models for whole-body humanoid motion generation."
    },
    {
      period: "2026—Now",
      title: "RoboCup 3D Simulation Competition",
      organization: "HKUST(GZ) · Team member",
      detail: "Developing curriculum-learning recovery policies and robust robot-soccer behaviors."
    },
    {
      period: "2025—2026",
      title: "Embodied AI Winter Camp",
      organization: "Tsinghua University AIR · Outstanding camper",
      detail: "Built simulation data pipelines and deployed imitation-learning policies for robot manipulation."
    },
    {
      period: "2022—Now",
      title: "Future Dynamics",
      organization: "Co-founder · Technical lead",
      detail: "Leading technical strategy and robotics hardware–software integration."
    },
    {
      period: "2020—2022",
      title: "RoboCup 3D Simulation Competition",
      organization: "NJUPT · Team leader / algorithm developer",
      detail: "Designed multi-robot role assignment and optimized bipedal walking and collaboration."
    }
  ]
};
