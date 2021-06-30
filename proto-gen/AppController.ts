// Original file: src/proto/app.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { NumberArray as _app_NumberArray, NumberArray__Output as _app_NumberArray__Output } from '../app/NumberArray';
import type { SumOfNumberArray as _app_SumOfNumberArray, SumOfNumberArray__Output as _app_SumOfNumberArray__Output } from '../app/SumOfNumberArray';

export interface AppControllerClient extends grpc.Client {
  sum(argument: _app_NumberArray, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _app_SumOfNumberArray__Output) => void): grpc.ClientUnaryCall;
  sum(argument: _app_NumberArray, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _app_SumOfNumberArray__Output) => void): grpc.ClientUnaryCall;
  sum(argument: _app_NumberArray, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _app_SumOfNumberArray__Output) => void): grpc.ClientUnaryCall;
  sum(argument: _app_NumberArray, callback: (error?: grpc.ServiceError, result?: _app_SumOfNumberArray__Output) => void): grpc.ClientUnaryCall;
  sum(argument: _app_NumberArray, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _app_SumOfNumberArray__Output) => void): grpc.ClientUnaryCall;
  sum(argument: _app_NumberArray, metadata: grpc.Metadata, callback: (error?: grpc.ServiceError, result?: _app_SumOfNumberArray__Output) => void): grpc.ClientUnaryCall;
  sum(argument: _app_NumberArray, options: grpc.CallOptions, callback: (error?: grpc.ServiceError, result?: _app_SumOfNumberArray__Output) => void): grpc.ClientUnaryCall;
  sum(argument: _app_NumberArray, callback: (error?: grpc.ServiceError, result?: _app_SumOfNumberArray__Output) => void): grpc.ClientUnaryCall;
  
}

export interface AppControllerHandlers extends grpc.UntypedServiceImplementation {
  sum: grpc.handleUnaryCall<_app_NumberArray__Output, _app_SumOfNumberArray>;
  
}

export interface AppControllerDefinition extends grpc.ServiceDefinition {
  sum: MethodDefinition<_app_NumberArray, _app_SumOfNumberArray, _app_NumberArray__Output, _app_SumOfNumberArray__Output>
}
