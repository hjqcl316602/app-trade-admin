
import { post } from './http';
// 获取usdt的详细信息
export const getUstdStatistics = data => post('admin/finance/statistics/usdtStatistics');
// 获取充值和提现的数量
export const getDepositAndWithdrawStatistics = data => post('admin/finance/statistics/depositAndWithdrawStatistics', data);
