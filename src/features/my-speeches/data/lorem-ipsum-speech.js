import loremIpsumImageUrl from './lorem-ipsum.png';

const speech = {
  title: 'Speech Title',
  headingImageUrl: loremIpsumImageUrl,
  category: 'category',
  description: `
    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
    magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, conseteturundefined.
  `,
  links: [
    {
      title: 'presentation',
      url: 'https://example.com',
    },
    {
      title: 'video',
      url: 'https://example.com',
    },
  ],
  lectures: [
    {
      date: '2018-08',
    },
  ],
};

export default speech;
