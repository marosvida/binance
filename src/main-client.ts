import { AxiosRequestConfig } from 'axios';
import {
  BasicAssetPaginatedParams,
  BasicAssetParam,
  BasicSymbolParam,
  BinanceBaseUrlKey,
  CancelOCOParams,
  CancelOrderParams,
  ExchangeSymbol,
  GetAllOrdersParams,
  GetOrderParams,
  HistoricalTradesParams,
  KlinesParams,
  Kline,
  NewOCOParams,
  OrderBookParams,
  OrderIdProperty,
  RecentTradesParams,
  SymbolFromPaginatedRequestFromId,
  SymbolPrice,
  RowsWithTotal,
  CoinStartEndLimit,
  SymbolArrayParam,
  NewOrderListParams,
  OrderResponseType,
  OrderType,
} from './types/shared';

import {
  AccountInformation,
  AddBSwapLiquidityParams,
  AddIpRestriction,
  AggregateTrade,
  AllCoinsInformationResponse,
  ApiKeyBrokerSubAccount,
  APIPermissions,
  APITradingStatus,
  AssetDetail,
  BasicFromPaginatedParams,
  BasicFuturesSubAccountParams,
  BasicMarginAssetParams,
  BasicSubAccount,
  BasicTimeRangeParam,
  BrokerSubAccount,
  BrokerSubAccountHistory,
  BSwapLiquidity,
  BSwapOperations,
  BSwapOperationsParams,
  CancelSpotOrderResult,
  ChangePermissionApiKeyBrokerSubAccountParams,
  ChangePermissionApiKeyBrokerSubAccountResponse,
  ConvertDustParams,
  CreateApiKeyBrokerSubAccountParams,
  CreateApiKeyBrokerSubAccountResponse,
  CreateBrokerSubAccountParams,
  CreateSubAccountParams,
  CurrentAvgPrice,
  DailyAccountSnapshot,
  DailyAccountSnapshotParams,
  DailyChangeStatistic,
  DeleteApiKeyBrokerSubAccountParams,
  DepositAddressParams,
  DepositAddressResponse,
  DepositHistory,
  DepositHistoryParams,
  DustConversion,
  DustInfo,
  DustLog,
  EnableFuturesBrokerSubAccountParams,
  EnableFuturesBrokerSubAccountResponse,
  EnableMarginApiKeyBrokerSubAccountParams,
  EnableMarginBrokerSubAccountParams,
  EnableMarginBrokerSubAccountResponse,
  EnableOrDisableIPRestrictionForSubAccountParams,
  EnableUniversalTransferApiKeyBrokerSubAccountParams,
  EnableUniversalTransferApiKeyBrokerSubAccountResponse,
  ExchangeInfo,
  ExchangeInfoParams,
  FixedAndActivityProjectParams,
  FixedAndActivityProjectPositionParams,
  FuturesPositionRisk,
  GetApiKeyBrokerSubAccountParams,
  GetBrokerInfoResponse,
  GetBrokerSubAccountParams,
  GetBrokerSubAccountHistoryParams,
  GetBrokerSubAccountDepositHistoryParams,
  GetOCOParams,
  GetUniversalTransferBrokerParams,
  IsolatedMarginAccountInfo,
  IsolatedMarginAccountTransferParams,
  LeftDailyPurchaseQuotaFlexibleProductResponse,
  MarginAccountLoanParams,
  MarginTransactionResponse,
  NewSpotOrderParams,
  OrderBookResponse,
  TransferBrokerSubAccountParams,
  TransferBrokerSubAccount,
  PurchaseFlexibleProductResponse,
  PurchaseRecordParams,
  QueryCrossMarginAccountDetailsParams,
  QueryCrossMarginPairResponse,
  QueryMarginAssetResponse,
  QueryMarginPriceIndexResponse,
  QueryMarginRecordParams,
  QueryMaxBorrowResponse,
  QueryMaxTransferOutAmountResponse,
  RawAccountTrade,
  RawTrade,
  RemoveBSwapLiquidityParams,
  SpotOrder,
  StakingBasicParams,
  StakingHistory,
  StakingHistoryParams,
  StakingPersonalLeftQuota,
  StakingProduct,
  StakingProductPosition,
  StakingProductType,
  SubAccountAddOrDeleteIPList,
  SubAccountAssetDetails,
  SubAccountAssets,
  SubAccountAssetsParams,
  SubAccountCOINMDetail,
  SubAccountCOINMPositionRisk,
  SubAccountCOINMSummary,
  SubAccountDepositAddress,
  SubAccountDepositAddressParams,
  SubAccountDepositHistoryParams,
  SubAccountEnableFutures,
  SubAccountEnableLeverageToken,
  SubAccountEnableMargin,
  SubAccountFuturesAccountDetail,
  SubAccountFuturesAccountSummary,
  SubAccountFuturesAssetTransfer,
  SubAccountFuturesAssetTransferHistory,
  SubAccountFuturesAssetTransferHistoryParams,
  SubAccountFuturesAssetTransferParams,
  SubAccountListParams,
  SubAccountListResponse,
  SubAccountMarginAccountDetail,
  SubAccountEnableOrDisableIPRestriction,
  SubAccountsMarginAccountSummary,
  SubAccountSpotAssetsSummary,
  SubAccountSpotAssetsSummaryParams,
  SubAccountSpotAssetTransferHistory,
  SubAccountSpotAssetTransferHistoryParams,
  SubAccountStatus,
  SubAccountSummaryOnFuturesAccountV2Params,
  SubAccountTransfer,
  SubAccountTransferHistory,
  SubAccountTransferHistoryParams,
  SubAccountTransferParams,
  SubAccountTransferToMasterParams,
  SubAccountTransferToSameMasterParams,
  SubAccountUniversalTransfer,
  SubAccountUniversalTransferHistoryParams,
  SubAccountUniversalTransferHistoryResponse,
  SubAccountUniversalTransferParams,
  SubAccountUSDMDetail,
  SubAccountUSDMPositionRisk,
  SubAccountUSDMSummary,
  SymbolOrderBookTicker,
  SymbolTradeFee,
  SystemStatusResponse,
  UniversalTransferBrokerParams,
  UniversalTransferHistoryParams,
  UniversalTransferParams,
  VirtualSubAccount,
  WithdrawAssetsFromManagedSubAccountParams,
  WithdrawHistory,
  WithdrawHistoryParams,
  WithdrawParams,
  NewFutureAccountTransferParams,
  GetFutureAccountTransferHistoryParams,
  FutureAccountTransfer,
  GetLoanCoinPaginatedHistoryParams,
  SubAccountDepositHistoryList,
  ConvertQuoteRequestParams,
  GetConvertTradeHistoryParams,
  GetOrderStatusParams,
  EnableConvertSubAccountParams,
  AcceptQuoteRequestParams,
  ReplaceSpotOrderParams,
  ReplaceSpotOrderResultSuccess,
  NewSpotSOROrderParams,
  SOROrderResponseFull,
  SORTestOrderResponse,
  OrderListResponse,
  OrderResponseTypeFor,
  OrderList,
  CancelOrderListResult,
  GetMarginAccountBorrowRepayRecordsParams,
  MarginAccountRecord,
  FundingAsset,
  UserAsset,
  ConvertTransferResponse,
  CloudMiningHistoryParams,
  ConvertibleCoinsResponse,
  ConvertibleCoinsParams,
  GetConvertBUSDHistoryParams,
  SubmitDepositCreditParams,
  SubmitDepositCreditResponse,
  DepositAddressListParams,
  DepositAddress,
  WalletBalance,
  DelegationHistoryParams,
  DelistScheduleResponse,
  WithdrawAddress,
  AccountInfo,
  ManagedSubAccountSnapshotParams,
  ManagedSubAccountSnapshot,
  ManagedSubAccountTransferLogParams,
  ManagedSubAccountFuturesAssetsResponse,
  ManagedSubAccountMarginAssetsResponse,
  ManagedSubAccountListParams,
  SubAccountTransactionStatistics,
  ManagedSubAccountDepositAddressParams,
  ManagedSubAccountDepositAddress,
  EnableOptionsForSubAccountResponse,
  ManagedSubAccountTransferTTLogParams,
  TradingDayTickerParams,
  RollingWindowTickerParams,
  NewOrderListOTOParams,
  NewOrderListOTOResponse,
  NewOrderListOTOCOParams,
  NewOrderListOTOCOResponse,
  PreventedMatchesParams,
  PreventedMatch,
  AllocationsParams,
  CommissionRates,
  GetCrossMarginTransferHistoryParams,
  GetMarginInterestHistoryParams,
  GetForceLiquidationRecordParams,
  QueryMarginAccountAllOCOParams,
  QueryMarginAccountTradeListParams,
  IsolatedMarginSymbol,
  ToggleBNBBurnParams,
  BNBBurnResponse,
  QueryMarginInterestRateHistoryParams,
  MarginInterestRateHistory,
  QueryCrossMarginFeeDataParams,
  CrossMarginFeeData,
  IsolatedMarginFeeData,
  QueryIsolatedMarginTierDataParams,
  IsolatedMarginTierData,
  GetMarginOrderCountUsageParams,
  MarginOrderCountUsageResponse,
  SmallLiabilityExchangeCoin,
  GetSmallLiabilityExchangeHistoryParams,
  GetNextHourlyInterestRateParams,
  NextHourlyInterestRate,
  GetMarginCapitalFlowParams,
  MarginCapitalFlow,
  MarginDelistSchedule,
  MarginAvailableInventoryResponse,
  ManualLiquidationResponse,
  ManualLiquidationParams,
  LiabilityCoinLeverageBracket,
  GetFlexibleSubscriptionRecordParams,
  GetLockedSubscriptionRecordParams,
  GetFlexibleRedemptionRecordParams,
  GetLockedRedemptionRecordParams,
  GetFlexibleRewardsHistoryParams,
  GetLockedRewardsHistoryParams,
  GetFlexibleSubscriptionPreviewParams,
  GetLockedSubscriptionPreviewParams,
  GetRateHistoryParams,
  GetCollateralRecordParams,
  GetDualInvestmentProductListParams,
  SubscribeDualInvestmentProductParams,
  SubscribeDualInvestmentProductResponse,
  GetDualInvestmentPositionsParams,
  CheckDualInvestmentAccountsResponse,
  ChangeAutoCompoundStatusParams,
  ChangeAutoCompoundStatusResponse,
  GetTargetAssetListParams,
  GetTargetAssetListResponse,
  TargetAssetROI,
  GetTargetAssetROIParams,
  GetSourceAssetListParams,
  GetSourceAssetListResponse,
  CreateInvestmentPlanParams,
  CreateInvestmentPlanResponse,
  EditInvestmentPlanParams,
  EditInvestmentPlanResponse,
  ChangePlanStatusParams,
  ChangePlanStatusResponse,
  GetPlanDetailsParams,
  GetSubscriptionTransactionHistoryParams,
  GetIndexDetailsResponse,
  GetIndexLinkedPlanPositionDetailsResponse,
  SubmitOneTimeTransactionParams,
  SubmitOneTimeTransactionResponse,
  GetOneTimeTransactionStatusParams,
  GetOneTimeTransactionStatusResponse,
  SubmitIndexLinkedPlanRedemptionParams,
  GetIndexLinkedPlanRedemptionHistoryParams,
  IndexLinkedPlanRedemptionRecord,
  GetIndexLinkedPlanRebalanceHistoryParams,
  SubscribeEthStakingV2Response,
  RedeemEthParams,
  RedeemEthResponse,
  GetEthStakingHistoryParams,
  GetEthRedemptionHistoryParams,
  GetBethRewardsHistoryParams,
  GetEthStakingQuotaResponse,
  GetETHRateHistoryParams,
  GetEthStakingAccountResponse,
  GetEthStakingAccountV2Response,
  WrapBethResponse,
  GetWrapHistoryParams,
  GetWbethRewardsHistoryResponse,
  GetMiningAlgoListResponse,
  GetMiningCoinListResponse,
  GetMinerDetailsParams,
  GetMinerDetailsResponse,
  GetMinerListParams,
  GetMinerListResponse,
  GetEarningsListParams,
  GetEarningsListResponse,
  GetExtraBonusListParams,
  GetExtraBonusListResponse,
  GetHashrateResaleListParams,
  GetHashrateResaleListResponse,
  GetHashrateResaleDetailParams,
  GetHashrateResaleDetailResponse,
  SubmitHashrateResaleParams,
  CancelHashrateResaleConfigParams,
  GetStatisticListParams,
  GetStatisticListResponse,
  getMiningAccountsListParams,
  getMiningAccountsListResponse,
  GetMiningAccountEarningParams,
  GetMiningAccountEarningResponse,
  GetFutureTickLevelOrderbookDataLinkParams,
  SubmitVpNewOrderParams,
  SubmitVpNewOrderResponse,
  SubmitTwapNewOrderParams,
  SubmitTwapNewOrderResponse,
  CancelAlgoOrderResponse,
  GetAlgoHistoricalOrdersParams,
  GetAlgoSubOrdersParams,
  GetAlgoSubOrdersResponse,
  SubmitSpotTwapNewOrderParams,
  SubmitSpotTwapNewOrderResponse,
  CancelSpotAlgoOrderResponse,
  GetSpotAlgoHistoricalOrdersParams,
  GetSpotAlgoSubOrdersParams,
  GetSpotAlgoSubOrdersResponse,
  GetPortfolioMarginAssetIndexPriceResponse,
  GetPortfolioMarginProAccountInfoResponse,
  GetPortfolioMarginProBankruptcyLoanAmountResponse,
  GetPortfolioMarginProCollateralRateResponse,
  GetPortfolioMarginProInterestHistoryParams,
  GetPortfolioMarginProInterestHistoryResponse,
  BnbTransferParams,
  GetPortfolioMarginAssetLeverageResponse,
  SubscribeBlvtParams,
  SubscribeBlvtResponse,
  GetBlvtSubscriptionRecordParams,
  BlvtSubscriptionRecord,
  RedeemBlvtParams,
  RedeemBlvtResponse,
  GetBlvtRedemptionRecordParams,
  BlvtRedemptionRecord,
  BlvtUserLimitInfo,
  GetFiatOrderHistoryParams,
  GetFiatOrderHistoryResponse,
  GetFiatPaymentsHistoryResponse,
  GetC2CTradeHistoryParams,
  GetC2CTradeHistoryResponse,
  GetVipLoanOngoingOrdersParams,
  VipLoanRepayParams,
  VipLoanRepayResponse,
  GetVipLoanRepaymentHistoryParams,
  VipLoanRenewParams,
  VipLoanRenewResponse,
  CheckVipCollateralAccountParams,
  VipLoanBorrowParams,
  VipLoanBorrowResponse,
  GetLoanableAssetsDataParams,
  GetCollateralAssetDataParams,
  GetApplicationStatusParams,
  BorrowInterestRate,
  GetCryptoLoansIncomeHistoryParams,
  GetCryptoLoansIncomeHistoryResponse,
  BorrowCryptoLoanParams,
  BorrowCryptoLoanResponse,
  GetLoanBorrowHistoryParams,
  GetLoanOngoingOrdersParams,
  RepayCryptoLoanResponse,
  RepayCryptoLoanParams,
  GetLoanRepaymentHistoryParams,
  AdjustCryptoLoanLTVParams,
  AdjustCryptoLoanLTVResponse,
  GetLoanLTVAdjustmentHistoryParams,
  CheckCollateralRepayRateParams,
  CheckCollateralRepayRateResponse,
  CustomizeMarginCallParams,
  BorrowFlexibleLoanParams,
  BorrowFlexibleLoanResponse,
  GetFlexibleLoanOngoingOrdersParams,
  GetFlexibleCryptoLoanBorrowHistoryParams,
  RepayCryptoFlexibleLoanParams,
  RepayCryptoFlexibleLoanResponse,
  AdjustFlexibleCryptoLoanLTVResponse,
  AdjustFlexibleCryptoLoanLTVParams,
  GetFlexibleLoanLTVAdjustmentHistoryParams,
  GetFuturesLeadTraderStatusResponse,
  GetFuturesLeadTradingSymbolWhitelistResponse,
  GetPayTradeHistoryParams,
  GetAllConvertPairsParams,
  SubmitConvertLimitOrderParams,
  GetSpotRebateHistoryRecordsParams,
  GetSpotRebateHistoryRecordsResponse,
  GetNftDepositHistoryParams,
  GetNftWithdrawHistoryParams,
  GetNftAssetParams,
  CreateGiftCardParams,
  CreateDualTokenGiftCardParams,
  RedeemGiftCardParams,
  ConvertLimitOpenOrder,
  HistoricalDataLink,
  SetAutoSubscribeParams,
  GetAssetParams,
  SimpleEarnAccountResponse,
  SimpleEarnFlexibleProductPositionParams,
  SimpleEarnLockedProductPositionParams,
  SimpleEarnProductListParams,
  SimpleEarnRedeemResponse,
  SimpleEarnSubscribeFlexibleProductResponse,
  SimpleEarnSubscribeLockedProductResponse,
  SimpleEarnSubscribeProductParams,
  ConvertTransfer,
  BUSDConversionRecord,
  CloudMining,
  DelegationHistory,
  CrossMarginTransferHistory,
  MarginInterestHistory,
  ForceLiquidationRecord,
  SmallLiabilityExchangeHistory,
  GetFlexibleSubscriptionRecordResponse,
  SimpleEarnLockedProduct,
  SimpleEarnLockedProductPosition,
  SimpleEarnFlexibleProduct,
  FlexibleLoanCollateralAssetData,
  FlexibleLoanAssetData,
  FlexibleLoanLTVAdjustmentHistory,
  FlexibleLoanOngoingOrder,
  FlexibleCryptoLoanBorrowHistory,
  CustomizeMarginCall,
  LoanableAssetData,
  CollateralAssetData,
  LoanLTVAdjustmentHistory,
  LoanRepaymentHistory,
  LoanOngoingOrder,
  ApplicationStatus,
  VipCollateralAccount,
  VipLoanRepaymentHistory,
  VipOngoingOrder,
  WrapHistory,
  ETHRateHistory,
  BethRewardsHistory,
  EthRedemptionHistory,
  EthStakingHistory,
  GetRateHistory,
  GetLockedRewardsHistory,
  FlexibleRewardsHistory,
  LockedSubscriptionRecord,
  FlexibleRedemptionRecord,
  LockedRedemptionRecord,
  LoanBorrowHistory,
  OrderRateLimitUsage,
  SubaccountBalances,
  ManagerSubTransferHistoryVos,
  ManagerSubUserInfoVo,
  TradingDayTickerMini,
  TradingDayTickerFull,
  Collateral,
  FlexibleSubscriptionPreview,
  LockedSubscriptionPreview,
  DualInvestmentPosition,
  NftWithdraw,
  NftAsset,
  NftTransaction,
  NftDeposit,
  HistoricalSpotAlgoOrder,
  SpotAlgoOrder,
  HistoricalAlgoOrder,
  AlgoOrder,
  GetNftTransactionHistoryParams,
  CollateralRecord,
  DualInvestmentProduct,
} from './types/spot';

