"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};

// src/index.ts
var src_exports = {};
__export(src_exports, {
  AbortError: () => AbortError,
  AuthenticationError: () => AuthenticationError,
  AuthorizationError: () => AuthorizationError,
  Client: () => Client,
  ClientClosedError: () => ClientClosedError,
  ClientError: () => ClientError,
  ContendedTransactionError: () => ContendedTransactionError,
  DateStub: () => DateStub,
  Document: () => Document,
  DocumentReference: () => DocumentReference,
  EmbeddedSet: () => EmbeddedSet,
  FaunaError: () => FaunaError,
  FetchClient: () => FetchClient,
  InvalidRequestError: () => InvalidRequestError,
  LONG_MAX: () => LONG_MAX,
  LONG_MIN: () => LONG_MIN,
  Module: () => Module,
  NamedDocument: () => NamedDocument,
  NamedDocumentReference: () => NamedDocumentReference,
  NetworkError: () => NetworkError,
  NodeHTTP2Client: () => NodeHTTP2Client,
  NullDocument: () => NullDocument,
  Page: () => Page,
  ProtocolError: () => ProtocolError,
  QueryCheckError: () => QueryCheckError,
  QueryRuntimeError: () => QueryRuntimeError,
  QueryTimeoutError: () => QueryTimeoutError,
  ServiceError: () => ServiceError,
  ServiceInternalError: () => ServiceInternalError,
  ServiceTimeoutError: () => ServiceTimeoutError,
  SetIterator: () => SetIterator,
  TaggedTypeFormat: () => TaggedTypeFormat,
  ThrottlingError: () => ThrottlingError,
  TimeStub: () => TimeStub,
  endpoints: () => endpoints,
  fql: () => fql,
  getDefaultHTTPClient: () => getDefaultHTTPClient,
  isHTTPResponse: () => isHTTPResponse
});
module.exports = __toCommonJS(src_exports);

// src/client-configuration.ts
var endpoints = {
  default: new URL("https://db.fauna.com"),
  local: new URL("http://localhost:8443"),
  localhost: new URL("http://localhost:8443")
};

// src/errors.ts
var FaunaError = class extends Error {
  constructor(...args) {
    super(...args);
  }
};
var ServiceError = class extends FaunaError {
  httpStatus;
  code;
  queryInfo;
  constraint_failures;
  constructor(failure, httpStatus) {
    super(failure.error.message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ServiceError);
    }
    this.name = "ServiceError";
    this.code = failure.error.code;
    this.httpStatus = httpStatus;
    const info = {
      txn_ts: failure.txn_ts,
      summary: failure.summary,
      query_tags: failure.query_tags,
      stats: failure.stats
    };
    this.queryInfo = info;
    this.constraint_failures = failure.error.constraint_failures;
  }
};
var QueryRuntimeError = class extends ServiceError {
  constructor(failure, httpStatus) {
    super(failure, httpStatus);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, QueryRuntimeError);
    }
    this.name = "QueryRuntimeError";
  }
};
var QueryCheckError = class extends ServiceError {
  constructor(failure, httpStatus) {
    super(failure, httpStatus);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, QueryCheckError);
    }
    this.name = "QueryCheckError";
  }
};
var InvalidRequestError = class extends ServiceError {
  constructor(failure, httpStatus) {
    super(failure, httpStatus);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, InvalidRequestError);
    }
    this.name = "InvalidRequestError";
  }
};
var AbortError = class extends ServiceError {
  abort;
  constructor(failure, httpStatus) {
    super(failure, httpStatus);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, QueryCheckError);
    }
    this.name = "AbortError";
    this.abort = failure.error.abort;
  }
};
var AuthenticationError = class extends ServiceError {
  constructor(failure, httpStatus) {
    super(failure, httpStatus);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AuthenticationError);
    }
    this.name = "AuthenticationError";
  }
};
var AuthorizationError = class extends ServiceError {
  constructor(failure, httpStatus) {
    super(failure, httpStatus);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AuthorizationError);
    }
    this.name = "AuthorizationError";
  }
};
var ContendedTransactionError = class extends ServiceError {
  constructor(failure, httpStatus) {
    super(failure, httpStatus);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, InvalidRequestError);
    }
    this.name = "ContendedTransactionError";
  }
};
var ThrottlingError = class extends ServiceError {
  constructor(failure, httpStatus) {
    super(failure, httpStatus);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ThrottlingError);
    }
    this.name = "ThrottlingError";
  }
};
var QueryTimeoutError = class extends ServiceError {
  stats;
  constructor(failure, httpStatus) {
    super(failure, httpStatus);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, QueryTimeoutError);
    }
    this.name = "QueryTimeoutError";
    this.stats = failure.stats;
  }
};
var ServiceInternalError = class extends ServiceError {
  constructor(failure, httpStatus) {
    super(failure, httpStatus);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ServiceInternalError);
    }
    this.name = "ServiceInternalError";
  }
};
var ServiceTimeoutError = class extends ServiceError {
  constructor(failure, httpStatus) {
    super(failure, httpStatus);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ServiceTimeoutError);
    }
    this.name = "ServiceTimeoutError";
  }
};
var ClientError = class extends FaunaError {
  constructor(message, options) {
    super(message, options);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ClientError);
    }
    this.name = "ClientError";
  }
};
var ClientClosedError = class extends FaunaError {
  constructor(message, options) {
    super(message, options);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ClientClosedError);
    }
    this.name = "ClientClosedError";
  }
};
var NetworkError = class extends FaunaError {
  constructor(message, options) {
    super(message, options);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, NetworkError);
    }
    this.name = "NetworkError";
  }
};
var ProtocolError = class extends FaunaError {
  httpStatus;
  constructor(error) {
    super(error.message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ProtocolError);
    }
    this.name = "ProtocolError";
    this.httpStatus = error.httpStatus;
  }
};

