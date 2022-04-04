export async function get() {
  let allPosts = await import.meta.globEager(`./post/*.md`);
  const allTags = new Set();
  allPosts.map((post) => {
    post.frontmatter.tags &&
      post.frontmatter.tags.map((tag) => allTags.add(tag));
  });

  return Array.from(allTags).map((tag) => {
    const filteredPosts = allPosts.filter((post) =>
      post.frontmatter.tags.includes(tag)
    );
    return {
      params: { tag },
      props: {
        posts: filteredPosts,
      },
    };
  });
}
