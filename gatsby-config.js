/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  siteMetadata: {
    home: {
      title: "Adobe I/O Runtime",
      path: "/runtime"
    },
    pages: [
      {
        title: 'Overview',
        path: '/'
      },
      {
        title: 'Guides',
        path: 'guides'
      },
      {
        title: 'Support',
        path: 'support'
      }
    ],
    subPages: [
      {
        "path": "guides/index.md",
        "title": "Quickstart Guide"
      },
      {
        "pages": [
          {
            "path": "guides/overview/what_is_runtime.md",
            "title": "What is Adobe I/O Runtime"
          },
          {

            "path": "guides/overview/usecases.md",
            "title": "Use cases"
          },
          {
            "path": "guides/overview/howitworks.md",
            "title": "How Adobe I/O Runtime Works"
          },
          {
            "path": "guides/overview/entities.md",
            "title": "Adobe I/O Runtime Entities"
          },
          {
            "path": "guides/overview/getting_access.md",
            "title": "Getting Access"
          }
        ],
        "path": "guides/overview/index.md",
        "title": "Overview"
      },
      {
        "pages": [
          {
            "path": "guides/getting-started/setup.md",
            "title": "Setting up Your Environment"
          },
          {
            "path": "guides/getting-started/deploy.md",
            "title": "Deploying your First Adobe I/O Runtime Function"
          },
          {
            "path": "guides/getting-started/activations.md",
            "title": "Retrieve Action Invocation Results"
          }
        ],
        "path": "guides/getting-started/index.md",
        "title": "Getting Started with Adobe I/O Runtime"
      },
      {
        "pages": [
          {
            "path": "guides/using/creating_actions.md",
            "title": "Creating Actions"
          },
          {
            "path": "guides/using/asynchronous_calls.md",
            "title": "Asynchronous Calls"
          },
          {
            "path": "guides/using/throughput_tuning.md",
            "title": "Throughput Tuning"
          },
          {
            "path": "guides/using/security_general.md",
            "title": "Security Guide"
          },
          {
            "path": "guides/using/securing_web_actions.md",
            "title": "Securing Web Actions"
          },
          {
            "path": "guides/using/creating_rest_apis.md",
            "title": "Creating REST APIs"
          },
          {
            "path": "guides/using/using_packages.md",
            "title": "Using Packages"
          },
          {
            "path": "guides/using/logging_monitoring.md",
            "title": "Logging & Monitoring"
          },
          {
            "path": "guides/using/debugging.md",
            "title": "Debugging"
          },
          {
            "path": "guides/using/system_settings.md",
            "title": "System Settings"
          },
          {
            "path": "guides/using/ci-cd_pipeline.md",
            "title": "CI/CD Pipeline"
          },
          {
            "path": "guides/using/troubleshooting.md",
            "title": "Troubleshooting"
          }
        ],
        "path": "guides/using/index.md",
        "title": "Using Adobe I/O Runtime"
      },
      {
        "pages": [
          {
            "path": "guides/reference/cli_use.md",
            "title": "Using aio CLI"
          },
          {
            "path": "guides/reference/wsk_use.md",
            "title": "Using the wsk CLI"
          },
          {
            "path": "guides/reference/environment_variables.md",
            "title": "Environment Variables"
          },
          {
            "path": "guides/reference/multiple_regions.md",
            "title": "Multiple Regions"
          },
          {
            "path": "guides/reference/prepackages.md",
            "title": "Pre-installed packages"
          },
          {
            "path": "guides/reference/runtimes.md",
            "title": "Runtimes"
          },
          {
            "path": "guides/reference/api_ref.md",
            "title": "API Reference"
          },
          {
            "path": "guides/reference/triggersrules.md",
            "title": "Triggers & Rules"
          },
          {
            "path": "guides/reference/sequences_compositions.md",
            "title": "Sequences & Compositions"
          },
          {
            "path": "guides/reference/packages.md",
            "title": "Packages"
          },
          {
            "path": "guides/reference/feeds.md",
            "title": "Feeds"
          }
        ],
        "path": "guides/reference/index.md",
        "title": "Adobe I/O Runtime reference documentation"
      },
      {
        "pages": [
          {
            "path": "guides/tools/cli_install.md",
            "title": "Setting up the aio CLI"
          },
          {
            "path": "guides/tools/wsk_install.md",
            "title": "Setting up the wsk CLI"
          },
          {
            "path": "guides/tools/wskdeploy_install.md",
            "title": "Setting up the wskdeploy CLI"
          }
        ],
        "path": "guides/tools/index.md",
        "title": "Tools"
      },
      {
        "pages": [
          {
            "path": "support/faq.md",
            "title": "FAQ"
          }
        ],
        "path": "support/index.md",
        "title": "Resources & support"
      }
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`],
  pathPrefix: process.env.PATH_PREFIX || '/runtime/docs/'
};
