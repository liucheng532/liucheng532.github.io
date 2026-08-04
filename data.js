/*
 * Edit this file first when your personal details change.
 * The layout lives in index.html and the visual system lives in styles.css.
 */
const siteData = {
  profile: {
    name: "Liu Cheng",
    nameZh: "刘铖",
    kicker: "Robotics researcher · builder · teammate",
    lede: "I build humanoid robots that can move, recover, and learn in the real world.",
    role: "M.Phil. student in Robotics & Autonomous Systems",
    place: "The Hong Kong University of Science and Technology (Guangzhou)",
    location: "Guangzhou, China",
    email: "cliu425@connect.hkust-gz.edu.cn",
    photo: "media/正面照.png",
    cv: "Liucheng_resume.pdf",
    github: "https://github.com/liucheng532"
  },
  about: [
    "I’m Liu Cheng (刘铖), a robotics researcher and builder currently pursuing an M.Phil. in Robotics and Autonomous Systems at HKUST(GZ). My work sits at the intersection of whole-body motion, reinforcement learning, and embodied intelligence.",
    "I care about the gap between a policy that works in simulation and a robot that can actually recover, adapt, and collaborate. I enjoy moving between algorithms, hardware, and the messy experiments that make a system feel alive."
  ],
  researchIntro: "My current thesis explores how large-scale video models can provide physical priors for humanoid motion generation. More broadly, I work on the loop from perception to action: learning representations, designing controllers, and making robots robust outside the lab.",
  topics: ["Humanoid motion generation", "Whole-body control", "Deep reinforcement learning", "Embodied AI"],
  stats: [
    { value: "03", label: "competition podiums" },
    { value: "09", label: "robotics projects" },
    { value: "05+", label: "years building robots" }
  ],
  publications: [
    {
      year: "2026",
      title: "Towards Exploratory and Focused Manipulation with Bimanual Active Perception: A New Problem, Benchmark and Strategy",
      authors: "Yuxin He, Ruihao Zhang, Tianao Shen, Cheng Liu, Qiang Nie",
      venue: "IEEE International Conference on Robotics and Automation (ICRA) · Accepted"
    }
  ],
  projects: [
    {
      number: "01",
      year: "2024—Now",
      title: "Humanoid robot action generation",
      meta: "Control · DRL · Domain randomization",
      description: "Learning robust whole-body behaviors for bipedal robots, with a focus on fall recovery, motion generation, and transfer from simulation to hardware.",
      image: "media/2025gmr-retargeting.gif",
      imageAlt: "Human motion being retargeted to a simulated humanoid robot",
      link: "https://github.com/liucheng532/HiFAR",
      linkLabel: "Explore on GitHub"
    },
    {
      number: "02",
      year: "2025",
      title: "From video to G1 dance",
      meta: "Motion retargeting · WBC",
      description: "A video-to-dance pipeline for the Unitree G1 humanoid robot. The project took 3rd place at the 2025 IROS Mecha Challenge Robot Dance competition.",
      image: "media/2025iros-presentation.jpg",
      imageAlt: "Liu Cheng presenting the G1 motion retargeting method at IROS 2025",
      link: "https://github.com/liucheng532/From-Video-to-G1-Dance",
      linkLabel: "Explore on GitHub"
    },
    {
      number: "03",
      year: "2025",
      title: "ATEC real-world extreme challenge",
      meta: "Teleoperation · Bimanual manipulation",
      description: "Led a team to 8th place nationally, building a teleoperation data pipeline and training walking strategies for bimanual robots.",
      image: "media/2025atec-certificate.jpg",
      imageAlt: "ATEC2025 eighth place award certificate",
      link: "https://github.com/liucheng532/AIRBOT_VR",
      linkLabel: "Related work"
    },
    {
      number: "04",
      year: "2024—Now",
      title: "Future Dynamics",
      meta: "Co-founder · Robotics systems",
      description: "A startup effort focused on the integration of robotics hardware and software, from technical strategy to working prototypes.",
      image: "media/2024future-dynamics-humanoid.jpg",
      imageAlt: "Future Dynamics humanoid robot design concept",
      link: null,
      linkLabel: "More soon"
    }
  ],
  experience: [
    {
      period: "2026—Now",
      title: "M.Phil. thesis · Text2HumanoidAction",
      org: "HKUST(GZ)",
      detail: "Designing a cross-modal adapter and diffusion backbone that align 1536D visual features with 38D whole-body motion for the Unitree G1."
    },
    {
      period: "2026—Now",
      title: "RoboCup 3D Simulation Competition",
      org: "HKUST(GZ) · Team member",
      detail: "Building a curriculum-learning fall recovery policy with PPO, key-state initialization, and domain randomization across friction and mass changes."
    },
    {
      period: "2025—2026",
      title: "Embodied AI winter camp",
      org: "Tsinghua University AIR · Outstanding camper",
      detail: "Built a simulation data collection pipeline and deployed ACT for imitation learning on robotic-arm manipulation tasks."
    },
    {
      period: "2022—Now",
      title: "Future Dynamics",
      org: "Co-founder · Technical lead",
      detail: "Leading the technical strategy and execution of robotics hardware-software integration projects."
    },
    {
      period: "2020—2022",
      title: "RoboCup 3D Simulation Competition",
      org: "NJUPT · Team leader / algorithm developer",
      detail: "Designed bipedal role assignment and collaboration using Hungarian/KM algorithms, and optimized walking actions with CMA-ES and LIPM."
    }
  ],
  notes: [
    { label: "Coming soon", title: "What it takes to make a humanoid recover", text: "A field note on fall states, curriculum design, and why robustness starts before the first fall." },
    { label: "Coming soon", title: "From pixels to whole-body motion", text: "Notes on aligning visual representations with the low-dimensional language of a robot body." },
    { label: "Open notebook", title: "Experiments, papers, and useful things", text: "A growing place for small observations from the lab, the competition floor, and the road." }
  ],
  social: [
    { label: "GitHub", url: "https://github.com/liucheng532" },
    { label: "Email", url: "mailto:cliu425@connect.hkust-gz.edu.cn" }
  ]
};
