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
      case "#!adobedocs/adobeio-runtime/master/getting-started/setup.md":
        redirectPath = prefixPath + "guides/getting-started/setup/";
        break;
      case "#!adobedocs/adobeio-runtime/master/getting-started/deploy.md":
        redirectPath = prefixPath + "guides/getting-started/deploy/";
        break;
      case "#!adobedocs/adobeio-runtime/master/getting-started/activations.md":
        redirectPath = prefixPath + "guides/getting-started/activations/";
        break;
      case "#!adobedocs/adobeio-runtime/master/guides.md":
        redirectPath = prefixPath + "guides/using/";
        break;
      case "#!adobedocs/adobeio-runtime/master/guides/creating_actions.md":
        redirectPath = prefixPath + "guides/using/creating_actions/";
        break;
      case "#!adobedocs/adobeio-runtime/master/guides/asynchronous_calls.md":
        redirectPath = prefixPath + "guides/using/asynchronous_calls/";
        break;
      case "#!adobedocs/adobeio-runtime/master/guides/throughput_tuning.md":
        redirectPath = prefixPath + "guides/using/throughput_tuning/";
        break;
      case "#!adobedocs/adobeio-runtime/master/guides/security_general.md":
        redirectPath = prefixPath + "guides/using/security_general/";
        break;
      case "#!adobedocs/adobeio-runtime/master/guides/securing_web_actions.md":
        redirectPath = prefixPath + "guides/using/securing_web_actions/";
        break;
      case "#!adobedocs/adobeio-runtime/master/guides/creating_rest_apis.md":
        redirectPath = prefixPath + "guides/using/creating_rest_apis/";
        break;
      case "#!adobedocs/adobeio-runtime/master/guides/using_packages.md":
        redirectPath = prefixPath + "guides/using/using_packages/";
        break;
      case "#!adobedocs/adobeio-runtime/master/guides/logging_monitoring.md":
        redirectPath = prefixPath + "guides/using/logging_monitoring/";
        break;
      case "#!adobedocs/adobeio-runtime/master/guides/debugging.md":
        redirectPath = prefixPath + "guides/using/debugging/";
        break;
      case "#!adobedocs/adobeio-runtime/master/guides/system_settings.md":
        redirectPath = prefixPath + "guides/using/system_settings/";
        break;
      case "#!adobedocs/adobeio-runtime/master/guides/ci-cd_pipeline.md":
        redirectPath = prefixPath + "guides/using/ci-cd_pipeline/";
        break;
      case "#!adobedocs/adobeio-runtime/master/guides/ci-cd_pipeline.md":
        redirectPath = prefixPath + "guides/reference/";
        break;
      case "#!adobedocs/adobeio-runtime/master/reference/cli_use.md":
        redirectPath = prefixPath + "guides/reference/cli_use/";
        break;
      case "#!adobedocs/adobeio-runtime/master/reference/wsk_use.md":
        redirectPath = prefixPath + "guides/reference/wsk_use/";
        break;
      case "#!adobedocs/adobeio-runtime/master/reference/environment_variables.md":
        redirectPath = prefixPath + "guides/reference/environment_variables/";
        break;
      case "#!adobedocs/adobeio-runtime/master/reference/multiple_regions.md":
        redirectPath = prefixPath + "guides/reference/multiple_regions/";
        break;
      case "#!adobedocs/adobeio-runtime/master/reference/prepackages.md":
        redirectPath = prefixPath + "guides/reference/prepackages/";
        break;
      case "#!adobedocs/adobeio-runtime/master/reference/runtimes.m":
        redirectPath = prefixPath + "guides/reference/runtimes/";
        break;
      case "#!adobedocs/adobeio-runtime/master/reference/api_ref.md":
        redirectPath = prefixPath + "guides/reference/api_ref/";
        break;
      case "#!adobedocs/adobeio-runtime/master/reference/triggersrules.md":
        redirectPath = prefixPath + "guides/reference/triggersrules/";
        break;
      case "#!adobedocs/adobeio-runtime/master/reference/sequences_compositions.md":
        redirectPath = prefixPath + "guides/reference/sequences_compositions/";
        break;
      case "#!adobedocs/adobeio-runtime/master/reference/packages.md":
        redirectPath = prefixPath + "guides/reference/packages/";
        break;
      case "#!adobedocs/adobeio-runtime/master/reference/feeds.md":
        redirectPath = prefixPath + "guides/reference/feeds/";
        break;
      case "#!adobedocs/adobeio-runtime/master/tools.md":
        redirectPath = prefixPath + "guides/tools/";
        break;
      case "#!adobedocs/adobeio-runtime/master/tools/cli_install.md":
        redirectPath = prefixPath + "guides/tools/cli_install/";
        break;
      case "#!adobedocs/adobeio-runtime/master/tools/wsk_install.md":
        redirectPath = prefixPath + "guides/tools/wsk_install/";
        break;
      case "#!adobedocs/adobeio-runtime/master/tools/wskdeploy_install.md":
        redirectPath = prefixPath + "guides/tools/wskdeploy_install/";
        break;
      case "#!adobedocs/adobeio-runtime/master/resources.md":
        redirectPath = prefixPath + "support/";
        break;
      case "#!adobedocs/adobeio-runtime/master/resources/faq.md":
        redirectPath = prefixPath + "support/faq/";
        break;
    }
    window.location.href =
      "http://" + window.location.host + "/" + redirectPath;
  }
})();