/*************************************

项目名称：Felo实时翻译
下载地址：https://t.cn/A6pA5Uiu
更新日期：2023-12-06
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/translator\.felo\.me\/api\/user\/plan url script-response-body https://raw.githubusercontent.com/Shjingit/Qx/refs/heads/main/felo.js

[mitm]
hostname = translator.felo.me

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023 = {
  
  "status" : 200,
  "data" : {
    "type" : "FREE",
    "user_product_total" : [
      {
        "freeze" : 0,
        "total_limit" : "UNLIMITED",
        "deduction_type" : "DURATIONS",
        "user_id" : "1732233102102020097",
        "product_item_type" : "TRANSLATOR_BENEFIT_FREE",
        "total" : 3600,
        "balance" : 3600,
        "user_product_total_id" : "1732669700107669505"
      },
      {
        "freeze" : 0,
        "total_limit" : "LIMITED",
        "deduction_type" : "DURATIONS",
        "user_id" : "1732233102102020097",
        "product_item_type" : "TRANSLATOR_DURATIONS",
        "total" : 1800,
        "balance" : 1761,
        "user_product_total_id" : "1732669700493545473"
      }
    ],
    "now" : "2026-07-05T08:56:18+0000"
  },
  "code" : "OK"
}



$done({body : JSON.stringify(chxm1023)});
