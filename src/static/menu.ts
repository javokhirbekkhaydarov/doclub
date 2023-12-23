interface MenuItem {
  title: string;
  submenu: { name: string; path: string }[];
}

const menu: MenuItem[] = [
  {
    title: "Navigation",
    submenu: [
      {
        name: "Main Page",
        path: "/dashboard",
      },
      {
        name: "Education",
        path: "/education",
      },
      {
        name: "Events",
        path: "/events",
      },
      {
        name: "Media",
        path: "/media",
      },
      {
        name: "About",
        path: "/about",
      },
      {
        name: "Community",
        path: "/community",
      },
      {
        name: "Medication",
        path: "/medication",
      },
    ],
  },
  {
    title: "Profile",
    submenu: [
      {
        name: "Personal Page",
        path: "/dashboard",
      },
      {
        name: "Settings",
        path: "/settings",
      },
      // {
      //   name: "Exit",
      //   path: "/auth/login",
      // },
    ],
  },
];
export default menu;
