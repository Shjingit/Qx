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
    "active_time" : "2026-06-05T16:41:31+0000",
    "expire_time" : "2099-09-09T09:09:09+0000",
    "now" : "2026-06-05T16:42:06+0000",
    "user_product_total" : [
      {
        "freeze" : 0,
        "total_limit" : "LIMITED",
        "deduction_type" : "DURATIONS",
       /* "user_id" : "1777777777777777777",*/
        "product_item_type" : "TRANSLATOR_DURATIONS",
        "total" : 1800,
        "balance" : 1800
       /* "user_product_total_id" : "1732077752393142273"*/
      }
    ],
    "type" : "FREE"
  },
  "code" : "OK"
};

$done({body : JSON.stringify(chxm1023)});
