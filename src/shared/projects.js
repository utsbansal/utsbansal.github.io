export const projectData = [
    {
        id: 0,
        title: "Forest Fire Evacuation using Reinforcement Learning",
        link: "https://github.com/ForestFireRescue",
        tools: "Python, PyTorch, OpenAI Gym",
        points : [
            "Designed an environment using gym for forest fire simulation. The agent has to navigate through the stochastic environment where fire is spreading to rescue people.",
            "Used a custom observation space which informs the agent about the intensity of person and fire in each of its four directions.",
            "Using DQN, Double DQN and TD Advantage Actor Critic algorithm to solve the problem."
        ]
    },
    {
        id: 1,
        title: "CartPole, Mountain Car, Lunar Lander - OpenAI Environments",
        tools: "Python, PyTorch, OpenAI Gym",
        points : [
            "Used reinforcement learning algorithms such as Q-Learning and SARSA to solve grid world environments.",
            "Implemented value approximation functions such as DQN and Double DQN to solve OpenAI gym environments such as CartPole and Mountain Car.",
            "Worked on actor critic policy gradient methods to solve more complex environments such as Lunar Lander."
        ]
    },
    {
        id: 2,
        title: "File Access Manager as a Distributed System",
        tools: "React.js, Node.js, Docker, SQLite",
        points : [
            "Made a distributed file access manager where user can upload files and set file access rights.",
            "Leveraged React.js and Node.js for build of the application. Utilized Docker to simulate the distributed environment.",
            "Used Redis for session management and RAFT algorithm to achieve consensus among nodes."
        ]
    },
    {
        id: 3,
        title: "Motif based analysis of Bitcoin Transaction Network",
        link: "https://github.com/UB-CSE-640-Blockchain-Analysis",
        tools: "Python, Networkx library",
        points : [
            "Performed analysis on different sources providing Bitcoin transaction datasets.",
            "Devised an algorithm to obtain transactions along with timestamp and construct a temporal graph.",
            "Conducted temporal analysis and motif counting on temporal graph of one week of Bitcoin transactions."
        ]
    },
    {
        id: 4,
        title: "Face Detection and Clustering System",
        tools: "Python, OpenCV",
        points : [
            "Developed a system which could detect faces in multiple images and clustered similar faces together.",
            "The system leveraged Haar Cascade method to detect faces in a given image.",
            "Calculated SIFT features of the detected faces and then applied K-Means clustering on the detected features."
        ]
    },
    {
        id: 5,
        title: "Panorama Stitcher",
        tools: "Python, OpenCV",
        points : [
            "Built a system which could stitch images together to form a panorama.",
            "System detects which images can be stitched together by using SIFT features.",
            "Transformation is applied according to the matched SIFT key points."
        ]
    },
    {
        id: 6,
        title: "Perception and Path Planning, Robotics",
        tools: "C++, ROS, stage, tf",
        points : [
            "Executed planning algorithms in C++ such as Bug2 and A* taking advantage of ROS, tf and stage.",
            "Designed a perception system, making use of RANSAC algorithm, for wall detection.",
            "The robot could move from start to finish in given binary world map."
        ]
    },
    {
        id: 7,
        title: "Pintos Operating System",
        tools: "C, PintOS (Stanford University)",
        points : [
            "Accomplished priority scheduling and MLFQ scheduling among threads.",
            "Improved alarm clock functionality enabling threads to sleep without busy waiting.",
            "Worked on process initialization and setup of user level processes."
        ]
    },
    {
        id: 8,
        title: "Printing Job Management System",
        tools: "React.js, Node.js, MongoDB",
        points : [
            "MERN application formulated for Rupa Packaging Industries to digitalize job management operations.",
            "User can view, add, update jobs and track steps (designing, printing etc.) needed for a job’s completion.",
            "New jobs/employees/processes can be added easily."
        ]
    },
    {
        id: 9,
        title: "Data Structures and Algorithm Visualizer",
        tools: "React.js, Node.js, Vanilla JavaScript, Bootstrap",
        link: "https://dsavisualizer.github.io",
        points : [
            "Visualized stack and queue data structures as well as BFS and DFS graph traversal algorithms to assist remote learning during COVID-19 pandemic."
        ]
    },
    {
        id: 10,
        title: "Personal Travelogue Website",
        tools: "React.js, Bootstrap, Github Actions(CI/CD)",
        link: "https://utsbansal.github.io",
        points : [
            "Travel blog and portfolio built using Bootstrap and React libraries."
        ]
    }
]