# Tractor Store 

A micro front-end implementation of [The Tractor Store](https://micro-frontends.org/tractor-store/), created from the [Zephyr's example](https://github.com/ZephyrCloudIO/zephyr-examples/tree/main/examples/react-rspack-tractor-2.0) to showcase Module Federation + Zephyr integration.

**Live Demo:** [Tractor Store](https://t-latest-tractor-store-v2-app-tractor-store-victorseara-ze.zephyrcloud.app)

## About This Implementation
The example was choose because it includes real-world requirements and common challenges faced while implementing a micro front-end architecture, allowing open-ended conversations about several topics and technologies involved in the process. 

We tried to solve a [few limitations](https://github.com/ZephyrCloudIO/zephyr-examples/tree/main/examples/react-rspack-tractor-2.0#limitations) mentioned by the original authors and expand the example with the ideas proposed by the author in the [challenge presentation](https://www.youtube.com/watch?v=12TN7Zq7VxM&t=132s). 

You can learn more about the challenge by visiting [micro-frontends.org](https://micro-frontends.org/tractor-store/) and about the implementation details in [Zephyr's implementaiton](https://github.com/ZephyrCloudIO/zephyr-examples/tree/main/examples/react-rspack-tractor-2.0#limitations).

### Implemented changes
- [ci: added build and deploy pipeline](https://github.com/victorseara/tractor-store/blob/main/.github/workflows/build.yaml): added a simple pipeline to build, test and deploy the applications to Zephyr;
- [feat(checkout): add cart remote](https://github.com/victorseara/tractor-store/pull/1): added a new remote for the checkout team to share the `MiniCart` component breaking circular dependency between `checkout` and `explore` teams;
- [build: enable typescript generation in rspack config](https://github.com/victorseara/tractor-store/pull/2): enable typescript generation for remotes;
- [feat: add component library](https://github.com/victorseara/tractor-store/pull/3): added a new remote to share common UI elements;
- [tests: add playwright and setup a basic test for recommendations section](https://github.com/victorseara/tractor-store/pull/4): added tests to support the creation of Team inspire remote;
- [feat(inspire): add inspire remote](https://github.com/victorseara/tractor-store/pull/5): extract the Recommendations feature from `explore` and added to a new remote owned by the `inspire` team;

### Installation

**Fork** this repository. Then use `pnpm` to bootstrap the mono repo. Make sure to have `pnpm` >= v9 installed for this.

Run the following command inside the repository:

```sh
pnpm install
```

### Running the Code

Build and serve the application with `DTS` enabled to set up the development environment: 

```sh
DTS=true pnpm build && DTS=true pnpm serve
``` 


### Deploy to Zephyr Cloud

You can deploy to Zephyr Cloud building the packages:

```sh
WITH_ZE=true pnpm build
```
Or deploy to cloud on each save by running: 
```sh
WITH_ZE=true pnpm serve
```

##### We have now deployed everything! You can open our [Chrome Extension](https://chromewebstore.google.com/detail/zephyr-mission-control/liflhldchhinbaeplljlplhnbkdidedn), 

Select this application on  Chrome Extension, toggle on `Live reload` to inspect file changes while running `WITH_ZE=true pnpm serve` 
