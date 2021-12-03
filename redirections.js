/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

(() => {
  let prefixPath =
    window.location.host.indexOf("localhost") === 0 ? "" : "runtime/docs/";
  let redirectPath = "";

  if (
    (window.location.hash !== "" &&
      window.location.pathname === "/" &&
      window.location.host.indexOf("localhost") === 0) ||
    (window.location.hash !== "" &&
      window.location.pathname === "/runtime/docs/" &&
      window.location.host.indexOf("localhost") < 0)
  ) {
    switch (window.location.hash) {
      case "#!adobedocs/adobeio-runtime/master/quickstart.md":
        redirectPath = prefixPath + "guides/";
        break;
      case "#!adobedocs/adobeio-runtime/master/overview.md":
        redirectPath = prefixPath + "guides/overview/";
        break;
        case "#!adobedocs/adobeio-runtime/master/overview/what_is_runtime.md":
          redirectPath = prefixPath + "guides/overview/what_is_runtime/";
          break;
        case "#!adobedocs/adobeio-runtime/master/overview/usecases.md":
          redirectPath = prefixPath + "guides/overview/usecases/";
          break;
        case "#!adobedocs/adobeio-runtime/master/overview/howitworks.md":
          redirectPath = prefixPath + "guides/overview/howitworks/";
          break;
        case "#!adobedocs/adobeio-runtime/master/overview/entities.md":
          redirectPath = prefixPath + "guides/overview/entities/";
          break;
        case "#!adobedocs/adobeio-runtime/master/overview/getting_access.md":
          redirectPath = prefixPath + "guides/overview/getting_access/";
          break;
        case "#!adobedocs/adobeio-runtime/master/getting_started.md":
          redirectPath = prefixPath + "guides/getting-started/";
          break;
        case "#!adobedocs/adobeio-runtime/master/getting_started.md":
          redirectPath = prefixPath + "guides/getting-started/";
          break;
    }
    window.location.href =
      "http://" + window.location.host + "/" + redirectPath;
  }

// #!adobedocs/adobeio-runtime/master/getting-started/setup.md	guides/getting-started/setup/
// #!adobedocs/adobeio-runtime/master/getting-started/deploy.md	guides/getting-started/deploy/
// #!adobedocs/adobeio-runtime/master/getting-started/activations.md	guides/getting-started/activations/
// #!adobedocs/adobeio-runtime/master/guides.md	guides/using/
// #!adobedocs/adobeio-runtime/master/guides/creating_actions.md	guides/using/creating_actions/
// #!adobedocs/adobeio-runtime/master/guides/asynchronous_calls.md	guides/using/asynchronous_calls/
// #!adobedocs/adobeio-runtime/master/guides/throughput_tuning.md	guides/using/throughput_tuning/
// #!adobedocs/adobeio-runtime/master/guides/security_general.md	guides/using/security_general/
// #!adobedocs/adobeio-runtime/master/guides/securing_web_actions.md	guides/using/securing_web_actions/
// #!adobedocs/adobeio-runtime/master/guides/creating_rest_apis.md	guides/using/creating_rest_apis/
// #!adobedocs/adobeio-runtime/master/guides/using_packages.md	guides/using/using_packages/
// #!adobedocs/adobeio-runtime/master/guides/logging_monitoring.md	guides/using/logging_monitoring/
// #!adobedocs/adobeio-runtime/master/guides/debugging.md	guides/using/debugging/
// #!adobedocs/adobeio-runtime/master/guides/system_settings.md	guides/using/system_settings/
// #!adobedocs/adobeio-runtime/master/guides/ci-cd_pipeline.md	guides/using/ci-cd_pipeline/
// #!adobedocs/adobeio-runtime/master/reference.md	guides/reference/
// #!adobedocs/adobeio-runtime/master/reference/cli_use.md	guides/reference/cli_use/
// #!adobedocs/adobeio-runtime/master/reference/wsk_use.md	guides/reference/wsk_use/
// #!adobedocs/adobeio-runtime/master/reference/environment_variables.md	guides/reference/environment_variables/
// #!adobedocs/adobeio-runtime/master/reference/multiple_regions.md	guides/reference/multiple_regions/
// #!adobedocs/adobeio-runtime/master/reference/prepackages.md	guides/reference/prepackages/
// #!adobedocs/adobeio-runtime/master/reference/runtimes.md	guides/reference/runtimes/
// #!adobedocs/adobeio-runtime/master/reference/api_ref.md	guides/reference/api_ref/
// #!adobedocs/adobeio-runtime/master/reference/triggersrules.md	guides/reference/triggersrules/
// #!adobedocs/adobeio-runtime/master/reference/sequences_compositions.md	guides/reference/sequences_compositions/
// #!adobedocs/adobeio-runtime/master/reference/packages.md	guides/reference/packages/
// #!adobedocs/adobeio-runtime/master/reference/feeds.md	guides/reference/feeds/
// #!adobedocs/adobeio-runtime/master/tools.md	guides/tools/
// #!adobedocs/adobeio-runtime/master/tools/cli_install.md	guides/tools/cli_install/
// #!adobedocs/adobeio-runtime/master/tools/wsk_install.md	guides/tools/wsk_install/
// #!adobedocs/adobeio-runtime/master/tools/wskdeploy_install.md	guides/tools/wskdeploy_install/
// #!adobedocs/adobeio-runtime/master/resources.md	support/
// #!adobedocs/adobeio-runtime/master/resources/faq.md	support/faq/