// src/http-client/fetch-client.ts
var FetchClient = class {
  #url;
  #keepalive;
  constructor({ url, fetch_keepalive }) {
    this.#url = new URL("/query/1", url).toString();
    this.#keepalive = fetch_keepalive;
  }
  async request({
    data,
    headers: requestHeaders,
    method,
    client_timeout_ms
  }) {
    const signal = AbortSignal.timeout === void 0 ? (() => {
      const controller = new AbortController();
      const signal2 = controller.signal;
      setTimeout(() => controller.abort(), client_timeout_ms);
      return signal2;
    })() : AbortSignal.timeout(client_timeout_ms);
    const response = await fetch(this.#url, {
      method,
      headers: { ...requestHeaders, "Content-Type": "application/json" },
      body: JSON.stringify(data),
      signal,
      keepalive: this.#keepalive
    }).catch((error) => {
      throw new NetworkError("The network connection encountered a problem.", {
        cause: error
      });
    });
    const status = response.status;
    const responseHeaders = {};
    response.headers.forEach((value, key) => responseHeaders[key] = value);
    const body = await response.text();
    return {
      status,
      body,
      headers: responseHeaders
    };
  }
  close() {
  }
};

// src/http-client/node-http2-client.ts
var http2;
try {
  http2 = require("node:http2");
} catch (_) {
  http2 = void 0;
}
var _clients, _http2_session_idle_ms, _http2_max_streams, _url, _numberOfUsers, _session, _getClientKey, getClientKey_fn, _closeForAll, closeForAll_fn, _connect, connect_fn, _doRequest, doRequest_fn;
var _NodeHTTP2Client = class {
  constructor({
    http2_session_idle_ms,
    url,
    http2_max_streams
  }) {
    __privateAdd(this, _closeForAll);
    __privateAdd(this, _connect);
    __privateAdd(this, _doRequest);
    __privateAdd(this, _http2_session_idle_ms, void 0);
    __privateAdd(this, _http2_max_streams, void 0);
    __privateAdd(this, _url, void 0);
    __privateAdd(this, _numberOfUsers, 0);
    __privateAdd(this, _session, void 0);
    if (http2 === void 0) {
      throw new Error("Your platform does not support Node's http2 library");
    }
    __privateSet(this, _http2_session_idle_ms, http2_session_idle_ms);
    __privateSet(this, _http2_max_streams, http2_max_streams);
    __privateSet(this, _url, url);
    __privateSet(this, _session, null);
  }
  static getClient(httpClientOptions) {
    var _a;
    const clientKey = __privateMethod(_a = _NodeHTTP2Client, _getClientKey, getClientKey_fn).call(_a, httpClientOptions);
    if (!__privateGet(_NodeHTTP2Client, _clients).has(clientKey)) {
      __privateGet(_NodeHTTP2Client, _clients).set(
        clientKey,
        new _NodeHTTP2Client(httpClientOptions)
      );
    }
    const client = __privateGet(_NodeHTTP2Client, _clients).get(clientKey);
    __privateWrapper(client, _numberOfUsers)._++;
    return client;
  }
  async request(req) {
    let retryCount = 0;
    let memoizedError;
    do {
      try {
        return await __privateMethod(this, _doRequest, doRequest_fn).call(this, req);
      } catch (error) {
        if (error?.code !== "ERR_HTTP2_GOAWAY_SESSION") {
          throw new NetworkError(
            "The network connection encountered a problem.",
            {
              cause: error
            }
          );
        }
        memoizedError = error;
        retryCount++;
      }
    } while (retryCount < 3);
    throw new NetworkError("The network connection encountered a problem.", {
      cause: memoizedError
    });
  }
  close() {
    if (this.isClosed()) {
      return;
    }
    __privateWrapper(this, _numberOfUsers)._--;
    if (__privateGet(this, _numberOfUsers) === 0 && __privateGet(this, _session) && !__privateGet(this, _session).closed) {
      __privateGet(this, _session).close();
    }
  }
  isClosed() {
    return __privateGet(this, _numberOfUsers) === 0;
  }
};
var NodeHTTP2Client = _NodeHTTP2Client;
_clients = new WeakMap();
_http2_session_idle_ms = new WeakMap();
_http2_max_streams = new WeakMap();
_url = new WeakMap();
_numberOfUsers = new WeakMap();
_session = new WeakMap();
_getClientKey = new WeakSet();
getClientKey_fn = function({ http2_session_idle_ms, url }) {
  return `${url}|${http2_session_idle_ms}`;
};
_closeForAll = new WeakSet();
closeForAll_fn = function() {
  __privateSet(this, _numberOfUsers, 0);
  if (__privateGet(this, _session) && !__privateGet(this, _session).closed) {
    __privateGet(this, _session).close();
  }
};
_connect = new WeakSet();
connect_fn = function() {
  if (!__privateGet(this, _session) || __privateGet(this, _session).closed || __privateGet(this, _session).destroyed) {
    const new_session = http2.connect(__privateGet(this, _url), {
      peerMaxConcurrentStreams: __privateGet(this, _http2_max_streams)
    }).once("error", () => __privateMethod(this, _closeForAll, closeForAll_fn).call(this)).once("goaway", () => __privateMethod(this, _closeForAll, closeForAll_fn).call(this));
    new_session.setTimeout(__privateGet(this, _http2_session_idle_ms), () => {
      __privateMethod(this, _closeForAll, closeForAll_fn).call(this);
    });
    __privateSet(this, _session, new_session);
  }
  return __privateGet(this, _session);
};
_doRequest = new WeakSet();
doRequest_fn = function({
  client_timeout_ms,
  data: requestData,
  headers: requestHeaders,
  method
}) {
  return new Promise((resolvePromise, rejectPromise) => {
    let req;
    const onResponse = (http2ResponseHeaders) => {
      const status = Number(
        http2ResponseHeaders[http2.constants.HTTP2_HEADER_STATUS]
      );
      let responseData = "";
      req.on("data", (chunk) => {
        responseData += chunk;
      });
      req.on("end", () => {
        resolvePromise({
          status,
          body: responseData,
          headers: http2ResponseHeaders
        });
      });
    };
    try {
      const httpRequestHeaders = {
        ...requestHeaders,
        [http2.constants.HTTP2_HEADER_PATH]: "/query/1",
        [http2.constants.HTTP2_HEADER_METHOD]: method
      };
      const session = __privateMethod(this, _connect, connect_fn).call(this);
      req = session.request(httpRequestHeaders).setEncoding("utf8").on("error", (error) => {
        rejectPromise(error);
      }).on("response", onResponse);
      req.write(JSON.stringify(requestData), "utf8");
      req.setTimeout(client_timeout_ms, () => {
        req.destroy(new Error(`Client timeout`));
      });
      req.end();
    } catch (error) {
      rejectPromise(error);
    }
  });
};
__privateAdd(NodeHTTP2Client, _getClientKey);
__privateAdd(NodeHTTP2Client, _clients, /* @__PURE__ */ new Map());

