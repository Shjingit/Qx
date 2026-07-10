/*************************************

项目名称：Felo实时翻译
下载地址：https://t.cn/A6pA5Uiu
更新日期：2023-12-06
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https://api.waxueshe.com/api/v2/users/my url script-response-body https://raw.githubusercontent.com/Shjingit/Qx/refs/heads/main/felo.js

[mitm]
hostname = api.waxueshe.com

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023 ={
  "msg" : "ok",
  "data" : {
    "mobile_tip" : 0,
    "is_get_free" : 1,
    "ise_use_total" : 10,
    /*"free_time" : "0秒",
    "experience_time" : 5742,*/
    "user_id" : 272315,
    "invitation_code" : "OVDxoMaX",
    "head_img" : "",
    "wechat_official_account" : "oHQe87VGKLHt7LomLfDwUteiBwm0",
    "vip_type" : 5,
    "remain_time" : "2026-07-30 09:09:09",
    "nickname" : "Shjin",
    "phone_tip" : 1,
    "is_collect_recording" : 1,
    "signature" : "这个学员很神秘~还没有留下签名...",
    /*"vip_info" : {

    },
    "promotion_record" : {

    },*/
    "email" : "",
    "has_parent" : true,
    "wechat_id" : "",
    "pc_tip" : 0,
    "is_get_fee_tip" : 2,
    "phone" : "15170266963",
    "created_at" : 1783335176,
    "diy_code" : "",
    "ise_use_today_total" : 0,
    "superior_wechat_id" : "h9867620"
  },
  "code" : 0
}




$done({body : JSON.stringify(chxm1023)});
