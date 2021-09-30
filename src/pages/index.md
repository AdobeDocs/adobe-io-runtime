<Hero slots="heading, title"/>

# Adobe I/O Runtime Developer Guide

This documentation provides an overview of Adobe I/O Runtime as well as guides, reference documentation, and tools to help you begin developing your own integrations. 

## Contents

[Quickstart guide:](guides/index.md) A one-page guide to help you quickly get started with Adobe I/O Runtime.

[Overview](guides/overview/index.md)

* [What is Adobe I/O Runtime](guides/overview/what_is_runtime.md)
* [Use Cases for Adobe I/O Runtime](guides/overview/usecases.md)
* [How Adobe I/O Runtime Works](guides/overview/howitworks.md)
* [Adobe I/O Runtime Entities](guides/overview/entities.md)
* [Getting Access](guides/overview/getting_access.md)

[Getting Started](guides/getting-started/index.md)

* [Setting up Your Environment](guides/getting-started/setup.md)
* [Deploying your First Adobe I/O Runtime Function](guides/getting-started/deploy.md)
* [Retrieve Action Invocation Results](guides/getting-started/activations.md)

[Guides](guides/using-runtime/index.md)

* [Creating Actions](guides/using-runtime/creating_actions.md): actions, web actions, invoking and managing, setting parameters
* [Asynchronous Calls](guides/using-runtime/asynchronous_calls.md): how to execute long running async (non-blocking) calls
* [Throughput Tuning](guides/using-runtime/throughput_tuning.md): how to maximize the number of action invocations
* [Security Guide](guides/using-runtime/security_general.md): discover potential security issues and how to address them
* [Securing Web Actions](guides/using-runtime/securing_web_actions.md): learn how to control the access to web actions
* [Creating REST APIs](guides/using-runtime/creating_rest_apis.md): learn to create REST APIs from web actions
* [Using Packages](guides/using-runtime/using_packages.md): Working with packages
* [Logging & Monitoring](guides/using-runtime/logging_monitoring.md): learn how to troubleshoot your actions
* [Debugging](guides/using-runtime/debugging.md): advanced debugging for Node.js actions
* [System Settings](guides/using-runtime/system_settings.md): see the system settings and constraints 
* [CI/CD Pipeline](guides/using-runtime/ci-cd_pipeline.md): understand the tools you have to create a CI/CD Pipeline

[Reference Documentation](guides/reference/index.md)

* [aio CLI](guides/reference/cli_use.md): how to use aio CLI
* [wsk CLI](guides/reference/wsk_use.md): how to use wsk CLI
* [Environment Variables](guides/reference/environment_variables.md): what environment variables do you have access to
* [Multiple Regions](guides/reference/multiple_regions.md): where we run your actions
* [Pre-installed Packages](guides/reference/prepackages.md): what packages are pre-installed 
* [Runtimes](guides/reference/runtimes.md): details about the available runtimes
* [API Reference](guides/reference/api_ref.md): I/O Management API
* [Triggers & Rules](guides/reference/triggersrules.md): working with triggers and rules
* [Sequences & Compositions](guides/reference/sequences_compositions.md): orchestrating actions
* [Packages](guides/reference/packages.md): working with packages
* [Feeds](guides/reference/feeds.md): working with feeds

[Tools](guides/tools/index.md)

* [aio CLI](guides/tools/cli_install.md) - this tool helps you manage your namespaces and the authentication for the wsk CLI
* [wsk CLI](guides/tools/wsk_install.md) - this tool is the main interface for managing your actions/packages/rules/triggers and getting access to activation results/errors/logs
* [wskdeploy CLI](guides/tools/wskdeploy_install.md) - this tool helps you deploy multiple actions and packages

[Resources and Support](support/index.md)

* [FAQ](support/faq.md)
