#!/bin/bash

# npm proto-loader-gen-types --@grpcLib=@grpc/grpc-js --outDir=src/proto/ src/proto/*.proto

sudo ./node_modules/.bin/proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=src/proto/ src/proto/*.proto