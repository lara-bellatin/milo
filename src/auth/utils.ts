import { Request, Response } from "express";

import { AuthContext } from "../api/interfaces";
import { userAPI } from "../api/users_api";
import { logsAPI } from "../api/logs_api";
import { sequencesAPI } from "../api/sequences_api";
import { bucketsAPI } from "../api/buckets_api";

const actingUserIdCookieName = "stir-actingUserId";

export function getActingUserIdCookie(request: Request) {
  return request.cookies[actingUserIdCookieName];
}

export function setActingUserIdCookie(response: Response, userId: string) {
  response.cookie(actingUserIdCookieName, userId);
}

export function clearActingUserIdCookie(response: Response) {
  response.clearCookie(actingUserIdCookieName);
}

export function buildAuthenticatedContex({ user, loginUser }: AuthContext) {
  return {
    loginUser,
    user,
    apis: {
      logsAPI: logsAPI({ user, loginUser }),
      sequencesAPI: sequencesAPI({ user, loginUser }),
      bucketsAPI: bucketsAPI({ user, loginUser }),
      userAPI: userAPI({ user, loginUser }),
    },
  };
}