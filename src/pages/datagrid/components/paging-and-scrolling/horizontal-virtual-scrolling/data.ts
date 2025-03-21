export function generateData(rowCount: number, columnCount: number) {
	let i: number;
	let j: number;
	const items: {}[] = [];

	for (i = 0; i < rowCount; i += 1) {
		const item = {};
		for (j = 0; j < columnCount; j += 1) {
			item[`field${j + 1}`] = `${i + 1}-${j + 1}`;
		}
		items.push(item);
	}
	return items;
}