import {
  generateNewOrderId,
  getOrderIdPrefix,
  getServerTimeEndpoint,
  logInvalidOrderId,
  RestClientOptions,
  serialiseParams,
} from './util/requestUtils';

import BaseRestClient from './util/BaseRestClient';

export class MainClient extends BaseRestClient {
  constructor(
    restClientOptions: RestClientOptions = {},
    requestOptions: AxiosRequestConfig = {},
  ) {
    super('spot1', restClientOptions, requestOptions);
    return this;
  }

  /**
   * Abstraction required by each client to aid with time sync / drift handling
   */
  async getServerTime(baseUrlKeyOverride?: BinanceBaseUrlKey): Promise<number> {
    const baseUrlKey = baseUrlKeyOverride || this.getBaseUrlKey();
    const endpoint = getServerTimeEndpoint(baseUrlKey);
    const response = await this.getForBaseUrl(endpoint, baseUrlKey);
    return response.serverTime;
  }

  /**
   *
   * Wallet Endpoints
   *
   **/


  enableConvertSubAccount(params: EnableConvertSubAccountParams): Promise<any> {
    return this.postPrivate('sapi/v1/broker/subAccount/convert', params);
  }

 

  convertBUSD(params: ConvertTransfer): Promise<ConvertTransferResponse> {
    return this.postPrivate('sapi/v1/asset/convert-transfer', params);
  }

