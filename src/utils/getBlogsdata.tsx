export async function fetchLatestPosts() {
  try {
    const response = await fetch('/api/getLatestpost');
    const data = await response.json();
    return data;
  } catch (error) {
    return [];
  }
}
