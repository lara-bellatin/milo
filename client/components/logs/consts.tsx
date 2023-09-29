import { colors } from "theme";
import { IconsEnum } from "components/icons";
import { LogStatus, LogType } from "generated/graphql";


export const logStatusIcon = {
  [LogStatus.Unresolved]: IconsEnum.CIRCLE_OUTLINE,
  [LogStatus.Resolved]: IconsEnum.CIRCLE_CHECK,
  [LogStatus.Deleted]: IconsEnum.CIRCLE_FULL,
}

export const logTypeColor = {
  [LogType.Task]: colors.iconMint,
  [LogType.Wait]: colors.iconFireOrange,
  [LogType.Pin]: colors.iconGrey,
  [LogType.Event]: colors.iconYellow,
  [LogType.Decision]: colors.iconGreen,
}