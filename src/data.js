import HomeIcon from "@material-ui/icons/Home";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import PersonIcon from "@material-ui/icons/Person";
import AppsIcon from "@material-ui/icons/Apps";
import StoreIcon from "@material-ui/icons/Store";
import SettingsIcon from "@material-ui/icons/Settings";

export const listData = [
  {
    id: 1,
    title: "Home",
    Icon: HomeIcon,
    href: "/",
    nestedList: null,
  },
  {
    id: 2,
    title: "Orders",
    Icon: SystemUpdateAltIcon,
    nestedList: [
      {
        title: "Orders",
      },
      {
        title: "Drafts",
      },
      {
        title: "Abandoned checkouts",
      },
    ],
  },
  {
    id: 3,
    title: "Products",
    Icon: LocalOfferIcon,
    nestedList: [
      {
        title: "All Products",
      },
      {
        title: "Inventory",
      },
      {
        title: "Transfers",
      },
      {
        title: "Collections",
      },
      {
        title: "Gift cards",
      },
    ],
  },
  {
    id: 4,
    title: "Customers",
    Icon: PersonIcon,
    nestedList: null,
  },
  {
    id: 5,
    title: "Analytics",
    Icon: null,
    nestedList: [
      {
        title: "Dashboards",
      },
      {
        title: "Reports",
      },
      {
        title: "List View",
      },
    ],
  },
  {
    id: 6,
    title: "Marketings",
    Icon: null,
    nestedList: [
      {
        title: "Overview",
      },
      {
        title: "Compaigns",
      },
      {
        title: "Automations",
      },
    ],
  },
  {
    id: 7,
    title: "Discounts",
    Icon: null,
    nestedList: null,
  },
  {
    id: 8,
    title: "Apps",
    Icon: AppsIcon,
    nestedList: null,
  },
  {
    id: 9,
    title: "Online Store",
    Icon: StoreIcon,
    nestedList: [
      { title: "Theme" },
      { title: "Blog posts" },
      { title: "Pages" },
      { title: "Navigations" },
      { title: "Domain" },
      { title: "Preferences" },
    ],
  },
  {
    id: 10,
    title: "Settings",
    Icon: SettingsIcon,
    href: "/settings",
    nestedList: null,
  },
];

export const settingsData = [
  {
    id: 1,
    title: "General",
    description: "View and update your store details",
    Icon: null,
    href: "/settings/general",
  },
  {
    id: 2,
    title: "Notifications",
    description: "Manage notifications and sent to you and your customers",
    Icon: null,
    href: "/settings/notifications",
  },
  {
    id: 3,
    title: "Store languages",
    description: "Manage the languages your customer can view on your store",
    Icon: null,
    href: "",
  },
  {
    id: 4,
    title: "Payments",
    description: "Enable and manage your store's payment providers",
    Icon: null,
    href: "",
  },
  {
    id: 5,
    title: "Gift Cards",
    description: "Enable Apple wallet passes and set gift card expiry dates",
    Icon: null,
    href: "",
  },
  {
    id: 6,
    title: "Billing",
    description: "Manage your billing information and view your invoices",
    Icon: null,
    href: "",
  },
  {
    id: 7,
    title: "Checkout",
    description: "Customize your online checkout process",
    Icon: null,
    href: "/settings/checkout",
  },
  {
    id: 8,
    title: "Files",
    description: "Upload Images, Videos and documents",
    Icon: null,
    href: "/settings/files",
  },
  {
    id: 9,
    title: "Legal",
    description: "Manage your store's legal pages",
    Icon: null,
    href: "",
  },
  {
    id: 10,
    title: "Shipping and delivery",
    description: "Manage how you ship orders to customize",
    Icon: null,
    href: "",
  },
  {
    id: 11,
    title: "Sales Channels",
    description: "Manage how you ship orders to customize",
    Icon: null,
    href: "",
  },
  {
    id: 12,
    title: "Sales Metafields",
    description: "Manage how you ship orders to customize",
    Icon: null,
    href: "",
  },
  {
    id: 13,
    title: "Taxes",
    description: "Manage how you ship orders to customize",
    Icon: null,
    href: "",
  },
  {
    id: 14,
    title: "Plan",
    description: "Manage how you ship orders to customize",
    Icon: null,
    href: "",
  },
  {
    id: 15,
    title: "Locations",
    description: "Manage how you ship orders to customize",
    Icon: null,
    href: "/settings/locations",
  },
  {
    id: 16,
    title: "Users and permissions",
    description: "Manage how you ship orders to customize",
    Icon: null,
    href: "",
  },
];
