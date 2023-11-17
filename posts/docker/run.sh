#!/bin/bash

docker run --net example --name posts -p 4000:4000 -d diegopalumbo/posts
