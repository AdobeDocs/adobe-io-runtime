"use strict";(self.webpackChunkadobe_io_runtime=self.webpackChunkadobe_io_runtime||[]).push([[8128],{37669:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return d},default:function(){return l}});var o=n(87462),r=n(63366),a=(n(15007),n(64983)),i=n(91515),s=["components"],d={},u={_frontmatter:d},m=i.Z;function l(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.mdx)(m,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"adobe-io-runtime-frequently-asked-questions"},"Adobe I/O Runtime: Frequently Asked Questions"),(0,a.mdx)("h2",{id:"getting-access"},"Getting Access"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"How can I get access to I/O Runtime?"),(0,a.mdx)("br",{parentName:"p"}),"\n","I/O Runtime is offering production service level since June 2019. You can find ",(0,a.mdx)("a",{parentName:"p",href:"../guides/overview/getting_access.md"},"here")," information about how to get access."),(0,a.mdx)("h2",{id:"supported-programming-languages"},"Supported Programming Languages"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Which languages are supported in I/O Runtime?"),(0,a.mdx)("br",{parentName:"p"}),"\n","For now, Adobe I/O Runtime only supports Node.js. We might add support for other languages in the future."),(0,a.mdx)("h3",{id:"node-version-18---default-image"},"Node version 18 - Default Image"),(0,a.mdx)("p",null,"The NPM modules available with this image can be found ",(0,a.mdx)("a",{parentName:"p",href:"../guides/reference/runtimes.md#nodejs-v18"},"here"),"."),(0,a.mdx)("p",null,"We encourage you to always update your actions to the latest version in order to take advantage of pre-warm containters feature."),(0,a.mdx)("h3",{id:"older-versions"},"Older Versions"),(0,a.mdx)("p",null,"When a new Node version is added to the system, the old versions are still available. This means that your actions will still work. However, you won't be able to create new actions with these versions. We encourage you to always update your actions to the latest version in order to take advantage of the pre-warm containers feature."),(0,a.mdx)("h2",{id:"networking"},"Networking"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Are there any restrictions when it comes to ports and outbound connections?")),(0,a.mdx)("p",null,"When retrieving data from some external systems your code might need to connect to a SFTP server, SMTP server, or HTTP service. As long as that system uses one of following ports, your code should work fine:"),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"21, 22, 25, 53, 80, 123, 143, [200-299], 389, 443, 445, 465, 587, 636, 1433, [2000-2999], 3000, 3306, 4242, 4317, 4343, 5400, 5432, 5671, 5672, 6061, 6062, 6379, 6380, 6651, 8000, 8020, 8080, 8085, 8088, 8089, 8300, 8500, 8600, 9090, 9092, 9093, 9094, [9096-9352], 9354, [10000-20000], 27016, 27017, 27018, 27019, 30303, 50010, 60020"),"."),(0,a.mdx)("p",null,"If you have a need for a port that is not in this list, please share with us the use case."),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Do the ingress IP addresses for Adobe I/O Runtime ever change?")),(0,a.mdx)("p",null,"Yes, the IP addresses returned when looking up an Adobe I/O Runtime endpoint's DNS record can change at any time. To avoid issues with connecting and routing to the platform, clients should not cache DNS-lookup responses for Adobe I/O Runtime endpoints beyond the TTL of the DNS record. For more information, see \"",(0,a.mdx)("a",{parentName:"p",href:"../guides/using/security_general.md#secure-communication-with-backend-services"},"Secure Communication with Backend Services"),'" in the ',(0,a.mdx)("a",{parentName:"p",href:"../guides/using/security_general.md"},"Security Guide"),"."),(0,a.mdx)("h2",{id:"price"},"Price"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"What does it cost to use Adobe I/O Runtime?"),(0,a.mdx)("br",{parentName:"p"}),"\n","There are two ways you can get access to I/O Runtime: commercial offering and free trial. If you want to buy, please work with your Adobe account manager. If you are interested in the trial, check this ",(0,a.mdx)("a",{parentName:"p",href:"../guides/overview/getting_access.md"},"page"),"."),(0,a.mdx)("h2",{id:"multiple-region-support"},"Multiple Region Support"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Where we execute your actions"),"\nI/O Runtime runs in multiple regions. We deploy your code in all regions and execute it in the closest region to the caller (latency-based routing). You can't restrict the execution to a specific region only."),(0,a.mdx)("p",null,"You can find more information about the regions and how you can check where your actions are being executed here - ",(0,a.mdx)("a",{parentName:"p",href:"../guides/reference/multiple_regions.md"},"Multiple Regions"),"."),(0,a.mdx)("h2",{id:"system-limits"},"System Limits"),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},"Which limits are imposed onto actions?"),(0,a.mdx)("br",{parentName:"p"}),"\n","All available limits (and the default values) are listed here: ",(0,a.mdx)("a",{parentName:"p",href:"../guides/using/system_settings.md"},"System Settings"),". Notable limits are the timeout for functions and the maximum payload that can get posted to a function."),(0,a.mdx)("h2",{id:"developer-support"},"Developer Support"),(0,a.mdx)("p",null,"You can use the ",(0,a.mdx)("a",{parentName:"p",href:"https://forums.adobe.com/community/adobe-io/adobe-io-runtime"},"Adobe I/O Runtime Forums")," for developer support related questions. "))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-support-faq-md-238ee05747242f2e7642.js.map