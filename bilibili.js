/*************************************************
@@Zoo
b站解锁大会员番剧影视
日期:2022.09.22
[rewrite_local]
^http[s]:\/\/(.*.bilibili.com) url script-request-header https://raw.githubusercontent.com/Crazy-Z7/Scrip/main/bilibili.js
hostname = *.bilibili.com
*********************************************/
var bilibili = $request.headers;
bilibili['Cookie'] = 'buvid3=B7864063-8D96-4968-9F17-C91DDAF29942167643infoc; buvid4=22D75591-C179-3EA1-3DE6-1F0F0B23C57244585-122091711-bK5ysmawZ6WVOIRNQd4p+w%3D%3D; buvid_fp=c7aa5b9c4475052af8573cb9b19d86d9; _uuid=1A7E6FF8-82CB-10487-FB1F-8FB417A39E51025728infoc; Buvid=Y74BCC711EE18E454972AAFCB5B9E712BBB6; SESSDATA=0a5acc41%2C1679315855%2C18123e91; fingerprint3=36c7775f2ad671e34d105da0e9f1fda3; DedeUserID=1808903543; DedeUserID__ckMd5=b18535736bd71c39; bili_jct=f6c456ea23ddfed90c65d0cf4f209afc; sid=h0bcbg4a';bilibili['User-Agent'] = 'bili-universal/68700100 os/ios model/iPhone 13 Pro Max mobi_app/iphone osVer/15.6.1 network/1';bilibili['X-bili-device-bin'] = 'CAEQxI/hIBokWTc0QkNDNzExRUUxOEU0NTQ5NzJBQUZDQjVCOUU3MTJCQkI2IgZpcGhvbmUqA2lvczIFcGhvbmU6BWFwcGxlQgVBcHBsZUoRaVBob25lIDEzIFBybyBNYXhSBjE1LjYuMWoGNi44Ny4wckAyRDhBQjNBNzZDNzkzMjhCOEEwMTE3NjhFMTdBODhDRTIwMjExMjEyMTcwMTA3RjA4RDU1MEFFRTUyNjVBRDIweIT13aWuMA==';bilibili['Authorization'] = 'identify_v1 b0495422d995f46a44fd8f15ebd43b91'
    headers: bilibili
});
