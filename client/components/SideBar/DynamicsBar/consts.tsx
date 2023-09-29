import { IconsEnum } from "components/icons";
import { colors } from "theme";

export enum ViewType {
  TODAY = "TODAY",
  THIS_WEEK = "THIS_WEEK",
  UNRESOLVED = "UNRESOLVED",
  PROJECT_BOARD = "PROJECT_BOARD",
}

export const VIEWS = {
  [ViewType.TODAY]: {
    path: "/home",
    icon: IconsEnum.STAR,
    fill: colors.iconYellow,
    label: "Today",
  },
  [ViewType.THIS_WEEK]: {
    path: "/this-week",
    icon: IconsEnum.CALENDAR,
    fill: colors.iconGreen,
    label: "This Week",
  },
  [ViewType.UNRESOLVED]: {
    path: "/unresolved",
    icon: IconsEnum.EXCLAMATION,
    fill: colors.iconFireOrange,
    label: "Unresolved Logs",
  },
  [ViewType.PROJECT_BOARD]: {
    path: "/project-board",
    icon: IconsEnum.CATEGORY,
    fill: colors.iconMint,
    label: "Project Board",
  },
};