## Nest-gRPC-prac

### SERVER

```sh
cd server
npm install
npm run start
```

### CLIENT

```sh
cd client
npm install
npm run start
```

### Generate Code form Proto
```sh
cd server
sudo ./node_modules/.bin/proto-loader-gen-types --grpcLib=@grpc/grpc-js --outDir=src/proto/ src/proto/*.proto
```