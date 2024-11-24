export default [
  {
    title: 'Dashboard',
    url: '/dashboard/overview',
    icon: 'lucide:layout-dashboard',
    isActive: false,
    items: []
  },
  {
    title: 'Employee',
    url: '/dashboard/employee',
    icon: 'lucide:user',
    isActive: false,
    items: []
  },
  {
    title: 'Product',
    url: '/dashboard/product',
    icon: 'lucide:shopping-bag',
    shortcut: ['p', 'p'],
    isActive: false,
    items: [] // No child items
  },
  {
    title: 'Account',
    url: '#', // Placeholder as there is no direct link for the parent
    icon: 'lucide:credit-card',
    isActive: true,

    items: [
      {
        title: 'Profile',
        url: '/dashboard/profile',
        shortcut: ['m', 'm']
      },
      {
        title: 'Login',
        shortcut: ['l', 'l'],
        url: '/',
      }
    ]
  },
  {
    title: 'Kanban',
    url: '/dashboard/kanban',
    icon: 'lucide:kanban',
    shortcut: ['k', 'k'],
    isActive: false,
    items: [] // No child items
  }
];
