# Adobe I/O Runtime: Frequently Asked Questions


## Getting Access
**How can I get access to I/O Runtime?**  
Adobe I/O Runtime is no longer available as a standalone trial. Adobe Customers & Partners who want to try Adobe I/O Runtime may request access to our Adobe Developer App Builder trial. You can sign up for trial [here](https://developer.adobe.com/app-builder/trial/).

## Supported Programming Languages
**Which languages are supported in I/O Runtime?**  
For now, Adobe I/O Runtime only supports Node.js. We might add support for other languages in the future.

### Node version 14 - Default Image
The NPM modules available with this image can be found [here](../guides/reference/runtimes.md#nodejs-v16).

### Will I need to update the Nodejs versions for my actions every time?
We encourage you to always update your actions to the latest version supported in order to take advantage of pre-warm containters feature.

### Older Versions
When a new Node version is added to the system, the [old versions](../guides/reference/runtimes.md) are still available. This means that your actions will still work. However, we encourage you to always update your actions to the latest version in order to take advantage of pre-warm containers feature.

## What ports are open
**Are there any restrictions when it comes to ports and outbound connections?**

When retrieving data from some external systems your code might need to connect to a SFTP server, SMTP server, or HTTP service. As long as that system uses one of following ports, your code should work fine:

`21, 22, 25, 53, 80, 123, 143, [200-299], 389, 443, 445, 465, 587, 636, 1433, [2000-2999], 3000, 3306, 4242, 4317, 4343, 5400, 5432, 5671, 5672, 6061, 6062, 6379, 6380, 6651, 8000, 8020, 8080, 8085, 8088, 8089, 8300, 8500, 8600, 9090, 9092, 9093, 9094, [9096-9352], 9354, [10000-20000], 27016, 27017, 27018, 27019, 30303, 50010, 60020`.

If you have a need for a port that is not in this list, please share with us the use case.

## How can I see usgae reports for my Runtime namespace?
Runtime currently does not offer usage reports but it is planned to be available in the future. To obtain usage reports for your namespace, kindly reach out to your account manager.

To request usage reports for your namespace, please follow these steps:
1. Contact your account manager and request for the usage report.
2. Provide your namespace details to the account manager.
3. The account manager will provide you with the usage report once it becomes available.

Note: The availability of usage reports is currently not offered by Runtime but it is in the product roadmap. We appreciate your patience and understanding as we continue to improve our services.

## How can I get access to the I/O Runtime activation logs?
I/O Runtime doesn’t offer a configuration to send activations and logs to an external system, something like Splunk, Datadog or New Relic. This is something we are considering to offer in the future.

Although there is no out-of-the-box integration, there are still ways you can push data from I/O Runtime to an external tool in order to monitor and debug your actions. See [Logging & Monitoring] (https://developer.adobe.com/runtime/docs/guides/using/logging_monitoring/#3rd-party-tools)

## While executing actions, continue to receive ``` "error": "Too many requests in the last minute```  with status code 429. What should I do?
There is a default throttling limit of 600 activations per minute and 100 concurrent activations for every namespace. These values can be increased per request. To request increase the namespace limits, please follow these steps:

1. Loga a support ticket [here](https://experienceleague.adobe.com/?lang=en&support-tab=home#support).
2. Provide your namespace and needed limits.
3. The support team will provide you with an update once limis are updated.

## Does Adobe I/O runtime offers DDoS protection?
No, Runtime doesn’t offer DDoS protection out of the box, however Runtime can be easily integrated with a CDN, which is specialized in DDoS and WAF protection. See [Security Guide] (https://developer.adobe.com/runtime/docs/guides/using/security_general/#using-a-content-delivery-network-cdn)

## Price
**What does it cost to use I/O Runtime?**  
I/O Runtime is included with App Builder. You can sign up for App builder trial [here](https://developer.adobe.com/app-builder/trial/). To purchase App builder please contact your Account manager. 


## Multiple Region Support
**Where we execute your actions**
I/O Runtime runs in Azure in multiple regions. We deploy your code in all regions and execute it in the closest region to the caller (latency-based routing). You can't restrict the execution to a specific region only.

You can find more information about the regions and how you can check where your actions are being executed here - [Multiple Regions](../guides/reference/multiple_regions.md).

## System Limits
**Which limits are imposed onto actions?**  
All available limits (and the default values) are listed here: [System Settings](../guides/using/system_settings.md). Notable limits are the timeout for functions and the maximum payload that can get posted to a function.

## Developer Support
You can use the [Adobe I/O Runtime Forums](https://forums.adobe.com/community/adobe-io/adobe-io-runtime) for developer support related questions. 

## Customer Support 
You can log tickets using the [Experience league Support] (https://experienceleague.adobe.com/?lang=en&support-tab=home#support) for issues. 
