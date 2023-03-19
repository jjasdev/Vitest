export async function getPostBody(id: number) {
	const data = await fetch("https://jsonplaceholder.typicode.com/post/1").then(
		(r) => r.json()
	);
	return data.body;
}
