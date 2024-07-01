async function getPosts() {
    const url = "https://jsonplaceholder.typicode.com/posts?_limit=4";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
}
getPosts()
async function createPost({ userId, id, title, body }) {
    try {
      const post = { userId, id, title, body };
      const rawResponse = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
      });
  
      if (!rawResponse.ok) {
        throw new Error(`HTTP error! Status: ${rawResponse.status}`);
      }
  
      const content = await rawResponse.json();
      console.log(content);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
createPost({userId: 6,id: 1,title: 'Hello World',body: 'quia'})

async function updatePost(userId, id, title, body) {
    try {
        const post = { userId, id, title, body };

        const rawResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        });
        const content = await rawResponse.json();

        console.log(content);
    } catch (e) {

        console.error(e);
    }
}

updatePost(1, 4, 'World', 'Docker')


async function deletePost(id) {
    try {
        const rawResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });
        // Notez que l'API JSONPlaceholder renvoie un objet vide pour une requête DELETE
        const content = await rawResponse.json();
      
        console.log(content);
    } catch (e) {
        console.error(e);
    }
}

deletePost(1)