type PostData = {
	id     : number
	userId : number
	title  : string
	body   : string
}
export default { async paths() {

	let posts: PostData[]
	try {

		posts = await ( await fetch( 'https://jsonplaceholder.typicode.com/posts' ) ).json() as ( PostData )[]

	}
	catch ( error ) {

		console.log( `---
👎 Error fetching paths data from jsonplaceholder.typicode.com: ${error}
👍 Getting local data
---` )

		posts = ( await import( './paths-data.json' ) ).default

	}

	return posts.slice( 0, 20 ).map( post => ( {
		params : {
			id    : post.id,
			title : post.title,
		},
		content : post.body, // raw Markdown or HTML
	} ) )

} }
