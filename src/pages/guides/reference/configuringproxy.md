## Configuring a Secure Proxy 

Runtime does not expose egress IPs due to security reasons.If customers need a way to securely communicate with their backend services, they can use a proxy in between their backend service and Runtime. 

This can be done using the following solution: 

* Using Mutual TLS (mTLS) between I/O Runtime and an external service. 
