import { appInfo, siteInfo } from "@/app-info";
import type { Data, PageInfo, PageProps } from "@/lib";

export function createProps(pageInfo: PageInfo): PageProps {
	return { pageInfo, appInfo, siteInfo };
}

export function goTo(path: string) {
	window.location.href = path;
}

export function goToNewPage(path: string, focus = false) {
	const opened = window.open(path, "_blank");
	if (focus && opened) {
		opened.focus();
	}
}

export function getRandomNumber(min: number, max: number): number {
	return Math.random() * (max - min) + min;
}

export function getRandomInt(min: number, max: number): number {
	const min1 = Math.ceil(min);
	const max1 = Math.floor(max);
	return Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
}

export function simplifyText(input: string): string {
	return input
		.toLowerCase()
		.replace(/[\s~`!@#$%^&*()_+\-={[}\]|\\:;"'<,>.?/]+/g, "_");
}

export function capitalizeFirstLetter(val: string): string {
	return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export function shuffle<T>(array: T[]) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

export function removeFileExtension(filename: string): string {
	const lastDotIndex = filename.lastIndexOf(".");
	if (lastDotIndex === -1) {
		return filename;
	}
	return filename.substring(0, lastDotIndex);
}

export function copyToClipboard(contents: string) {
	navigator.clipboard.writeText(contents);
}

export function setURL(url: string) {
	history.pushState(null, "", url);
}

export function removeDuplicates<T>(arr: T[]): T[] {
	return [...new Set(arr)];
}

export function createData<T>(data: T): Data<T> {
	return { data, hasError: false, error: "" };
}

export function createDataWithError<T>(data: T, error: string): Data<T> {
	return { data, hasError: true, error };
}

export function getFileExtension(filename: string): string {
	const parts = filename.split(".");
	if (parts.length > 1) {
		return parts.pop() || "";
	}
	return "";
}
