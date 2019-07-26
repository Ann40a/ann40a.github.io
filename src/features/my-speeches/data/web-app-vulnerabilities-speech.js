import SpeechCategory from './speach-category';
import webAppVulnerabilitiesImageUrl from './web-app-vulnerabilities.png';

const speech = {
  title: 'Web Applications Vulnerabilities',
  headingImageUrl: webAppVulnerabilitiesImageUrl,
  category: SpeechCategory.Dev2Dev,
  description: `
    Security is a complicated topic and it’s important to stay up-to-date on the latest security trends
    during development of any web application. My lecture was prepared for the colleagues of mine to discuss
    vulnerabilities from AWASP Top 10 list and topics related to them. Later this lecture inspired one of
    the listeners to create post in iTechArt blog.
  `,
  links: [
    {
      title: 'presentation',
      url: 'https://www.dropbox.com/s/it1qlzp3rhoq0wn/Web%20Applications%20Vulnerabilities.pptx',
    },
    {
      title: 'blog post',
      url: 'https://www.itechart.com/blog/web-application-vulnerabilities-how-cope/',
    },
  ],
  lectures: [
    {
      date: '2017-12',
    },
  ],
};

export default speech;