  getConvertBUSDHistory(params: GetConvertBUSDHistoryParams): Promise<{
    total: number;
    rows: BUSDConversionRecord[];
  }> {
    return this.getPrivate(
      'sapi/v1/asset/convert-transfer/queryByPage',
      params,
    );
  }

  

  getAutoConvertStablecoins(): Promise<ConvertibleCoinsResponse> {
    return this.getPrivate('sapi/v1/capital/contract/convertible-coins');
  }

  setConvertibleCoins(params: ConvertibleCoinsParams): Promise<void> {
    return this.postPrivate(
      'sapi/v1/capital/contract/convertible-coins',
      params,
    );
  }

  

  

  

  /**
   * Broker Endpoints
   */

  getBrokerIfNewSpotUser(): Promise<{
    rebateWorking: boolean;
    ifNewUser: boolean;
  }> {
    return this.getPrivate('sapi/v1/apiReferral/ifNewUser');
  }

  getBrokerSubAccountDepositHistory(
    params?: GetBrokerSubAccountDepositHistoryParams,
  ): Promise<SubAccountDepositHistoryList[]> {
    return this.getPrivate('sapi/v1/broker/subAccount/depositHist', params);
  }

  getBrokerUserCustomisedId(market: 'spot' | 'futures') {
    const prefix = market === 'spot' ? 'sapi' : 'fapi';
    return this.getPrivate(prefix + '/v1/apiReferral/userCustomization');
  }

  createBrokerSubAccount(
    params: CreateBrokerSubAccountParams,
  ): Promise<BrokerSubAccount> {
    return this.postPrivate('sapi/v1/broker/subAccount', params);
  }

  getBrokerSubAccountHistory(
    params: GetBrokerSubAccountHistoryParams,
  ): Promise<BrokerSubAccountHistory[]> {
    return this.getPrivate('sapi/v1/broker/transfer', params);
  }

  getBrokerSubAccount(
    params: GetBrokerSubAccountParams,
  ): Promise<BrokerSubAccount[]> {
    return this.getPrivate('sapi/v1/broker/subAccount', params);
  }

  getApiKeyBrokerSubAccount(
    params: GetApiKeyBrokerSubAccountParams,
  ): Promise<ApiKeyBrokerSubAccount[]> {
    return this.getPrivate('sapi/v1/broker/subAccountApi', params);
  }

  createApiKeyBrokerSubAccount(
    params: CreateApiKeyBrokerSubAccountParams,
  ): Promise<CreateApiKeyBrokerSubAccountResponse> {
    return this.postPrivate('sapi/v1/broker/subAccountApi', params);
  }

