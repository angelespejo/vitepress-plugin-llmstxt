
export default { async paths() {

	const posts = await ( await fetch( 'https://jsonplaceholder.typicode.com/posts' ) ).json() as ( {
		id     : number
		userId : number
		title  : string
		body   : string
	} )[]

	return posts.slice( 0, 20 ).map( post => ( {
		params : {
			id    : post.id,
			title : post.title,
		},
		content : post.body, // raw Markdown or HTML
	} ) )

} }
