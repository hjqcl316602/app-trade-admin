/**
 * created by 41587 on 2019/9/17
 */
import { request } from "./http";

export const getMember = data => request("admin/member/memberAccount", data);
export const updateMember = data =>
  request("admin/member/memberAccountUpdate", data);