  deleteApiKeyBrokerSubAccount(
    params: DeleteApiKeyBrokerSubAccountParams,
  ): Promise<{}> {
    return this.deletePrivate('sapi/v1/broker/subAccountApi', params);
  }

  changePermissionApiKeyBrokerSubAccount(
    params: ChangePermissionApiKeyBrokerSubAccountParams,
  ): Promise<ChangePermissionApiKeyBrokerSubAccountResponse> {
    return this.postPrivate('sapi/v1/broker/subAccountApi/permission', params);
  }

  changeComissionBrokerSubAccount(
    params: ChangePermissionApiKeyBrokerSubAccountParams,
  ): Promise<ChangePermissionApiKeyBrokerSubAccountResponse> {
    return this.postPrivate('sapi/v1/broker/subAccountApi/permission', params);
  }

  enableUniversalTransferApiKeyBrokerSubAccount(
    params: EnableUniversalTransferApiKeyBrokerSubAccountParams,
  ): Promise<EnableUniversalTransferApiKeyBrokerSubAccountResponse> {
    return this.postPrivate(
      'sapi/v1/broker/subAccountApi/permission/universalTransfer',
      params,
    );
  }

  enableMarginBrokerSubAccount(
    params: EnableMarginBrokerSubAccountParams,
  ): Promise<EnableMarginBrokerSubAccountResponse> {
    return this.postPrivate('sapi/v1/broker/subAccount/futures', params);
  }

  enableFuturesBrokerSubAccount(
    params: EnableFuturesBrokerSubAccountParams,
  ): Promise<EnableFuturesBrokerSubAccountResponse> {
    return this.postPrivate('sapi/v1/broker/subAccount', params);
  }

  enableMarginApiKeyBrokerSubAccount(
    params: EnableMarginApiKeyBrokerSubAccountParams,
  ): Promise<BrokerSubAccount> {
    return this.postPrivate('sapi/v1/broker/subAccount/margin', params);
  }

  transferBrokerSubAccount(
    params: TransferBrokerSubAccountParams,
  ): Promise<TransferBrokerSubAccount> {
    return this.postPrivate('sapi/v1/broker/transfer', params);
  }

  universalTransferBroker(
    params: UniversalTransferBrokerParams,
  ): Promise<BrokerSubAccount> {
    return this.postPrivate('sapi/v1/broker/universalTransfer', params);
  }

  getUniversalTransferBroker(
    params: GetUniversalTransferBrokerParams,
  ): Promise<BrokerSubAccount> {
    return this.getPrivate('sapi/v1/broker/universalTransfer', params);
  }

  getBrokerInfo(): Promise<GetBrokerInfoResponse> {
    return this.getPrivate('sapi/v1/broker/info');
  }

  // USD & Coin-M can be found under API getIncome() (find "API rebate" in results)
  getBrokerSpotRebateHistory(days: 7 | 30, customerId?: string) {
    if (days === 7) {
      return this.getPrivate('sapi/v1/apiReferral/rebate/recentRecord', {
        customerId,
      });
    }
    if (days === 30) {
      return this.getPrivate('sapi/v1/apiReferral/rebate/historicalRecord', {
        customerId,
      });
    }
  }

  /**
   *
   * User Data Stream Endpoints
   *
   **/

  // spot
  getSpotUserDataListenKey(): Promise<{ listenKey: string }> {
    return this.post('api/v3/userDataStream');
  }

  keepAliveSpotUserDataListenKey(listenKey: string): Promise<{}> {
    return this.put(`api/v3/userDataStream?listenKey=${listenKey}`);
  }

  closeSpotUserDataListenKey(listenKey: string): Promise<{}> {
    return this.delete(`api/v3/userDataStream?listenKey=${listenKey}`);
  }

  // margin
  getMarginUserDataListenKey(): Promise<{ listenKey: string }> {
    return this.post('sapi/v1/userDataStream');
  }

  keepAliveMarginUserDataListenKey(listenKey: string): Promise<{}> {
    return this.put(`sapi/v1/userDataStream?listenKey=${listenKey}`);
  }

  closeMarginUserDataListenKey(listenKey: string): Promise<{}> {
    return this.delete(`sapi/v1/userDataStream?listenKey=${listenKey}`);
  }

  // isolated margin
  getIsolatedMarginUserDataListenKey(params: {
    symbol: string;
  }): Promise<{ listenKey: string }> {
    return this.post(
      `sapi/v1/userDataStream/isolated?${serialiseParams(params)}`,
    );
  }

  keepAliveIsolatedMarginUserDataListenKey(params: {
    symbol: string;
    listenKey: string;
  }): Promise<{}> {
    return this.put(
      `sapi/v1/userDataStream/isolated?${serialiseParams(params)}`,
    );
  }

  closeIsolatedMarginUserDataListenKey(params: {
    symbol: string;
    listenKey: string;
  }): Promise<{}> {
    return this.delete(
      `sapi/v1/userDataStream/isolated?${serialiseParams(params)}`,
    );
  }

  /**
   *
   * Dual Investment Endpoints
   *
   **/

  /**
   *
   * Auto Invest Enpoints
   *
   **/

  getAutoInvestTargetAssets(
    params: GetTargetAssetListParams,
  ): Promise<GetTargetAssetListResponse> {
    return this.getPrivate(
      'sapi/v1/lending/auto-invest/target-asset/list',
      params,
    );
  }

  getAutoInvestTargetAssetsROI(
    params: GetTargetAssetROIParams,
  ): Promise<TargetAssetROI[]> {
    return this.getPrivate(
      'sapi/v1/lending/auto-invest/target-asset/roi/list',
      params,
    );
  }

  getAutoInvestAssets(): Promise<{
    targetAssets: string[];
    sourceAssets: string[];
  }> {
    return this.getPrivate('sapi/v1/lending/auto-invest/all/asset');
  }

  getAutoInvestSourceAssets(
    params: GetSourceAssetListParams,
  ): Promise<GetSourceAssetListResponse> {
    return this.getPrivate(
      'sapi/v1/lending/auto-invest/source-asset/list',
      params,
    );
  }

  submitAutoInvestmentPlan(
    params: CreateInvestmentPlanParams,
  ): Promise<CreateInvestmentPlanResponse> {
    const { details, ...allParams } = params;
    const requestParameters = { ...allParams };
    for (let i = 0; i < details.length; i++) {
      requestParameters[`details[${i}].targetAsset`] = details[i].targetAsset;
      requestParameters[`details[${i}].percentage`] = details[i].percentage;
    }
    return this.postPrivate(
      'sapi/v1/lending/auto-invest/plan/add',
      requestParameters,
    );
  }

  submitAutoInvestmentPlanOld(
    params: CreateInvestmentPlanParams,
  ): Promise<CreateInvestmentPlanResponse> {
    return this.postPrivate('sapi/v1/lending/auto-invest/plan/add', params);
  }

  updateAutoInvestmentPlan(
    params: EditInvestmentPlanParams,
  ): Promise<EditInvestmentPlanResponse> {
    const { details, ...allParams } = params;

    const requestParameters = { ...allParams };
    for (let i = 0; i < details.length; i++) {
      requestParameters[`details[${i}].targetAsset`] = details[i].targetAsset;
      requestParameters[`details[${i}].percentage`] = details[i].percentage;
    }

    return this.postPrivate(
      'sapi/v1/lending/auto-invest/plan/edit',
      requestParameters,
    );
  }

  updateAutoInvestmentPlanOld(
    params: EditInvestmentPlanParams,
  ): Promise<EditInvestmentPlanResponse> {
    return this.postPrivate('sapi/v1/lending/auto-invest/plan/edit', params);
  }

  updateAutoInvestPlanStatus(
    params: ChangePlanStatusParams,
  ): Promise<ChangePlanStatusResponse> {
    return this.postPrivate(
      'sapi/v1/lending/auto-invest/plan/edit-status',
      params,
    );
  }