// src/http-client/index.ts
var getDefaultHTTPClient = (options) => nodeHttp2IsSupported() ? NodeHTTP2Client.getClient(options) : new FetchClient(options);
var isHTTPResponse = (res) => res instanceof Object && "body" in res && "headers" in res && "status" in res;
var nodeHttp2IsSupported = () => {
  if (typeof process !== "undefined" && process && process.release?.name === "node" && process.versions?.deno === void 0) {
    try {
      require("node:http2");
      return true;
    } catch (_) {
      return false;
    }
  }
  return false;
};

// src/regex.ts
var yearpart = /(?:\d{4}|[\u2212-]\d{4,}|\+\d{5,})/;
var monthpart = /(?:0[1-9]|1[0-2])/;
var daypart = /(?:0[1-9]|[12]\d|3[01])/;
var hourpart = /(?:[01][0-9]|2[0-3])/;
var minsecpart = /(?:[0-5][0-9])/;
var decimalpart = /(?:\.\d+)/;
var datesplit = new RegExp(
  `(${yearpart.source}-(${monthpart.source})-(${daypart.source}))`
);
var timesplit = new RegExp(
  `(${hourpart.source}:${minsecpart.source}:${minsecpart.source}${decimalpart.source}?)`
);
var zonesplit = new RegExp(
  `([zZ]|[+\u2212-]${hourpart.source}(?::?${minsecpart.source}|:${minsecpart.source}:${minsecpart.source}))`
);
var plaindate = new RegExp(`^${datesplit.source}$`);
var startsWithPlaindate = new RegExp(`^${datesplit.source}`);
var datetime = new RegExp(
  `^${datesplit.source}T${timesplit.source}${zonesplit.source}$`
);

// src/values/date-time.ts
var TimeStub = class {
  isoString;
  constructor(isoString) {
    this.isoString = isoString;
  }
  static from(isoString) {
    if (typeof isoString !== "string") {
      throw new TypeError(
        `Expected string but received ${typeof isoString}: ${isoString}`
      );
    }
    const matches = datetime.exec(isoString);
    if (matches === null) {
      throw new RangeError(
        `(regex) Expected an ISO date string but received '${isoString}'`
      );
    }
    return new TimeStub(isoString);
  }
  static fromDate(date) {
    return new TimeStub(date.toISOString());
  }
  toDate() {
    const date = new Date(this.isoString);
    if (date.toString() === "Invalid Date") {
      throw new RangeError(
        "Fauna Date could not be converted to Javascript Date"
      );
    }
    return date;
  }
  toString() {
    return `TimeStub("${this.isoString}")`;
  }
};
var DateStub = class {
  dateString;
  constructor(dateString) {
    this.dateString = dateString;
  }
  static from(dateString) {
    if (typeof dateString !== "string") {
      throw new TypeError(
        `Expected string but received ${typeof dateString}: ${dateString}`
      );
    }
    const matches = plaindate.exec(dateString);
    if (matches === null) {
      throw new RangeError(
        `Expected a plain date string but received '${dateString}'`
      );
    }
    return new DateStub(matches[0]);
  }
  static fromDate(date) {
    const dateString = date.toISOString();
    const matches = startsWithPlaindate.exec(dateString);
    if (matches === null) {
      throw new ClientError(`Failed to parse date '${date}'`);
    }
    return new DateStub(matches[0]);
  }
  toDate() {
    const date = new Date(this.dateString + "T00:00:00Z");
    if (date.toString() === "Invalid Date") {
      throw new RangeError(
        "Fauna Date could not be converted to Javascript Date"
      );
    }
    return date;
  }
  toString() {
    return `DateStub("${this.dateString}")`;
  }
};

// src/values/doc.ts
var DocumentReference = class {
  coll;
  id;
  constructor({ coll, id }) {
    this.id = id;
    if (typeof coll === "string") {
      this.coll = new Module(coll);
    } else {
      this.coll = coll;
    }
  }
};
var Document = class extends DocumentReference {
  ts;
  constructor(obj) {
    const { coll, id, ts, ...rest } = obj;
    super({ coll, id });
    this.ts = ts;
    Object.assign(this, rest);
  }
  toObject() {
    return { ...this };
  }
};
var NamedDocumentReference = class {
  coll;
  name;
  constructor({ coll, name }) {
    this.name = name;
    if (typeof coll === "string") {
      this.coll = new Module(coll);
    } else {
      this.coll = coll;
    }
  }
};
var NamedDocument = class extends NamedDocumentReference {
  ts;
  data;
  constructor(obj) {
    const { coll, name, ts, data, ...rest } = obj;
    super({ coll, name });
    this.ts = ts;
    this.data = data || {};
    Object.assign(this, rest);
  }
  toObject() {
    return { ...this };
  }
};
var Module = class {
  name;
  constructor(name) {
    this.name = name;
  }
};
var NullDocument = class {
  ref;
  cause;
  constructor(ref, cause) {
    this.ref = ref;
    this.cause = cause;
  }
};

// src/values/set.ts
var Page = class {
  data;
  after;
  constructor({ data, after }) {
    this.data = data;
    this.after = after;
  }
};
var EmbeddedSet = class {
  after;
  constructor(after) {
    this.after = after;
  }
};
var SetIterator = class {
  #generator;
  constructor(client, initial, options) {
    options = options ?? {};
    if (initial instanceof Function) {
      this.#generator = generateFromThunk(client, initial, options);
    } else if (initial instanceof Page || initial instanceof EmbeddedSet) {
      this.#generator = generatePages(client, initial, options);
    } else {
      throw new TypeError(
        `Expected 'Page<T> | EmbeddedSet | (() => Promise<T | Page<T> | EmbeddedSet>)', but received ${JSON.stringify(
          initial
        )}`
      );
    }
  }
  static fromQuery(client, query, options) {
    return new SetIterator(
      client,
      async () => {
        const response = await client.query(
          query,
          options
        );
        return response.data;
      },
      options
    );
  }
  static fromPageable(client, pageable, options) {
    return new SetIterator(client, pageable, options);
  }
  flatten() {
    return new FlattenedSetIterator(this);
  }
  async next() {
    return this.#generator.next();
  }
  async return() {
    return this.#generator.return();
  }
  async throw(e) {
    return this.#generator.throw(e);
  }
  [Symbol.asyncIterator]() {
    return this;
  }
};
var FlattenedSetIterator = class {
  #generator;
  constructor(setIterator) {
    this.#generator = generateItems(setIterator);
  }
  async next() {
    return this.#generator.next();
  }
  async return() {
    return this.#generator.return();
  }
  async throw(e) {
    return this.#generator.throw(e);
  }
  [Symbol.asyncIterator]() {
    return this;
  }
};
async function* generatePages(client, initial, options) {
  let currentPage = initial;
  if (currentPage instanceof Page) {
    yield currentPage.data;
  }
  while (currentPage.after) {
    const query = fql`Set.paginate(${currentPage.after})`;
    const response = await client.query(query, options);
    const nextPage = response.data;
    currentPage = nextPage;
    yield currentPage.data;
  }
}
async function* generateFromThunk(client, thunk, options) {
  const result = await thunk();
  if (result instanceof Page || result instanceof EmbeddedSet) {
    for await (const page of generatePages(
      client,
      result,
      options
    )) {
      yield page;
    }
    return;
  }
  yield [result];
}
async function* generateItems(setIterator) {
  for await (const page of setIterator) {
    for (const item of page) {
      yield item;
    }
  }
}

