import calculator from "../assets/Calculator.jpg";
import TicTacToe from "../assets/TicTacToe.jpg";
import DrumKit from "../assets/DrumKit.jpg";
import rockpaper from "../assets/rock paper.jpg";

export const EXPERTISE = [
  {field: "Programming Languages:",
    skill: "JavaScript, HTML, CSS", },

  { field: "Frameworks & Libraries:",
    skill: "React.js", },

  { field: "Web Development:",
    skill: "Responsive Design, Front-End Development, RESTful APIs", },

  { field: "Database Management:",
    skill: "Database Design and Management", },

  { field: "Software Development:",
    skill: "OOP, Data Structures and Algorithms", },
  
  { field: "Tools & Technologies:",
    skill: "Git, GitHub, npm, Visual Studio Code, Figma (for design work)", },

  { field: "UI/UX Design:",
    skill: "Figma, Adobe XD, User Interface Design, Prototyping", },

  { field: "Graphic Design:",
    skill: "Adobe Photoshop, Adobe Illustrator, Canva", },
];

export const EDUCATION = [
  {
    year: "Expected-2025",
    degree: " Bachelor of Computing",
    school: "Arden University, UK  (Through Roots IVY College of Management Sciences)",
    description: "Currently pursuing a BS in Computing from Arden University, England. I am expanding my knowledge in advanced computing concepts, including software development, data structures, and algorithms, while staying updated with the latest industry trends and technologies",
  },
  {
    year: "2021 - 2023",
    degree: "Higher National Diploma (HND) in Computing",
    school: "Pearson College London -Through Roots IVY College of Management Sciences (ICMS) Lahore", 
    description: `Completed a comprehensive program in computing, covering software development, networking, and systems analysis. This education provided me with practical skills and a strong foundation in IT, essential for my career in front-end development.`,
  },
  {
    year: "2019 - 2021",
    degree: "Intermediate in Computer Science (ICS)",
    school: "MTB College, Sadiqabad",
    description: `Completed my Intermediate in Computer Science, where I gained foundational knowledge in programming, mathematics, and computer systems. This education set the stage for my continued studies in computing and technology.`,
  },
  {
    year: "2020 - 2021",
    degree: "Diploma in Graphic Design",
    school: "Self-taught via YouTube",
    description: `Completed a comprehensive graphic design course through YouTube, where I learned key design principles, software tools, and creative techniques. This self-directed learning enhanced my ability to create visually appealing and user-friendly interfaces, complementing my technical skills.`,
  },
];

                            // Projects Section

export const PROJECTS = [
  {
    title: "Tic, Tac, Toe Game",
    image: TicTacToe,
    description: "A web-based Tic Tac Toe game developed with HTML, CSS, and JavaScript, faithfully recreating the classic gameplay experience with a clean and responsive design.",
    technologies: ["HTML, CSS, JavaScript"],
    link:"https://tic-tac-toe-delta-nine-80.vercel.app/",
  },
  {
    title: "Calculator",
    image: calculator,
    description: "Developed a fully functional calculator using HTML, CSS, and JavaScript. Implemented DOM manipulation, event handling, and mathematical operations to provide a seamless user experience with error handling for invalid inputs.",
    technologies: ["HTML, CSS, JavaScript"],
  },
  {
    title: "Drum Kit",
    image: DrumKit,
    description: "Built an interactive drum kit using HTML, CSS, and JavaScript. Enabled users to play different drum sounds by pressing keys, utilizing event listeners and DOM manipulation to create a dynamic and responsive audio experience.",
    technologies: ["HTML, CSS, JavaScript"],
  },
  {
    title: "Rock, Paper, Scissor Game",
    image: rockpaper,
    description: "A classic game built with HTML, CSS, and JS. This interactive project features real-time gameplay and demonstrates my skills in front-end development and responsive design.",
    technologies: ["HTML, CSS, JavaScript"],
  },
];




export const CONTACT = {
  address: "Lahore, Punjab, Pakistan",
  phoneNo: "+92-321 8674831",
  email: "muaznazir196@gmail.com",
};
