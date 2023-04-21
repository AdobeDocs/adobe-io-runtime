# Configuring Proxy 

Runtime does not expose egress IPs due to security reasons.If customers need a way to securely communicate with their backend services, they can use a proxy in between their system and Runtime. 
This can be done using one of the following solutions: 

1. Setting up an Azure Front Door
2. Configuring a CDN in front of Runtime
3. Using Mutual TLS (mTLS) between I/O Runtime actions and an external service. 

## Using a Content Delivery Network (CDN)

It is always a good idea to use a CDN in front of your web actions, as it improves security. Many CDNs offer built-in security features such as DDoS protection, and web application firewall (WAF). These features can protect your web actions against DDoS attacks and other security threats.

You could secure your web action using any CDN by following these steps: 

1. Choose a CDN provider: There are several CDN providers available such as Cloudflare, Fastly, Akamai, and others. Choose a provider that meets your needs and sign up for their service.
2. Configure the CDN: Once you have signed up for the CDN service, configure it to point to Runtime’s domain name: `<your-namespace>.adobeioruntime.net`. This can usually be done through the CDN provider's web interface or API.
3. Configure your action to use a security header. See: [Securing Web Actions](securing_web_actions.md). 
4. Configure the CDN to add the `X-Require-Whisk-Auth` security header, with the secret hash value, for all requests made to the secured web actions.
