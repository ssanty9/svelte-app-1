# svelte-app-1

Svelte app 1 is an application which contains a basic structure with menu header and notifications section.

Sections:

- [Svelte app 1](#svelte-app-1)
  - [Developer Quick Start](#developer-quick-start)

  <!-- - [Workspace Overview](#workspace-overview)
    - [`apps` folder](#apps-folder)
    - [`libs` folder](#libs-folder)
    - [`dist` folder](#dist-folder)
    - [`wiki` folder](#wiki-folder)
    - [config files](#config-files) -->

## Developer Quick Start

Details steps for providing pull-request and about the setup of the repository can be found in the [CONTRIBUTING](wiki/CONTRIBUTING.md) and [REPOSITORY](wiki/REPOSITORY.md) wiki's. The steps below are quick-start steps that will get you to serving an application quickly.

Install Dependencies:

1. Latest NodeJS LTS or Current build is needed. [NodeJs Docs](https://nodejs.org)
2. Install Yarn Package Manager - [Yarn Docs](https://yarnpkg.com) - Optional

Development Steps:

1. Fork the library from github and then follow the steps below by replacing the cloned url with your fork of the repo
2. wrun the following commands in bash/command prompt

   ```bash
       // clone repo locally
       git clone https://github.com/ssanty9/svelte-app-1.git

       // cd to directory
       cd {to root directory where code was cloned into}

       // install dependencies using yarn
       yarn // you can use also a different package manager

       // The project is based on svelte kit so you can serve the app you want by passing the name of the app 
       // default url for this svelte app is https://localhost:5173
       npm run dev
   ```