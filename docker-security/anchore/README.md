# Overview

## Description

The Anchore Engine is an open source project that provides a centralized service for inspection, analysis and certification of container images. The Anchore engine is provided as a Docker container image that can be run standalone, or within an orchestration platform such as Kubernetes, Docker Swarm, Rancher, Amazon ECS, and other container orchestration platforms.

## Instructions

1. Run ```install.sh``` which will also bring up the anchore engine.
2. Run ```scan.sh``` to scan Odoo.

**Other commands (examples)**

Add an image to the Anchore Engine to scan it.

```
anchore-cli image add docker.io/library/debian:latest
```

Wait for an image to transition to ``analyzed`` after adding it.
```
anchore-cli image wait docker.io/library/debian:latest
```

List images analyzed by the Anchore Engine
```
anchore-cli image list
```

Get summary information for a specified image
```
anchore-cli image get docker.io/library/debian:latest
```

Perform a vulnerability scan on an image
```
anchore-cli image vuln docker.io/library/debian:latest os
```

Perform a policy evaluation on an image
```
anchore-cli evaluate check docker.io/library/debian:latest --detail
```

List operating system packages present in an image
```
anchore-cli image content docker.io/library/debian:latest os
```

Subscribe to receive webhook notifications when new CVEs are added to an update
```
anchore-cli subscription activate vuln_update docker.io/library/debian:latest
```

Scan a local image
```
./inline_scan.sh analyze -u $ANCHORE_CLI_USER -p $ANCHORE_CLI_PASS -r $ANCHORE_CLI_URL -f ~/git/OdooDocker/Dockerfile -g esdc/odoo:13.0-latest
```
