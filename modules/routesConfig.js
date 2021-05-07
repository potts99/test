/* eslint-disable prettier/prettier */
/* eslint-disable linebreak-style */
const routesConfig = [
  {
    id: 'nav',
    title: 'Navigation',
    messageId: 'Navigation Bar',
    type: 'collapse',
    icon: 'dashboard',
    children: [
      {
        id: 'map -1',
        title: 'Map',
        messageId: 'Map',
        type: 'item',
        url: '/map',
      },
      {
        id: 'devices -1',
        title: 'Devices',
        messageId: 'Devices',
        type: 'item',
        url: '/devices',
      },
      {
        id: 'about -1',
        title: 'About',
        messageId: 'About us',
        type: 'item',
        url: '/about-us',
      },
      {
        id: 'kb',
        title: 'Knowledge Base',
        messageId: 'Knowledge Base',
        type: 'item',
        url: '/knowledge',
      },
    ],
  },
];
export default routesConfig;
