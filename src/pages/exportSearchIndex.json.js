export async function get() {
  let posts = await import.meta.globEager(`./post/*.md`);
  return {
    body: JSON.stringify(posts, false, 2),
  };
}
