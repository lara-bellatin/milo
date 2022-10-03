import { IconsEnum } from "components/icons";

export enum TabType {
  TODAY = "TODAY",
  THIS_WEEK = "THIS_WEEK",
  UNRESOLVED = "UNRESOLVED",
  PROJECT_BOARD = "PROJECT_BOARD",
  PROJECT = "PROJECT",
  BUCKET = "BUCKET",
}

export interface Tab {
  path: string;
  icon: IconsEnum;
  label: string;
}

export const TABS = {
  [TabType.TODAY]: {
    path: "/home",
    icon: IconsEnum.STAR,
    label: "Today",
  },
  [TabType.THIS_WEEK]: {
    path: "/this-week",
    icon: IconsEnum.CALENDAR,
    label: "This Week",
  },
  [TabType.UNRESOLVED]: {
    path: "/unresolved",
    icon: IconsEnum.STAR,
    label: "Unresolved Logs",
  },
  [TabType.PROJECT_BOARD]: {
    path: "/project-board",
    icon: IconsEnum.STAR,
    label: "Project Board",
  },
};