  getAutoInvestPlans(params: {
    planType: 'SINGLE' | 'PORTFOLIO' | 'INDEX';
  }): Promise<any> {
    return this.getPrivate('sapi/v1/lending/auto-invest/plan/list', params);
  }

  getAutoInvestPlan(params: GetPlanDetailsParams): Promise<any> {
    return this.getPrivate('sapi/v1/lending/auto-invest/plan/id', params);
  }

  getAutoInvestSubscriptionTransactions(
    params: GetSubscriptionTransactionHistoryParams,
  ): Promise<any> {
    return this.getPrivate('sapi/v1/lending/auto-invest/history/list', params);
  }

  getAutoInvestIndex(params: {
    indexId: number;
  }): Promise<GetIndexDetailsResponse> {
    return this.getPrivate('sapi/v1/lending/auto-invest/index/info', params);
  }

  getAutoInvestUserIndex(params: {
    indexId: number;
  }): Promise<GetIndexLinkedPlanPositionDetailsResponse> {
    return this.getPrivate(
      'sapi/v1/lending/auto-invest/index/user-summary',
      params,
    );
  }

  /**
   * https://developers.binance.com/docs/auto_invest/trade/One-Time-Transaction
   *
   * @param params
   * @returns
   */
  submitAutoInvestOneTimeTransaction(
    params: SubmitOneTimeTransactionParams,
  ): Promise<SubmitOneTimeTransactionResponse> {
    const { details, ...allParams } = params;
    const requestParameters = { ...allParams };
    for (let i = 0; i < details.length; i++) {
      requestParameters[`details[${i}].targetAsset`] = details[i].targetAsset;
      requestParameters[`details[${i}].percentage`] = details[i].percentage;
    }

    return this.postPrivate(
      'sapi/v1/lending/auto-invest/one-off',
      requestParameters,
    );
  }

  getOneTimeTransactionStatus(
    params: GetOneTimeTransactionStatusParams,
  ): Promise<GetOneTimeTransactionStatusResponse> {
    return this.getPrivate(
      'sapi/v1/lending/auto-invest/one-off/status',
      params,
    );
  }

  submitAutoInvestRedemption(
    params: SubmitIndexLinkedPlanRedemptionParams,
  ): Promise<{
    redemptionId: number;
  }> {
    return this.postPrivate('sapi/v1/lending/auto-invest/redeem', params);
  }

  getAutoInvestRedemptionHistory(
    params: GetIndexLinkedPlanRedemptionHistoryParams,
  ): Promise<IndexLinkedPlanRedemptionRecord[]> {
    return this.getPrivate(
      'sapi/v1/lending/auto-invest/redeem/history',
      params,
    );
  }

  getAutoInvestRebalanceHistory(
    params: GetIndexLinkedPlanRebalanceHistoryParams,
  ): Promise<GetIndexLinkedPlanRebalanceHistoryParams[]> {
    return this.getPrivate(
      'sapi/v1/lending/auto-invest/rebalance/history',
      params,
    );
  }

  /**
   *
   * Staking Endpoints
   *
   **/

  /**
   * @deprecated as of 2024-01-19
   */
  getStakingProducts(
    params: StakingBasicParams & {
      asset?: string;
    },
  ): Promise<StakingProduct[]> {
    return this.getPrivate(`sapi/v1/staking/productList`, params);
  }

  /**
   * @deprecated as of 2024-01-19
   */
  getStakingProductPosition(
    params: StakingBasicParams & {
      productId?: string;
      asset?: string;
    },
  ): Promise<StakingProductPosition[]> {
    return this.getPrivate('sapi/v1/staking/position', params);
  }

  /**
   * @deprecated as of 2024-01-19
   */
  getStakingHistory(params: StakingHistoryParams): Promise<StakingHistory[]> {
    return this.getPrivate('sapi/v1/staking/stakingRecord', params);
  }

  /**
   * @deprecated as of 2024-01-19
   */
  getPersonalLeftQuotaOfStakingProduct(params: {
    product: StakingProductType;
    productId: string;
  }): Promise<StakingPersonalLeftQuota> {
    return this.getPrivate('sapi/v1/staking/personalLeftQuota', params);
  }

  subscribeEthStakingV1(params: { amount: number }): Promise<{
    success: boolean;
  }> {
    return this.postPrivate('sapi/v1/eth-staking/eth/stake', params);
  }

  subscribeEthStakingV2(params: {
    amount: number;
  }): Promise<SubscribeEthStakingV2Response> {
    return this.postPrivate('sapi/v2/eth-staking/eth/stake', params);
  }

  redeemEth(params: RedeemEthParams): Promise<RedeemEthResponse> {
    return this.postPrivate('sapi/v1/eth-staking/eth/redeem', params);
  }

  getEthStakingHistory(params: GetEthStakingHistoryParams): Promise<{
    rows: EthStakingHistory[];
    total: number;
  }> {
    return this.getPrivate(
      'sapi/v1/eth-staking/eth/history/stakingHistory',
      params,
    );
  }

  getEthRedemptionHistory(params: GetEthRedemptionHistoryParams): Promise<{
    rows: EthRedemptionHistory[];
    total: number;
  }> {
    return this.getPrivate(
      'sapi/v1/eth-staking/eth/history/redemptionHistory',
      params,
    );
  }

  getBethRewardsHistory(params: GetBethRewardsHistoryParams): Promise<{
    rows: BethRewardsHistory[];
    total: number;
  }> {
    return this.getPrivate(
      'sapi/v1/eth-staking/eth/history/rewardsHistory',
      params,
    );
  }

  getEthStakingQuota(): Promise<GetEthStakingQuotaResponse> {
    return this.getPrivate('sapi/v1/eth-staking/eth/quota');
  }

  getEthRateHistory(params: GetETHRateHistoryParams): Promise<{
    rows: ETHRateHistory[];
    total: string;
  }> {
    return this.getPrivate(
      'sapi/v1/eth-staking/eth/history/rateHistory',
      params,
    );
  }

  getEthStakingAccount(): Promise<GetEthStakingAccountResponse> {
    return this.getPrivate('sapi/v1/eth-staking/account');
  }

  getEthStakingAccountV2(): Promise<GetEthStakingAccountV2Response> {
    return this.getPrivate('sapi/v2/eth-staking/account');
  }

  wrapBeth(params: { amount: number }): Promise<WrapBethResponse> {
    return this.postPrivate('sapi/v1/eth-staking/wbeth/wrap', params);
  }

  getBethWrapHistory(params: GetWrapHistoryParams): Promise<{
    rows: WrapHistory[];
    total: number;
  }> {
    return this.getPrivate(
      'sapi/v1/eth-staking/wbeth/history/wrapHistory',
      params,
    );
  }

  getBethUnwrapHistory(params: GetWrapHistoryParams): Promise<{
    rows: WrapHistory[];
    total: number;
  }> {
    return this.getPrivate(
      'sapi/v1/eth-staking/wbeth/history/unwrapHistory',
      params,
    );
  }

  getWbethRewardsHistory(
    params: GetWrapHistoryParams,
  ): Promise<GetWbethRewardsHistoryResponse> {
    return this.getPrivate(
      'sapi/v1/eth-staking/eth/history/wbethRewardsHistory',
      params,
    );
  }

  /**
   *
   * Savings Endpoints
   * @deprecated as of 2023-06-22, now Simple Earn
   **/

  /**
   * @deprecated as of 2023-06-22, now Simple Earn
   */
  getLeftDailyPurchaseQuotaFlexibleProduct(params: {
    productId: string;
  }): Promise<LeftDailyPurchaseQuotaFlexibleProductResponse> {
    return this.getPrivate(`sapi/v1/lending/daily/userLeftQuota`, params);
  }

