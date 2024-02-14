---
title: 'The Architecture Behind the IoT Dashboard'
excerpt: "Hey everyone, Szymon here! It’s been a while. Today, I'm excited to share with you an in-depth look at the architecture of the IoT Dashboard, a project that's been with me for a while and is a significant part of my full-stack development journey."
date: '2024-02-14T12:00:00.000Z'
keywords:
  [
    'IoT Dashboard',
    'Architecture',
    'Full-stack development',
    'React',
    'Node.JS',
    'GraphQL',
    'Modularity',
    'CI/CD',
    'MQTT',
    'Personal Project',
  ]
categories: ['Project', 'Personal', 'Technology']
previewImageUrl: 'https://szymonpulut.com/images/iotdashboard.png'
---

Let's kick things off with a quick peek at the web app — it's all about displaying a sleek and clutter-free dashboard, somewhat similar in functionality to [Home Assistant](https://www.home-assistant.io/). I intentionally kept the functionality limited to maintain that clean, minimalist design. IoT Dashboard is deployed on a Raspberry Pi and displayed on a simple tablet mounted in my house.

![Screenshot of IoT Dashboard](/images/iotdashboard.webp)

If you'd like to visit the repository, the link is here [https://github.com/szymonpulut/IoTDashboard/](https://github.com/szymonpulut/IoTDashboard/).

## A Bit of Background

This application has been on quite a journey. I first built it a few years ago using pure JavaScript and direct DOM manipulations. Then, as I was learning React in 2019, I felt it was time for a rewrite. This transition marked a significant milestone for me, as it really showcased the power and simplicity of React.

This current version is the third iteration of the app. My goal this time was to elevate it to a production-grade level. I also wanted to challenge myself by making it full-stack, using Node.JS for the backend and GraphQL for seamless frontend-backend communication.

## Big Picture Overview

Throughout the development process for both UI and backend applications, I focused on a couple of core principles:

1. **Modularity**: The app needed to be fully modular, making it easier to understand and extend in the future.

2. **Streamlined Process**: I automated the CI/CD process, adopting tools like [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) with [Release Please](https://github.com/googleapis/release-please), along with [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) for code styling and rule enforcement. [Husky](https://typicode.github.io/husky/) handles linting on commit. While automated testing wasn't a priority initially, I plan to add some basic coverage down the road.

3. **File Naming Conventions**: Both frontend and backend codebases adhere to clear naming conventions, facilitating file location and organization.

## Frontend: The User Interface

### Overview

The UI is neatly organized into sections, aligned with CSS grid display areas. Key features include a clock, weather forecast, air quality measurements, temperature sensor data from around the house, control functionality for front gates, and integration with a shared Google Calendar.

For local development, I stick to simple `npm` commands, while deployment is made easy with [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/).

### Technical Details

The frontend focuses on simplicity, as most of the heavy lifting is done by the backend. It's built with React and TypeScript. Styled with [styled-components](https://styled-components.com/), and utilizes [Apollo Client](https://www.apollographql.com/docs/react/) for GraphQL communications. The frontend build process is powered by lightning-fast [Vite](https://vitejs.dev/).

## Backend: The Real Core

My expertise lies more in frontend development, so this project has been a valuable learning experience. I learned a lot about backend architecture, coding in Node.JS, and implementing a GraphQL server.

### Apollo Server & GraphQL

To maintain modularity, I relied on [@graphql-tools](https://the-guild.dev/graphql/tools) and custom code to ensure flexibility in schema and resolver management.

### Modules

Modules, housed in the [/api/ directory](https://github.com/szymonpulut/IoTDashboard/tree/55f15878f21f588b3aceaa883d6a3b697a0a8cd8/server/src/api), come in two types:

1. **Internal**: These modules interact with internal smart home systems, like [front gate control](https://github.com/szymonpulut/IoTDashboard/tree/55f15878f21f588b3aceaa883d6a3b697a0a8cd8/server/src/api/gateControl), using [MQTT](https://mqtt.org/) for communication (MQTT is a message broker similar to RabbitMQ or Kafka, specifically optimized for IoT devices).

2. **External**: These modules interface with external APIs, like the [weather forecast](https://github.com/szymonpulut/IoTDashboard/tree/55f15878f21f588b3aceaa883d6a3b697a0a8cd8/server/src/api/weather), primarily fetching data via REST APIs. Responses are parsed with [zod](https://github.com/colinhacks/zod) for full type safety.

GraphQL schemas are defined in `.schema.graphql` files, with exposed actions listed in `.resolver.` files. Actions themselves are in `.dataSources.` and `.mutations.` files (for fetching and mutating data, respectively). Internal modules may also have `.handler.` files in a `/handlers/` subdirectory for handling incoming MQTT system broadcasts.

### Custom Utilities

- **Fetching**: I've developed a [data-fetching function](https://github.com/szymonpulut/IoTDashboard/blob/55f15878f21f588b3aceaa883d6a3b697a0a8cd8/server/src/utils/fetchData.utils.ts) for consistent integration with `zod` and [simple caching](https://github.com/szymonpulut/IoTDashboard/blob/main/server/src/utils/cacheManager.utils.ts).

- **MQTT**: The MQTT setup, detailed in the [/mqtt/ directory](https://github.com/szymonpulut/IoTDashboard/tree/55f15878f21f588b3aceaa883d6a3b697a0a8cd8/server/src/mqtt), includes pre-defined topics and mappings for subscriptions and mutations. Secrets are managed via [mqtt.topics.secret - example](https://github.com/szymonpulut/IoTDashboard/blob/55f15878f21f588b3aceaa883d6a3b697a0a8cd8/server/src/mqtt/mqtt.topics.secret.example.ts), avoiding hardcoded values.

## Challenges Faced

The journey wasn't without its hurdles. Here are a couple of interesting challenges I encountered:

1. **Setting up TypeScript in the backend** proved more cumbersome than expected due to Node.JS's limitations in this area. Overcoming issues with `tsconfig` as well as imports during build & dev flows was particularly challenging.

2. **On the backend’s side, managing multiple GraphQL resolvers and schemas** posed tooling-related hurdles, which was especially evident with separate modules. While centralizing everything by hardcoding resolver addresses was an option, I aimed for an auto-detection system.

3. **Integrating OAuth APIs** introduced complexities, especially since I was more accustomed to simpler authentication mechanisms like JWT. Testing the integration involved using the GraphQL layer and added to the perceived difficulty.

4. **Battling perfectionism** might sound like a cliché, but it was a real struggle. It took so long for me to publish this article because there always seemed to be another item on the TODO list (that would make the project so much better and/or professional). In the end, I decided to “force-release” this article even though there are some unfinished aspects, as a way to push past that barrier 😉

## TODO

There's always room for improvement! Here's what's on my radar:

1. **Introduce automated testing**. This wasn’t yet a priority, since this is a non-customer-facing application that does not serve a critical role. However, I appreciate the comfort of working with well-tested code (being able to freely refactor and plan to invest some time in it.

2. **Move certain interactions (night & silent mode, webcam view) into a menu**. As I'm more accustomed to desktop-oriented applications, deciding on the best approach for triggering/displaying the menu is still up in the air.

3. **Find out a better way to store MQTT-related secrets** rather than a `.gitignored` `.ts` file. This issue is especially frustrating when setting up the development/build environment on a new machine.

4. **Apply refactors across both server & client applications**. On the client side, using React Portal for the webcam modal is a starting point, along with improving the setup in `main.tsx` & `App.tsx` is on my list. On the server side, renaming `externalSchemas` into `DTO` would be fitting, as well as a few changes in tooling - better code generation from GraphQL schemas.

## Conclusion

The IoT Dashboard isn't just a project — it's a constant companion throughout my career journey. With its modular design and efficient data handling, I'm proud of how far it's come. But perhaps most importantly, I am proud because I use it in my everyday life 😁

Stay tuned for more tech insights and stories from my journey in the world of software development. Until next time, keep coding and exploring! 🚀👨‍💻
