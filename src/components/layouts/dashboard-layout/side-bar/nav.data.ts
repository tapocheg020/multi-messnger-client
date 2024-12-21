import type { IconName } from "@/components/react-icon/ReactIcon";

export const navData: TypeNavData = {
  ENG: [
    {
      name: "New chat",
      path: "/dashboard/new-chat",
      icon: "MdOutlineGroups",
      activeIcon: "MdGroups",
    },
    {
      name: "New channel",
      path: "/dashboard/new-channel",
      icon: "HiOutlineSpeakerphone",
      activeIcon: "HiSpeakerphone",
    },
    {
      name: "Contact",
      path: "/dashboard/contact",
      icon: "IoMdContact",
      activeIcon: "IoMdContact",
    },
    {
      name: "Calls",
      path: "/dashboard/calls",
			icon: "IoCallOutline",
			activeIcon: "IoCall",
    },
    // {
    //   name: "Saved",
    //   path: "/dashboard/?chatId=saved",
    // },
    // {
    //   name: "Settings",
    //   path: "/dashboard/settings",
    // },
  ],
};

export type TypeNavData = Record<string, INavItem[]>;

interface INavItem {
  name: string;
  path: string;
  icon: IconName;
  activeIcon: IconName;
}