// src/tagged-type.ts
var TaggedTypeFormat = class {
  static encode(obj) {
    return encode(obj);
  }
  static decode(input, decodeOptions) {
    return JSON.parse(input, (_, value) => {
      if (value == null)
        return null;
      if (value["@mod"]) {
        return new Module(value["@mod"]);
      } else if (value["@doc"]) {
        if (typeof value["@doc"] === "string") {
          const [modName, id] = value["@doc"].split(":");
          return new DocumentReference({ coll: modName, id });
        }
        const obj = value["@doc"];
        if (obj.id) {
          return new Document(obj);
        } else {
          return new NamedDocument(obj);
        }
      } else if (value["@ref"]) {
        const obj = value["@ref"];
        let ref;
        if (obj.id) {
          ref = new DocumentReference(obj);
        } else {
          ref = new NamedDocumentReference(obj);
        }
        if ("exists" in obj && obj.exists === false) {
          return new NullDocument(ref, obj.cause);
        }
        return ref;
      } else if (value["@set"]) {
        if (typeof value["@set"] === "string") {
          return new EmbeddedSet(value["@set"]);
        }
        return new Page(value["@set"]);
      } else if (value["@int"]) {
        return Number(value["@int"]);
      } else if (value["@long"]) {
        const bigInt = BigInt(value["@long"]);
        if (decodeOptions.long_type === "number") {
          if (bigInt > Number.MAX_SAFE_INTEGER || bigInt < Number.MIN_SAFE_INTEGER) {
            console.warn(`Value is too large to be represented as a number. Returning as Number with loss of precision. Use long_type 'bigint' instead.`);
          }
          return Number(bigInt);
        }
        return bigInt;
      } else if (value["@double"]) {
        return Number(value["@double"]);
      } else if (value["@date"]) {
        return DateStub.from(value["@date"]);
      } else if (value["@time"]) {
        return TimeStub.from(value["@time"]);
      } else if (value["@object"]) {
        return value["@object"];
      }
      return value;
    });
  }
};
var LONG_MIN = BigInt("-9223372036854775808");
var LONG_MAX = BigInt("9223372036854775807");
var INT_MIN = -(2 ** 31);
var INT_MAX = 2 ** 31 - 1;
var encodeMap = {
  bigint: (value) => {
    if (value < LONG_MIN || value > LONG_MAX) {
      throw new RangeError(
        "BigInt value exceeds max magnitude for a 64-bit Fauna long. Use a 'number' to represent doubles beyond that limit."
      );
    }
    if (value >= INT_MIN && value <= INT_MAX) {
      return { "@int": value.toString() };
    }
    return {
      "@long": value.toString()
    };
  },
  number: (value) => {
    if (value === Number.POSITIVE_INFINITY || value === Number.NEGATIVE_INFINITY) {
      throw new RangeError(`Cannot convert ${value} to a Fauna type.`);
    }
    if (!Number.isInteger(value)) {
      return { "@double": value.toString() };
    } else {
      if (value >= INT_MIN && value <= INT_MAX) {
        return { "@int": value.toString() };
      } else if (Number.isSafeInteger(value)) {
        return {
          "@long": value.toString()
        };
      }
      return { "@double": value.toString() };
    }
  },
  string: (value) => {
    return value;
  },
  object: (input) => {
    let wrapped = false;
    const _out = {};
    for (const k in input) {
      if (k.startsWith("@")) {
        wrapped = true;
      }
      if (input[k] !== void 0) {
        _out[k] = encode(input[k]);
      }
    }
    return wrapped ? { "@object": _out } : _out;
  },
  array: (input) => {
    const _out = [];
    for (const i in input)
      _out.push(encode(input[i]));
    return _out;
  },
  date: (dateValue) => ({
    "@time": dateValue.toISOString()
  }),
  faunadate: (value) => ({ "@date": value.dateString }),
  faunatime: (value) => ({ "@time": value.isoString }),
  module: (value) => ({ "@mod": value.name }),
  documentReference: (value) => ({
    "@ref": { id: value.id, coll: { "@mod": value.coll.name } }
  }),
  document: (value) => ({
    "@ref": { id: value.id, coll: { "@mod": value.coll.name } }
  }),
  namedDocumentReference: (value) => ({
    "@ref": { name: value.name, coll: { "@mod": value.coll.name } }
  }),
  namedDocument: (value) => ({
    "@ref": { name: value.name, coll: { "@mod": value.coll.name } }
  }),
  set: (value) => {
    throw new ClientError(
      "Page could not be encoded. Fauna does not accept encoded Set values, yet. Use Page.data and Page.after as arguments, instead."
    );
  }
};
var encode = (input) => {
  if (input === void 0) {
    throw new TypeError("Passing undefined as a QueryValue is not supported");
  }
  switch (typeof input) {
    case "bigint":
      return encodeMap["bigint"](input);
    case "string":
      return encodeMap["string"](input);
    case "number":
      return encodeMap["number"](input);
    case "boolean":
      return input;
    case "object":
      if (input == null) {
        return null;
      } else if (Array.isArray(input)) {
        return encodeMap["array"](input);
      } else if (input instanceof Date) {
        return encodeMap["date"](input);
      } else if (input instanceof DateStub) {
        return encodeMap["faunadate"](input);
      } else if (input instanceof TimeStub) {
        return encodeMap["faunatime"](input);
      } else if (input instanceof Module) {
        return encodeMap["module"](input);
      } else if (input instanceof Document) {
        return encodeMap["document"](input);
      } else if (input instanceof DocumentReference) {
        return encodeMap["documentReference"](input);
      } else if (input instanceof NamedDocument) {
        return encodeMap["namedDocument"](input);
      } else if (input instanceof NamedDocumentReference) {
        return encodeMap["namedDocumentReference"](input);
      } else if (input instanceof NullDocument) {
        return encode(input.ref);
      } else if (input instanceof Page) {
        return encodeMap["set"](input);
      } else if (input instanceof EmbeddedSet) {
        return encodeMap["set"](input);
      } else {
        return encodeMap["object"](input);
      }
  }
};

