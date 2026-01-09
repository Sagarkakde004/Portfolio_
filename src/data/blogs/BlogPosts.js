const blogPosts = [
  {
    id: "my-journey-as-self-taught-developer",
    title: "My Journey as a Self-Taught Full Stack Developer",
    excerpt:
      "From learning basics to building production-ready applications - my story of becoming a self-taught developer and lessons learned along the way.",
    content: [
      {
        type: "text",
        content:
          "Starting as a self-taught developer was challenging but incredibly rewarding. I began my journey with HTML and CSS, then moved to JavaScript, and eventually mastered full-stack development with React and Spring Boot.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
        alt: "Self-Taught Developer Journey",
      },
      {
        type: "text",
        content:
          "The key to success as a self-taught developer is consistency and building real projects. Instead of just watching tutorials, I built actual applications like my Gig Jobs platform, which taught me more than any course ever could.",
      },
      {
        type: "text",
        content:
          "My advice to aspiring developers: Start building immediately, don't wait to feel 'ready'. Every project teaches you something new, and every bug you fix makes you a better developer.",
      },
    ],
    date: "January 09, 2026",
    author: "Sagar Kakade",
  },
  {
    id: "building-gig-jobs-app-full-stack",
    title:
      "Building Gig Jobs App: A Full Stack Journey with React and Spring Boot",
    excerpt:
      "Deep dive into building a complete job marketplace application from scratch using React, Spring Boot, MySQL, and Spring Security.",
    content: [
      {
        type: "text",
        content:
          "Building the Gig Jobs Application was my most ambitious project. It taught me how to integrate frontend and backend technologies, handle authentication, and create a scalable architecture.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop",
        alt: "Full Stack Development",
      },
      {
        type: "text",
        content:
          "The frontend was built with React, focusing on creating a clean, intuitive user interface. I implemented features like job search, application tracking, and a recruiter dashboard. Using React hooks like useState and useEffect helped manage the application state efficiently.",
      },
      {
        type: "text",
        content:
          "For the backend, I chose Spring Boot because of its robust ecosystem and excellent support for building RESTful APIs. Spring Security was crucial for implementing role-based access control, ensuring that job seekers and recruiters had appropriate permissions.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop",
        alt: "Spring Boot Backend",
      },
      {
        type: "text",
        content:
          "Database design was another learning experience. I normalized the MySQL schema to reduce redundancy and improve query performance. The relationships between users, jobs, and applications required careful planning to ensure data integrity.",
      },
    ],
    date: "January 05, 2026",
    author: "Sagar Kakade",
  },
  {
    id: "jp-morgan-certification-experience",
    title: "My Experience with JP Morgan Chase Software Engineering Program",
    excerpt:
      "Completing the JP Morgan Chase virtual experience program and gaining hands-on experience with enterprise-level technologies like Kafka and Spring Boot.",
    content: [
      {
        type: "text",
        content:
          "The JP Morgan Chase Software Engineering program was an eye-opening experience. It exposed me to enterprise-level development practices and technologies used by major financial institutions.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&auto=format&fit=crop",
        alt: "Software Engineering",
      },
      {
        type: "text",
        content:
          "One of the most valuable skills I gained was working with Apache Kafka. Learning how to implement message streaming and handle asynchronous data processing opened my eyes to scalable system architecture. This knowledge is directly applicable to real-world enterprise applications.",
      },
      {
        type: "text",
        content:
          "The program emphasized clean code practices, proper project setup, and efficient configuration management. These skills have become fundamental to how I approach every project now.",
      },
    ],
    date: "December 28, 2025",
    author: "Sagar Kakade",
  },
  {
    id: "spring-security-implementation-guide",
    title: "Implementing Spring Security: Authentication and Authorization",
    excerpt:
      "A practical guide to implementing Spring Security in your applications, covering authentication, authorization, and role-based access control.",
    content: [
      {
        type: "text",
        content:
          "Spring Security is essential for protecting your applications. In my Gig Jobs application, I implemented comprehensive security features including JWT authentication and role-based authorization.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&auto=format&fit=crop",
        alt: "Spring Security",
      },
      {
        type: "text",
        content:
          "Setting up Spring Security starts with configuring security filters. These filters intercept requests and validate authentication tokens before allowing access to protected resources. Understanding the filter chain is crucial for implementing proper security.",
      },
      {
        type: "text",
        content:
          "Role-based access control (RBAC) ensures that users can only access resources appropriate for their role. In my application, job seekers and recruiters have different permissions, which Spring Security handles elegantly through annotations and configuration.",
      },
    ],
    date: "December 20, 2025",
    author: "Sagar Kakade",
  },
  {
    id: "react-best-practices-2026",
    title: "React Best Practices I Learned Building Real Applications",
    excerpt:
      "Practical React best practices discovered through building production applications, including state management, component design, and performance optimization.",
    content: [
      {
        type: "text",
        content:
          "Building real React applications taught me that clean code and proper architecture are more important than fancy features. Here are the best practices I follow in every project.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop",
        alt: "React Development",
      },
      {
        type: "text",
        content:
          "Component design is crucial. I follow the single responsibility principle - each component should do one thing well. This makes testing easier and code more maintainable. Breaking down complex UIs into smaller, reusable components has saved me countless hours.",
      },
      {
        type: "text",
        content:
          "State management can get complex quickly. I use React hooks like useState for local state and consider Context API for global state when needed. The key is to keep state as close to where it's used as possible.",
      },
      {
        type: "image",
        src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop",
        alt: "Clean Code",
      },
      {
        type: "text",
        content:
          "Performance optimization matters. Using React.memo for expensive components and useMemo for expensive calculations has significantly improved my application's performance. Remember: premature optimization is the root of all evil, but knowing when to optimize is crucial.",
      },
    ],
    date: "December 15, 2025",
    author: "Sagar Kakade",
  },
];

export default blogPosts;
