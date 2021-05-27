const routesConfig = [
  {
    id: 'sample',
    title: 'Sample',
    messageId: 'sidebar.sample',
    type: 'collapse',
    icon: 'dashboard',
    children: [
      {
        id: 'page-1',
        title: 'Page -1',
        messageId: 'sidebar.sample.page1',
        type: 'item',
        url: '/map',
      },
      {
        id: 'page-2',
        title: 'Page -2',
        messageId: 'sidebar.sample.page2',
        type: 'item',
        url: '/sample/page-2',
      },
    ],
  },
];
export default routesConfig;