  /**
   * @deprecated as of 2023-06-22, now Simple Earn
   */
  getLeftDailyRedemptionQuotaFlexibleProduct(params: {
    productId: string;
  }): Promise<
    LeftDailyPurchaseQuotaFlexibleProductResponse & {
      dailyQuota: string;
      minRedemptionAmount: string;
    }
  > {
    return this.getPrivate(`sapi/v1/lending/daily/userRedemptionQuota`, params);
  }

  /**
   * @deprecated as of 2023-06-22, now Simple Earn
   */
  purchaseFixedAndActivityProject(params: {
    projectId: string;
    lot: number;
  }): Promise<PurchaseFlexibleProductResponse> {
    return this.postPrivate(`sapi/v1/lending/customizedFixed/purchase`, params);
  }

  /**
   * @deprecated as of 2023-06-22, now Simple Earn
   */
  getFixedAndActivityProjects(
    params: FixedAndActivityProjectParams,
  ): Promise<any[]> {
    return this.getPrivate(`sapi/v1/lending/project/list`, params);
  }

  /**
   * @deprecated as of 2023-06-22, now Simple Earn
   */
  getFixedAndActivityProductPosition(
    params: FixedAndActivityProjectPositionParams,
  ): Promise<any[]> {
    return this.getPrivate(`sapi/v1/lending/project/position/list`, params);
  }

  /**
   * @deprecated as of 2023-06-22, now Simple Earn
   */
  getLendingAccount(): Promise<StakingProduct[]> {
    return this.getPrivate(`sapi/v1/lending/union/account`);
  }

  /**
   * @deprecated as of 2023-06-22, now Simple Earn
   */
  getPurchaseRecord(params: PurchaseRecordParams): Promise<any[]> {
    return this.getPrivate(`sapi/v1/lending/union/purchaseRecord`, params);
  }

  /**
   * @deprecated as of 2023-06-22, now Simple Earn
   */
  getRedemptionRecord(params: PurchaseRecordParams): Promise<any[]> {
    return this.getPrivate(`sapi/v1/lending/union/redemptionRecord`, params);
  }

  /**
   * @deprecated as of 2023-06-22, now Simple Earn
   */
  getInterestHistory(params: PurchaseRecordParams): Promise<any[]> {
    return this.getPrivate(`sapi/v1/lending/union/interestHistory`, params);
  }

  /**
   * @deprecated as of 2023-06-22, now Simple Earn
   */
  changeFixedAndActivityPositionToDailyPosition(params: {
    projectId: string;
    lot: number;
    positionId?: number;
  }): Promise<PurchaseFlexibleProductResponse> {
    return this.postPrivate(`sapi/v1/lending/positionChanged`, params);
  }

  /**
   *
   * Mining Endpoints
   *
   **/

  getMiningAlgos(): Promise<GetMiningAlgoListResponse[]> {
    return this.get('sapi/v1/mining/pub/algoList');
  }

  getMiningCoins(): Promise<GetMiningCoinListResponse[]> {
    return this.get('sapi/v1/mining/pub/coinList');
  }

  getMinerDetails(
    params: GetMinerDetailsParams,
  ): Promise<GetMinerDetailsResponse[]> {
    return this.getPrivate('sapi/v1/mining/worker/detail', params);
  }

  getMiners(params: GetMinerListParams): Promise<GetMinerListResponse> {
    return this.getPrivate('sapi/v1/mining/worker/list', params);
  }

  getMiningEarnings(
    params: GetEarningsListParams,
  ): Promise<GetEarningsListResponse> {
    return this.getPrivate('sapi/v1/mining/payment/list', params);
  }

  getExtraBonuses(
    params: GetExtraBonusListParams,
  ): Promise<GetExtraBonusListResponse> {
    return this.getPrivate('sapi/v1/mining/payment/other', params);
  }

  getHashrateResales(
    params: GetHashrateResaleListParams,
  ): Promise<GetHashrateResaleListResponse> {
    return this.getPrivate(
      'sapi/v1/mining/hash-transfer/config/details/list',
      params,
    );
  }

  getHashrateResale(
    params: GetHashrateResaleDetailParams,
  ): Promise<GetHashrateResaleDetailResponse> {
    return this.getPrivate(
      'sapi/v1/mining/hash-transfer/profit/details',
      params,
    );
  }

  submitHashrateResale(params: SubmitHashrateResaleParams): Promise<number> {
    return this.postPrivate('sapi/v1/mining/hash-transfer/config', params);
  }

  cancelHashrateResaleConfig(
    params: CancelHashrateResaleConfigParams,
  ): Promise<boolean> {
    return this.postPrivate(
      'sapi/v1/mining/hash-transfer/config/cancel',
      params,
    );
  }

  getMiningStatistics(
    params: GetStatisticListParams,
  ): Promise<GetStatisticListResponse> {
    return this.getPrivate('sapi/v1/mining/statistics/user/status', params);
  }

  getMiningAccounts(
    params: getMiningAccountsListParams,
  ): Promise<getMiningAccountsListResponse> {
    return this.getPrivate('sapi/v1/mining/statistics/user/list', params);
  }

  getMiningAccountEarnings(
    params: GetMiningAccountEarningParams,
  ): Promise<GetMiningAccountEarningResponse> {
    return this.getPrivate('sapi/v1/mining/payment/uid', params);
  }

  /**
   *
   * Futures Management Endpoints:
   * https://binance-docs.github.io/apidocs/spot/en/#futures
   *
   * Note: to trade futures use the usdm-client or coinm-client.
   * MainClient only has the futures endpoints listed in the "spot" docs category, primarily used for transfers.
   *
   **/

  /**
   * Execute transfer between spot account and futures account.
   *
   * Type:
   * - 1: transfer from spot account to USDT-Ⓜ futures account.
   * - 2: transfer from USDT-Ⓜ futures account to spot account.
   * - 3: transfer from spot account to COIN-Ⓜ futures account.
   * - 4: transfer from COIN-Ⓜ futures account to spot account.
   */
  submitNewFutureAccountTransfer(
    params: NewFutureAccountTransferParams,
  ): Promise<{ tranId: number }> {
    return this.postPrivate(`sapi/v1/futures/transfer`, params);
  }

  getFutureAccountTransferHistory(
    params: GetFutureAccountTransferHistoryParams,
  ): Promise<RowsWithTotal<FutureAccountTransfer>> {
    return this.getPrivate(`sapi/v1/futures/transfer`, params);
  }

  getFuturesTickLevelOrderbookDataLink(
    params: GetFutureTickLevelOrderbookDataLinkParams,
  ): Promise<{
    data: HistoricalDataLink[];
  }> {
    return this.getPrivate('sapi/v1/futures/histDataLink', params);
  }

  /**
   * @deprecated as of 2023-09-25
   */
  getCrossCollateralBorrowHistory(params?: CoinStartEndLimit): Promise<any> {
    return this.getPrivate(`sapi/v1/futures/loan/borrow/history`, params);
  }
  /**
   * @deprecated as of 2023-09-25
   */
  getCrossCollateralRepaymentHistory(params?: CoinStartEndLimit): Promise<any> {
    return this.getPrivate(`sapi/v1/futures/loan/repay/history`, params);
  }
  /**
   * @deprecated as of 2023-09-25
   */
  getCrossCollateralWalletV2(): Promise<any> {
    return this.getPrivate(`sapi/v2/futures/loan/wallet`);
  }
  /**
   * @deprecated as of 2023-09-25
   */
  getAdjustCrossCollateralLTVHistory(
    params?: GetLoanCoinPaginatedHistoryParams,
  ): Promise<any> {
    return this.getPrivate(
      `sapi/v1/futures/loan/adjustCollateral/history`,
      params,
    );
  }
  /**
   * @deprecated as of 2023-09-25
   */
  getCrossCollateralLiquidationHistory(
    params?: GetLoanCoinPaginatedHistoryParams,
  ): Promise<any> {
    return this.getPrivate(`sapi/v1/futures/loan/liquidationHistory`, params);
  }
  /**
   * @deprecated as of 2023-09-25
   */
  getCrossCollateralInterestHistory(
    params?: GetLoanCoinPaginatedHistoryParams,
  ): Promise<any> {
    return this.getPrivate(`sapi/v1/futures/loan/interestHistory`, params);
  }

