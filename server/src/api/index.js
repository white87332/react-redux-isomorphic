import Result from '../class/result';

let result = new Result().getResult();

export default
{
    init: function()
    {
        return {
            initExec: false,
            routes: [
            {
                'method': 'get',
                'url': '/api'
            }]
        };
    },

    exec: function(req, res)
    {
        let body = req.body;
        let params = req.params;
        let query = req.query;
console.log("enter");
        result.result = 1;
        result.message = "message";
        result.data = [
        {
            "url": "http:\/\/www.isuncrowd.com\/%e8%8b%b9%e6%9e%9c%e5%85%ac%e5%8f%b8-10-%e4%ba%bf%e7%be%8e%e5%85%83%e6%8a%95%e8%b5%84%e6%bb%b4%e6%bb%b4%ef%bc%8c%e7%bd%95%e8%a7%81%e6%88%98%e7%95%a5%e6%8a%95%e8%b5%84%e4%b8%ba%e4%ba%86%e5%95%a5\/",
            "title": "\u82f9\u679c\u516c\u53f8 10 \u4ebf\u7f8e\u5143\u6295\u8d44\u6ef4\u6ef4\uff0c\u7f55\u89c1\u6218\u7565\u6295\u8d44\u4e3a\u4e86\u5565\uff1f",
            "date": "2016-05-16 15:20:47",
            "modified": "2016-05-16 15:20:47",
            "thumbnail": "http:\/\/www.isuncrowd.com\/wp-content\/uploads\/2016\/05\/135361210_14633536573121n-e1463383155378-150x150.jpg",
            "category": [
                "\u9633\u5149\u536b\u89c6-\u4f17\u65b0\u95fb"
            ],
            "fullThumbnail": "http:\/\/www.isuncrowd.com\/wp-content\/uploads\/2016\/05\/135361210_14633536573121n-e1463383155378.jpg"
        },
        {
            "url": "http:\/\/www.isuncrowd.com\/%e8%b7%a8%e5%a2%83%e7%94%b5%e5%95%86%e6%96%b0%e6%94%bf%e5%88%9a%e6%bb%a1%e6%9c%88%ef%bc%8c%e5%88%9b%e4%b8%9a%e5%85%ac%e5%8f%b8%e5%b7%b2%e7%bb%8f%e5%bc%80%e5%a7%8b%e5%90%83%e4%b8%8d%e6%b6%88%e4%ba%86\/",
            "title": "\u8de8\u5883\u7535\u5546\u65b0\u653f\u521a\u6ee1\u6708\uff0c\u521b\u4e1a\u516c\u53f8\u5df2\u7ecf\u5f00\u59cb\u5403\u4e0d\u6d88\u4e86",
            "date": "2016-05-13 12:03:28",
            "modified": "2016-05-13 12:19:40",
            "thumbnail": "http:\/\/www.isuncrowd.com\/wp-content\/uploads\/2016\/05\/CFP482753141_meitu_11-e1463112195524-150x150.jpg",
            "category": [
                "\u9633\u5149\u536b\u89c6-\u4f17\u65b0\u95fb"
            ],
            "fullThumbnail": "http:\/\/www.isuncrowd.com\/wp-content\/uploads\/2016\/05\/CFP482753141_meitu_11-e1463112195524.jpg"
        },
        {
            "url": "http:\/\/www.isuncrowd.com\/%e7%8e%b0%e4%bb%a3%e9%a3%8e%e6%a0%bc%e8%ae%be%e8%ae%a1%e7%9a%84%e5%8f%a4%e5%85%b8%e6%96%87%e5%ad%a6\/",
            "title": "\u73b0\u4ee3\u98ce\u683c\u8bbe\u8ba1\u7684\u53e4\u5178\u6587\u5b66",
            "date": "2016-05-12 14:46:45",
            "modified": "2016-05-12 15:34:00",
            "thumbnail": "http:\/\/www.isuncrowd.com\/wp-content\/uploads\/2016\/05\/photo-original-e1463035583967-150x150.jpg",
            "category": [
                "\u9633\u5149\u536b\u89c6-\u4f17\u7b79\u4e4b\u95e8"
            ],
            "fullThumbnail": "http:\/\/www.isuncrowd.com\/wp-content\/uploads\/2016\/05\/photo-original-e1463035583967.jpg"
        },
        {
            "url": "http:\/\/www.isuncrowd.com\/%e7%a4%be%e4%bc%9a%e9%81%93%e5%be%b7%e8%83%8c%e6%99%af%e4%b8%8b%e9%9a%90%e8%97%8f%e7%9a%84%e6%9a%b4%e5%8a%9b%e8%a1%8c%e4%b8%9a%ef%bc%8c%e7%a4%be%e4%ba%a4%e5%85%ac%e7%9b%8a%e4%bc%97%e7%ad%b9%e8%83%bd\/",
            "title": "\u793e\u4f1a\u9053\u5fb7\u80cc\u666f\u4e0b\u9690\u85cf\u7684\u66b4\u529b\u884c\u4e1a\uff0c\u793e\u4ea4\u516c\u76ca\u4f17\u7b79\u80fd\u4e0d\u80fd\u5f62\u6210\u89c4\u6a21\uff1f",
            "date": "2016-05-09 16:01:33",
            "modified": "2016-05-09 16:01:33",
            "thumbnail": "http:\/\/www.isuncrowd.com\/wp-content\/uploads\/2016\/05\/20150830091754-e1462780157736-150x150.png",
            "category": [
                "\u9633\u5149\u536b\u89c6-\u4f17\u65b0\u95fb"
            ],
            "fullThumbnail": "http:\/\/www.isuncrowd.com\/wp-content\/uploads\/2016\/05\/20150830091754-e1462780157736.png"
        },
        {
            "url": "http:\/\/www.isuncrowd.com\/%e7%94%b5%e5%95%86%e4%b8%ba%e4%bb%80%e4%b9%88%e4%bc%9a%e6%88%90%e4%b8%ba%e8%82%a1%e6%9d%83%e4%bc%97%e7%ad%b9%e5%8f%91%e5%b1%95%e6%9c%80%e5%bf%ab%e7%9a%84%e5%b9%b3%e5%8f%b0%ef%bc%9f\/",
            "title": "\u7535\u5546\u4e3a\u4ec0\u4e48\u4f1a\u6210\u4e3a\u80a1\u6743\u4f17\u7b79\u53d1\u5c55\u6700\u5feb\u7684\u5e73\u53f0\uff1f",
            "date": "2016-04-22 14:37:29",
            "modified": "2016-04-22 14:41:15",
            "thumbnail": "http:\/\/www.isuncrowd.com\/wp-content\/uploads\/2016\/04\/032d3fb13369ce703c35ee267a3280bd-1-e1461306833666-150x150.jpg",
            "category": [
                "\u9633\u5149\u536b\u89c6-\u4f17\u65b0\u95fb"
            ],
            "fullThumbnail": "http:\/\/www.isuncrowd.com\/wp-content\/uploads\/2016\/04\/032d3fb13369ce703c35ee267a3280bd-1-e1461306833666.jpg"
        },
        {
            "url": "http:\/\/www.isuncrowd.com\/oura%ef%bc%9a%e5%8f%af%e9%9a%8f%e6%97%b6%e8%af%bb%e5%8f%96%e4%bd%93%e5%be%81%e7%9a%84%e6%88%92%e6%8c%87\/",
            "title": "Oura\uff1a\u53ef\u968f\u65f6\u8bfb\u53d6\u4f53\u5f81\u7684\u6212\u6307",
            "date": "2016-04-20 11:05:19",
            "modified": "2016-04-20 11:05:19",
            "thumbnail": "http:\/\/www.isuncrowd.com\/wp-content\/uploads\/2016\/04\/b63d69c144d318afb1162d33da183816_original-1-150x150.jpg",
            "category": [
                "\u9633\u5149\u536b\u89c6-\u4f17\u7b79\u4e4b\u95e8"
            ],
            "fullThumbnail": "http:\/\/www.isuncrowd.com\/wp-content\/uploads\/2016\/04\/b63d69c144d318afb1162d33da183816_original-1.jpg"
        },
        {
            "url": "http:\/\/www.isuncrowd.com\/twine%ef%bc%9a%e8%ae%a9%e7%89%a9%e4%bd%93%e5%bc%80%e5%8f%a3%e8%af%b4%e8%af%9d\/",
            "title": "Twine\uff1a\u8ba9\u7269\u4f53\u5f00\u53e3\u8bf4\u8bdd",
            "date": "2016-04-13 11:45:38",
            "modified": "2016-04-13 11:50:38",
            "thumbnail": "http:\/\/www.isuncrowd.com\/wp-content\/uploads\/2016\/04\/twine-e1460519070884-150x150.jpg",
            "category": [
                "\u9633\u5149\u536b\u89c6-\u4f17\u7b79\u4e4b\u95e8"
            ],
            "fullThumbnail": "http:\/\/www.isuncrowd.com\/wp-content\/uploads\/2016\/04\/twine-e1460519070884.jpg"
        },
        {
            "url": "http:\/\/www.isuncrowd.com\/beam%ef%bc%9a%e8%a3%85%e5%9c%a8%e7%81%af%e5%ba%a7%e4%b8%8a%e7%9a%84%e6%99%ba%e8%83%bd%e6%8a%95%e5%bd%b1%e4%bb%aa\/",
            "title": "Beam\uff1a\u88c5\u5728\u706f\u5ea7\u4e0a\u7684\u667a\u80fd\u6295\u5f71\u4eea",
            "date": "2016-04-12 15:44:31",
            "modified": "2016-04-12 15:46:30",
            "thumbnail": "http:\/\/www.isuncrowd.com\/wp-content\/uploads\/2016\/04\/photo-original-e1460446999700-150x150.png",
            "category": [
                "\u9633\u5149\u536b\u89c6-\u4f17\u7b79\u4e4b\u95e8"
            ],
            "fullThumbnail": "http:\/\/www.isuncrowd.com\/wp-content\/uploads\/2016\/04\/photo-original-e1460446999700.png"
        },
        {
            "url": "http:\/\/www.isuncrowd.com\/bolo%ef%bc%9a%e4%bc%9a%e6%bb%9a%e5%8a%a8%e7%9a%84%e5%88%80\/",
            "title": "bolo\uff1a\u4f1a\u6eda\u52a8\u7684\u5200",
            "date": "2016-04-05 16:22:31",
            "modified": "2016-04-05 16:22:31",
            "thumbnail": "http:\/\/www.isuncrowd.com\/wp-content\/uploads\/2016\/04\/895cfb6a292d9f3d719ec3b20ec1524e_original-150x150.png",
            "category": [
                "\u9633\u5149\u536b\u89c6-\u4f17\u7b79\u4e4b\u95e8"
            ],
            "fullThumbnail": "http:\/\/www.isuncrowd.com\/wp-content\/uploads\/2016\/04\/895cfb6a292d9f3d719ec3b20ec1524e_original.png"
        },
        {
            "url": "http:\/\/www.isuncrowd.com\/quickey%ef%bc%9a%e8%83%bd%e6%89%93%e5%bc%80%e9%99%a4%e9%97%a8%e4%bb%a5%e5%a4%96%e5%85%b6%e4%bb%96%e4%b8%80%e5%88%87%e4%b8%9c%e8%a5%bf%e7%9a%84%e9%92%a5%e5%8c%99-%ef%bd%98\/",
            "title": "quickey\uff1a\u80fd\u6253\u5f00\u9664\u95e8\u4ee5\u5916\u5176\u4ed6\u4e00\u5207\u4e1c\u897f\u7684\u94a5\u5319 \uff38",
            "date": "2016-03-30 16:25:37",
            "modified": "2016-03-30 18:00:56",
            "thumbnail": "http:\/\/www.isuncrowd.com\/wp-content\/uploads\/2016\/03\/20140303151727-IMG_8149ds-e1459326504150-150x150.jpg",
            "category": [
                "\u9633\u5149\u536b\u89c6-\u4f17\u7b79\u4e4b\u95e8"
            ],
            "fullThumbnail": "http:\/\/www.isuncrowd.com\/wp-content\/uploads\/2016\/03\/20140303151727-IMG_8149ds-e1459326504150.jpg"
        },
        {
            "url": "http:\/\/www.isuncrowd.com\/ios%e5%a4%96%e7%bd%ae%e5%ad%98%e5%82%a8%e5%99%a8istick%ef%bc%9a%e8%bd%bb%e6%9d%be%e6%8b%93%e5%b1%95%e6%89%8b%e6%9c%ba%e5%ae%b9%e9%87%8f\/",
            "title": "iOS\u5916\u7f6e\u5b58\u50a8\u5668iStick\uff1a\u8f7b\u677e\u62d3\u5c55\u624b\u673a\u5bb9\u91cf",
            "date": "2016-03-21 17:30:24",
            "modified": "2016-03-21 17:31:06",
            "thumbnail": "http:\/\/www.isuncrowd.com\/wp-content\/uploads\/2016\/03\/photo-original-1-150x150.jpg",
            "category": [
                "\u9633\u5149\u536b\u89c6-\u4f17\u7b79\u4e4b\u95e8"
            ],
            "fullThumbnail": "http:\/\/www.isuncrowd.com\/wp-content\/uploads\/2016\/03\/photo-original-1.jpg"
        },
        {
            "url": "http:\/\/www.isuncrowd.com\/joan-cornella%e7%9a%84%e9%bb%91%e8%89%b2%e5%b9%bd%e9%bb%98%e5%8a%a8%e7%94%bb%e8%ae%a1%e5%88%92\/",
            "title": "Joan Cornella\u7684\u9ed1\u8272\u5e7d\u9ed8\u52a8\u753b\u8ba1\u5212",
            "date": "2016-03-16 11:59:28",
            "modified": "2016-03-16 12:02:10",
            "thumbnail": "http:\/\/www.isuncrowd.com\/wp-content\/uploads\/2016\/03\/photo-original-150x150.png",
            "category": [
                "\u9633\u5149\u536b\u89c6-\u4f17\u7b79\u4e4b\u95e8"
            ],
            "fullThumbnail": "http:\/\/www.isuncrowd.com\/wp-content\/uploads\/2016\/03\/photo-original.png"
        },
        {
            "url": "http:\/\/www.isuncrowd.com\/phree%e6%99%ba%e8%83%bd%e7%ac%94%ef%bc%9a%e6%97%a0%e9%9c%80%e6%8e%a5%e8%a7%a6%e5%b1%8f%e5%b9%95%ef%bc%8c%e8%b5%b0%e5%88%b0%e5%93%aa%e5%86%99%e5%88%b0%e5%93%aa\/",
            "title": "Phree\u667a\u80fd\u7b14\uff1a\u65e0\u9700\u63a5\u89e6\u5c4f\u5e55\uff0c\u8d70\u5230\u54ea\u5199\u5230\u54ea",
            "date": "2016-03-14 17:48:50",
            "modified": "2016-03-14 17:48:50",
            "thumbnail": "http:\/\/www.isuncrowd.com\/wp-content\/uploads\/2016\/03\/3afa24f4e6e796b76799132b1abe358a_original-e1457948914944-150x150.jpg",
            "category": [
                "\u9633\u5149\u536b\u89c6-\u4f17\u7b79\u4e4b\u95e8"
            ],
            "fullThumbnail": "http:\/\/www.isuncrowd.com\/wp-content\/uploads\/2016\/03\/3afa24f4e6e796b76799132b1abe358a_original-e1457948914944.jpg"
        },
        {
            "url": "http:\/\/www.isuncrowd.com\/onelid-%e9%80%82%e5%90%88%e4%b8%80%e5%88%87%e5%b0%ba%e5%af%b8%e7%9a%84%e9%94%85%e7%9b%96\/",
            "title": "ONELID \u9002\u5408\u4e00\u5207\u5c3a\u5bf8\u7684\u9505\u76d6",
            "date": "2016-03-11 12:26:08",
            "modified": "2016-03-11 12:30:54",
            "thumbnail": "http:\/\/www.isuncrowd.com\/wp-content\/uploads\/2016\/03\/una24gnh6aviti5ipyw9-e1457670336104-150x150.jpg",
            "category": [
                "\u9633\u5149\u536b\u89c6-\u4f17\u7b79\u4e4b\u95e8"
            ],
            "fullThumbnail": "http:\/\/www.isuncrowd.com\/wp-content\/uploads\/2016\/03\/una24gnh6aviti5ipyw9-e1457670336104.jpg"
        },
        {
            "url": "http:\/\/www.isuncrowd.com\/betterback%ef%bc%9a%e6%af%ab%e4%b8%8d%e8%b4%b9%e5%8a%9b%e5%9d%90%e5%88%b0%e5%ae%8c%e7%be%8e%e5%a7%bf%e5%8a%bf\/",
            "title": "Betterback\uff1a\u6beb\u4e0d\u8d39\u529b\u5750\u5230\u5b8c\u7f8e\u59ff\u52bf",
            "date": "2016-03-08 18:27:24",
            "modified": "2016-03-08 18:31:01",
            "thumbnail": "http:\/\/www.isuncrowd.com\/wp-content\/uploads\/2016\/03\/mnhj0qz4rwmi5gch7tfz-e1457432833612-150x150.jpg",
            "category": [
                "\u9633\u5149\u536b\u89c6-\u4f17\u7b79\u4e4b\u95e8"
            ],
            "fullThumbnail": "http:\/\/www.isuncrowd.com\/wp-content\/uploads\/2016\/03\/mnhj0qz4rwmi5gch7tfz-e1457432833612.jpg"
        },
        {
            "url": "http:\/\/www.isuncrowd.com\/%e9%98%b3%e5%85%89%e4%ba%91%e8%ae%a1%e5%88%92%ef%bc%9a%e5%82%a8%e5%ad%98%e7%a9%ba%e9%97%b4%e4%b8%8e%e5%85%b1%e4%ba%ab%e7%bb%8f%e6%b5%8e%e7%9a%84%e7%bb%93%e5%90%88\/",
            "title": "\u9633\u5149\u4e91\u8ba1\u5212\uff1a\u50a8\u5b58\u7a7a\u95f4\u4e0e\u5171\u4eab\u7ecf\u6d4e\u7684\u7ed3\u5408",
            "date": "2016-03-03 12:41:06",
            "modified": "2016-03-03 12:41:06",
            "thumbnail": "http:\/\/www.isuncrowd.com\/wp-content\/uploads\/2016\/03\/kpcab6vvp4oebob1baqs-e1456980047697-150x150.jpg",
            "category": [
                "\u9633\u5149\u536b\u89c6-\u4f17\u7b79\u4e4b\u95e8"
            ],
            "fullThumbnail": "http:\/\/www.isuncrowd.com\/wp-content\/uploads\/2016\/03\/kpcab6vvp4oebob1baqs-e1456980047697.jpg"
        },
        {
            "url": "http:\/\/www.isuncrowd.com\/eyebrow-wax-applicator-for-eye-protection-main-video\/",
            "title": "Eyebrow Wax Applicator For Eye Protection",
            "date": "2015-11-26 23:27:01",
            "modified": "2015-11-27 23:48:58",
            "thumbnail": "http:\/\/www.isuncrowd.com\/wp-content\/uploads\/2015\/11\/20151126032700-photo-original-150x150.jpg",
            "category": [
                "Kickstarter\u89c6\u9891"
            ],
            "fullThumbnail": "http:\/\/www.isuncrowd.com\/wp-content\/uploads\/2015\/11\/20151126032700-photo-original.jpg"
        },
        {
            "url": "http:\/\/www.isuncrowd.com\/kangol-504-bring-jobs-to-america-with-bollman-hat-main-video\/",
            "title": "Kangol 504 Bring Jobs To America With Bollman Hat",
            "date": "2015-11-24 23:26:26",
            "modified": "2015-11-26 15:26:57",
            "thumbnail": "http:\/\/www.isuncrowd.com\/wp-content\/uploads\/2015\/11\/20151126032624-photo-original-150x150.jpg",
            "category": [
                "Kickstarter\u89c6\u9891"
            ],
            "fullThumbnail": "http:\/\/www.isuncrowd.com\/wp-content\/uploads\/2015\/11\/20151126032624-photo-original.jpg"
        },
        {
            "url": "http:\/\/www.isuncrowd.com\/send-eggsploitation-to-italy-main-video\/",
            "title": "Send Eggsploitation To Italy",
            "date": "2015-11-24 23:26:18",
            "modified": "2015-11-26 15:26:50",
            "thumbnail": "http:\/\/www.isuncrowd.com\/wp-content\/uploads\/2015\/11\/20151126032617-photo-original-150x150.jpg",
            "category": [
                "Kickstarter\u89c6\u9891"
            ],
            "fullThumbnail": "http:\/\/www.isuncrowd.com\/wp-content\/uploads\/2015\/11\/20151126032617-photo-original.jpg"
        },
        {
            "url": "http:\/\/www.isuncrowd.com\/comedie-musicale-la-belle-et-la-bete-phoenix-music-main-video\/",
            "title": "Comedie Musicale La Belle Et La Bete Phoenix Music",
            "date": "2015-11-24 23:26:11",
            "modified": "2015-11-26 15:26:43",
            "thumbnail": "http:\/\/www.isuncrowd.com\/wp-content\/uploads\/2015\/11\/20151126032610-photo-original-150x150.png",
            "category": [
                "Kickstarter\u89c6\u9891"
            ],
            "fullThumbnail": "http:\/\/www.isuncrowd.com\/wp-content\/uploads\/2015\/11\/20151126032610-photo-original.png"
        }];
        res.json(result);
    }
};
