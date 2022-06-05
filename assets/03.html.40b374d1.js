import{_ as i,r as s,o,a as p,b as a,d as r,F as d,e,c as n}from"./app.320d2bef.js";const l={},c=a("h1",{id:"_03-http\u8BF7\u6C42\u6D41\u7A0B-\u4E3A\u4EC0\u4E48\u5F88\u591A\u7AD9\u70B9\u7B2C\u4E8C\u6B21\u6253\u5F00\u901F\u5EA6\u4F1A\u5F88\u5FEB",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_03-http\u8BF7\u6C42\u6D41\u7A0B-\u4E3A\u4EC0\u4E48\u5F88\u591A\u7AD9\u70B9\u7B2C\u4E8C\u6B21\u6253\u5F00\u901F\u5EA6\u4F1A\u5F88\u5FEB","aria-hidden":"true"},"#"),e(" 03 | HTTP\u8BF7\u6C42\u6D41\u7A0B\uFF1A\u4E3A\u4EC0\u4E48\u5F88\u591A\u7AD9\u70B9\u7B2C\u4E8C\u6B21\u6253\u5F00\u901F\u5EA6\u4F1A\u5F88\u5FEB\uFF1F")],-1),g=e("\u5728"),h={href:"/guide/01",target:"_blank",rel:"noopener noreferrer"},T=e("\u4E0A\u4E00\u7BC7\u6587\u7AE0"),u=e("\u4E2D\u6211\u4ECB\u7ECD\u4E86 TCP \u534F\u8BAE\u662F\u5982\u4F55\u4FDD\u8BC1\u6570\u636E\u5B8C\u6574\u4F20\u8F93\u7684\uFF0C\u76F8\u4FE1\u4F60\u8FD8\u8BB0\u5F97\uFF0C\u4E00\u4E2A TCP \u8FDE\u63A5\u8FC7\u7A0B\u5305\u62EC\u4E86\u5EFA\u7ACB\u8FDE\u63A5\u3001\u4F20\u8F93\u6570\u636E\u548C\u65AD\u5F00\u8FDE\u63A5\u4E09\u4E2A\u9636\u6BB5\u3002"),b=n(`<p>\u800C HTTP \u534F\u8BAE\uFF0C\u6B63\u662F\u5EFA\u7ACB\u5728 TCP \u8FDE\u63A5\u57FA\u7840\u4E4B\u4E0A\u7684\u3002<strong>HTTP \u662F\u4E00\u79CD\u5141\u8BB8\u6D4F\u89C8\u5668\u5411\u670D\u52A1\u5668\u83B7\u53D6\u8D44\u6E90\u7684\u534F\u8BAE\uFF0C\u662F Web \u7684\u57FA\u7840</strong>\uFF0C\u901A\u5E38\u7531\u6D4F\u89C8\u5668\u53D1\u8D77\u8BF7\u6C42\uFF0C\u7528\u6765\u83B7\u53D6\u4E0D\u540C\u7C7B\u578B\u7684\u6587\u4EF6\uFF0C\u4F8B\u5982 HTML \u6587\u4EF6\u3001CSS \u6587\u4EF6\u3001JavaScript \u6587\u4EF6\u3001\u56FE\u7247\u3001\u89C6\u9891\u7B49\u3002\u6B64\u5916\uFF0C<strong>HTTP \u4E5F\u662F\u6D4F\u89C8\u5668\u4F7F\u7528\u6700\u5E7F\u7684\u534F\u8BAE</strong>\uFF0C\u6240\u4EE5\u8981\u60F3\u5B66\u597D\u6D4F\u89C8\u5668\uFF0C\u5C31\u8981\u5148\u6DF1\u5165\u4E86\u89E3 HTTP\u3002</p><p>\u4E0D\u77E5\u9053\u4F60\u662F\u5426\u6709\u8FC7\u4E0B\u9762\u8FD9\u4E9B\u7591\u95EE\uFF1A</p><ol><li>\u4E3A\u4EC0\u4E48\u901A\u5E38\u5728\u7B2C\u4E00\u6B21\u8BBF\u95EE\u4E00\u4E2A\u7AD9\u70B9\u65F6\uFF0C\u6253\u5F00\u901F\u5EA6\u5F88\u6162\uFF0C\u5F53\u518D\u6B21\u8BBF\u95EE\u8FD9\u4E2A\u7AD9\u70B9\u65F6\uFF0C\u901F\u5EA6\u5C31\u5F88\u5FEB\u4E86\uFF1F</li><li>\u5F53\u767B\u5F55\u8FC7\u4E00\u4E2A\u7F51\u7AD9\u4E4B\u540E\uFF0C\u4E0B\u6B21\u518D\u8BBF\u95EE\u8BE5\u7AD9\u70B9\uFF0C\u5C31\u5DF2\u7ECF\u5904\u4E8E\u767B\u5F55\u72B6\u6001\u4E86\uFF0C\u8FD9\u662F\u600E\u4E48\u505A\u5230\u7684\u5462\uFF1F</li></ol><p>\u8FD9\u4E00\u5207\u7684\u79D8\u5BC6\u90FD\u9690\u85CF\u5728 HTTP \u7684\u8BF7\u6C42\u8FC7\u7A0B\u4E2D\u3002\u6240\u4EE5\uFF0C\u5728\u4ECA\u5929\u8FD9\u7BC7\u6587\u7AE0\u4E2D\uFF0C\u6211\u5C06\u901A\u8FC7\u5206\u6790\u4E00\u4E2A HTTP \u8BF7\u6C42\u8FC7\u7A0B\u4E2D\u6BCF\u4E00\u6B65\u7684\u72B6\u6001\u6765\u5E26\u4F60\u4E86\u89E3\u5B8C\u6574\u7684 HTTP \u8BF7\u6C42\u8FC7\u7A0B\uFF0C\u5E0C\u671B\u4F60\u770B\u5B8C\u8FD9\u7BC7\u6587\u7AE0\u540E\uFF0C\u80FD\u591F\u5BF9 HTTP \u534F\u8BAE\u6709\u4E2A\u5168\u65B0\u7684\u8BA4\u8BC6\u3002</p><h2 id="\u6D4F\u89C8\u5668\u7AEF\u53D1\u8D77-http-\u8BF7\u6C42\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u5668\u7AEF\u53D1\u8D77-http-\u8BF7\u6C42\u6D41\u7A0B" aria-hidden="true">#</a> \u6D4F\u89C8\u5668\u7AEF\u53D1\u8D77 HTTP \u8BF7\u6C42\u6D41\u7A0B</h2><p>\u5982\u679C\u4F60\u5728\u6D4F\u89C8\u5668\u5730\u5740\u680F\u91CC\u952E\u5165\u6781\u5BA2\u65F6\u95F4\u7F51\u7AD9\u7684\u5730\u5740\uFF1Ahttp://time.geekbang.org/index.html\uFF0C \u90A3\u4E48\u63A5\u4E0B\u6765\uFF0C\u6D4F\u89C8\u5668\u4F1A\u5B8C\u6210\u54EA\u4E9B\u52A8\u4F5C\u5462\uFF1F\u4E0B\u9762\u6211\u4EEC\u5C31\u4E00\u6B65\u4E00\u6B65\u8BE6\u7EC6\u201C\u8FFD\u8E2A\u201D\u4E0B\u3002</p><h3 id="_1-\u6784\u5EFA\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#_1-\u6784\u5EFA\u8BF7\u6C42" aria-hidden="true">#</a> 1. \u6784\u5EFA\u8BF7\u6C42</h3><p>\u9996\u5148\uFF0C\u6D4F\u89C8\u5668\u6784\u5EFA\u8BF7\u6C42\u884C\u4FE1\u606F\uFF08\u5982\u4E0B\u6240\u793A\uFF09\uFF0C\u6784\u5EFA\u597D\u540E\uFF0C\u6D4F\u89C8\u5668\u51C6\u5907\u53D1\u8D77\u7F51\u7EDC\u8BF7\u6C42\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GET /index.html HTTP1.1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="_2-\u67E5\u627E\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#_2-\u67E5\u627E\u7F13\u5B58" aria-hidden="true">#</a> 2. \u67E5\u627E\u7F13\u5B58</h3><p>\u5728\u771F\u6B63\u53D1\u8D77\u7F51\u7EDC\u8BF7\u6C42\u4E4B\u524D\uFF0C\u6D4F\u89C8\u5668\u4F1A\u5148\u5728\u6D4F\u89C8\u5668\u7F13\u5B58\u4E2D\u67E5\u8BE2\u662F\u5426\u6709\u8981\u8BF7\u6C42\u7684\u6587\u4EF6\u3002\u5176\u4E2D\uFF0C<strong>\u6D4F\u89C8\u5668\u7F13\u5B58\u662F\u4E00\u79CD\u5728\u672C\u5730\u4FDD\u5B58\u8D44\u6E90\u526F\u672C\uFF0C\u4EE5\u4F9B\u4E0B\u6B21\u8BF7\u6C42\u65F6\u76F4\u63A5\u4F7F\u7528\u7684\u6280\u672F\u3002</strong></p><p>\u5F53\u6D4F\u89C8\u5668\u53D1\u73B0\u8BF7\u6C42\u7684\u8D44\u6E90\u5DF2\u7ECF\u5728\u6D4F\u89C8\u5668\u7F13\u5B58\u4E2D\u5B58\u6709\u526F\u672C\uFF0C\u5B83\u4F1A\u62E6\u622A\u8BF7\u6C42\uFF0C\u8FD4\u56DE\u8BE5\u8D44\u6E90\u7684\u526F\u672C\uFF0C\u5E76\u76F4\u63A5\u7ED3\u675F\u8BF7\u6C42\uFF0C\u800C\u4E0D\u4F1A\u518D\u53BB\u6E90\u670D\u52A1\u5668\u91CD\u65B0\u4E0B\u8F7D\u3002\u8FD9\u6837\u505A\u7684\u597D\u5904\u6709\uFF1A</p><ul><li>\u7F13\u89E3\u670D\u52A1\u5668\u7AEF\u538B\u529B\uFF0C\u63D0\u5347\u6027\u80FD\uFF08\u83B7\u53D6\u8D44\u6E90\u7684\u8017\u65F6\u66F4\u77ED\u4E86\uFF09\uFF1B</li><li>\u5BF9\u4E8E\u7F51\u7AD9\u6765\u8BF4\uFF0C\u7F13\u5B58\u662F\u5B9E\u73B0\u5FEB\u901F\u8D44\u6E90\u52A0\u8F7D\u7684\u91CD\u8981\u7EC4\u6210\u90E8\u5206\u3002</li></ul><p>\u5F53\u7136\uFF0C\u5982\u679C\u7F13\u5B58\u67E5\u627E\u5931\u8D25\uFF0C\u5C31\u4F1A\u8FDB\u5165\u7F51\u7EDC\u8BF7\u6C42\u8FC7\u7A0B\u4E86\u3002</p><h3 id="_3-\u51C6\u5907-ip-\u5730\u5740\u548C\u7AEF\u53E3" tabindex="-1"><a class="header-anchor" href="#_3-\u51C6\u5907-ip-\u5730\u5740\u548C\u7AEF\u53E3" aria-hidden="true">#</a> 3. \u51C6\u5907 IP \u5730\u5740\u548C\u7AEF\u53E3</h3><p>\u4E0D\u8FC7\uFF0C\u5148\u4E0D\u6025\uFF0C\u5728\u4E86\u89E3\u7F51\u7EDC\u8BF7\u6C42\u4E4B\u524D\uFF0C\u6211\u4EEC\u9700\u8981\u5148\u770B\u770B HTTP \u548C TCP \u7684\u5173\u7CFB\u3002\u56E0\u4E3A\u6D4F\u89C8\u5668\u4F7F\u7528 <strong>HTTP \u534F\u8BAE\u4F5C\u4E3A\u5E94\u7528\u5C42\u534F\u8BAE</strong>\uFF0C\u7528\u6765\u5C01\u88C5\u8BF7\u6C42\u7684\u6587\u672C\u4FE1\u606F\uFF1B\u5E76\u4F7F\u7528 <strong>TCP/IP \u4F5C\u4F20\u8F93\u5C42\u534F\u8BAE</strong>\u5C06\u5B83\u53D1\u5230\u7F51\u7EDC\u4E0A\uFF0C\u6240\u4EE5\u5728 HTTP \u5DE5\u4F5C\u5F00\u59CB\u4E4B\u524D\uFF0C\u6D4F\u89C8\u5668\u9700\u8981\u901A\u8FC7 TCP \u4E0E\u670D\u52A1\u5668\u5EFA\u7ACB\u8FDE\u63A5\u3002\u4E5F\u5C31\u662F\u8BF4 <strong>HTTP \u7684\u5185\u5BB9\u662F\u901A\u8FC7 TCP \u7684\u4F20\u8F93\u6570\u636E\u9636\u6BB5\u6765\u5B9E\u73B0\u7684</strong>\uFF0C\u4F60\u53EF\u4EE5\u7ED3\u5408\u4E0B\u56FE\u66F4\u597D\u5730\u7406\u89E3\u8FD9\u4E8C\u8005\u7684\u5173\u7CFB\u3002</p><p><img src="https://static001.geekbang.org/resource/image/12/80/1277f342174b23f9442d3b27016d7980.png" alt="img"></p><p>\u90A3\u63A5\u4E0B\u6765\u4F60\u53EF\u4EE5\u601D\u8003\u8FD9\u4E48\u201C\u4E00\u8FDE\u4E32\u201D\u95EE\u9898\uFF1A</p><ul><li>HTTP \u7F51\u7EDC\u8BF7\u6C42\u7684\u7B2C\u4E00\u6B65\u662F\u505A\u4EC0\u4E48\u5462\uFF1F\u7ED3\u5408\u4E0A\u56FE\u770B\uFF0C\u662F\u548C\u670D\u52A1\u5668\u5EFA\u7ACB TCP \u8FDE\u63A5\u3002</li><li>\u90A3\u5EFA\u7ACB\u8FDE\u63A5\u7684\u4FE1\u606F\u90FD\u6709\u4E86\u5417\uFF1F\u4E0A\u4E00\u7BC7\u6587\u7AE0\u4E2D\uFF0C\u6211\u4EEC\u8BB2\u5230\u5EFA\u7ACB TCP \u8FDE\u63A5\u7684\u7B2C\u4E00\u6B65\u5C31\u662F\u9700\u8981\u51C6\u5907 IP \u5730\u5740\u548C\u7AEF\u53E3\u53F7\u3002</li><li>\u90A3\u600E\u4E48\u83B7\u53D6 IP \u5730\u5740\u548C\u7AEF\u53E3\u53F7\u5462\uFF1F\u8FD9\u5F97\u770B\u770B\u6211\u4EEC\u73B0\u5728\u6709\u4EC0\u4E48\uFF0C\u6211\u4EEC\u6709\u4E00\u4E2A URL \u5730\u5740\uFF0C\u90A3\u4E48\u662F\u5426\u53EF\u4EE5\u5229\u7528 URL \u5730\u5740\u6765\u83B7\u53D6 IP \u548C\u7AEF\u53E3\u4FE1\u606F\u5462\uFF1F</li></ul><p>\u5728\u4E0A\u4E00\u7BC7\u6587\u7AE0\u4E2D\uFF0C\u6211\u4EEC\u4ECB\u7ECD\u8FC7\u6570\u636E\u5305\u90FD\u662F\u901A\u8FC7 IP \u5730\u5740\u4F20\u8F93\u7ED9\u63A5\u6536\u65B9\u7684\u3002\u7531\u4E8E IP \u5730\u5740\u662F\u6570\u5B57\u6807\u8BC6\uFF0C\u6BD4\u5982\u6781\u5BA2\u65F6\u95F4\u7F51\u7AD9\u7684 IP \u662F 39.106.233.176, \u96BE\u4EE5\u8BB0\u5FC6\uFF0C\u4F46\u4F7F\u7528\u6781\u5BA2\u65F6\u95F4\u7684\u57DF\u540D\uFF08time.geekbang.org\uFF09\u5C31\u597D\u8BB0\u591A\u4E86\uFF0C\u6240\u4EE5\u57FA\u4E8E\u8FD9\u4E2A\u9700\u6C42\u53C8\u51FA\u73B0\u4E86\u4E00\u4E2A\u670D\u52A1\uFF0C\u8D1F\u8D23\u628A\u57DF\u540D\u548C IP \u5730\u5740\u505A\u4E00\u4E00\u6620\u5C04\u5173\u7CFB\u3002\u8FD9\u5957\u57DF\u540D\u6620\u5C04\u4E3A IP \u7684\u7CFB\u7EDF\u5C31\u53EB\u505A\u201C<strong>\u57DF\u540D\u7CFB\u7EDF</strong>\u201D\uFF0C\u7B80\u79F0 <strong>DNS</strong>\uFF08Domain Name System\uFF09\u3002</p><p>\u6240\u4EE5\uFF0C\u8FD9\u6837\u4E00\u8DEF\u63A8\u5BFC\u4E0B\u6765\uFF0C\u4F60\u4F1A\u53D1\u73B0\u5728\u7B2C\u4E00\u6B65\u6D4F\u89C8\u5668\u4F1A\u8BF7\u6C42 DNS \u8FD4\u56DE\u57DF\u540D\u5BF9\u5E94\u7684 IP\u3002\u5F53\u7136\u6D4F\u89C8\u5668\u8FD8\u63D0\u4F9B\u4E86 DNS \u6570\u636E\u7F13\u5B58\u670D\u52A1\uFF0C\u5982\u679C\u67D0\u4E2A\u57DF\u540D\u5DF2\u7ECF\u89E3\u6790\u8FC7\u4E86\uFF0C\u90A3\u4E48\u6D4F\u89C8\u5668\u4F1A\u7F13\u5B58\u89E3\u6790\u7684\u7ED3\u679C\uFF0C\u4EE5\u4F9B\u4E0B\u6B21\u67E5\u8BE2\u65F6\u76F4\u63A5\u4F7F\u7528\uFF0C\u8FD9\u6837\u4E5F\u4F1A\u51CF\u5C11\u4E00\u6B21\u7F51\u7EDC\u8BF7\u6C42\u3002</p><p>\u62FF\u5230 IP \u4E4B\u540E\uFF0C\u63A5\u4E0B\u6765\u5C31\u9700\u8981\u83B7\u53D6\u7AEF\u53E3\u53F7\u4E86\u3002\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C URL \u6CA1\u6709\u7279\u522B\u6307\u660E\u7AEF\u53E3\u53F7\uFF0C\u90A3\u4E48 HTTP \u534F\u8BAE\u9ED8\u8BA4\u662F 80 \u7AEF\u53E3\u3002</p><h3 id="_4-\u7B49\u5F85-tcp-\u961F\u5217" tabindex="-1"><a class="header-anchor" href="#_4-\u7B49\u5F85-tcp-\u961F\u5217" aria-hidden="true">#</a> 4. \u7B49\u5F85 TCP \u961F\u5217</h3><p>\u73B0\u5728\u5DF2\u7ECF\u628A\u7AEF\u53E3\u548C IP \u5730\u5740\u90FD\u51C6\u5907\u597D\u4E86\uFF0C\u90A3\u4E48\u4E0B\u4E00\u6B65\u662F\u4E0D\u662F\u53EF\u4EE5\u5EFA\u7ACB TCP \u8FDE\u63A5\u4E86\u5462\uFF1F</p><p>\u7B54\u6848\u4F9D\u7136\u662F\u201C\u4E0D\u884C\u201D\u3002Chrome \u6709\u4E2A\u673A\u5236\uFF0C\u540C\u4E00\u4E2A\u57DF\u540D\u540C\u65F6\u6700\u591A\u53EA\u80FD\u5EFA\u7ACB 6 \u4E2A TCP \u8FDE\u63A5\uFF0C\u5982\u679C\u5728\u540C\u4E00\u4E2A\u57DF\u540D\u4E0B\u540C\u65F6\u6709 10 \u4E2A\u8BF7\u6C42\u53D1\u751F\uFF0C\u90A3\u4E48\u5176\u4E2D 4 \u4E2A\u8BF7\u6C42\u4F1A\u8FDB\u5165\u6392\u961F\u7B49\u5F85\u72B6\u6001\uFF0C\u76F4\u81F3\u8FDB\u884C\u4E2D\u7684\u8BF7\u6C42\u5B8C\u6210\u3002</p><p>\u5F53\u7136\uFF0C\u5982\u679C\u5F53\u524D\u8BF7\u6C42\u6570\u91CF\u5C11\u4E8E 6\uFF0C\u4F1A\u76F4\u63A5\u8FDB\u5165\u4E0B\u4E00\u6B65\uFF0C\u5EFA\u7ACB TCP \u8FDE\u63A5\u3002</p><h3 id="_5-\u5EFA\u7ACB-tcp-\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#_5-\u5EFA\u7ACB-tcp-\u8FDE\u63A5" aria-hidden="true">#</a> 5. \u5EFA\u7ACB TCP \u8FDE\u63A5</h3><p>\u6392\u961F\u7B49\u5F85\u7ED3\u675F\u4E4B\u540E\uFF0C\u7EC8\u4E8E\u53EF\u4EE5\u5FEB\u4E50\u5730\u548C\u670D\u52A1\u5668\u63E1\u624B\u4E86\uFF0C\u5728 HTTP \u5DE5\u4F5C\u5F00\u59CB\u4E4B\u524D\uFF0C\u6D4F\u89C8\u5668\u901A\u8FC7 TCP \u4E0E\u670D\u52A1\u5668\u5EFA\u7ACB\u8FDE\u63A5\u3002\u800C TCP \u7684\u5DE5\u4F5C\u65B9\u5F0F\uFF0C\u6211\u5728\u4E0A\u4E00\u7BC7\u6587\u7AE0\u4E2D\u5DF2\u7ECF\u505A\u8FC7\u8BE6\u7EC6\u4ECB\u7ECD\u4E86\uFF0C\u5982\u679C\u6709\u5FC5\u8981\uFF0C\u4F60\u53EF\u4EE5\u81EA\u884C\u56DE\u987E\u4E0B\uFF0C\u8FD9\u91CC\u6211\u5C31\u4E0D\u518D\u91CD\u590D\u8BB2\u8FF0\u4E86\u3002</p><h3 id="_6-\u53D1\u9001-http-\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#_6-\u53D1\u9001-http-\u8BF7\u6C42" aria-hidden="true">#</a> 6. \u53D1\u9001 HTTP \u8BF7\u6C42</h3><p>\u4E00\u65E6\u5EFA\u7ACB\u4E86 TCP \u8FDE\u63A5\uFF0C\u6D4F\u89C8\u5668\u5C31\u53EF\u4EE5\u548C\u670D\u52A1\u5668\u8FDB\u884C\u901A\u4FE1\u4E86\u3002\u800C HTTP \u4E2D\u7684\u6570\u636E\u6B63\u662F\u5728\u8FD9\u4E2A\u901A\u4FE1\u8FC7\u7A0B\u4E2D\u4F20\u8F93\u7684\u3002</p><p>\u4F60\u53EF\u4EE5\u7ED3\u5408\u4E0B\u56FE\u6765\u7406\u89E3\uFF0C\u6D4F\u89C8\u5668\u662F\u5982\u4F55\u53D1\u9001\u8BF7\u6C42\u4FE1\u606F\u7ED9\u670D\u52A1\u5668\u7684\u3002</p><p><img src="https://static001.geekbang.org/resource/image/b8/d7/b8993c73f7b60feb9b8bd147545c47d7.png" alt="img"></p><p>\u9996\u5148\u6D4F\u89C8\u5668\u4F1A\u5411\u670D\u52A1\u5668\u53D1\u9001<strong>\u8BF7\u6C42\u884C</strong>\uFF0C\u5B83\u5305\u62EC\u4E86<strong>\u8BF7\u6C42\u65B9\u6CD5\u3001\u8BF7\u6C42 URI\uFF08Uniform Resource Identifier\uFF09\u548C HTTP \u7248\u672C\u534F\u8BAE\u3002</strong></p><p>\u53D1\u9001\u8BF7\u6C42\u884C\uFF0C\u5C31\u662F\u544A\u8BC9\u670D\u52A1\u5668\u6D4F\u89C8\u5668\u9700\u8981\u4EC0\u4E48\u8D44\u6E90\uFF0C\u6700\u5E38\u7528\u7684\u8BF7\u6C42\u65B9\u6CD5\u662F <strong>Get</strong>\u3002\u6BD4\u5982\uFF0C\u76F4\u63A5\u5728\u6D4F\u89C8\u5668\u5730\u5740\u680F\u952E\u5165\u6781\u5BA2\u65F6\u95F4\u7684\u57DF\u540D\uFF08time.geekbang.org\uFF09\uFF0C\u8FD9\u5C31\u662F\u544A\u8BC9\u670D\u52A1\u5668\u8981 Get \u5B83\u7684\u9996\u9875\u8D44\u6E90\u3002</p><p>\u53E6\u5916\u4E00\u4E2A\u5E38\u7528\u7684\u8BF7\u6C42\u65B9\u6CD5\u662F <strong>POST</strong>\uFF0C\u5B83\u7528\u4E8E\u53D1\u9001\u4E00\u4E9B\u6570\u636E\u7ED9\u670D\u52A1\u5668\uFF0C\u6BD4\u5982\u767B\u5F55\u4E00\u4E2A\u7F51\u7AD9\uFF0C\u5C31\u9700\u8981\u901A\u8FC7 POST \u65B9\u6CD5\u628A\u7528\u6237\u4FE1\u606F\u53D1\u9001\u7ED9\u670D\u52A1\u5668\u3002\u5982\u679C\u4F7F\u7528 POST \u65B9\u6CD5\uFF0C\u90A3\u4E48\u6D4F\u89C8\u5668\u8FD8\u8981\u51C6\u5907\u6570\u636E\u7ED9\u670D\u52A1\u5668\uFF0C\u8FD9\u91CC\u51C6\u5907\u7684\u6570\u636E\u662F\u901A\u8FC7<strong>\u8BF7\u6C42\u4F53</strong>\u6765\u53D1\u9001\u3002</p><p>\u5728\u6D4F\u89C8\u5668\u53D1\u9001\u8BF7\u6C42\u884C\u547D\u4EE4\u4E4B\u540E\uFF0C\u8FD8\u8981\u4EE5<strong>\u8BF7\u6C42\u5934</strong>\u5F62\u5F0F\u53D1\u9001\u5176\u4ED6\u4E00\u4E9B\u4FE1\u606F\uFF0C\u628A\u6D4F\u89C8\u5668\u7684\u4E00\u4E9B\u57FA\u7840\u4FE1\u606F\u544A\u8BC9\u670D\u52A1\u5668\u3002\u6BD4\u5982\u5305\u542B\u4E86\u6D4F\u89C8\u5668\u6240\u4F7F\u7528\u7684\u64CD\u4F5C\u7CFB\u7EDF\u3001\u6D4F\u89C8\u5668\u5185\u6838\u7B49\u4FE1\u606F\uFF0C\u4EE5\u53CA\u5F53\u524D\u8BF7\u6C42\u7684\u57DF\u540D\u4FE1\u606F\u3001\u6D4F\u89C8\u5668\u7AEF\u7684 Cookie \u4FE1\u606F\uFF0C\u7B49\u7B49\u3002</p><h2 id="\u670D\u52A1\u5668\u7AEF\u5904\u7406-http-\u8BF7\u6C42\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u5668\u7AEF\u5904\u7406-http-\u8BF7\u6C42\u6D41\u7A0B" aria-hidden="true">#</a> \u670D\u52A1\u5668\u7AEF\u5904\u7406 HTTP \u8BF7\u6C42\u6D41\u7A0B</h2><p>\u5386\u7ECF\u5343\u8F9B\u4E07\u82E6\uFF0CHTTP \u7684\u8BF7\u6C42\u4FE1\u606F\u7EC8\u4E8E\u88AB\u9001\u8FBE\u4E86\u670D\u52A1\u5668\u3002\u63A5\u4E0B\u6765\uFF0C\u670D\u52A1\u5668\u4F1A\u6839\u636E\u6D4F\u89C8\u5668\u7684\u8BF7\u6C42\u4FE1\u606F\u6765\u51C6\u5907\u76F8\u5E94\u7684\u5185\u5BB9\u3002</p><h3 id="_1-\u8FD4\u56DE\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#_1-\u8FD4\u56DE\u8BF7\u6C42" aria-hidden="true">#</a> 1. \u8FD4\u56DE\u8BF7\u6C42</h3><p>\u4E00\u65E6\u670D\u52A1\u5668\u5904\u7406\u7ED3\u675F\uFF0C\u4FBF\u53EF\u4EE5\u8FD4\u56DE\u6570\u636E\u7ED9\u6D4F\u89C8\u5668\u4E86\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7\u5DE5\u5177\u8F6F\u4EF6 curl \u6765\u67E5\u770B\u8FD4\u56DE\u8BF7\u6C42\u6570\u636E\uFF0C\u5177\u4F53\u4F7F\u7528\u65B9\u6CD5\u662F\u5728\u547D\u4EE4\u884C\u4E2D\u8F93\u5165\u4EE5\u4E0B\u547D\u4EE4\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>curl -i  https://time.geekbang.org/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6CE8\u610F\u8FD9\u91CC\u52A0\u4E0A\u4E86-i\u662F\u4E3A\u4E86\u8FD4\u56DE\u54CD\u5E94\u884C\u3001\u54CD\u5E94\u5934\u548C\u54CD\u5E94\u4F53\u7684\u6570\u636E\uFF0C\u8FD4\u56DE\u7684\u7ED3\u679C\u5982\u4E0B\u56FE\u6240\u793A\uFF0C\u4F60\u53EF\u4EE5\u7ED3\u5408\u8FD9\u4E9B\u6570\u636E\u6765\u7406\u89E3\u670D\u52A1\u5668\u662F\u5982\u4F55\u54CD\u5E94\u6D4F\u89C8\u5668\u7684\u3002</p><p><img src="https://static001.geekbang.org/resource/image/3e/76/3e30476a4bbda49fd7cd4fd0ea09f076.png" alt="img"></p><p>\u9996\u5148\u670D\u52A1\u5668\u4F1A\u8FD4\u56DE<strong>\u54CD\u5E94\u884C</strong>\uFF0C\u5305\u62EC\u534F\u8BAE\u7248\u672C\u548C\u72B6\u6001\u7801\u3002</p><p>\u4F46\u5E76\u4E0D\u662F\u6240\u6709\u7684\u8BF7\u6C42\u90FD\u53EF\u4EE5\u88AB\u670D\u52A1\u5668\u5904\u7406\u7684\uFF0C\u90A3\u4E48\u4E00\u4E9B\u65E0\u6CD5\u5904\u7406\u6216\u8005\u5904\u7406\u51FA\u9519\u7684\u4FE1\u606F\uFF0C\u600E\u4E48\u529E\u5462\uFF1F\u670D\u52A1\u5668\u4F1A\u901A\u8FC7\u8BF7\u6C42\u884C\u7684<strong>\u72B6\u6001\u7801</strong>\u6765\u544A\u8BC9\u6D4F\u89C8\u5668\u5B83\u7684\u5904\u7406\u7ED3\u679C\uFF0C\u6BD4\u5982\uFF1A</p><ul><li>\u6700\u5E38\u7528\u7684\u72B6\u6001\u7801\u662F 200\uFF0C\u8868\u793A\u5904\u7406\u6210\u529F\uFF1B</li><li>\u5982\u679C\u6CA1\u6709\u627E\u5230\u9875\u9762\uFF0C\u5219\u4F1A\u8FD4\u56DE 404\u3002</li></ul><p>\u72B6\u6001\u7801\u7C7B\u578B\u5F88\u591A\uFF0C\u8FD9\u91CC\u6211\u5C31\u4E0D\u8FC7\u591A\u4ECB\u7ECD\u4E86\uFF0C\u7F51\u4E0A\u6709\u5F88\u591A\u8D44\u6599\uFF0C\u4F60\u53EF\u4EE5\u81EA\u884C\u67E5\u8BE2\u548C\u5B66\u4E60\u3002</p><p>\u968F\u540E\uFF0C\u6B63\u5982\u6D4F\u89C8\u5668\u4F1A\u968F\u540C\u8BF7\u6C42\u53D1\u9001\u8BF7\u6C42\u5934\u4E00\u6837\uFF0C\u670D\u52A1\u5668\u4E5F\u4F1A\u968F\u540C\u54CD\u5E94\u5411\u6D4F\u89C8\u5668\u53D1\u9001\u54CD\u5E94\u5934\u3002<strong>\u54CD\u5E94\u5934</strong>\u5305\u542B\u4E86\u670D\u52A1\u5668\u81EA\u8EAB\u7684\u4E00\u4E9B\u4FE1\u606F\uFF0C\u6BD4\u5982\u670D\u52A1\u5668\u751F\u6210\u8FD4\u56DE\u6570\u636E\u7684\u65F6\u95F4\u3001\u8FD4\u56DE\u7684\u6570\u636E\u7C7B\u578B\uFF08JSON\u3001HTML\u3001\u6D41\u5A92\u4F53\u7B49\u7C7B\u578B\uFF09\uFF0C\u4EE5\u53CA\u670D\u52A1\u5668\u8981\u5728\u5BA2\u6237\u7AEF\u4FDD\u5B58\u7684 Cookie \u7B49\u4FE1\u606F\u3002</p><p>\u53D1\u9001\u5B8C\u54CD\u5E94\u5934\u540E\uFF0C\u670D\u52A1\u5668\u5C31\u53EF\u4EE5\u7EE7\u7EED\u53D1\u9001\u54CD\u5E94\u4F53\u7684\u6570\u636E\uFF0C\u901A\u5E38\uFF0C\u54CD\u5E94\u4F53\u5C31\u5305\u542B\u4E86 HTML \u7684\u5B9E\u9645\u5185\u5BB9\u3002</p><p>\u4EE5\u4E0A\u8FD9\u4E9B\u5C31\u662F\u670D\u52A1\u5668\u54CD\u5E94\u6D4F\u89C8\u5668\u7684\u5177\u4F53\u8FC7\u7A0B\u3002</p><h3 id="_2-\u65AD\u5F00\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#_2-\u65AD\u5F00\u8FDE\u63A5" aria-hidden="true">#</a> 2. \u65AD\u5F00\u8FDE\u63A5</h3><p>\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u4E00\u65E6\u670D\u52A1\u5668\u5411\u5BA2\u6237\u7AEF\u8FD4\u56DE\u4E86\u8BF7\u6C42\u6570\u636E\uFF0C\u5B83\u5C31\u8981\u5173\u95ED TCP \u8FDE\u63A5\u3002\u4E0D\u8FC7\u5982\u679C\u6D4F\u89C8\u5668\u6216\u8005\u670D\u52A1\u5668\u5728\u5176\u5934\u4FE1\u606F\u4E2D\u52A0\u5165\u4E86\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Connection:Keep-Alive 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u90A3\u4E48 TCP \u8FDE\u63A5\u5728\u53D1\u9001\u540E\u5C06\u4ECD\u7136\u4FDD\u6301\u6253\u5F00\u72B6\u6001\uFF0C\u8FD9\u6837\u6D4F\u89C8\u5668\u5C31\u53EF\u4EE5\u7EE7\u7EED\u901A\u8FC7\u540C\u4E00\u4E2A TCP \u8FDE\u63A5\u53D1\u9001\u8BF7\u6C42\u3002<strong>\u4FDD\u6301 TCP \u8FDE\u63A5\u53EF\u4EE5\u7701\u53BB\u4E0B\u6B21\u8BF7\u6C42\u65F6\u9700\u8981\u5EFA\u7ACB\u8FDE\u63A5\u7684\u65F6\u95F4\uFF0C\u63D0\u5347\u8D44\u6E90\u52A0\u8F7D\u901F\u5EA6</strong>\u3002\u6BD4\u5982\uFF0C\u4E00\u4E2A Web \u9875\u9762\u4E2D\u5185\u5D4C\u7684\u56FE\u7247\u5C31\u90FD\u6765\u81EA\u540C\u4E00\u4E2A Web \u7AD9\u70B9\uFF0C\u5982\u679C\u521D\u59CB\u5316\u4E86\u4E00\u4E2A\u6301\u4E45\u8FDE\u63A5\uFF0C\u4F60\u5C31\u53EF\u4EE5\u590D\u7528\u8BE5\u8FDE\u63A5\uFF0C\u4EE5\u8BF7\u6C42\u5176\u4ED6\u8D44\u6E90\uFF0C\u800C\u4E0D\u9700\u8981\u91CD\u65B0\u518D\u5EFA\u7ACB\u65B0\u7684 TCP \u8FDE\u63A5\u3002</p><h3 id="_3-\u91CD\u5B9A\u5411" tabindex="-1"><a class="header-anchor" href="#_3-\u91CD\u5B9A\u5411" aria-hidden="true">#</a> 3. \u91CD\u5B9A\u5411</h3><p>\u5230\u8FD9\u91CC\u4F3C\u4E4E\u8BF7\u6C42\u6D41\u7A0B\u5FEB\u7ED3\u675F\u4E86\uFF0C\u4E0D\u8FC7\u8FD8\u6709\u4E00\u79CD\u60C5\u51B5\u4F60\u9700\u8981\u4E86\u89E3\u4E0B\uFF0C\u6BD4\u5982\u5F53\u4F60\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00 geekbang.org \u540E\uFF0C\u4F60\u4F1A\u53D1\u73B0\u6700\u7EC8\u6253\u5F00\u7684\u9875\u9762\u5730\u5740\u662F https://www.geekbang.org\u3002</p><p>\u8FD9\u4E24\u4E2A URL \u4E4B\u6240\u4EE5\u4E0D\u4E00\u6837\uFF0C\u662F\u56E0\u4E3A\u6D89\u53CA\u5230\u4E86\u4E00\u4E2A\u91CD\u5B9A\u5411\u64CD\u4F5C\u3002\u8DDF\u524D\u9762\u4E00\u6837\uFF0C\u4F60\u4F9D\u7136\u53EF\u4EE5\u4F7F\u7528 curl \u6765\u67E5\u770B\u4E0B\u8BF7\u6C42 geekbang.org \u4F1A\u8FD4\u56DE\u4EC0\u4E48\u5185\u5BB9\uFF1F</p><p>\u5728\u63A7\u5236\u53F0\u8F93\u5165\u5982\u4E0B\u547D\u4EE4\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>curl -I geekbang.org
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6CE8\u610F\u8FD9\u91CC\u8F93\u5165\u7684\u53C2\u6570\u662F-I\uFF0C\u548C-i\u4E0D\u4E00\u6837\uFF0C-I\u8868\u793A\u53EA\u9700\u8981\u83B7\u53D6\u54CD\u5E94\u5934\u548C\u54CD\u5E94\u884C\u6570\u636E\uFF0C\u800C\u4E0D\u9700\u8981\u83B7\u53D6\u54CD\u5E94\u4F53\u7684\u6570\u636E\uFF0C\u6700\u7EC8\u8FD4\u56DE\u7684\u6570\u636E\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="https://static001.geekbang.org/resource/image/28/43/28d5796c6ab7faa619ed8f1bd17b0843.jpg" alt="img"></p><p>\u4ECE\u56FE\u4E2D\u4F60\u53EF\u4EE5\u770B\u5230\uFF0C\u54CD\u5E94\u884C\u8FD4\u56DE\u7684\u72B6\u6001\u7801\u662F 301\uFF0C\u72B6\u6001 301 \u5C31\u662F\u544A\u8BC9\u6D4F\u89C8\u5668\uFF0C\u6211\u9700\u8981\u91CD\u5B9A\u5411\u5230\u53E6\u5916\u4E00\u4E2A\u7F51\u5740\uFF0C\u800C\u9700\u8981\u91CD\u5B9A\u5411\u7684\u7F51\u5740\u6B63\u662F\u5305\u542B\u5728\u54CD\u5E94\u5934\u7684 Location \u5B57\u6BB5\u4E2D\uFF0C\u63A5\u4E0B\u6765\uFF0C\u6D4F\u89C8\u5668\u83B7\u53D6 Location \u5B57\u6BB5\u4E2D\u7684\u5730\u5740\uFF0C\u5E76\u4F7F\u7528\u8BE5\u5730\u5740\u91CD\u65B0\u5BFC\u822A\uFF0C\u8FD9\u5C31\u662F\u4E00\u4E2A\u5B8C\u6574\u91CD\u5B9A\u5411\u7684\u6267\u884C\u6D41\u7A0B\u3002\u8FD9\u4E5F\u5C31\u89E3\u91CA\u4E86\u4E3A\u4EC0\u4E48\u8F93\u5165\u7684\u662F geekbang.org\uFF0C\u6700\u7EC8\u6253\u5F00\u7684\u5374\u662F https://www.geekbang.org \u4E86\u3002</p><p>\u4E0D\u8FC7\u4E5F\u4E0D\u8981\u8BA4\u4E3A\u8FD9\u79CD\u8DF3\u8F6C\u662F\u5FC5\u7136\u7684\u3002\u5982\u679C\u4F60\u6253\u5F00 https://12306.cn\uFF0C\u4F60\u4F1A\u53D1\u73B0\u8FD9\u4E2A\u7AD9\u70B9\u662F\u6253\u4E0D\u5F00\u7684\u3002\u8FD9\u662F\u56E0\u4E3A 12306 \u7684\u670D\u52A1\u5668\u5E76\u6CA1\u6709\u5904\u7406\u8DF3\u8F6C\uFF0C\u6240\u4EE5\u5FC5\u987B\u8981\u624B\u52A8\u8F93\u5165\u5B8C\u6574\u7684 https://www.12306.cn \u624D\u80FD\u6253\u5F00\u9875\u9762\u3002</p><h2 id="\u95EE\u9898\u89E3\u7B54" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898\u89E3\u7B54" aria-hidden="true">#</a> \u95EE\u9898\u89E3\u7B54</h2><p>\u8BF4\u4E86\u8FD9\u4E48\u591A\uFF0C\u76F8\u4FE1\u4F60\u73B0\u5728\u5DF2\u7ECF\u4E86\u89E3\u4E86 HTTP \u7684\u8BF7\u6C42\u6D41\u7A0B\uFF0C\u90A3\u73B0\u5728\u6211\u4EEC\u518D\u56DE\u8FC7\u5934\u6765\u770B\u770B\u6587\u7AE0\u5F00\u5934\u63D0\u51FA\u7684\u95EE\u9898\u3002</p><h3 id="_1-\u4E3A\u4EC0\u4E48\u5F88\u591A\u7AD9\u70B9\u7B2C\u4E8C\u6B21\u6253\u5F00\u901F\u5EA6\u4F1A\u5F88\u5FEB" tabindex="-1"><a class="header-anchor" href="#_1-\u4E3A\u4EC0\u4E48\u5F88\u591A\u7AD9\u70B9\u7B2C\u4E8C\u6B21\u6253\u5F00\u901F\u5EA6\u4F1A\u5F88\u5FEB" aria-hidden="true">#</a> 1. \u4E3A\u4EC0\u4E48\u5F88\u591A\u7AD9\u70B9\u7B2C\u4E8C\u6B21\u6253\u5F00\u901F\u5EA6\u4F1A\u5F88\u5FEB\uFF1F</h3><p>\u5982\u679C\u7B2C\u4E8C\u6B21\u9875\u9762\u6253\u5F00\u5F88\u5FEB\uFF0C\u4E3B\u8981\u539F\u56E0\u662F\u7B2C\u4E00\u6B21\u52A0\u8F7D\u9875\u9762\u8FC7\u7A0B\u4E2D\uFF0C\u7F13\u5B58\u4E86\u4E00\u4E9B\u8017\u65F6\u7684\u6570\u636E\u3002</p><p>\u90A3\u4E48\uFF0C\u54EA\u4E9B\u6570\u636E\u4F1A\u88AB\u7F13\u5B58\u5462\uFF1F\u4ECE\u4E0A\u9762\u4ECB\u7ECD\u7684\u6838\u5FC3\u8BF7\u6C42\u8DEF\u5F84\u53EF\u4EE5\u53D1\u73B0\uFF0C<strong>DNS \u7F13\u5B58</strong>\u548C<strong>\u9875\u9762\u8D44\u6E90\u7F13\u5B58</strong>\u8FD9\u4E24\u5757\u6570\u636E\u662F\u4F1A\u88AB\u6D4F\u89C8\u5668\u7F13\u5B58\u7684\u3002\u5176\u4E2D\uFF0CDNS \u7F13\u5B58\u6BD4\u8F83\u7B80\u5355\uFF0C\u5B83\u4E3B\u8981\u5C31\u662F\u5728\u6D4F\u89C8\u5668\u672C\u5730\u628A\u5BF9\u5E94\u7684 IP \u548C\u57DF\u540D\u5173\u8054\u8D77\u6765\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u505A\u8FC7\u591A\u5206\u6790\u4E86\u3002</p><p>\u6211\u4EEC\u91CD\u70B9\u770B\u4E0B\u6D4F\u89C8\u5668\u8D44\u6E90\u7F13\u5B58\uFF0C\u4E0B\u9762\u662F\u7F13\u5B58\u5904\u7406\u7684\u8FC7\u7A0B\uFF1A</p><p><img src="https://static001.geekbang.org/resource/image/5f/08/5fc2f88a04ee0fc41a808f3481287408.png" alt="img"></p><p>\u9996\u5148\uFF0C\u6211\u4EEC\u770B\u4E0B\u670D\u52A1\u5668\u662F\u901A\u8FC7\u4EC0\u4E48\u65B9\u5F0F\u8BA9\u6D4F\u89C8\u5668\u7F13\u5B58\u6570\u636E\u7684\uFF1F</p><p>\u4ECE\u4E0A\u56FE\u7684\u7B2C\u4E00\u6B21\u8BF7\u6C42\u53EF\u4EE5\u770B\u51FA\uFF0C\u5F53\u670D\u52A1\u5668\u8FD4\u56DE <strong>HTTP \u54CD\u5E94\u5934</strong>\u7ED9\u6D4F\u89C8\u5668\u65F6\uFF0C\u6D4F\u89C8\u5668\u662F<strong>\u901A\u8FC7\u54CD\u5E94\u5934\u4E2D\u7684 Cache-Control \u5B57\u6BB5\u6765\u8BBE\u7F6E\u662F\u5426\u7F13\u5B58\u8BE5\u8D44\u6E90</strong>\u3002\u901A\u5E38\uFF0C\u6211\u4EEC\u8FD8\u9700\u8981\u4E3A\u8FD9\u4E2A\u8D44\u6E90\u8BBE\u7F6E\u4E00\u4E2A\u7F13\u5B58\u8FC7\u671F\u65F6\u957F\uFF0C\u800C\u8FD9\u4E2A\u65F6\u957F\u662F\u901A\u8FC7 Cache-Control \u4E2D\u7684 Max-age \u53C2\u6570\u6765\u8BBE\u7F6E\u7684\uFF0C\u6BD4\u5982\u4E0A\u56FE\u8BBE\u7F6E\u7684\u7F13\u5B58\u8FC7\u671F\u65F6\u95F4\u662F 2000 \u79D2\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Cache-Control:Max-age=2000
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8FD9\u4E5F\u5C31\u610F\u5473\u7740\uFF0C\u5728\u8BE5\u7F13\u5B58\u8D44\u6E90\u8FD8\u672A\u8FC7\u671F\u7684\u60C5\u51B5\u4E0B, \u5982\u679C\u518D\u6B21\u8BF7\u6C42\u8BE5\u8D44\u6E90\uFF0C\u4F1A\u76F4\u63A5\u8FD4\u56DE\u7F13\u5B58\u4E2D\u7684\u8D44\u6E90\u7ED9\u6D4F\u89C8\u5668\u3002</p><p>\u4F46\u5982\u679C\u7F13\u5B58\u8FC7\u671F\u4E86\uFF0C\u6D4F\u89C8\u5668\u5219\u4F1A\u7EE7\u7EED\u53D1\u8D77\u7F51\u7EDC\u8BF7\u6C42\uFF0C\u5E76\u4E14\u5728 <strong>HTTP \u8BF7\u6C42\u5934</strong>\u4E2D\u5E26\u4E0A\uFF1A</p><p>If-None-Match:&quot;4f80f-13c-3a1xb12a&quot;</p><p>\u670D\u52A1\u5668\u6536\u5230\u8BF7\u6C42\u5934\u540E\uFF0C\u4F1A\u6839\u636E If-None-Match \u7684\u503C\u6765\u5224\u65AD\u8BF7\u6C42\u7684\u8D44\u6E90\u662F\u5426\u6709\u66F4\u65B0\u3002</p><ul><li>\u5982\u679C\u6CA1\u6709\u66F4\u65B0\uFF0C\u5C31\u8FD4\u56DE 304 \u72B6\u6001\u7801\uFF0C\u76F8\u5F53\u4E8E\u670D\u52A1\u5668\u544A\u8BC9\u6D4F\u89C8\u5668\uFF1A\u201C\u8FD9\u4E2A\u7F13\u5B58\u53EF\u4EE5\u7EE7\u7EED\u4F7F\u7528\uFF0C\u8FD9\u6B21\u5C31\u4E0D\u91CD\u590D\u53D1\u9001\u6570\u636E\u7ED9\u4F60\u4E86\u3002\u201D</li><li>\u5982\u679C\u8D44\u6E90\u6709\u66F4\u65B0\uFF0C\u670D\u52A1\u5668\u5C31\u76F4\u63A5\u8FD4\u56DE\u6700\u65B0\u8D44\u6E90\u7ED9\u6D4F\u89C8\u5668\u3002</li></ul>`,78),P=e("\u5173\u4E8E\u7F13\u5B58\u7684\u7EC6\u8282\u5185\u5BB9\u7279\u522B\u591A\uFF0C\u5177\u4F53\u7EC6\u8282\u4F60\u53EF\u4EE5\u53C2\u8003\u8FD9\u7BC7 "),m={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching",target:"_blank",rel:"noopener noreferrer"},_=e("HTTP \u7F13\u5B58"),x=e("\uFF0C\u5728\u8FD9\u91CC\u6211\u5C31\u4E0D\u8D58\u8FF0\u4E86\u3002"),C=n(`<p>\u7B80\u8981\u6765\u8BF4\uFF0C\u5F88\u591A\u7F51\u7AD9\u7B2C\u4E8C\u6B21\u8BBF\u95EE\u80FD\u591F\u79D2\u5F00\uFF0C\u662F\u56E0\u4E3A\u8FD9\u4E9B\u7F51\u7AD9\u628A\u5F88\u591A\u8D44\u6E90\u90FD\u7F13\u5B58\u5728\u4E86\u672C\u5730\uFF0C\u6D4F\u89C8\u5668\u7F13\u5B58\u76F4\u63A5\u4F7F\u7528\u672C\u5730\u526F\u672C\u6765\u56DE\u5E94\u8BF7\u6C42\uFF0C\u800C\u4E0D\u4F1A\u4EA7\u751F\u771F\u5B9E\u7684\u7F51\u7EDC\u8BF7\u6C42\uFF0C\u4ECE\u800C\u8282\u7701\u4E86\u65F6\u95F4\u3002\u540C\u65F6\uFF0CDNS \u6570\u636E\u4E5F\u88AB\u6D4F\u89C8\u5668\u7F13\u5B58\u4E86\uFF0C\u8FD9\u53C8\u7701\u53BB\u4E86 DNS \u67E5\u8BE2\u73AF\u8282\u3002</p><h3 id="_2-\u767B\u5F55\u72B6\u6001\u662F\u5982\u4F55\u4FDD\u6301\u7684" tabindex="-1"><a class="header-anchor" href="#_2-\u767B\u5F55\u72B6\u6001\u662F\u5982\u4F55\u4FDD\u6301\u7684" aria-hidden="true">#</a> 2. \u767B\u5F55\u72B6\u6001\u662F\u5982\u4F55\u4FDD\u6301\u7684\uFF1F</h3><p>\u901A\u8FC7\u4E0A\u9762\u7684\u4ECB\u7ECD\uFF0C\u4F60\u5DF2\u7ECF\u4E86\u89E3\u4E86\u7F13\u5B58\u662F\u5982\u4F55\u5DE5\u4F5C\u7684\u3002\u4E0B\u9762\u6211\u4EEC\u518D\u4E00\u8D77\u770B\u4E0B\u767B\u5F55\u72B6\u6001\u662F\u5982\u4F55\u4FDD\u6301\u7684\u3002</p><ul><li>\u7528\u6237\u6253\u5F00\u767B\u5F55\u9875\u9762\uFF0C\u5728\u767B\u5F55\u6846\u91CC\u586B\u5165\u7528\u6237\u540D\u548C\u5BC6\u7801\uFF0C\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u3002\u70B9\u51FB\u6309\u94AE\u4F1A\u89E6\u53D1\u9875\u9762\u811A\u672C\u751F\u6210\u7528\u6237\u767B\u5F55\u4FE1\u606F\uFF0C\u7136\u540E\u8C03\u7528 POST \u65B9\u6CD5\u63D0\u4EA4\u7528\u6237\u767B\u5F55\u4FE1\u606F\u7ED9\u670D\u52A1\u5668\u3002</li><li>\u670D\u52A1\u5668\u63A5\u6536\u5230\u6D4F\u89C8\u5668\u63D0\u4EA4\u7684\u4FE1\u606F\u4E4B\u540E\uFF0C\u67E5\u8BE2\u540E\u53F0\uFF0C\u9A8C\u8BC1\u7528\u6237\u767B\u5F55\u4FE1\u606F\u662F\u5426\u6B63\u786E\uFF0C\u5982\u679C\u6B63\u786E\u7684\u8BDD\uFF0C\u4F1A\u751F\u6210\u4E00\u6BB5\u8868\u793A\u7528\u6237\u8EAB\u4EFD\u7684\u5B57\u7B26\u4E32\uFF0C\u5E76\u628A\u8BE5\u5B57\u7B26\u4E32\u5199\u5230\u54CD\u5E94\u5934\u7684 Set-Cookie \u5B57\u6BB5\u91CC\uFF0C\u5982\u4E0B\u6240\u793A\uFF0C\u7136\u540E\u628A\u54CD\u5E94\u5934\u53D1\u9001\u7ED9\u6D4F\u89C8\u5668\u3002</li><li></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Set-Cookie: UID=3431uad;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u6D4F\u89C8\u5668\u5728\u63A5\u6536\u5230\u670D\u52A1\u5668\u7684\u54CD\u5E94\u5934\u540E\uFF0C\u5F00\u59CB\u89E3\u6790\u54CD\u5E94\u5934\uFF0C\u5982\u679C\u9047\u5230\u54CD\u5E94\u5934\u91CC\u542B\u6709 Set-Cookie \u5B57\u6BB5\u7684\u60C5\u51B5\uFF0C\u6D4F\u89C8\u5668\u5C31\u4F1A\u628A\u8FD9\u4E2A\u5B57\u6BB5\u4FE1\u606F\u4FDD\u5B58\u5230\u672C\u5730\u3002\u6BD4\u5982\u628AUID=3431uad\u4FDD\u6301\u5230\u672C\u5730\u3002</li><li>\u5F53\u7528\u6237\u518D\u6B21\u8BBF\u95EE\u65F6\uFF0C\u6D4F\u89C8\u5668\u4F1A\u53D1\u8D77 HTTP \u8BF7\u6C42\uFF0C\u4F46\u5728\u53D1\u8D77\u8BF7\u6C42\u4E4B\u524D\uFF0C\u6D4F\u89C8\u5668\u4F1A\u8BFB\u53D6\u4E4B\u524D\u4FDD\u5B58\u7684 Cookie \u6570\u636E\uFF0C\u5E76\u628A\u6570\u636E\u5199\u8FDB\u8BF7\u6C42\u5934\u91CC\u7684 Cookie \u5B57\u6BB5\u91CC\uFF08\u5982\u4E0B\u6240\u793A\uFF09\uFF0C\u7136\u540E\u6D4F\u89C8\u5668\u518D\u5C06\u8BF7\u6C42\u5934\u53D1\u9001\u7ED9\u670D\u52A1\u5668\u3002 Cookie: UID=3431uad;</li><li>\u670D\u52A1\u5668\u5728\u6536\u5230 HTTP \u8BF7\u6C42\u5934\u6570\u636E\u4E4B\u540E\uFF0C\u5C31\u4F1A\u67E5\u627E\u8BF7\u6C42\u5934\u91CC\u9762\u7684\u201CCookie\u201D\u5B57\u6BB5\u4FE1\u606F\uFF0C\u5F53\u67E5\u627E\u5230\u5305\u542BUID=3431uad\u7684\u4FE1\u606F\u65F6\uFF0C\u670D\u52A1\u5668\u67E5\u8BE2\u540E\u53F0\uFF0C\u5E76\u5224\u65AD\u8BE5\u7528\u6237\u662F\u5DF2\u767B\u5F55\u72B6\u6001\uFF0C\u7136\u540E\u751F\u6210\u542B\u6709\u8BE5\u7528\u6237\u4FE1\u606F\u7684\u9875\u9762\u6570\u636E\uFF0C\u5E76\u628A\u751F\u6210\u7684\u6570\u636E\u53D1\u9001\u7ED9\u6D4F\u89C8\u5668\u3002</li><li>\u6D4F\u89C8\u5668\u5728\u63A5\u6536\u5230\u8BE5\u542B\u6709\u5F53\u524D\u7528\u6237\u7684\u9875\u9762\u6570\u636E\u540E\uFF0C\u5C31\u53EF\u4EE5\u6B63\u786E\u5C55\u793A\u7528\u6237\u767B\u5F55\u7684\u72B6\u6001\u4FE1\u606F\u4E86\u3002</li></ul><p>\u597D\u4E86\uFF0C\u901A\u8FC7\u8FD9\u4E2A\u6D41\u7A0B\u4F60\u53EF\u4EE5\u77E5\u9053\u6D4F\u89C8\u5668\u9875\u9762\u72B6\u6001\u662F\u901A\u8FC7\u4F7F\u7528 Cookie \u6765\u5B9E\u73B0\u7684\u3002Cookie \u6D41\u7A0B\u53EF\u4EE5\u53C2\u8003\u4E0B\u56FE</p><p><img src="https://static001.geekbang.org/resource/image/d9/b3/d9d6cefe8d3d6d84a37a626687c6ecb3.png" alt="img"></p><p>\u7B80\u5355\u5730\u8BF4\uFF0C\u5982\u679C\u670D\u52A1\u5668\u7AEF\u53D1\u9001\u7684\u54CD\u5E94\u5934\u5185\u6709 Set-Cookie \u7684\u5B57\u6BB5\uFF0C\u90A3\u4E48\u6D4F\u89C8\u5668\u5C31\u4F1A\u5C06\u8BE5\u5B57\u6BB5\u7684\u5185\u5BB9\u4FDD\u6301\u5230\u672C\u5730\u3002\u5F53\u4E0B\u6B21\u5BA2\u6237\u7AEF\u518D\u5F80\u8BE5\u670D\u52A1\u5668\u53D1\u9001\u8BF7\u6C42\u65F6\uFF0C\u5BA2\u6237\u7AEF\u4F1A\u81EA\u52A8\u5728\u8BF7\u6C42\u5934\u4E2D\u52A0\u5165 Cookie \u503C\u540E\u518D\u53D1\u9001\u51FA\u53BB\u3002\u670D\u52A1\u5668\u7AEF\u53D1\u73B0\u5BA2\u6237\u7AEF\u53D1\u9001\u8FC7\u6765\u7684 Cookie \u540E\uFF0C\u4F1A\u53BB\u68C0\u67E5\u7A76\u7ADF\u662F\u4ECE\u54EA\u4E00\u4E2A\u5BA2\u6237\u7AEF\u53D1\u6765\u7684\u8FDE\u63A5\u8BF7\u6C42\uFF0C\u7136\u540E\u5BF9\u6BD4\u670D\u52A1\u5668\u4E0A\u7684\u8BB0\u5F55\uFF0C\u6700\u540E\u5F97\u5230\u8BE5\u7528\u6237\u7684\u72B6\u6001\u4FE1\u606F\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u672C\u7BC7\u6587\u7AE0\u7684\u5185\u5BB9\u6BD4\u8F83\u591A\u3001\u6BD4\u8F83\u788E\uFF0C\u4F46\u662F\u975E\u5E38\u91CD\u8981\uFF0C\u6240\u4EE5\u6211\u5148\u6765\u603B\u7ED3\u4E0B\u4ECA\u5929\u7684\u4E3B\u8981\u5185\u5BB9\u3002</p><p>\u4E3A\u4E86\u4FBF\u4E8E\u4F60\u7406\u89E3\uFF0C\u6211\u753B\u4E86\u4E0B\u9762\u8FD9\u5F20\u8BE6\u7EC6\u7684\u201CHTTP \u8BF7\u6C42\u793A\u610F\u56FE\u201D\uFF0C\u7528\u6765\u5C55\u73B0\u6D4F\u89C8\u5668\u4E2D\u7684 HTTP \u8BF7\u6C42\u6240\u7ECF\u5386\u7684\u5404\u4E2A\u9636\u6BB5\u3002</p><p><img src="https://static001.geekbang.org/resource/image/1b/6c/1b49976aca2c700883d48d927f48986c.png" alt="img"></p><p>\u4ECE\u56FE\u4E2D\u53EF\u4EE5\u770B\u5230\uFF0C\u6D4F\u89C8\u5668\u4E2D\u7684 HTTP \u8BF7\u6C42\u4ECE\u53D1\u8D77\u5230\u7ED3\u675F\u4E00\u5171\u7ECF\u5386\u4E86\u5982\u4E0B\u516B\u4E2A\u9636\u6BB5\uFF1A\u6784\u5EFA\u8BF7\u6C42\u3001\u67E5\u627E\u7F13\u5B58\u3001\u51C6\u5907 IP \u548C\u7AEF\u53E3\u3001\u7B49\u5F85 TCP \u961F\u5217\u3001\u5EFA\u7ACB TCP \u8FDE\u63A5\u3001\u53D1\u8D77 HTTP \u8BF7\u6C42\u3001\u670D\u52A1\u5668\u5904\u7406\u8BF7\u6C42\u3001\u670D\u52A1\u5668\u8FD4\u56DE\u8BF7\u6C42\u548C\u65AD\u5F00\u8FDE\u63A5\u3002</p><p>\u7136\u540E\u6211\u8FD8\u901A\u8FC7 HTTP \u8BF7\u6C42\u8DEF\u5F84\u89E3\u7B54\u4E86\u4E24\u4E2A\u7ECF\u5E38\u4F1A\u78B0\u5230\u7684\u95EE\u9898\uFF0C\u4E00\u4E2A\u6D89\u53CA\u5230\u4E86 Cache \u6D41\u7A0B\uFF0C\u53E6\u5916\u4E00\u4E2A\u6D89\u53CA\u5230\u5982\u4F55\u4F7F\u7528 Cookie \u6765\u8FDB\u884C\u72B6\u6001\u7BA1\u7406\u3002</p><p>\u901A\u8FC7\u4ECA\u5929\u7CFB\u7EDF\u7684\u8BB2\u89E3\uFF0C\u60F3\u5FC5\u4F60\u5DF2\u7ECF\u4E86\u89E3\u4E86\u4E00\u4E2A HTTP \u5B8C\u6574\u7684\u5DE5\u4F5C\u6D41\u7A0B\uFF0C\u76F8\u4FE1\u8FD9\u4E9B\u77E5\u8BC6\u70B9\u4E4B\u4E8E\u4F60\u4EE5\u540E\u7684\u5B66\u4E60\u6216\u5DE5\u4F5C\u4F1A\u5F88\u6709\u5E2E\u52A9\u3002</p><p>\u53E6\u5916\uFF0C\u4F60\u5E94\u8BE5\u4E5F\u770B\u51FA\u6765\u4E86\u672C\u7BC7\u6587\u7AE0\u662F\u6709\u5F88\u591A\u5206\u6790\u95EE\u9898\u7684\u601D\u8DEF\u5728\u91CC\u9762\u7684\u3002\u6240\u4EE5\u5728\u5B66\u4E60\u8FC7\u7A0B\u4E2D\uFF0C\u4F60\u4E5F\u8981\u5B66\u4F1A\u63D0\u95EE\uFF0C\u901A\u8FC7\u6700\u7EC8\u8981\u505A\u4EC0\u4E48\u548C\u73B0\u5728\u6709\u4EC0\u4E48\uFF0C\u53BB\u4E00\u6B65\u6B65\u5206\u6790\u5E76\u63D0\u51FA\u4E00\u4E9B\u95EE\u9898\uFF0C\u8BA9\u7591\u95EE\u5E26\u9886\u7740\u4F60\u53BB\u5B66\u4E60\uFF0C\u6293\u4F4F\u51E0\u4E2A\u672C\u8D28\u7684\u95EE\u9898\u5C31\u53EF\u4EE5\u5B66\u900F\u76F8\u5173\u77E5\u8BC6\u70B9\uFF0C\u8BA9\u4F60\u80FD\u7AD9\u5728\u66F4\u9AD8\u7EF4\u5EA6\u53BB\u67E5\u770B\u6574\u4F53\u6846\u67B6\u3002\u5E0C\u671B\u5B83\u80FD\u6210\u4E3A\u4F60\u7684\u4E00\u4E2A\u5B66\u4E60\u6280\u5DE7\u5427\uFF01</p><h2 id="\u601D\u8003\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#\u601D\u8003\u65F6\u95F4" aria-hidden="true">#</a> \u601D\u8003\u65F6\u95F4</h2><p>\u6700\u540E\uFF0C\u8FD8\u662F\u7559\u7ED9\u4F60\u4E2A\u601D\u8003\u9898\uFF1A\u7ED3\u5408\u4ECA\u5929\u6240\u8BB2 HTTP \u8BF7\u6C42\u7684\u5404\u4E2A\u9636\u6BB5\uFF0C\u5982\u679C\u4E00\u4E2A\u9875\u9762\u7684\u7F51\u7EDC\u52A0\u8F7D\u65F6\u95F4\u8FC7\u4E45\uFF0C\u4F60\u662F\u5982\u4F55\u5206\u6790\u5361\u5728\u54EA\u4E2A\u9636\u6BB5\u7684\uFF1F</p><p>\u6B22\u8FCE\u5728\u7559\u8A00\u533A\u4E0E\u6211\u5206\u4EAB\u4F60\u7684\u60F3\u6CD5\uFF0C\u4E5F\u6B22\u8FCE\u4F60\u5728\u7559\u8A00\u533A\u8BB0\u5F55\u4F60\u7684\u601D\u8003\u8FC7\u7A0B\u3002\u611F\u8C22\u9605\u8BFB\uFF0C\u5982\u679C\u4F60\u89C9\u5F97\u8FD9\u7BC7\u6587\u7AE0\u5BF9\u4F60\u6709\u5E2E\u52A9\u7684\u8BDD\uFF0C\u4E5F\u6B22\u8FCE\u628A\u5B83\u5206\u4EAB\u7ED9\u66F4\u591A\u7684\u670B\u53CB\u3002</p>`,20);function f(H,k){const t=s("ExternalLinkIcon");return o(),p(d,null,[c,a("p",null,[g,a("a",h,[T,r(t)]),u]),b,a("p",null,[P,a("a",m,[_,r(t)]),x]),C],64)}var I=i(l,[["render",f],["__file","03.html.vue"]]);export{I as default};
