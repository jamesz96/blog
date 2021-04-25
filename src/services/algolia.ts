import { getResources } from "$lib/request/fetch"
import algolia from "algoliasearch"

async function loadPosts() {
  const posts = await getResources()
  return posts.map(post => ({ ...post, objectID: post.slug }))
}

export async function buildIndices() {
  const client = algolia(
    import.meta.env.VITE_ALGOLIA_APP_ID as string,
    import.meta.env.VITE_ALGOLIA_ADMIN_KEY as string
  )

  const index = client.initIndex("posts")

  const posts = await loadPosts()
  index.saveObjects(posts)

  console.log(`Successfully indexed ${posts.length} posts`)
}
