import { deleteDB as deleteIDBDB, type IDBPDatabase, openDB } from "idb";

export async function deleteDB(name: string) {
	await deleteIDBDB(name);
}

export default class DB {
	private dbPromise: Promise<IDBPDatabase<unknown>>;
	private tables: string[];
	private tableName: string;

	async delDb() {
		await deleteDB(this.tableName);
	}

	constructor(name: string, tables: string[]) {
		this.tableName = name;
		this.tables = tables;
		this.dbPromise = openDB(name, 1, {
			upgrade(db) {
				for (const table in tables) {
					if (Object.hasOwn(tables, table)) {
						db.createObjectStore(table);
					}
				}
			},
		});
	}

	async get(table: string, key: IDBKeyRange | IDBValidKey) {
		if (!this.tables.includes(table)) {
			return null;
		}

		return (await this.dbPromise).get(table, key);
	}

	// biome-ignore lint/suspicious/noExplicitAny: you can put anything in the db 🤷
	async set(table: string, key: IDBKeyRange | IDBValidKey, val: any) {
		if (!this.tables.includes(table)) {
			return null;
		}

		return (await this.dbPromise).put(table, val, key);
	}

	async del(table: string, key: IDBKeyRange | IDBValidKey) {
		if (!this.tables.includes(table)) {
			return null;
		}

		return (await this.dbPromise).delete(table, key);
	}

	async clear(table: string) {
		if (!this.tables.includes(table)) {
			return null;
		}

		return (await this.dbPromise).clear(table);
	}

	async keys(table: string) {
		if (!this.tables.includes(table)) {
			return null;
		}

		return (await this.dbPromise).getAllKeys(table);
	}

	async has(table: string, key: IDBValidKey) {
		return (await (await this.dbPromise).getAllKeys(table)).includes(key);
	}
}
