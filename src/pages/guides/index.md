# I/O Runtime Quickstart Guide

Serverless platforms can solve a wide range of business requirements while greatly reducing the complexity associated with development and operations. However, in order to be successful, you need to consider the strengths of serverless platforms  while also being mindful (and finding ways to work around) the limitations. 

This quickstart guide explores the most critical of these considerations as they apply to I/O Runtime.

## Programming Model

Namespaces, actions, packages, shareable, compositions and web actions/APIs

Developer can write the code in JavaScript and it will be executed by a Node.js environment. This means they can also use any of the available Node modules.

Code is organized in actions (just another name for function) and gets deployed in a namespace (a namespace is owned by one tenant, and a tenant can have multiple namespaces).

An action can be invoked via an HTTP call (RESTful call or HTTP call) or from another action. Actions can be chained together in order to create complex flows using sequences (single chain of action executed one at a time and the result being passed to the next one) or compositions (trees of actions where you can take a decision at each node what action to execute next). 

Actions can be organized into packages. You can create as many packages you want inside of a namespace. You use packages to organize the code, manage different versions for the same action or to share the code with other tenants/applications. When you mark a package as shareable, anyone who has the full name, can bind that package to his own namespace (think of a symbolic link).


