
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Notes
 * 
 */
export type Notes = $Result.DefaultSelection<Prisma.$NotesPayload>
/**
 * Model Types
 * 
 */
export type Types = $Result.DefaultSelection<Prisma.$TypesPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Status: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGHT: 'HIGHT'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Notes
 * const notes = await prisma.notes.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Notes
   * const notes = await prisma.notes.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.notes`: Exposes CRUD operations for the **Notes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notes
    * const notes = await prisma.notes.findMany()
    * ```
    */
  get notes(): Prisma.NotesDelegate<ExtArgs>;

  /**
   * `prisma.types`: Exposes CRUD operations for the **Types** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Types
    * const types = await prisma.types.findMany()
    * ```
    */
  get types(): Prisma.TypesDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.17.0
   * Query Engine version: 393aa359c9ad4a4bb28630fb5613f9c281cde053
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Notes: 'Notes',
    Types: 'Types'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "notes" | "types"
      txIsolationLevel: never
    }
    model: {
      Notes: {
        payload: Prisma.$NotesPayload<ExtArgs>
        fields: Prisma.NotesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>
          }
          findFirst: {
            args: Prisma.NotesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>
          }
          findMany: {
            args: Prisma.NotesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>[]
          }
          create: {
            args: Prisma.NotesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>
          }
          createMany: {
            args: Prisma.NotesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>
          }
          update: {
            args: Prisma.NotesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>
          }
          deleteMany: {
            args: Prisma.NotesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotesPayload>
          }
          aggregate: {
            args: Prisma.NotesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotes>
          }
          groupBy: {
            args: Prisma.NotesGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotesGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.NotesFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.NotesAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.NotesCountArgs<ExtArgs>
            result: $Utils.Optional<NotesCountAggregateOutputType> | number
          }
        }
      }
      Types: {
        payload: Prisma.$TypesPayload<ExtArgs>
        fields: Prisma.TypesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TypesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TypesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypesPayload>
          }
          findFirst: {
            args: Prisma.TypesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TypesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypesPayload>
          }
          findMany: {
            args: Prisma.TypesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypesPayload>[]
          }
          create: {
            args: Prisma.TypesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypesPayload>
          }
          createMany: {
            args: Prisma.TypesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TypesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypesPayload>
          }
          update: {
            args: Prisma.TypesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypesPayload>
          }
          deleteMany: {
            args: Prisma.TypesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TypesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TypesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypesPayload>
          }
          aggregate: {
            args: Prisma.TypesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTypes>
          }
          groupBy: {
            args: Prisma.TypesGroupByArgs<ExtArgs>
            result: $Utils.Optional<TypesGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TypesFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TypesAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TypesCountArgs<ExtArgs>
            result: $Utils.Optional<TypesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Notes
   */

  export type AggregateNotes = {
    _count: NotesCountAggregateOutputType | null
    _min: NotesMinAggregateOutputType | null
    _max: NotesMaxAggregateOutputType | null
  }

  export type NotesMinAggregateOutputType = {
    id: string | null
    title: string | null
    note: string | null
    status: $Enums.Status | null
    completed: boolean | null
  }

  export type NotesMaxAggregateOutputType = {
    id: string | null
    title: string | null
    note: string | null
    status: $Enums.Status | null
    completed: boolean | null
  }

  export type NotesCountAggregateOutputType = {
    id: number
    title: number
    note: number
    status: number
    completed: number
    _all: number
  }


  export type NotesMinAggregateInputType = {
    id?: true
    title?: true
    note?: true
    status?: true
    completed?: true
  }

  export type NotesMaxAggregateInputType = {
    id?: true
    title?: true
    note?: true
    status?: true
    completed?: true
  }

  export type NotesCountAggregateInputType = {
    id?: true
    title?: true
    note?: true
    status?: true
    completed?: true
    _all?: true
  }

  export type NotesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notes to aggregate.
     */
    where?: NotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NotesOrderByWithRelationInput | NotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notes
    **/
    _count?: true | NotesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotesMaxAggregateInputType
  }

  export type GetNotesAggregateType<T extends NotesAggregateArgs> = {
        [P in keyof T & keyof AggregateNotes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotes[P]>
      : GetScalarType<T[P], AggregateNotes[P]>
  }




  export type NotesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotesWhereInput
    orderBy?: NotesOrderByWithAggregationInput | NotesOrderByWithAggregationInput[]
    by: NotesScalarFieldEnum[] | NotesScalarFieldEnum
    having?: NotesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotesCountAggregateInputType | true
    _min?: NotesMinAggregateInputType
    _max?: NotesMaxAggregateInputType
  }

  export type NotesGroupByOutputType = {
    id: string
    title: string
    note: string
    status: $Enums.Status
    completed: boolean
    _count: NotesCountAggregateOutputType | null
    _min: NotesMinAggregateOutputType | null
    _max: NotesMaxAggregateOutputType | null
  }

  type GetNotesGroupByPayload<T extends NotesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotesGroupByOutputType[P]>
            : GetScalarType<T[P], NotesGroupByOutputType[P]>
        }
      >
    >


  export type NotesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    note?: boolean
    status?: boolean
    completed?: boolean
    type?: boolean | Notes$typeArgs<ExtArgs>
  }, ExtArgs["result"]["notes"]>


  export type NotesSelectScalar = {
    id?: boolean
    title?: boolean
    note?: boolean
    status?: boolean
    completed?: boolean
  }

  export type NotesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    type?: boolean | Notes$typeArgs<ExtArgs>
  }

  export type $NotesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notes"
    objects: {
      type: Prisma.$TypesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      note: string
      status: $Enums.Status
      completed: boolean
    }, ExtArgs["result"]["notes"]>
    composites: {}
  }

  type NotesGetPayload<S extends boolean | null | undefined | NotesDefaultArgs> = $Result.GetResult<Prisma.$NotesPayload, S>

  type NotesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NotesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NotesCountAggregateInputType | true
    }

  export interface NotesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notes'], meta: { name: 'Notes' } }
    /**
     * Find zero or one Notes that matches the filter.
     * @param {NotesFindUniqueArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotesFindUniqueArgs>(args: SelectSubset<T, NotesFindUniqueArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Notes that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NotesFindUniqueOrThrowArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotesFindUniqueOrThrowArgs>(args: SelectSubset<T, NotesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesFindFirstArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotesFindFirstArgs>(args?: SelectSubset<T, NotesFindFirstArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Notes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesFindFirstOrThrowArgs} args - Arguments to find a Notes
     * @example
     * // Get one Notes
     * const notes = await prisma.notes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotesFindFirstOrThrowArgs>(args?: SelectSubset<T, NotesFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notes
     * const notes = await prisma.notes.findMany()
     * 
     * // Get first 10 Notes
     * const notes = await prisma.notes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notesWithIdOnly = await prisma.notes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotesFindManyArgs>(args?: SelectSubset<T, NotesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Notes.
     * @param {NotesCreateArgs} args - Arguments to create a Notes.
     * @example
     * // Create one Notes
     * const Notes = await prisma.notes.create({
     *   data: {
     *     // ... data to create a Notes
     *   }
     * })
     * 
     */
    create<T extends NotesCreateArgs>(args: SelectSubset<T, NotesCreateArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Notes.
     * @param {NotesCreateManyArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const notes = await prisma.notes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotesCreateManyArgs>(args?: SelectSubset<T, NotesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notes.
     * @param {NotesDeleteArgs} args - Arguments to delete one Notes.
     * @example
     * // Delete one Notes
     * const Notes = await prisma.notes.delete({
     *   where: {
     *     // ... filter to delete one Notes
     *   }
     * })
     * 
     */
    delete<T extends NotesDeleteArgs>(args: SelectSubset<T, NotesDeleteArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Notes.
     * @param {NotesUpdateArgs} args - Arguments to update one Notes.
     * @example
     * // Update one Notes
     * const notes = await prisma.notes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotesUpdateArgs>(args: SelectSubset<T, NotesUpdateArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Notes.
     * @param {NotesDeleteManyArgs} args - Arguments to filter Notes to delete.
     * @example
     * // Delete a few Notes
     * const { count } = await prisma.notes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotesDeleteManyArgs>(args?: SelectSubset<T, NotesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notes
     * const notes = await prisma.notes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotesUpdateManyArgs>(args: SelectSubset<T, NotesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notes.
     * @param {NotesUpsertArgs} args - Arguments to update or create a Notes.
     * @example
     * // Update or create a Notes
     * const notes = await prisma.notes.upsert({
     *   create: {
     *     // ... data to create a Notes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notes we want to update
     *   }
     * })
     */
    upsert<T extends NotesUpsertArgs>(args: SelectSubset<T, NotesUpsertArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Notes that matches the filter.
     * @param {NotesFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const notes = await prisma.notes.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: NotesFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Notes.
     * @param {NotesAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const notes = await prisma.notes.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: NotesAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesCountArgs} args - Arguments to filter Notes to count.
     * @example
     * // Count the number of Notes
     * const count = await prisma.notes.count({
     *   where: {
     *     // ... the filter for the Notes we want to count
     *   }
     * })
    **/
    count<T extends NotesCountArgs>(
      args?: Subset<T, NotesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotesAggregateArgs>(args: Subset<T, NotesAggregateArgs>): Prisma.PrismaPromise<GetNotesAggregateType<T>>

    /**
     * Group by Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotesGroupByArgs['orderBy'] }
        : { orderBy?: NotesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notes model
   */
  readonly fields: NotesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    type<T extends Notes$typeArgs<ExtArgs> = {}>(args?: Subset<T, Notes$typeArgs<ExtArgs>>): Prisma__TypesClient<$Result.GetResult<Prisma.$TypesPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notes model
   */ 
  interface NotesFieldRefs {
    readonly id: FieldRef<"Notes", 'String'>
    readonly title: FieldRef<"Notes", 'String'>
    readonly note: FieldRef<"Notes", 'String'>
    readonly status: FieldRef<"Notes", 'Status'>
    readonly completed: FieldRef<"Notes", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Notes findUnique
   */
  export type NotesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where: NotesWhereUniqueInput
  }

  /**
   * Notes findUniqueOrThrow
   */
  export type NotesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where: NotesWhereUniqueInput
  }

  /**
   * Notes findFirst
   */
  export type NotesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NotesOrderByWithRelationInput | NotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * Notes findFirstOrThrow
   */
  export type NotesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NotesOrderByWithRelationInput | NotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * Notes findMany
   */
  export type NotesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NotesOrderByWithRelationInput | NotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notes.
     */
    cursor?: NotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    distinct?: NotesScalarFieldEnum | NotesScalarFieldEnum[]
  }

  /**
   * Notes create
   */
  export type NotesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * The data needed to create a Notes.
     */
    data: XOR<NotesCreateInput, NotesUncheckedCreateInput>
  }

  /**
   * Notes createMany
   */
  export type NotesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notes.
     */
    data: NotesCreateManyInput | NotesCreateManyInput[]
  }

  /**
   * Notes update
   */
  export type NotesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * The data needed to update a Notes.
     */
    data: XOR<NotesUpdateInput, NotesUncheckedUpdateInput>
    /**
     * Choose, which Notes to update.
     */
    where: NotesWhereUniqueInput
  }

  /**
   * Notes updateMany
   */
  export type NotesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notes.
     */
    data: XOR<NotesUpdateManyMutationInput, NotesUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NotesWhereInput
  }

  /**
   * Notes upsert
   */
  export type NotesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * The filter to search for the Notes to update in case it exists.
     */
    where: NotesWhereUniqueInput
    /**
     * In case the Notes found by the `where` argument doesn't exist, create a new Notes with this data.
     */
    create: XOR<NotesCreateInput, NotesUncheckedCreateInput>
    /**
     * In case the Notes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotesUpdateInput, NotesUncheckedUpdateInput>
  }

  /**
   * Notes delete
   */
  export type NotesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
    /**
     * Filter which Notes to delete.
     */
    where: NotesWhereUniqueInput
  }

  /**
   * Notes deleteMany
   */
  export type NotesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notes to delete
     */
    where?: NotesWhereInput
  }

  /**
   * Notes findRaw
   */
  export type NotesFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Notes aggregateRaw
   */
  export type NotesAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Notes.type
   */
  export type Notes$typeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Types
     */
    select?: TypesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypesInclude<ExtArgs> | null
    where?: TypesWhereInput
  }

  /**
   * Notes without action
   */
  export type NotesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notes
     */
    select?: NotesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotesInclude<ExtArgs> | null
  }


  /**
   * Model Types
   */

  export type AggregateTypes = {
    _count: TypesCountAggregateOutputType | null
    _min: TypesMinAggregateOutputType | null
    _max: TypesMaxAggregateOutputType | null
  }

  export type TypesMinAggregateOutputType = {
    id: string | null
    noteId: string | null
  }

  export type TypesMaxAggregateOutputType = {
    id: string | null
    noteId: string | null
  }

  export type TypesCountAggregateOutputType = {
    id: number
    noteId: number
    _all: number
  }


  export type TypesMinAggregateInputType = {
    id?: true
    noteId?: true
  }

  export type TypesMaxAggregateInputType = {
    id?: true
    noteId?: true
  }

  export type TypesCountAggregateInputType = {
    id?: true
    noteId?: true
    _all?: true
  }

  export type TypesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Types to aggregate.
     */
    where?: TypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypesOrderByWithRelationInput | TypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Types
    **/
    _count?: true | TypesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TypesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TypesMaxAggregateInputType
  }

  export type GetTypesAggregateType<T extends TypesAggregateArgs> = {
        [P in keyof T & keyof AggregateTypes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTypes[P]>
      : GetScalarType<T[P], AggregateTypes[P]>
  }




  export type TypesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TypesWhereInput
    orderBy?: TypesOrderByWithAggregationInput | TypesOrderByWithAggregationInput[]
    by: TypesScalarFieldEnum[] | TypesScalarFieldEnum
    having?: TypesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TypesCountAggregateInputType | true
    _min?: TypesMinAggregateInputType
    _max?: TypesMaxAggregateInputType
  }

  export type TypesGroupByOutputType = {
    id: string
    noteId: string
    _count: TypesCountAggregateOutputType | null
    _min: TypesMinAggregateOutputType | null
    _max: TypesMaxAggregateOutputType | null
  }

  type GetTypesGroupByPayload<T extends TypesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TypesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TypesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TypesGroupByOutputType[P]>
            : GetScalarType<T[P], TypesGroupByOutputType[P]>
        }
      >
    >


  export type TypesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    noteId?: boolean
    notes?: boolean | NotesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["types"]>


  export type TypesSelectScalar = {
    id?: boolean
    noteId?: boolean
  }

  export type TypesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notes?: boolean | NotesDefaultArgs<ExtArgs>
  }

  export type $TypesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Types"
    objects: {
      notes: Prisma.$NotesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      noteId: string
    }, ExtArgs["result"]["types"]>
    composites: {}
  }

  type TypesGetPayload<S extends boolean | null | undefined | TypesDefaultArgs> = $Result.GetResult<Prisma.$TypesPayload, S>

  type TypesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TypesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TypesCountAggregateInputType | true
    }

  export interface TypesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Types'], meta: { name: 'Types' } }
    /**
     * Find zero or one Types that matches the filter.
     * @param {TypesFindUniqueArgs} args - Arguments to find a Types
     * @example
     * // Get one Types
     * const types = await prisma.types.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TypesFindUniqueArgs>(args: SelectSubset<T, TypesFindUniqueArgs<ExtArgs>>): Prisma__TypesClient<$Result.GetResult<Prisma.$TypesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Types that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TypesFindUniqueOrThrowArgs} args - Arguments to find a Types
     * @example
     * // Get one Types
     * const types = await prisma.types.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TypesFindUniqueOrThrowArgs>(args: SelectSubset<T, TypesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TypesClient<$Result.GetResult<Prisma.$TypesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypesFindFirstArgs} args - Arguments to find a Types
     * @example
     * // Get one Types
     * const types = await prisma.types.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TypesFindFirstArgs>(args?: SelectSubset<T, TypesFindFirstArgs<ExtArgs>>): Prisma__TypesClient<$Result.GetResult<Prisma.$TypesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Types that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypesFindFirstOrThrowArgs} args - Arguments to find a Types
     * @example
     * // Get one Types
     * const types = await prisma.types.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TypesFindFirstOrThrowArgs>(args?: SelectSubset<T, TypesFindFirstOrThrowArgs<ExtArgs>>): Prisma__TypesClient<$Result.GetResult<Prisma.$TypesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Types
     * const types = await prisma.types.findMany()
     * 
     * // Get first 10 Types
     * const types = await prisma.types.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const typesWithIdOnly = await prisma.types.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TypesFindManyArgs>(args?: SelectSubset<T, TypesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Types.
     * @param {TypesCreateArgs} args - Arguments to create a Types.
     * @example
     * // Create one Types
     * const Types = await prisma.types.create({
     *   data: {
     *     // ... data to create a Types
     *   }
     * })
     * 
     */
    create<T extends TypesCreateArgs>(args: SelectSubset<T, TypesCreateArgs<ExtArgs>>): Prisma__TypesClient<$Result.GetResult<Prisma.$TypesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Types.
     * @param {TypesCreateManyArgs} args - Arguments to create many Types.
     * @example
     * // Create many Types
     * const types = await prisma.types.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TypesCreateManyArgs>(args?: SelectSubset<T, TypesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Types.
     * @param {TypesDeleteArgs} args - Arguments to delete one Types.
     * @example
     * // Delete one Types
     * const Types = await prisma.types.delete({
     *   where: {
     *     // ... filter to delete one Types
     *   }
     * })
     * 
     */
    delete<T extends TypesDeleteArgs>(args: SelectSubset<T, TypesDeleteArgs<ExtArgs>>): Prisma__TypesClient<$Result.GetResult<Prisma.$TypesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Types.
     * @param {TypesUpdateArgs} args - Arguments to update one Types.
     * @example
     * // Update one Types
     * const types = await prisma.types.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TypesUpdateArgs>(args: SelectSubset<T, TypesUpdateArgs<ExtArgs>>): Prisma__TypesClient<$Result.GetResult<Prisma.$TypesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Types.
     * @param {TypesDeleteManyArgs} args - Arguments to filter Types to delete.
     * @example
     * // Delete a few Types
     * const { count } = await prisma.types.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TypesDeleteManyArgs>(args?: SelectSubset<T, TypesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Types
     * const types = await prisma.types.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TypesUpdateManyArgs>(args: SelectSubset<T, TypesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Types.
     * @param {TypesUpsertArgs} args - Arguments to update or create a Types.
     * @example
     * // Update or create a Types
     * const types = await prisma.types.upsert({
     *   create: {
     *     // ... data to create a Types
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Types we want to update
     *   }
     * })
     */
    upsert<T extends TypesUpsertArgs>(args: SelectSubset<T, TypesUpsertArgs<ExtArgs>>): Prisma__TypesClient<$Result.GetResult<Prisma.$TypesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Types that matches the filter.
     * @param {TypesFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const types = await prisma.types.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: TypesFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Types.
     * @param {TypesAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const types = await prisma.types.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TypesAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypesCountArgs} args - Arguments to filter Types to count.
     * @example
     * // Count the number of Types
     * const count = await prisma.types.count({
     *   where: {
     *     // ... the filter for the Types we want to count
     *   }
     * })
    **/
    count<T extends TypesCountArgs>(
      args?: Subset<T, TypesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TypesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TypesAggregateArgs>(args: Subset<T, TypesAggregateArgs>): Prisma.PrismaPromise<GetTypesAggregateType<T>>

    /**
     * Group by Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TypesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TypesGroupByArgs['orderBy'] }
        : { orderBy?: TypesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TypesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTypesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Types model
   */
  readonly fields: TypesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Types.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TypesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notes<T extends NotesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NotesDefaultArgs<ExtArgs>>): Prisma__NotesClient<$Result.GetResult<Prisma.$NotesPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Types model
   */ 
  interface TypesFieldRefs {
    readonly id: FieldRef<"Types", 'String'>
    readonly noteId: FieldRef<"Types", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Types findUnique
   */
  export type TypesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Types
     */
    select?: TypesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypesInclude<ExtArgs> | null
    /**
     * Filter, which Types to fetch.
     */
    where: TypesWhereUniqueInput
  }

  /**
   * Types findUniqueOrThrow
   */
  export type TypesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Types
     */
    select?: TypesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypesInclude<ExtArgs> | null
    /**
     * Filter, which Types to fetch.
     */
    where: TypesWhereUniqueInput
  }

  /**
   * Types findFirst
   */
  export type TypesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Types
     */
    select?: TypesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypesInclude<ExtArgs> | null
    /**
     * Filter, which Types to fetch.
     */
    where?: TypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypesOrderByWithRelationInput | TypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Types.
     */
    cursor?: TypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Types.
     */
    distinct?: TypesScalarFieldEnum | TypesScalarFieldEnum[]
  }

  /**
   * Types findFirstOrThrow
   */
  export type TypesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Types
     */
    select?: TypesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypesInclude<ExtArgs> | null
    /**
     * Filter, which Types to fetch.
     */
    where?: TypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypesOrderByWithRelationInput | TypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Types.
     */
    cursor?: TypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Types.
     */
    distinct?: TypesScalarFieldEnum | TypesScalarFieldEnum[]
  }

  /**
   * Types findMany
   */
  export type TypesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Types
     */
    select?: TypesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypesInclude<ExtArgs> | null
    /**
     * Filter, which Types to fetch.
     */
    where?: TypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypesOrderByWithRelationInput | TypesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Types.
     */
    cursor?: TypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    distinct?: TypesScalarFieldEnum | TypesScalarFieldEnum[]
  }

  /**
   * Types create
   */
  export type TypesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Types
     */
    select?: TypesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypesInclude<ExtArgs> | null
    /**
     * The data needed to create a Types.
     */
    data: XOR<TypesCreateInput, TypesUncheckedCreateInput>
  }

  /**
   * Types createMany
   */
  export type TypesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Types.
     */
    data: TypesCreateManyInput | TypesCreateManyInput[]
  }

  /**
   * Types update
   */
  export type TypesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Types
     */
    select?: TypesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypesInclude<ExtArgs> | null
    /**
     * The data needed to update a Types.
     */
    data: XOR<TypesUpdateInput, TypesUncheckedUpdateInput>
    /**
     * Choose, which Types to update.
     */
    where: TypesWhereUniqueInput
  }

  /**
   * Types updateMany
   */
  export type TypesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Types.
     */
    data: XOR<TypesUpdateManyMutationInput, TypesUncheckedUpdateManyInput>
    /**
     * Filter which Types to update
     */
    where?: TypesWhereInput
  }

  /**
   * Types upsert
   */
  export type TypesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Types
     */
    select?: TypesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypesInclude<ExtArgs> | null
    /**
     * The filter to search for the Types to update in case it exists.
     */
    where: TypesWhereUniqueInput
    /**
     * In case the Types found by the `where` argument doesn't exist, create a new Types with this data.
     */
    create: XOR<TypesCreateInput, TypesUncheckedCreateInput>
    /**
     * In case the Types was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TypesUpdateInput, TypesUncheckedUpdateInput>
  }

  /**
   * Types delete
   */
  export type TypesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Types
     */
    select?: TypesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypesInclude<ExtArgs> | null
    /**
     * Filter which Types to delete.
     */
    where: TypesWhereUniqueInput
  }

  /**
   * Types deleteMany
   */
  export type TypesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Types to delete
     */
    where?: TypesWhereInput
  }

  /**
   * Types findRaw
   */
  export type TypesFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Types aggregateRaw
   */
  export type TypesAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Types without action
   */
  export type TypesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Types
     */
    select?: TypesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const NotesScalarFieldEnum: {
    id: 'id',
    title: 'title',
    note: 'note',
    status: 'status',
    completed: 'completed'
  };

  export type NotesScalarFieldEnum = (typeof NotesScalarFieldEnum)[keyof typeof NotesScalarFieldEnum]


  export const TypesScalarFieldEnum: {
    id: 'id',
    noteId: 'noteId'
  };

  export type TypesScalarFieldEnum = (typeof TypesScalarFieldEnum)[keyof typeof TypesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type NotesWhereInput = {
    AND?: NotesWhereInput | NotesWhereInput[]
    OR?: NotesWhereInput[]
    NOT?: NotesWhereInput | NotesWhereInput[]
    id?: StringFilter<"Notes"> | string
    title?: StringFilter<"Notes"> | string
    note?: StringFilter<"Notes"> | string
    status?: EnumStatusFilter<"Notes"> | $Enums.Status
    completed?: BoolFilter<"Notes"> | boolean
    type?: XOR<TypesNullableRelationFilter, TypesWhereInput> | null
  }

  export type NotesOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    note?: SortOrder
    status?: SortOrder
    completed?: SortOrder
    type?: TypesOrderByWithRelationInput
  }

  export type NotesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotesWhereInput | NotesWhereInput[]
    OR?: NotesWhereInput[]
    NOT?: NotesWhereInput | NotesWhereInput[]
    title?: StringFilter<"Notes"> | string
    note?: StringFilter<"Notes"> | string
    status?: EnumStatusFilter<"Notes"> | $Enums.Status
    completed?: BoolFilter<"Notes"> | boolean
    type?: XOR<TypesNullableRelationFilter, TypesWhereInput> | null
  }, "id">

  export type NotesOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    note?: SortOrder
    status?: SortOrder
    completed?: SortOrder
    _count?: NotesCountOrderByAggregateInput
    _max?: NotesMaxOrderByAggregateInput
    _min?: NotesMinOrderByAggregateInput
  }

  export type NotesScalarWhereWithAggregatesInput = {
    AND?: NotesScalarWhereWithAggregatesInput | NotesScalarWhereWithAggregatesInput[]
    OR?: NotesScalarWhereWithAggregatesInput[]
    NOT?: NotesScalarWhereWithAggregatesInput | NotesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notes"> | string
    title?: StringWithAggregatesFilter<"Notes"> | string
    note?: StringWithAggregatesFilter<"Notes"> | string
    status?: EnumStatusWithAggregatesFilter<"Notes"> | $Enums.Status
    completed?: BoolWithAggregatesFilter<"Notes"> | boolean
  }

  export type TypesWhereInput = {
    AND?: TypesWhereInput | TypesWhereInput[]
    OR?: TypesWhereInput[]
    NOT?: TypesWhereInput | TypesWhereInput[]
    id?: StringFilter<"Types"> | string
    noteId?: StringFilter<"Types"> | string
    notes?: XOR<NotesRelationFilter, NotesWhereInput>
  }

  export type TypesOrderByWithRelationInput = {
    id?: SortOrder
    noteId?: SortOrder
    notes?: NotesOrderByWithRelationInput
  }

  export type TypesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    noteId?: string
    AND?: TypesWhereInput | TypesWhereInput[]
    OR?: TypesWhereInput[]
    NOT?: TypesWhereInput | TypesWhereInput[]
    notes?: XOR<NotesRelationFilter, NotesWhereInput>
  }, "id" | "noteId">

  export type TypesOrderByWithAggregationInput = {
    id?: SortOrder
    noteId?: SortOrder
    _count?: TypesCountOrderByAggregateInput
    _max?: TypesMaxOrderByAggregateInput
    _min?: TypesMinOrderByAggregateInput
  }

  export type TypesScalarWhereWithAggregatesInput = {
    AND?: TypesScalarWhereWithAggregatesInput | TypesScalarWhereWithAggregatesInput[]
    OR?: TypesScalarWhereWithAggregatesInput[]
    NOT?: TypesScalarWhereWithAggregatesInput | TypesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Types"> | string
    noteId?: StringWithAggregatesFilter<"Types"> | string
  }

  export type NotesCreateInput = {
    id?: string
    title: string
    note: string
    status?: $Enums.Status
    completed: boolean
    type?: TypesCreateNestedOneWithoutNotesInput
  }

  export type NotesUncheckedCreateInput = {
    id?: string
    title: string
    note: string
    status?: $Enums.Status
    completed: boolean
    type?: TypesUncheckedCreateNestedOneWithoutNotesInput
  }

  export type NotesUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    completed?: BoolFieldUpdateOperationsInput | boolean
    type?: TypesUpdateOneWithoutNotesNestedInput
  }

  export type NotesUncheckedUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    completed?: BoolFieldUpdateOperationsInput | boolean
    type?: TypesUncheckedUpdateOneWithoutNotesNestedInput
  }

  export type NotesCreateManyInput = {
    id?: string
    title: string
    note: string
    status?: $Enums.Status
    completed: boolean
  }

  export type NotesUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotesUncheckedUpdateManyInput = {
    title?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TypesCreateInput = {
    id?: string
    notes: NotesCreateNestedOneWithoutTypeInput
  }

  export type TypesUncheckedCreateInput = {
    id?: string
    noteId: string
  }

  export type TypesUpdateInput = {
    notes?: NotesUpdateOneRequiredWithoutTypeNestedInput
  }

  export type TypesUncheckedUpdateInput = {
    noteId?: StringFieldUpdateOperationsInput | string
  }

  export type TypesCreateManyInput = {
    id?: string
    noteId: string
  }

  export type TypesUpdateManyMutationInput = {

  }

  export type TypesUncheckedUpdateManyInput = {
    noteId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TypesNullableRelationFilter = {
    is?: TypesWhereInput | null
    isNot?: TypesWhereInput | null
  }

  export type NotesCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    note?: SortOrder
    status?: SortOrder
    completed?: SortOrder
  }

  export type NotesMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    note?: SortOrder
    status?: SortOrder
    completed?: SortOrder
  }

  export type NotesMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    note?: SortOrder
    status?: SortOrder
    completed?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NotesRelationFilter = {
    is?: NotesWhereInput
    isNot?: NotesWhereInput
  }

  export type TypesCountOrderByAggregateInput = {
    id?: SortOrder
    noteId?: SortOrder
  }

  export type TypesMaxOrderByAggregateInput = {
    id?: SortOrder
    noteId?: SortOrder
  }

  export type TypesMinOrderByAggregateInput = {
    id?: SortOrder
    noteId?: SortOrder
  }

  export type TypesCreateNestedOneWithoutNotesInput = {
    create?: XOR<TypesCreateWithoutNotesInput, TypesUncheckedCreateWithoutNotesInput>
    connectOrCreate?: TypesCreateOrConnectWithoutNotesInput
    connect?: TypesWhereUniqueInput
  }

  export type TypesUncheckedCreateNestedOneWithoutNotesInput = {
    create?: XOR<TypesCreateWithoutNotesInput, TypesUncheckedCreateWithoutNotesInput>
    connectOrCreate?: TypesCreateOrConnectWithoutNotesInput
    connect?: TypesWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TypesUpdateOneWithoutNotesNestedInput = {
    create?: XOR<TypesCreateWithoutNotesInput, TypesUncheckedCreateWithoutNotesInput>
    connectOrCreate?: TypesCreateOrConnectWithoutNotesInput
    upsert?: TypesUpsertWithoutNotesInput
    disconnect?: TypesWhereInput | boolean
    delete?: TypesWhereInput | boolean
    connect?: TypesWhereUniqueInput
    update?: XOR<XOR<TypesUpdateToOneWithWhereWithoutNotesInput, TypesUpdateWithoutNotesInput>, TypesUncheckedUpdateWithoutNotesInput>
  }

  export type TypesUncheckedUpdateOneWithoutNotesNestedInput = {
    create?: XOR<TypesCreateWithoutNotesInput, TypesUncheckedCreateWithoutNotesInput>
    connectOrCreate?: TypesCreateOrConnectWithoutNotesInput
    upsert?: TypesUpsertWithoutNotesInput
    disconnect?: TypesWhereInput | boolean
    delete?: TypesWhereInput | boolean
    connect?: TypesWhereUniqueInput
    update?: XOR<XOR<TypesUpdateToOneWithWhereWithoutNotesInput, TypesUpdateWithoutNotesInput>, TypesUncheckedUpdateWithoutNotesInput>
  }

  export type NotesCreateNestedOneWithoutTypeInput = {
    create?: XOR<NotesCreateWithoutTypeInput, NotesUncheckedCreateWithoutTypeInput>
    connectOrCreate?: NotesCreateOrConnectWithoutTypeInput
    connect?: NotesWhereUniqueInput
  }

  export type NotesUpdateOneRequiredWithoutTypeNestedInput = {
    create?: XOR<NotesCreateWithoutTypeInput, NotesUncheckedCreateWithoutTypeInput>
    connectOrCreate?: NotesCreateOrConnectWithoutTypeInput
    upsert?: NotesUpsertWithoutTypeInput
    connect?: NotesWhereUniqueInput
    update?: XOR<XOR<NotesUpdateToOneWithWhereWithoutTypeInput, NotesUpdateWithoutTypeInput>, NotesUncheckedUpdateWithoutTypeInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TypesCreateWithoutNotesInput = {
    id?: string
  }

  export type TypesUncheckedCreateWithoutNotesInput = {
    id?: string
  }

  export type TypesCreateOrConnectWithoutNotesInput = {
    where: TypesWhereUniqueInput
    create: XOR<TypesCreateWithoutNotesInput, TypesUncheckedCreateWithoutNotesInput>
  }

  export type TypesUpsertWithoutNotesInput = {
    update: XOR<TypesUpdateWithoutNotesInput, TypesUncheckedUpdateWithoutNotesInput>
    create: XOR<TypesCreateWithoutNotesInput, TypesUncheckedCreateWithoutNotesInput>
    where?: TypesWhereInput
  }

  export type TypesUpdateToOneWithWhereWithoutNotesInput = {
    where?: TypesWhereInput
    data: XOR<TypesUpdateWithoutNotesInput, TypesUncheckedUpdateWithoutNotesInput>
  }

  export type TypesUpdateWithoutNotesInput = {

  }

  export type TypesUncheckedUpdateWithoutNotesInput = {

  }

  export type NotesCreateWithoutTypeInput = {
    id?: string
    title: string
    note: string
    status?: $Enums.Status
    completed: boolean
  }

  export type NotesUncheckedCreateWithoutTypeInput = {
    id?: string
    title: string
    note: string
    status?: $Enums.Status
    completed: boolean
  }

  export type NotesCreateOrConnectWithoutTypeInput = {
    where: NotesWhereUniqueInput
    create: XOR<NotesCreateWithoutTypeInput, NotesUncheckedCreateWithoutTypeInput>
  }

  export type NotesUpsertWithoutTypeInput = {
    update: XOR<NotesUpdateWithoutTypeInput, NotesUncheckedUpdateWithoutTypeInput>
    create: XOR<NotesCreateWithoutTypeInput, NotesUncheckedCreateWithoutTypeInput>
    where?: NotesWhereInput
  }

  export type NotesUpdateToOneWithWhereWithoutTypeInput = {
    where?: NotesWhereInput
    data: XOR<NotesUpdateWithoutTypeInput, NotesUncheckedUpdateWithoutTypeInput>
  }

  export type NotesUpdateWithoutTypeInput = {
    title?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotesUncheckedUpdateWithoutTypeInput = {
    title?: StringFieldUpdateOperationsInput | string
    note?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    completed?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use NotesDefaultArgs instead
     */
    export type NotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TypesDefaultArgs instead
     */
    export type TypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TypesDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}