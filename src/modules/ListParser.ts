import fs from "fs";

import { IListParser } from "../interfaces/IList";

export default class ListParser implements IListParser {
	private readonly listPath: string;

	private list: Array<string> = [];

	constructor(listPath: string = __dirname + "/../../people_list.txt") {
		this.listPath = listPath;

		this.createList();
	}

	private getFileData(): string {
		return fs.readFileSync(this.listPath, { encoding: "utf-8" });
	}

	private createList(): void {
		const fileData: string = this.getFileData();

		this.list = fileData.trim().split("\n");
	}

	public getList(): Array<string> {
		return this.list;
	}
}

