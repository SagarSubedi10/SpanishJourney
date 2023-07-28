// Get the element where you want to display the view count
const viewCountElement = document.getElementById('viewCount');

// Make a GET request to your API endpoint
fetch('https://f4bddx6tqd5kwaacn7y5krc3vi0pcbiw.lambda-url.us-east-1.on.aws/')
  .then(response => response.json())
  .then(data => {
    // Extract the view count from the response
    const viewCount = data.views;

    // Update the HTML content with the view count
    viewCountElement.textContent = viewCount + ' Views';
  })
  .catch(error => {
    console.error('Error:', error);
 });
  