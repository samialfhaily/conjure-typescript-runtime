/**
 * @license
 * Copyright 2024 Palantir Technologies, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export interface ISuccess<T> {
  readonly status: "success";
  readonly response: T;
};

export interface IFailure<E> {
  readonly status: "failure";
  readonly error: E;
};

export type Result<T, E> = ISuccess<T> | IFailure<E>;

export const isSuccess = <T, E>(result: Result<T, E>): result is ISuccess<T> => result.status === "success";

export const isFailure = <T, E>(result: Result<T, E>): result is IFailure<E> => result.status === "failure";
