import type { AccentColors } from "@/lib";

export type Data<T> = {
	data: T;
	hasError: boolean;
	error: string;
};

export type UUID = `${string}-${string}-${string}-${string}-${string}`;

export type ColoredText = {
	text: string;
	color: AccentColors;
};

export type Dictionary<TKey extends string | number | symbol, TValue> = {
	[Key in TKey]: TValue;
};

export type KeyPair<TKey, TValue> = {
	key: TKey;
	value: TValue;
};

export type KeyPairFromDictionary<
	// biome-ignore lint/suspicious/noExplicitAny: you can put anything in the dictionary 🤷
	D extends Record<string | number | symbol, any>,
> = {
	[K in keyof D]: {
		key: K;
		value: D[K];
	};
}[keyof D];
