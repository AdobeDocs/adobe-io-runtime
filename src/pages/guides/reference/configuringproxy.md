# Configuring Proxy 

Runtime does not expose egress IPs due to security reasons. If customers need a way to securely communicate with their backend services, they can use a proxy in between their system and Runtime. 

This can be done as following: 

1. Setting up an Azure Front Door
2. Configuring a CDN in front of Runtime 
3. Using Mutual TLS (mTLS) between I/O Runtime actions and an external service