// src/query-builder.ts
function fql(queryFragments, ...queryArgs) {
  return new Query2(queryFragments, ...queryArgs);
}
var Query2 = class {
  #queryFragments;
  #queryArgs;
  constructor(queryFragments, ...queryArgs) {
    if (queryFragments.length === 0 || queryFragments.length !== queryArgs.length + 1) {
      throw new Error("invalid query constructed");
    }
    this.#queryFragments = queryFragments;
    this.#queryArgs = queryArgs;
  }
  toQuery(requestHeaders = {}) {
    return { ...this.#render(requestHeaders), ...requestHeaders };
  }
  #render(requestHeaders) {
    if (this.#queryFragments.length === 1) {
      return { query: { fql: [this.#queryFragments[0]] }, arguments: {} };
    }
    let resultArgs = {};
    const renderedFragments = this.#queryFragments.flatMap((fragment, i) => {
      if (i === this.#queryFragments.length - 1) {
        return fragment === "" ? [] : [fragment];
      }
      const arg = this.#queryArgs[i];
      let subQuery;
      if (arg instanceof Query2) {
        const request = arg.toQuery(requestHeaders);
        subQuery = request.query;
        resultArgs = { ...resultArgs, ...request.arguments };
      } else {
        subQuery = { value: TaggedTypeFormat.encode(arg) };
      }
      return [fragment, subQuery].filter((x) => x !== "");
    });
    return {
      query: { fql: renderedFragments },
      arguments: resultArgs
    };
  }
};

// src/util/package-version.ts
var packageVersion = "1.3.1";

// src/util/environment.ts
var os;
try {
  os = require("node:os");
} catch (_) {
  os = void 0;
}
var getDriverEnv = () => {
  const driverEnv = {
    driver: ["javascript", packageVersion].join("-"),
    env: "unknown",
    os: "unknown",
    runtime: "unknown"
  };
  try {
    const isNode = typeof window === "undefined" && typeof process !== "undefined" && process.versions != null && process.versions.node != null;
    const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";
    const isServiceWorker = typeof self === "object" && self.constructor && self.constructor.name === "DedicatedWorkerGlobalScope";
    const isVercelEdgeRuntime = typeof EdgeRuntime !== "string";
    if (isNode) {
      driverEnv.runtime = ["nodejs", process.version].join("-");
      driverEnv.env = getNodeRuntimeEnv();
      driverEnv.os = [os.platform(), os.release()].join("-");
    } else if (isServiceWorker) {
      driverEnv.runtime = getBrowserDetails(navigator);
      driverEnv.env = "Service Worker";
      driverEnv.os = getBrowserOsDetails(navigator);
    } else if (isBrowser) {
      driverEnv.runtime = getBrowserDetails(navigator);
      driverEnv.env = "browser";
      driverEnv.os = getBrowserOsDetails(navigator);
    } else if (isVercelEdgeRuntime) {
      driverEnv.runtime = "Vercel Edge Runtime";
      driverEnv.env = "edge";
    }
  } catch (e) {
  }
  return Object.entries(driverEnv).filter(([_, val]) => val !== "unknown").map((entry) => entry.join("=")).join("; ");
};
var getBrowserDetails = (navigator2) => {
  let browser = navigator2.appName;
  let browserVersion = "" + parseFloat(navigator2.appVersion);
  let nameOffset, verOffset, ix;
  if ((verOffset = navigator2.userAgent.indexOf("Opera")) != -1) {
    browser = "Opera";
    browserVersion = navigator2.userAgent.substring(verOffset + 6);
    if ((verOffset = navigator2.userAgent.indexOf("Version")) != -1) {
      browserVersion = navigator2.userAgent.substring(verOffset + 8);
    }
  } else if ((verOffset = navigator2.userAgent.indexOf("MSIE")) != -1) {
    browser = "Microsoft Internet Explorer";
    browserVersion = navigator2.userAgent.substring(verOffset + 5);
  } else if (browser == "Netscape" && navigator2.userAgent.indexOf("Trident/") != -1) {
    browser = "Microsoft Internet Explorer";
    browserVersion = navigator2.userAgent.substring(verOffset + 5);
    if ((verOffset = navigator2.userAgent.indexOf("rv:")) != -1) {
      browserVersion = navigator2.userAgent.substring(verOffset + 3);
    }
  } else if ((verOffset = navigator2.userAgent.indexOf("Chrome")) != -1) {
    browser = "Chrome";
    browserVersion = navigator2.userAgent.substring(verOffset + 7);
  } else if ((verOffset = navigator2.userAgent.indexOf("Safari")) != -1) {
    browser = "Safari";
    browserVersion = navigator2.userAgent.substring(verOffset + 7);
    if ((verOffset = navigator2.userAgent.indexOf("Version")) != -1) {
      browserVersion = navigator2.userAgent.substring(verOffset + 8);
    }
    if (navigator2.userAgent.indexOf("CriOS") != -1) {
      browser = "Chrome";
    }
  } else if ((verOffset = navigator2.userAgent.indexOf("Firefox")) != -1) {
    browser = "Firefox";
    browserVersion = navigator2.userAgent.substring(verOffset + 8);
  } else if ((nameOffset = navigator2.userAgent.lastIndexOf(" ") + 1) < (verOffset = navigator2.userAgent.lastIndexOf("/"))) {
    browser = navigator2.userAgent.substring(nameOffset, verOffset);
    browserVersion = navigator2.userAgent.substring(verOffset + 1);
    if (browser.toLowerCase() == browser.toUpperCase()) {
      browser = navigator2.appName;
    }
  }
  if ((ix = browserVersion.indexOf(";")) != -1)
    browserVersion = browserVersion.substring(0, ix);
  if ((ix = browserVersion.indexOf(" ")) != -1)
    browserVersion = browserVersion.substring(0, ix);
  if ((ix = browserVersion.indexOf(")")) != -1)
    browserVersion = browserVersion.substring(0, ix);
  return [browser, browserVersion].join("-");
};
var getBrowserOsDetails = (navigator2) => {
  let os2 = "unknown";
  const clientStrings = [
    { s: "Windows 10", r: /(Windows 10.0|Windows NT 10.0)/ },
    { s: "Windows 8.1", r: /(Windows 8.1|Windows NT 6.3)/ },
    { s: "Windows 8", r: /(Windows 8|Windows NT 6.2)/ },
    { s: "Windows 7", r: /(Windows 7|Windows NT 6.1)/ },
    { s: "Windows Vista", r: /Windows NT 6.0/ },
    { s: "Windows Server 2003", r: /Windows NT 5.2/ },
    { s: "Windows XP", r: /(Windows NT 5.1|Windows XP)/ },
    { s: "Windows 2000", r: /(Windows NT 5.0|Windows 2000)/ },
    { s: "Windows ME", r: /(Win 9x 4.90|Windows ME)/ },
    { s: "Windows 98", r: /(Windows 98|Win98)/ },
    { s: "Windows 95", r: /(Windows 95|Win95|Windows_95)/ },
    { s: "Windows NT 4.0", r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
    { s: "Windows CE", r: /Windows CE/ },
    { s: "Windows 3.11", r: /Win16/ },
    { s: "Android", r: /Android/ },
    { s: "Open BSD", r: /OpenBSD/ },
    { s: "Sun OS", r: /SunOS/ },
    { s: "Chrome OS", r: /CrOS/ },
    { s: "Linux", r: /(Linux|X11(?!.*CrOS))/ },
    { s: "iOS", r: /(iPhone|iPad|iPod)/ },
    { s: "Mac OS X", r: /Mac OS X/ },
    { s: "Mac OS", r: /(Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
    { s: "QNX", r: /QNX/ },
    { s: "UNIX", r: /UNIX/ },
    { s: "BeOS", r: /BeOS/ },
    { s: "OS/2", r: /OS\/2/ },
    {
      s: "Search Bot",
      r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
    }
  ];
  for (const id in clientStrings) {
    const cs = clientStrings[id];
    if (cs.r.test(navigator2.userAgent)) {
      os2 = cs.s;
      break;
    }
  }
  let osVersion = "unknown";
  if (/Windows/.test(os2)) {
    osVersion;
    const matches = /Windows (.*)/.exec(os2);
    if (matches) {
      osVersion = matches[1];
    }
    os2 = "Windows";
  }
  switch (os2) {
    case "Mac OS":
    case "Mac OS X":
    case "Android": {
      const matches = /(?:Android|Mac OS|Mac OS X|MacPPC|MacIntel|Mac_PowerPC|Macintosh) ([._\d]+)/.exec(
        navigator2.userAgent
      );
      if (matches) {
        osVersion = matches[1];
      }
      break;
    }
    case "iOS": {
      const matches = /OS (\d+)_(\d+)_?(\d+)?/.exec(navigator2.appVersion);
      if (matches) {
        osVersion = matches[1] + "." + matches[2] + "." + (matches[3] ?? 0);
      }
      break;
    }
  }
  return [os2, osVersion].join("-");
};
var crossGlobal = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : self;
var getNodeRuntimeEnv = () => {
  if (!(typeof process !== "undefined" && process && process.env && typeof process.env === "object")) {
    return "unknown";
  }
  const runtimeEnvs = [
    {
      name: "Netlify",
      check: function() {
        return !!process.env["NETLIFY_IMAGES_CDN_DOMAIN"];
      }
    },
    {
      name: "Vercel",
      check: function() {
        return !!process.env["VERCEL"];
      }
    },
    {
      name: "Heroku",
      check: function() {
        return !!process.env["PATH"] && process.env.PATH.indexOf(".heroku") !== -1;
      }
    },
    {
      name: "AWS Lambda",
      check: function() {
        return !!process.env["AWS_LAMBDA_FUNCTION_VERSION"];
      }
    },
    {
      name: "GCP Cloud Functions",
      check: function() {
        return !!process.env["_"] && process.env._.indexOf("google") !== -1;
      }
    },
    {
      name: "GCP Compute Instances",
      check: function() {
        return !!process.env["GOOGLE_CLOUD_PROJECT"];
      }
    },
    {
      name: "Azure Cloud Functions",
      check: function() {
        return !!process.env["WEBSITE_FUNCTIONS_AZUREMONITOR_CATEGORIES"];
      }
    },
    {
      name: "Azure Compute",
      check: function() {
        return !!process.env["ORYX_ENV_TYPE"] && !!process.env["WEBSITE_INSTANCE_ID"] && process.env.ORYX_ENV_TYPE === "AppService";
      }
    },
    {
      name: "Mongo Stitch",
      check: function() {
        return typeof crossGlobal?.StitchError === "function";
      }
    },
    {
      name: "Render",
      check: function() {
        return !!process.env["RENDER_SERVICE_ID"];
      }
    },
    {
      name: "Begin",
      check: function() {
        return !!process.env["BEGIN_DATA_SCOPE_ID"];
      }
    }
  ];
  const detectedEnv = runtimeEnvs.find((env) => env.check());
  return detectedEnv ? detectedEnv.name : "unknown";
};

// src/wire-protocol.ts
var isQuerySuccess = (res) => res instanceof Object && "data" in res;
var isQueryFailure = (res) => res instanceof Object && "error" in res && res.error instanceof Object && "code" in res.error && "message" in res.error;

// src/client.ts
var DEFAULT_CLIENT_CONFIG = {
  client_timeout_buffer_ms: 5e3,
  format: "tagged",
  http2_session_idle_ms: 5e3,
  http2_max_streams: 100,
  long_type: "number",
  fetch_keepalive: false,
  query_timeout_ms: 5e3,
  max_attempts: 3,
  max_backoff: 20
};
var _driverEnvHeader, _clientConfiguration, _httpClient, _lastTxnTs, _isClosed, _queryWithRetries, queryWithRetries_fn, _getError, getError_fn, _getSecret, getSecret_fn, _getEndpoint, getEndpoint_fn, _getServiceError, getServiceError_fn, _query, query_fn, _setHeaders, setHeaders_fn, _validateConfiguration, validateConfiguration_fn;
var _Client = class {
  constructor(clientConfiguration, httpClient) {
    __privateAdd(this, _queryWithRetries);
    __privateAdd(this, _getError);
    __privateAdd(this, _getSecret);
    __privateAdd(this, _getEndpoint);
    __privateAdd(this, _getServiceError);
    __privateAdd(this, _query);
    __privateAdd(this, _setHeaders);
    __privateAdd(this, _validateConfiguration);
    __privateAdd(this, _clientConfiguration, void 0);
    __privateAdd(this, _httpClient, void 0);
    __privateAdd(this, _lastTxnTs, void 0);
    __privateAdd(this, _isClosed, false);
    __privateSet(this, _clientConfiguration, {
      ...DEFAULT_CLIENT_CONFIG,
      ...clientConfiguration,
      secret: __privateMethod(this, _getSecret, getSecret_fn).call(this, clientConfiguration),
      endpoint: __privateMethod(this, _getEndpoint, getEndpoint_fn).call(this, clientConfiguration)
    });
    __privateMethod(this, _validateConfiguration, validateConfiguration_fn).call(this);
    if (!httpClient) {
      __privateSet(this, _httpClient, getDefaultHTTPClient({
        url: __privateGet(this, _clientConfiguration).endpoint.toString(),
        http2_session_idle_ms: __privateGet(this, _clientConfiguration).http2_session_idle_ms,
        http2_max_streams: __privateGet(this, _clientConfiguration).http2_max_streams,
        fetch_keepalive: __privateGet(this, _clientConfiguration).fetch_keepalive
      }));
    } else {
      __privateSet(this, _httpClient, httpClient);
    }
  }
  get lastTxnTs() {
    return __privateGet(this, _lastTxnTs);
  }
  set lastTxnTs(ts) {
    if (ts !== void 0) {
      __privateSet(this, _lastTxnTs, __privateGet(this, _lastTxnTs) ? Math.max(ts, __privateGet(this, _lastTxnTs)) : ts);
    }
  }
  get clientConfiguration() {
    const { ...copy } = __privateGet(this, _clientConfiguration);
    return copy;
  }
  close() {
    if (__privateGet(this, _isClosed)) {
      throw new ClientClosedError(
        "Your client is closed. You cannot close it again."
      );
    }
    __privateGet(this, _httpClient).close();
    __privateSet(this, _isClosed, true);
  }
  paginate(iterable, options) {
    if (iterable instanceof Query2) {
      return SetIterator.fromQuery(this, iterable, options);
    }
    return SetIterator.fromPageable(this, iterable, options);
  }
  async query(query, options) {
    if (__privateGet(this, _isClosed)) {
      throw new ClientClosedError(
        "Your client is closed. No further requests can be issued."
      );
    }
    const queryInterpolation = query.toQuery(options).query;
    return __privateMethod(this, _queryWithRetries, queryWithRetries_fn).call(this, queryInterpolation, options);
  }
};
var Client = _Client;
_driverEnvHeader = new WeakMap();
_clientConfiguration = new WeakMap();
_httpClient = new WeakMap();
_lastTxnTs = new WeakMap();
_isClosed = new WeakMap();
_queryWithRetries = new WeakSet();
queryWithRetries_fn = async function(queryInterpolation, options, attempt = 0) {
  const maxBackoff = this.clientConfiguration.max_backoff ?? DEFAULT_CLIENT_CONFIG.max_backoff;
  const maxAttempts = this.clientConfiguration.max_attempts ?? DEFAULT_CLIENT_CONFIG.max_attempts;
  const backoffMs = Math.min(Math.random() * 2 ** attempt, maxBackoff) * 1e3;
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  attempt += 1;
  return __privateMethod(this, _query, query_fn).call(this, queryInterpolation, options, attempt).catch((e) => {
    if (e instanceof ThrottlingError && attempt < maxAttempts) {
      return wait(backoffMs).then(
        () => __privateMethod(this, _queryWithRetries, queryWithRetries_fn).call(this, queryInterpolation, options, attempt)
      );
    }
    throw e;
  });
};
_getError = new WeakSet();
getError_fn = function(e) {
  if (e instanceof ClientError || e instanceof NetworkError || e instanceof ProtocolError || e instanceof ServiceError) {
    return e;
  }
  if (isHTTPResponse(e)) {
    if (isQueryFailure(e.body)) {
      const failure = e.body;
      const status = e.status;
      return __privateMethod(this, _getServiceError, getServiceError_fn).call(this, failure, status);
    }
    return new ProtocolError({
      message: `Response is in an unkown format: ${e.body}`,
      httpStatus: e.status
    });
  }
  return new ClientError(
    "A client level error occurred. Fauna was not called.",
    {
      cause: e
    }
  );
};
_getSecret = new WeakSet();
getSecret_fn = function(partialClientConfig) {
  let env_secret = void 0;
  if (typeof process !== "undefined" && process && typeof process === "object" && process.env && typeof process.env === "object") {
    env_secret = process.env["FAUNA_SECRET"];
  }
  const maybeSecret = partialClientConfig?.secret ?? env_secret;
  if (maybeSecret === void 0) {
    throw new TypeError(
      "You must provide a secret to the driver. Set it in an environmental variable named FAUNA_SECRET or pass it to the Client constructor."
    );
  }
  return maybeSecret;
};
_getEndpoint = new WeakSet();
getEndpoint_fn = function(partialClientConfig) {
  if (partialClientConfig && "endpoint" in partialClientConfig && partialClientConfig.endpoint === void 0) {
    throw new TypeError(
      `ClientConfiguration option endpoint must be defined.`
    );
  }
  let env_endpoint = void 0;
  if (typeof process !== "undefined" && process && typeof process === "object" && process.env && typeof process.env === "object") {
    env_endpoint = process.env["FAUNA_ENDPOINT"] ? new URL(process.env["FAUNA_ENDPOINT"]) : void 0;
  }
  return partialClientConfig?.endpoint ?? env_endpoint ?? endpoints.default;
};
_getServiceError = new WeakSet();
getServiceError_fn = function(failure, httpStatus) {
  switch (httpStatus) {
    case 400:
      if (QUERY_CHECK_FAILURE_CODES.includes(failure.error.code)) {
        return new QueryCheckError(failure, httpStatus);
      }
      if (failure.error.code === "invalid_request") {
        return new InvalidRequestError(failure, httpStatus);
      }
      if (failure.error.code === "abort" && failure.error.abort !== void 0) {
        return new AbortError(
          failure,
          httpStatus
        );
      }
      return new QueryRuntimeError(failure, httpStatus);
    case 401:
      return new AuthenticationError(failure, httpStatus);
    case 403:
      return new AuthorizationError(failure, httpStatus);
    case 409:
      return new ContendedTransactionError(failure, httpStatus);
    case 429:
      return new ThrottlingError(failure, httpStatus);
    case 440:
      return new QueryTimeoutError(failure, httpStatus);
    case 500:
      return new ServiceInternalError(failure, httpStatus);
    case 503:
      return new ServiceTimeoutError(failure, httpStatus);
    default:
      return new ServiceError(failure, httpStatus);
  }
};
_query = new WeakSet();
query_fn = async function(queryInterpolation, options, attempt = 0) {
  try {
    const requestConfig = {
      ...__privateGet(this, _clientConfiguration),
      ...options
    };
    const headers = {
      Authorization: `Bearer ${requestConfig.secret}`
    };
    __privateMethod(this, _setHeaders, setHeaders_fn).call(this, requestConfig, headers);
    const isTaggedFormat = requestConfig.format === "tagged";
    const queryArgs = requestConfig.arguments ? isTaggedFormat ? TaggedTypeFormat.encode(requestConfig.arguments) : requestConfig.arguments : void 0;
    const requestData = {
      query: queryInterpolation,
      arguments: queryArgs
    };
    const client_timeout_ms = requestConfig.query_timeout_ms + __privateGet(this, _clientConfiguration).client_timeout_buffer_ms;
    const response = await __privateGet(this, _httpClient).request({
      client_timeout_ms,
      data: requestData,
      headers,
      method: "POST"
    });
    let parsedResponse;
    try {
      parsedResponse = {
        ...response,
        body: isTaggedFormat ? TaggedTypeFormat.decode(response.body, {
          long_type: requestConfig.long_type
        }) : JSON.parse(response.body)
      };
      if (parsedResponse.body.query_tags) {
        const tags_array = parsedResponse.body.query_tags.split(",").map((tag) => tag.split("="));
        parsedResponse.body.query_tags = Object.fromEntries(tags_array);
      }
    } catch (error) {
      throw new ProtocolError({
        message: `Error parsing response as JSON: ${error}`,
        httpStatus: response.status
      });
    }
    if (!isQuerySuccess(parsedResponse.body)) {
      throw __privateMethod(this, _getError, getError_fn).call(this, parsedResponse);
    }
    const txn_ts = parsedResponse.body.txn_ts;
    if (__privateGet(this, _lastTxnTs) === void 0 && txn_ts !== void 0 || txn_ts !== void 0 && __privateGet(this, _lastTxnTs) !== void 0 && __privateGet(this, _lastTxnTs) < txn_ts) {
      __privateSet(this, _lastTxnTs, txn_ts);
    }
    const res = parsedResponse.body;
    if (res.stats) {
      res.stats.attempts = attempt;
    }
    return res;
  } catch (e) {
    throw __privateMethod(this, _getError, getError_fn).call(this, e);
  }
};
_setHeaders = new WeakSet();
setHeaders_fn = function(fromObject, headerObject) {
  const setHeader = (header, value, transform = (v) => String(v)) => {
    if (value !== void 0) {
      headerObject[header] = transform(value);
    }
  };
  setHeader("x-format", fromObject.format);
  setHeader("x-typecheck", fromObject.typecheck);
  setHeader("x-query-timeout-ms", fromObject.query_timeout_ms);
  setHeader("x-linearized", fromObject.linearized);
  setHeader("x-max-contention-retries", fromObject.max_contention_retries);
  setHeader("traceparent", fromObject.traceparent);
  setHeader(
    "x-query-tags",
    fromObject.query_tags,
    (tags) => Object.entries(tags).map((tag) => tag.join("=")).join(",")
  );
  setHeader("x-last-txn-ts", __privateGet(this, _lastTxnTs), (v) => v);
  setHeader("x-driver-env", __privateGet(_Client, _driverEnvHeader));
};
_validateConfiguration = new WeakSet();
validateConfiguration_fn = function() {
  const config = __privateGet(this, _clientConfiguration);
  const required_options = [
    "client_timeout_buffer_ms",
    "endpoint",
    "format",
    "http2_session_idle_ms",
    "long_type",
    "query_timeout_ms",
    "fetch_keepalive",
    "http2_max_streams"
  ];
  required_options.forEach((option) => {
    if (config[option] === void 0) {
      throw new TypeError(
        `ClientConfiguration option '${option}' must be defined.`
      );
    }
  });
  if (config.http2_max_streams <= 0) {
    throw new RangeError(`'http2_max_streams' must be greater than zero.`);
  }
  if (config.client_timeout_buffer_ms <= 0) {
    throw new RangeError(
      `'client_timeout_buffer_ms' must be greater than zero.`
    );
  }
  if (config.query_timeout_ms <= 0) {
    throw new RangeError(`'query_timeout_ms' must be greater than zero.`);
  }
};
__privateAdd(Client, _driverEnvHeader, getDriverEnv());
var QUERY_CHECK_FAILURE_CODES = [
  "invalid_function_definition",
  "invalid_identifier",
  "invalid_query",
  "invalid_syntax",
  "invalid_type"
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AbortError,
  AuthenticationError,
  AuthorizationError,
  Client,
  ClientClosedError,
  ClientError,
  ContendedTransactionError,
  DateStub,
  Document,
  DocumentReference,
  EmbeddedSet,
  FaunaError,
  FetchClient,
  InvalidRequestError,
  LONG_MAX,
  LONG_MIN,
  Module,
  NamedDocument,
  NamedDocumentReference,
  NetworkError,
  NodeHTTP2Client,
  NullDocument,
  Page,
  ProtocolError,
  QueryCheckError,
  QueryRuntimeError,
  QueryTimeoutError,
  ServiceError,
  ServiceInternalError,
  ServiceTimeoutError,
  SetIterator,
  TaggedTypeFormat,
  ThrottlingError,
  TimeStub,
  endpoints,
  fql,
  getDefaultHTTPClient,
  isHTTPResponse
});
//# sourceMappingURL=index.js.map