  /**
   *
   * Portfolio Margin Pro
   *
   **/

  getPortfolioMarginProAccountInfo(): Promise<GetPortfolioMarginProAccountInfoResponse> {
    return this.getPrivate('sapi/v1/portfolio/account');
  }

  getPortfolioMarginProCollateralRate(): Promise<
    GetPortfolioMarginProCollateralRateResponse[]
  > {
    return this.get('sapi/v1/portfolio/collateralRate');
  }

  getPortfolioMarginProBankruptcyLoanAmount(): Promise<GetPortfolioMarginProBankruptcyLoanAmountResponse> {
    return this.getPrivate('sapi/v1/portfolio/pmLoan');
  }

  repayPortfolioMarginProBankruptcyLoan(params: {
    from?: 'SPOT' | 'MARGIN';
  }): Promise<{
    tranId: number;
  }> {
    return this.postPrivate('sapi/v1/portfolio/repay', params);
  }

  getPortfolioMarginProInterestHistory(
    params: GetPortfolioMarginProInterestHistoryParams,
  ): Promise<GetPortfolioMarginProInterestHistoryResponse[]> {
    return this.getPrivate('sapi/v1/portfolio/interest-history', params);
  }

  getPortfolioMarginIndexPrice(params?: {
    asset?: string;
  }): Promise<GetPortfolioMarginAssetIndexPriceResponse[]> {
    return this.get('sapi/v1/portfolio/asset-index-price', params);
  }

  submitPortfolioMarginProFullTransfer(): Promise<{
    msg: string;
  }> {
    return this.postPrivate('sapi/v1/portfolio/auto-collection');
  }

  submitPortfolioMarginProSpecificTransfer(params: { asset: string }): Promise<{
    msg: string;
  }> {
    return this.postPrivate('sapi/v1/portfolio/asset-collection', params);
  }

  bnbTransfer(params: BnbTransferParams): Promise<{
    tranId: number;
  }> {
    return this.postPrivate('sapi/v1/portfolio/bnb-transfer', params);
  }

  updateAutoRepayFuturesStatus(params: { autoRepay: string }): Promise<{
    msg: string;
  }> {
    return this.postPrivate('sapi/v1/portfolio/repay-futures-switch', params);
  }

  getAutoRepayFuturesStatus(): Promise<{
    autoRepay: boolean;
  }> {
    return this.getPrivate('sapi/v1/portfolio/repay-futures-switch');
  }

  repayFuturesNegativeBalance(): Promise<{
    msg: string;
  }> {
    return this.postPrivate('sapi/v1/portfolio/repay-futures-negative-balance');
  }

  getPortfolioMarginAssetLeverage(): Promise<
    GetPortfolioMarginAssetLeverageResponse[]
  > {
    return this.getPrivate('sapi/v1/portfolio/margin-asset-leverage');
  }

  /**
   *
   * BLVT Endpoints
   *
   **/

  getBlvtInfo(params?: { tokenName?: string }): Promise<any[]> {
    return this.get('sapi/v1/blvt/tokenInfo', params);
  }

  subscribeBlvt(params: SubscribeBlvtParams): Promise<SubscribeBlvtResponse> {
    return this.postPrivate('sapi/v1/blvt/subscribe', params);
  }

  getBlvtSubscriptionRecord(
    params: GetBlvtSubscriptionRecordParams,
  ): Promise<BlvtSubscriptionRecord[]> {
    return this.getPrivate('sapi/v1/blvt/subscribe/record', params);
  }

  redeemBlvt(params: RedeemBlvtParams): Promise<RedeemBlvtResponse> {
    return this.postPrivate('sapi/v1/blvt/redeem', params);
  }

  getBlvtRedemptionRecord(
    params: GetBlvtRedemptionRecordParams,
  ): Promise<BlvtRedemptionRecord[]> {
    return this.getPrivate('sapi/v1/blvt/redeem/record', params);
  }

  getBlvtUserLimitInfo(params: {
    tokenName?: string;
  }): Promise<BlvtUserLimitInfo[]> {
    return this.getPrivate('sapi/v1/blvt/userLimit', params);
  }

  /**
   *
   * C2C Endpoints
   *
   **/

  getC2CTradeHistory(
    params: GetC2CTradeHistoryParams,
  ): Promise<GetC2CTradeHistoryResponse> {
    return this.getPrivate(
      'sapi/v1/c2c/orderMatch/listUserOrderHistory',
      params,
    );
  }

  /**
   *
   * VIP Loans Endpoints
   *
   **/

  getVipLoanOpenOrders(params: GetVipLoanOngoingOrdersParams): Promise<{
    rows: VipOngoingOrder[];
    total: number;
  }> {
    return this.getPrivate('sapi/v1/loan/vip/ongoing/orders', params);
  }

  repayVipLoan(params: VipLoanRepayParams): Promise<VipLoanRepayResponse> {
    return this.postPrivate('sapi/v1/loan/vip/repay', params);
  }

  getVipLoanRepaymentHistory(
    params: GetVipLoanRepaymentHistoryParams,
  ): Promise<{
    rows: VipLoanRepaymentHistory[];
    total: number;
  }> {
    return this.getPrivate('sapi/v1/loan/vip/repay/history', params);
  }

  renewVipLoan(params: VipLoanRenewParams): Promise<VipLoanRenewResponse> {
    return this.postPrivate('sapi/v1/loan/vip/renew', params);
  }

  checkVipCollateralAccount(params: CheckVipCollateralAccountParams): Promise<{
    rows: VipCollateralAccount[];
    total: number;
  }> {
    return this.getPrivate('sapi/v1/loan/vip/collateral/account', params);
  }

  borrowVipLoan(params: VipLoanBorrowParams): Promise<VipLoanBorrowResponse> {
    return this.postPrivate('sapi/v1/loan/vip/borrow', params);
  }

  getVipLoanableAssets(params: GetLoanableAssetsDataParams): Promise<{
    rows: LoanableAssetData[];
    total: number;
  }> {
    return this.getPrivate('sapi/v1/loan/vip/loanable/data', params);
  }

  getVipCollateralAssets(params: { collateralCoin?: string }): Promise<{
    rows: CollateralAssetData[];
    total: number;
  }> {
    return this.getPrivate('sapi/v1/loan/vip/collateral/data', params);
  }

  getVipApplicationStatus(params: GetApplicationStatusParams): Promise<{
    rows: ApplicationStatus[];
    total: number;
  }> {
    return this.getPrivate('sapi/v1/loan/vip/request/data', params);
  }

  getVipBorrowInterestRate(params: {
    loanCoin: string;
  }): Promise<BorrowInterestRate[]> {
    return this.getPrivate('sapi/v1/loan/vip/request/interestRate', params);
  }

  /**
   *
   * Crypto Loans Endpoints
   *
   **/

  getCryptoLoansIncomeHistory(
    params: GetCryptoLoansIncomeHistoryParams,
  ): Promise<GetCryptoLoansIncomeHistoryResponse[]> {
    return this.getPrivate('sapi/v1/loan/income', params);
  }

  borrowCryptoLoan(
    params: BorrowCryptoLoanParams,
  ): Promise<BorrowCryptoLoanResponse> {
    return this.postPrivate('sapi/v1/loan/borrow', params);
  }

  getCryptoLoanBorrowHistory(params: GetLoanBorrowHistoryParams): Promise<{
    rows: LoanBorrowHistory[];
    total: number;
  }> {
    return this.getPrivate('sapi/v1/loan/borrow/history', params);
  }

