# Theia as a Binary

🚨  This repo does not contain a working solution yet!

The goal of this repo is to get a working example of building [Theia](https://github.com/theia-ide/theia) as a binary
and run it inside a Docker container.

There are various reasons why this is desirable:

- Create Docker images that only contain the minimal code needed to run Theia.
- Create Docker images with a different Node runtime version (Theia currently requires Node 8).

Currently the goal is to get it to work with either [nexe](https://github.com/nexe/nexe) or [pkg](https://github.com/zeit/pkg)
and eventually with both.

# Building with nexe

yarn go:nexe

# Running the theia-nexe container

yarn run:nexe

# Building with pkg

yarn go:pkg

# Running the theia-pkg container

yarn run:pkg
