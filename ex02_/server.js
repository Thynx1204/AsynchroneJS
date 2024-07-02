function toWait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
} 

async function fetchWithRetry(url, options, retries, delay) {
    const {default: fetch} = await import ('node-fetch');
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data
        } catch (error) {
            if(i === retries - 1){
                throw error;
            }
            console.log(`Attempt ${i + 1} failed. Retrying in ${delay}ms...`);
            /* await toWait(delay); */
        }
    }
}


(async function() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
      })
    };
    const retries = 3;
    const delay = 1000; 
    
    try {
      const data = await fetchWithRetry(url, options, retries, delay);
      console.log('Data retrieved:', data);
    } catch (error) {
      console.error('Fetch failed:', error);
    }
  })(); 
  

/* 
(async function() {
    const url = 'https://stackoverflow.com/questions/46175660/fetch-retry-request-on-failure';
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    };
    const retries = 3;
    const delay = 1000; 
  
    try {
      const response = await fetchWithRetry(url, options, retries, delay);
      console.log('Data retrieved:', response);
    } catch (error) {
      console.error('Fetch failed:', error);
    }
})();  */