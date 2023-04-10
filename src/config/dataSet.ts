export const data = {
  home: {
    imageURL: "../assets/profileImage.jpg",
    header: {
      resumeURL: "./Resume.pdf",
      items: [
        { label: "Home", id: "homePage" },
        { label: "Experience", id: "experiencePage" },
        { label: "Portfolio", id: "portfolioPage" },
        { label: "Contact", id: "contactPage" },
      ],
      name: "Akhil M",
    },
    homeLeft: {
      title: "Full Stack Software engineer, mentor",
      attributes: [
        {
          number: 6,
          label: "Year of experience",
        },
        {
          number: "235+",
          label: "features completed",
        },
      ],
    },
    homeRight: {
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
      hireMe: {
        phone: "+91 9447818354",
        location: "Kerala, India",
        email: "akhilm640@gmail.com",
      },
    },
    avatar: {
      wrapperStyles: "md:h-full mx-auto my-16 md:flex",
      imageStyles:
        "rounded-full grayscale hover:grayscale-0	duration-300 ease-linear border-2 border-slate-200 w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 m-auto lg:mt-56 md:mt-48",
    },
  },
  experiencePage: {
    skillsDescription:
      "3 years of experience in web development  and proficient in below mentioned skills",
    experience: [
      {
        image: "../assets/javascript.png",
        description: "3 years of exp in javascript",
      },
      {
        image: "../assets/testing.png",
        description:
          "good knowledge in unit testing using enzyme and react testing library",
      },

      {
        image: "../assets/big-data.png",
        description: "expertise in working with firebase and cloud systems",
      },
      {
        image: "../assets/htmlcss.png",
        description: "3 years of experience in html and css",
      },
      {
        image: "../assets/react.png",
        description: "Proficient in reactJs including hooks and redux store",
      },
      {
        image: "../assets/aws.svg",
        description: "Certification in AWS Solution Architect",
      },
      {
        image: "../assets/javascript.png",
        description: "3 years of exp in javascript",
      },
      {
        image: "../assets/testing.png",
        description:
          "good knowledge in unit testing using enzyme and react testing library",
      },

      {
        image: "../assets/big-data.png",
        description: "expertise in working with firebase and cloud systems",
      },
      {
        image: "../assets/htmlcss.png",
        description: "3 years of experience in html and css",
      },
      {
        image: "../assets/react.png",
        description: "Proficient in reactJs including hooks and redux store",
      },
      {
        image: "../assets/aws.svg",
        description: "Certification in AWS Solution Architect",
      },
    ],
    column_grids_style: "cols-grid-3",
    columns: "3",
  },
  experienceList: {
    title: "EXPERIENCE",
    list: [
      {
        year: "2050 May - 2018 June",
        role: "Front End Developer",
        company: "TCS",
        jobDescription:
          "2050 simply dummy text of the printing and typesetting industry. LoremIpsum has been the industry's standard dummy text ever since the",
      },
      {
        year: "2037 May - 2018 June",
        role: "Full Stack Developer",
        company: "Experion Technologies",
        jobDescription:
          "2038 simply dummy text of the printing and typesetting industry. LoremIpsum has been the industry's standard dummy text ever since the",
      },
      {
        year: "2047 May - 2018 June",
        role: "Full Stack Developer",
        company: "Qburst",
        jobDescription:
          "2047 simply dummy text of the printing and typesetting industry. LoremIpsum has been the industry's standard dummy text ever since the",
      },
    ],
  },
  works: [
    {
      title: "Featured Project",
      name: "potfolio",
      imageURL: "../assets/portfolio.png",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. <b>lorem ipsum has been</b>, lorem ipsum has been lorem ipsum has been card",
      tools: ["vs code", "git"],
      links: [
        { icon: "../assets/github.png", link: "https://github.com/akhilmdev" },
        { icon: "../assets/share.png", link: "https://github.com/akhilmdev" },
      ],
    },
    {
      title: "Featured Project",
      name: "potfolio",
      imageURL: "../assets/portfolio.png",
      description:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been, lorem ipsum has been lorem ipsum has been card",
      tools: ["vs code", "git"],
      links: [
        { icon: "../assets/github.png", link: "https://github.com/akhilmdev" },
        { icon: "../assets/share.png", link: "https://github.com/akhilmdev" },
      ],
    },
  ],
  contactMe: {
    title: "Get in <b>Touch</b>?",
    description: `Although I’m not currently looking for any new opportunities, my inbox
    is always open. Whether you have a question or just want to say hi, I’ll
    try my best to get back to you!`,
    buttonText: "Say Hello!",
    footerMessage:
      "<p>Designed & Built by <b>Akhil M</b> and <b>jithin k</b></p>",
  },
  socialMedias: [
    {
      icon: "../assets/linkedin.png",
      link: "https://www.linkedin.com/in/akhilmohanan640/",
    },
    {
      icon: "../assets/github.png",
      link: "https://github.com/akhilmdev",
    },
    {
      icon: "../assets/instagramHover.png",
      link: "https://www.instagram.com/akhilmohanan12/",
    },
  ],
};
