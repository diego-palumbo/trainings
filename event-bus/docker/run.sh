#!/bin/bash

docker run --net example --name event-bus -p 4000:4000 -d diegopalumbo/event-bus
