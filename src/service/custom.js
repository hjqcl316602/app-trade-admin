import { post, request } from "./http";

export const queryCustom = data => post("admin/otc/appeal/appeal", data);

// 获取申诉订单
export const getWorkBench = data =>
  request("admin/otc/appeal/appealWorkbench", data);

// 切换工作状态
export const changeWorkStatus = data =>
  request("admin/otc/appeal/workStatus", data);

//获取申述订单详情
export const getAppealDetail = data =>
  request("admin/otc/appeal/AppealDetail", data);

//关闭申诉订单
export const closeAppeal = data =>
  request("admin/otc/appeal/closeAppeal", data);

// 获取历史聊天信息
export const getChatHistory = data =>
  request("/p/getHistoryMessageKf.do", data, "000");

// 获取历史聊天信息 - 承兑商单聊
export const getChatHistoryKfAndCd = data =>
  request("/p/getHistoryMessageKfpCd.do", data, "000");

// 标记聊天数据为已读
export const setChatStatus = data => request("/p/read.do", data, "000");

// 获取历史聊天对象
export const getMemberChat = data => request("/admin/member/memberChat", data);

// 获取正在上班的客服
export const closeWork = data => request("admin/otc/appeal/closeWork", data);

// 惩罚
export const minusScore = data => request("admin/member/minusScore", data);
