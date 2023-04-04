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
      hireMe: {
        phone: "+91 9447818354",
        location: "Kerala, India",
        email: "akhilm640@gmail.com",
      },
    },
    avatar: {
      wrapperStyles: "h-full	m-auto flex",
      imageStyles:
        "rounded-full grayscale hover:grayscale-0	duration-300 ease-linear border-2 border-slate-200 w-32 h-32 md:w-56 md:h-56 lg:w-64 lg:h-64 m-auto lg:mt-56 md:mt-48",
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
      // {
      //   image: "../assets/react.png",
      //   description: "Proficient in reactJs including hooks and redux store",
      // },
      // {
      //   image: "../assets/aws.svg",
      //   description: "Certification in AWS Solution Architect",
      // },
      // {
      //   image: "../assets/react.png",
      //   description: "Proficient in reactJs including hooks and redux store",
      // },
    ],
  },
};
