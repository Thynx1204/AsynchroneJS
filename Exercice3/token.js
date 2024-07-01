async function getPostsWithAuth(token) {
    const url = "http://localhost:3000/posts";
    try {
      const response = await fetch(url, {
        headers: {
          'Authorization': `${token}`
        }
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }

  const fakeToken = 'admin';
  getPostsWithAuth(fakeToken);