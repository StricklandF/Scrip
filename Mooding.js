/*************************************
@Zoo
mooding-日记心情摩天轮，解锁永久订阅
日期:2023.04.08
[rewrite_local]
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/Crazy-Z7/Scrip/main/Mooding.js
hostname = buy.itunes.apple.com
**************************************/
var obj = JSON.parse($response.body);
   
    obj = {{
  "environment" : "Production",
  "receipt" : {
    "receipt_type" : "Production",
    "app_item_id" : 1552314173,
    "receipt_creation_date" : "2023-04-07 13:42:48 Etc/GMT",
    "bundle_id" : "com.ideatiny.mooding",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1680872900000",
        "expires_date" : "2286-05-13 16:41:40 Etc/GMT",
        "expires_date_pst" : "2286-05-13 16:41:40 America/Los_Angeles",
        "is_in_intro_offer_period" : "false",
        "transaction_id" : "310001393848489",
        "promotional_offer_id" : "b3c85265-8b67-4c2a-803e-3bc83a3a2abc",
        "is_trial_period" : "true",
        "original_transaction_id" : "310001393848489",
        "purchase_date" : "2023-04-07 13:08:20 Etc/GMT",
        "product_id" : "YearlyClub",
        "original_purchase_date_pst" : "2023-04-07 06:08:21 America/Los_Angeles",
        "in_app_ownership_type" : "PURCHASED",
        "original_purchase_date_ms" : "1680872901000",
        "web_order_line_item_id" : "310000648668187",
        "expires_date_ms" : "9983464900000",
        "purchase_date_pst" : "2023-04-07 06:08:20 America/Los_Angeles",
        "original_purchase_date" : "2023-04-07 13:08:21 Etc/GMT"
      }
    ],
    "download_id" : 502328165895471700,
    "adam_id" : 1552314173,
    "receipt_creation_date_pst" : "2023-04-07 06:42:48 America/Los_Angeles",
    "request_date" : "2023-04-07 13:42:48 Etc/GMT",
    "request_date_pst" : "2023-04-07 06:42:48 America/Los_Angeles",
    "version_external_identifier" : 854307650,
    "request_date_ms" : "1680874968555",
    "original_purchase_date_pst" : "2023-04-07 06:06:55 America/Los_Angeles",
    "application_version" : "23011012",
    "original_purchase_date_ms" : "1680872815000",
    "receipt_creation_date_ms" : "1680874968000",
    "original_application_version" : "23011012",
    "original_purchase_date" : "2023-04-07 13:06:55 Etc/GMT"
  },
  "status" : 0,
  "latest_receipt" : "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",
  "latest_receipt_info" : [
    {
      "expires_date" : "2286-05-13 16:41:40 Etc/GMT",
      "original_purchase_date_ms" : "1680872901000",
      "transaction_id" : "310001393848489",
      "purchase_date_pst" : "2023-04-07 06:08:20 America/Los_Angeles",
      "original_purchase_date" : "2023-04-07 13:08:21 Etc/GMT",
      "purchase_date_ms" : "1680872900000",
      "quantity" : "1",
      "purchase_date" : "2023-04-07 13:08:20 Etc/GMT",
      "product_id" : "YearlyClub",
      "expires_date_pst" : "2286-05-13 16:41:40 America/Los_Angeles",
      "offer_code_ref_name" : "支付宝",
      "original_transaction_id" : "310001393848489",
      "expires_date_ms" : "9983464900000",
      "subscription_group_identifier" : "20859991",
      "original_purchase_date_pst" : "2023-04-07 06:08:21 America/Los_Angeles",
      "in_app_ownership_type" : "PURCHASED",
      "web_order_line_item_id" : "310000648668187",
      "promotional_offer_id" : "b3c85265-8b67-4c2a-803e-3bc83a3a2abc",
      "is_in_intro_offer_period" : "false",
      "is_trial_period" : "true"
    }
  ],
  "pending_renewal_info" : [
    {
      "product_id" : "YearlyClub",
      "original_transaction_id" : "310001393848489",
      "auto_renew_product_id" : "YearlyClub",
      "auto_renew_status" : "0"
    }
  ]
}}

$done({body : JSON.stringify(obj)});


