const leftNavGroupings = [
  {
    label: "Your Space",
    items: [
      {
        icon: {
          default: "",
          active: "",
        },
        label: "Inbox",
        href: ["/inbox"],
      },
      {
        icon: {
          default: "",
          active: "",
        },
        label: "Active",
        href: ["/", "/active"],
        subComponents: ["SMART_CHANNELS"],
      },
    ],
  },
];

export default {
  sources: [],
  leftNavGroupings,
};