  getCryptoLoanOngoingOrders(params: GetLoanOngoingOrdersParams): Promise<{
    rows: LoanOngoingOrder[];
    total: number;
  }> {
    return this.getPrivate('sapi/v1/loan/ongoing/orders', params);
  }

  repayCryptoLoan(
    params: RepayCryptoLoanParams,
  ): Promise<RepayCryptoLoanResponse> {
    return this.postPrivate('sapi/v1/loan/repay', params);
  }

  getCryptoLoanRepaymentHistory(
    params: GetLoanRepaymentHistoryParams,
  ): Promise<any> {
    return this.getPrivate('sapi/v1/loan/repay/history', params);
  }

  adjustCryptoLoanLTV(
    params: AdjustCryptoLoanLTVParams,
  ): Promise<AdjustCryptoLoanLTVResponse> {
    return this.postPrivate('sapi/v1/loan/adjust/ltv', params);
  }

  getCryptoLoanLTVAdjustmentHistory(
    params: GetLoanLTVAdjustmentHistoryParams,
  ): Promise<{
    rows: LoanLTVAdjustmentHistory[];
    total: number;
  }> {
    return this.getPrivate('sapi/v1/loan/ltv/adjustment/history', params);
  }

  getCryptoLoanLoanableAssets(params: GetLoanableAssetsDataParams): Promise<{
    rows: LoanableAssetData[];
    total: number;
  }> {
    return this.getPrivate('sapi/v1/loan/loanable/data', params);
  }

  getCryptoLoanCollateralAssetsData(
    params: GetCollateralAssetDataParams,
  ): Promise<{
    rows: CollateralAssetData[];
    total: number;
  }> {
    return this.getPrivate('sapi/v1/loan/collateral/data', params);
  }

  getCryptoLoanCollateralRepayRate(
    params: CheckCollateralRepayRateParams,
  ): Promise<CheckCollateralRepayRateResponse> {
    return this.getPrivate('sapi/v1/loan/repay/collateral/rate', params);
  }

  customizeCryptoLoanMarginCall(params: CustomizeMarginCallParams): Promise<{
    rows: CustomizeMarginCall[];
    total: number;
  }> {
    return this.postPrivate('sapi/v1/loan/customize/margin_call', params);
  }

  borrowCryptoLoanFlexible(
    params: BorrowFlexibleLoanParams,
  ): Promise<BorrowFlexibleLoanResponse> {
    return this.postPrivate('sapi/v2/loan/flexible/borrow', params);
  }

  getCryptoLoanFlexibleOngoingOrders(
    params: GetFlexibleLoanOngoingOrdersParams,
  ): Promise<{
    rows: FlexibleLoanOngoingOrder[];
    total: number;
  }> {
    return this.getPrivate('sapi/v2/loan/flexible/ongoing/orders', params);
  }

  getLoanFlexibleBorrowHistory(
    params: GetFlexibleCryptoLoanBorrowHistoryParams,
  ): Promise<{
    rows: FlexibleCryptoLoanBorrowHistory[];
    total: number;
  }> {
    return this.getPrivate('sapi/v2/loan/flexible/borrow/history', params);
  }

  repayCryptoLoanFlexible(
    params: RepayCryptoFlexibleLoanParams,
  ): Promise<RepayCryptoFlexibleLoanResponse> {
    return this.postPrivate('sapi/v2/loan/flexible/repay', params);
  }

  getLoanFlexibleRepaymentHistory(
    params: GetLoanRepaymentHistoryParams,
  ): Promise<{
    rows: LoanRepaymentHistory[];
    total: number;
  }> {
    return this.getPrivate('sapi/v2/loan/flexible/repay/history', params);
  }

  adjustCryptoLoanFlexibleLTV(
    params: AdjustFlexibleCryptoLoanLTVParams,
  ): Promise<AdjustFlexibleCryptoLoanLTVResponse> {
    return this.postPrivate('sapi/v2/loan/flexible/adjust/ltv', params);
  }

  getCryptoLoanFlexibleLTVAdjustmentHistory(
    params: GetFlexibleLoanLTVAdjustmentHistoryParams,
  ): Promise<{
    rows: FlexibleLoanLTVAdjustmentHistory[];
    total: number;
  }> {
    return this.getPrivate(
      'sapi/v2/loan/flexible/ltv/adjustment/history',
      params,
    );
  }

  getCryptoLoanFlexibleAssets(params: { loanCoin?: string }): Promise<{
    rows: FlexibleLoanAssetData[];
    total: number;
  }> {
    return this.getPrivate('sapi/v2/loan/flexible/loanable/data', params);
  }

  getCryptoLoanFlexibleCollateralAssets(params: {
    collateralCoin?: string;
  }): Promise<{
    rows: FlexibleLoanCollateralAssetData[];
    total: number;
  }> {
    return this.getPrivate('sapi/v2/loan/flexible/collateral/data', params);
  }

  /**
   *
   * Pay endpoints
   *
   **/

  getPayTransactions(params: GetPayTradeHistoryParams): Promise<any> {
    return this.getPrivate('sapi/v1/pay/transactions', params);
  }

  /**
   *
   * Convert endpoints
   *
   **/

  /**
   *
   * Rebate Endpoints
   *
   **/

  getSpotRebateHistoryRecords(
    params: GetSpotRebateHistoryRecordsParams,
  ): Promise<GetSpotRebateHistoryRecordsResponse> {
    return this.getPrivate('sapi/v1/rebate/taxQuery', params);
  }

  /**
   *
   * NFT Endpoints
   *
   **/

  /**
   *
   * Binance GiftCard Endpoints
   *
   **/

  createGiftCard(params: CreateGiftCardParams): Promise<any> {
    return this.postPrivate('sapi/v1/giftcard/createCode', params);
  }

  createDualTokenGiftCard(params: CreateDualTokenGiftCardParams): Promise<any> {
    return this.postPrivate('sapi/v1/giftcard/buyCode', params);
  }

  redeemGiftCard(params: RedeemGiftCardParams): Promise<any> {
    return this.postPrivate('sapi/v1/giftcard/redeemCode', params);
  }

  verifyGiftCard(params: { referenceNo: string }): Promise<any> {
    return this.getPrivate('sapi/v1/giftcard/verify', params);
  }

  getRsaPublicKey(): Promise<any> {
    return this.getPrivate('sapi/v1/giftcard/cryptography/rsa-public-key');
  }

  getTokenLimit(params: { baseToken: string }): Promise<any> {
    return this.getPrivate('sapi/v1/giftcard/buyCode/token-limit', params);
  }

  /**
   *
   * BSwap Endpoints
   * @deprecated as of 2024-01-19
   **/

  /**
   * @deprecated as of 2024-01-19
   **/
  getBSwapLiquidity(params?: { poolId: number }): Promise<BSwapLiquidity[]> {
    return this.getPrivate('sapi/v1/bswap/liquidity', params);
  }

  /**
   * @deprecated as of 2024-01-19
   **/
  addBSwapLiquidity(params: AddBSwapLiquidityParams): Promise<{
    operationId: number;
  }> {
    return this.postPrivate('sapi/v1/bswap/liquidityAdd', params);
  }

  /**
   * @deprecated as of 2024-01-19
   **/
  removeBSwapLiquidity(params: RemoveBSwapLiquidityParams): Promise<{
    operationId: number;
  }> {
    return this.postPrivate('sapi/v1/bswap/liquidityRemove', params);
  }

  /**
   * @deprecated as of 2024-01-19
   **/
  getBSwapOperations(
    params?: BSwapOperationsParams,
  ): Promise<BSwapOperations[]> {
    return this.getPrivate('sapi/v1/bswap/liquidityOps', params);
  }
}
