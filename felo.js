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
    "type" : "PRO",
    "name" : "shjin",
    "user_product_total" : [
      {
       "name" : "shjin",
        "freeze" : 0,
        "total_limit" : "UNLIMITED",
        "deduction_type" : "DURATIONS",
        "user_id" : "a5e8d2718f63c6c517a6a4007888721d",
        "product_item_type" : "TRANSLATOR_DURATIONS",
        "total" : 3600,
        "balance" : 1800,
        "user_product_total_id" : "2067750472774602754"
      }
    ],
    "now" : "2026-07-05T05:33:11+0000"
  },
  "code" : "OK"
};

$done({body : JSON.stringify(chxm1023)});
