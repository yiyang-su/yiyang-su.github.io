// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/~suyiyan1/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/~suyiyan1/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Yiyang Su&#39;s curriculum vitae.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/~suyiyan1/cv/";
          },
        },{id: "news-i-graduated-from-the-university-of-rochester-with-b-s-degrees-in-computer-science-and-mathematics",
          title: 'I graduated from the University of Rochester with B.S. degrees in Computer Science...',
          description: "",
          section: "News",},{id: "news-i-joined-the-computer-vision-lab-as-a-phd-student-advised-by-dr-xiaoming-liu",
          title: 'I joined the Computer Vision Lab as a PhD student advised by Dr....',
          description: "",
          section: "News",},{id: "news-our-paper-on-whole-body-biometrics-at-large-distance-and-altitude-is-accepted-to-wacv-2024",
          title: 'Our paper on whole-body biometrics at large distance and altitude is accepted to...',
          description: "",
          section: "News",},{id: "news-our-paper-on-chatgpt-powered-hierarchical-comparisons-for-image-classification-is-accepted-to-neurips-2023",
          title: 'Our paper on ChatGPT-powered hierarchical comparisons for image classification is accepted to NeurIPS...',
          description: "",
          section: "News",},{id: "news-our-paper-on-keypoint-relative-position-encoding-is-accepted-to-cvpr-2024",
          title: 'Our paper on keypoint relative position encoding is accepted to CVPR 2024.',
          description: "",
          section: "News",},{id: "news-our-paper-on-open-set-biometrics-is-accepted-to-eccv-2024",
          title: 'Our paper on open-set biometrics is accepted to ECCV 2024.',
          description: "",
          section: "News",},{id: "news-our-paper-on-human-recognition-foundation-model-is-accepted-to-cvpr-2025",
          title: 'Our paper on human recognition foundation model is accepted to CVPR 2025.',
          description: "",
          section: "News",},{id: "news-two-papers-are-accepted-to-iccv-2025-️",
          title: 'Two papers are accepted to ICCV 2025! 🏖️',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%75%79%69%79%61%6E%31@%6D%73%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yiyang-su", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=EcMv7kkAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
