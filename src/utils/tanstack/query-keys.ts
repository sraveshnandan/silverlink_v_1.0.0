const keys = ["user-data"] as const;

type QueryKey = (typeof keys)[number];
type ReplaceDash<S extends string> = S extends `${infer A}-${infer B}`
  ? `${A}${ReplaceDash<B>}`
  : S;

export const queryKeys = Object.fromEntries(
  keys.map((key) => [key.toUpperCase().replaceAll("-", "").trim(), key])
) as { [K in QueryKey as Uppercase<ReplaceDash<K>>]: Lowercase<K> };
