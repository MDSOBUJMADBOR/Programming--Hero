
const loadPost = () => {
          const url="https://jsonplaceholder.typicode.com/posts"

          fetch(url)
          .then((res) => res.json())
          .then((data) => {
                    // console.log(data);
                    displayPost(data)
          })
}

const displayPost = (posts) => {
        //1.get the container and empty the container
        const postsContainer = document.getElementById('post-container');
        postsContainer.innerHTML = '';
          posts.forEach(post => {
        //2. create element
        const postCard = document.createElement('div')
        postCard.innerHTML = `
        <div class="post-card">
                    <h2>${post.title}</h2>
                    <p>${post.body}</p>
          </div>
        `
//add to the container 
postsContainer.append(postCard);
                   
          });
}
loadPost()
































// // array of object 
// const displayPost = (posts) => {
//         //1.get the container
//         const postContainer =document.getElementById('post-container');
//         postContainer.innerHTML = "";

//           posts.forEach(post => {
                    
        
//           //2.create HTML element
//           const li=document.createElement('li');
//           li.innerText = post.title;
//           console.log(li);

//           //3.add li into  container
//           postContainer.appendChild(li);
          
//           });
// }


