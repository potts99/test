const routesConfig = [
  {
    id: 'sample',
    title: 'Sample',
    messageId: 'Menu',
    type: 'collapse',
    icon: 'dashboard',
    children: [
      {
        id: 'page-1',
        title: 'Page -1',
        messageId: 'Map',
        type: 'item',
        url: '/map',
      },
      {
        id: 'page-4',
        title: 'Page -4',
        messageId: 'Devices',
        type: 'item',
        url: '/devices',
      },
      {
        id: 'page-2',
        title: 'Page -2',
        messageId: 'About',
        type: 'item',
        url: '/about',
      },
      {
        id: 'page-3',
        title: 'Page -3',
        messageId: 'Knowledge Base',
        type: 'item',
        url: '/kb',
      },
    ],
  },
];
export default routesConfig;
