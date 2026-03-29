export const projects = [
  // MERN / React Projects
  {
    slug: "ecommerce",
    title: "Zara Inspired E-Commerce Website",
    image: "/zara9.PNG",
    images: [
      "/zara2.PNG",
      "/zara3.PNG",
      "/zara4.PNG",
      "/zara5.PNG",
      "/zara6.PNG",
      "/zara1.PNG",
      "/zara7.PNG",
      "/zara8.PNG",
      "/zara9.PNG",
      "/zara10.PNG",
      "/zara11.PNG",
      "/zara12.PNG",
    ],
    summary: "Full-stack e-commerce with authentication, cart, and payments.",
    description:
      "A Zara-inspired fashion e-commerce platform built using the MERN stack. It includes user authentication, protected routes, and role-based access. Users can explore collections, add products to the cart, like or comment on products, and make secure payments via Stripe. The admin dashboard allows complete control over product, order, and user management through MongoDB. Styled with TailwindCSS for a clean, minimal, and fully responsive look inspired by Zara’s design aesthetic.",
    tech: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Stripe",
      "TailwindCSS",
      "JWT",
      "Protected Routes",
    ],
    repo: "https://github.com/vaishgaikwad04/Tira-ecommerce.git",
    live: "https://courageous-mandazi-96928f.netlify.app",
  },
  {
    slug: "restaurant-website",
    title: "Restaurant Website (React)",
    image: "/res1.png",
    images: [
      "/restaurant1.png",
      "/restaurant2.png",
      "/restaurant3.png",
      "/restaurant4.png",
      "/restaurant5.png",
      "/restaurant6.png",
      "/restaurant7.png",
      "/restaurant8.png",
      "/restaurant9.png",
      "/restaurant10.png",
      "/restaurant11.png",
    ],
    summary:
      "React-based restaurant website with booking and menu exploration.",

    description:
      "A fully responsive restaurant website developed using React with a strong focus on reusable component architecture and modern UI design. The application allows users to explore restaurant menus, browse the gallery, learn about the restaurant concept, and book tables through an interactive reservation form. Form validation is implemented using Yup with clear error handling and toast notifications for user feedback. Application state is managed using React hooks, and booking data is stored in LocalStorage to persist user actions. The project demonstrates practical frontend development skills including component reusability, state management, form validation, and smooth user experience.",

    features: [
      "Reusable React component architecture",
      "Interactive restaurant menu exploration",
      "Table reservation / booking form",
      "Form validation using Yup",
      "User feedback with toast notifications",
      "LocalStorage integration for storing booking data",
      "Responsive design for mobile, tablet, and desktop",
      "Restaurant information sections including About, Services, and Gallery",
    ],

    tech: [
      "React",
      "JavaScript",
      "TailwindCSS",
      "React Hooks",
      "Yup Validation",
      "React Toastify",
      "LocalStorage",
    ],

    repo: "https://github.com/vaishgaikwad04/Restaurant_App.git",
    live: "https://restaurant-app-vb0b.onrender.com",
  },

  {
    slug: "mern-blog-ecommerce",
    title: "E-Commerce + Blog Platform (MERN)",
    image: "/blog1.PNG",
    images: [
      "/blog1.PNG",
      "/blog2.PNG",
      "/blog3.PNG",
      "/blog4.PNG",
      "/blog5.PNG",
      "/blog6.PNG",
      "/blog7.PNG",
      "/blog8.PNG",
      "/blog9.PNG",
      "/10.PNG",
      "/blog11.png",
    ],
    summary: "MERN app combining e-commerce with blogging features.",
    description:
      "This is a modern MERN stack web application that blends e-commerce functionality with a full-featured blog system. Users can read and comment on blogs, explore product collections. Includes CRUD operations for blogs and products, and a clean TailwindCSS UI. Built for seamless integration between content and commerce.",
    tech: ["MongoDB", "Express", "React", "Node.js", "TailwindCSS", "REST API"],
    repo: "https://github.com/vaishgaikwad04/Ecommerce-website.git",
    live: "[https://tira-ecommerce.onrender.com](https://tira-ecommerce.onrender.com)",
  },
];
