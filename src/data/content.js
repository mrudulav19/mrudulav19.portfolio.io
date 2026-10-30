// All site content comes from the resume. Nothing here is invented.

// The resume PDF has no embedded URLs. Paste your real links here and the
// buttons appear automatically (empty string = hidden).
export const links = {
  linkedin: "https://www.linkedin.com/in/mrudulavmithula/",
  github: "https://github.com/mrudulav19",
  portfolio: "",
};

export const profile = {
  name: "Mrudula V",
  title: "Software Developer",
  tagline:
    "Software Developer with 2+ years of experience building backend applications, REST APIs, and cloud-ready architectures using Python and C#. Proficient in PostgreSQL, Docker, and database management in cloud environments.",
  email: "mrudulavmithula@gmail.com",
  phone: "+91 8105379165",
  location: "Chennai, Tamil Nadu, India",
  about: [
    "Software Developer with 2+ years of experience building backend applications, REST APIs, and cloud-ready architectures using Python and C#. Proficient in PostgreSQL, Docker, and database management in cloud environments.",
  ],
};

export const skills = [
  { group: "Languages", items: ["Python", "SQL", "C#", "JavaScript"] },
  {
    group: "Frameworks",
    items: ["Django", "Flask", "FastAPI", "SQLAlchemy", "ASP.NET Core", "ASP.NET MVC", "Entity Framework Core", "React"],
  },
  { group: "Databases", items: ["PostgreSQL", "SQL Server", "SQLite"] },
  {
    group: "Tools",
    items: ["Docker", "Docker Compose", "Git", "GitHub", "Postman", "ServiceNow", "Visual Studio"],
  },
  {
    group: "Concepts",
    items: ["REST APIs", "CRUD", "OOP", "ORM", "Database Design", "API Testing", "Unit Testing", "Agile/Scrum", "SDLC", "Manual Testing"],
  },
];

export const experience = [
  {
    role: "Product App Developer Associate",
    org: "Accenture",
    period: "Oct 2024 – Sep 2026",
    points: [
      "Supported enterprise application and IAM workflows, including user access provisioning, modification, and de-provisioning for 20+ weekly requests.",
      "Performed SQL-based data validation, troubleshooting, and integrity checks, improving access-review accuracy by 20%.",
      "Onboarded an application to a pre-production environment by executing and validating 5 API calls using Postman.",
      "Maintained 98% SLA compliance across user lifecycle requests and prepared audit-ready Critical Access Review (CAR) documentation.",
      "Authored 5 SOPs and knowledge-base articles adopted across the team.",
    ],
  },
  {
    role: "Database Administrator & Manual Tester",
    org: "Bharat Electronics Limited",
    period: "Dec 2023 – Oct 2024",
    points: [
      "Executed targeted SQL queries to remove 100 redundant user records and supported end-users with website profile creation.",
      "Validated website profile data synchronization against backend databases across 30+ user journeys to ensure data integrity.",
      "Executed 20+ periodic database refreshes to support ongoing maintenance and ensure seamless application operations.",
      "Identified and verified 10 database record discrepancies by cross-checking user profile information between the website and SQL database.",
      "Executed routine SQL queries for database maintenance across ~500 user records and ensured accurate data management in application records.",
    ],
  },
  {
    role: "Full-Stack Developer Intern",
    org: "Varcons Technologies",
    period: "Oct 2022 – Nov 2022",
    points: [
      "Built a full-stack Grocery Store web application using HTML, CSS, JavaScript, Node.js, and Express, implementing 5 core features for product catalog, user accounts, and order management.",
      "Developed ~4 core application features including product management, user accounts, and order processing using full-stack technologies.",
      "Integrated frontend and backend components using 5 REST APIs to streamline user interactions and application functionality.",
    ],
  },
];

// The resume lists no year or repository URL for projects, so none are shown.
// Add `year`, `github` or `demo` to any project and the card will display them.
export const projects = [
  {
    name: "TaskFlow",
    tech: ["Python", "Django", "PostgreSQL"],
    description:
      "Developing a Django-based task management application with structured views, templates, and backend workflows.",
    points: [
      "Built and tested view logic in Django with safeguards against destructive GET requests, ensuring 21 view tests passed successfully.",
      "Built a TaskFlow web application using Python, Django, and PostgreSQL to streamline project tracking and task organization for users.",
      "Built CRUD operations, task status management, priority levels, and deadline tracking using Python and Django.",
    ],
  },
  {
    name: "LogLens",
    tech: ["Python", "Flask", "PostgreSQL", "SQLAlchemy"],
    description:
      "Built a log analysis backend with APIs to upload log files, parse entries, list uploaded files, retrieve parsed entries, and delete files.",
    points: [
      "Built PostgreSQL storage for parsed log entries using SQLAlchemy, integrating input validation and error handling; verified functionality across 15+ automated tests and API requests.",
      "Built robust REST APIs using Flask and SQLAlchemy for file uploads, log parsing, file retrieval, and record deletion.",
      "Integrated PostgreSQL using SQLAlchemy to store log file metadata and parsed log entries, ensuring reliable data persistence.",
    ],
  },
  {
    name: "ShopStack",
    tech: ["Python", "FastAPI", "PostgreSQL", "Docker", "React"],
    description:
      "Architected a decoupled product catalog and cart application featuring separate FastAPI microservices and containerized PostgreSQL storage.",
    points: [
      "Implemented 5 REST endpoints for product retrieval, cart operations, and stock reduction, and containerized decoupled services using Docker Compose.",
      "Architected a modular microservices-pattern Cart Service using FastAPI and integrated it with the Product Service via REST HTTP requests.",
      "Built product catalog backend using FastAPI and PostgreSQL to manage item information and inventory efficiently in a modular architecture.",
    ],
  },
  {
    name: "Hotel Management Database",
    tech: ["SQL", "SQL Server"],
    description:
      "A relational database system managing rooms, room types, customers, and bookings, built with complex SQL queries utilizing JOINs, aggregations, and NULL handling.",
    points: [
      "Built complex SQL queries using multiple JOINs, aggregations, DATEDIFF, and CASE statements to extract booking metrics and insights.",
    ],
  },
];

export const education = [
  { degree: "MBA in Business Analytics", school: "Jain's College, Bangalore", period: "Oct 2024 – Oct 2026", score: "CGPA 7.8/10" },
  { degree: "B.E. Information Science & Engineering", school: "NMIT College, Bangalore", period: "Aug 2019 – Aug 2023", score: "CGPA 7.43/10" },
];

export const publication = {
  title: "Heart Disease Detection using ANNs",
  venue: "Grenze Scientific Society",
};

export const certifications = [
  "Microsoft Certified: Azure Fundamentals (AZ-900)",
  "Foundation C# – Microsoft & freeCodeCamp",
  "Stream Training Graduation – Accenture",
  "Introduction to HTML5 & Python – Coursera",
];
