// app.js
let blogs=[];
function viewBlog(index) {
    // Redirect to blog.html and pass the selected blog's index as a URL parameter
    window.location.href = `blog.html?index=${index}`;
  }
  

document.addEventListener("DOMContentLoaded", function () {
    const homePage = document.getElementById("homePage");
  const addBlogModal = document.getElementById("addBlogModal");
  const addBlogBtn = document.getElementById("addBlogBtn");
  closeAddBlogModal();
  
    // Retrieve existing blogs from LocalStorage
    blogs = JSON.parse(localStorage.getItem("blogs")) || [];
  
    function saveToLocalStorage() {
      localStorage.setItem("blogs", JSON.stringify(blogs));
    }
  
    function showBlogs() {
        homePage.innerHTML = "";
        blogs.forEach((blog, index) => {
          const blogDiv = document.createElement("div");
          blogDiv.classList.add("blog-post");
      
          // Count the number of words in the title and description
          const titleWords = blog.title.split(' ').length;
          const descriptionWords = blog.description.split(' ').length;
      
          // Use CSS class for title and description based on word count
          const titleClass = titleWords > 10 ? "long-text" : "";
          const descriptionClass = descriptionWords > 10 ? "long-text" : "";
      
          blogDiv.innerHTML = `<img src="${blog.imageUrl}" alt="Blog Image">
                                <h2 class="${titleClass}">${blog.title}</h2>
                                <p class="${descriptionClass}">${blog.description}</p>
                                <button onclick="viewBlog(${index})">Read More</button>`;
          homePage.appendChild(blogDiv);
        });
      }

      function addNewBlog() {
        const blogImageUrl = document.getElementById("blogImageUrl").value;
        const blogTitle = document.getElementById("blogTitle").value;
        const blogDescription = document.getElementById("blogDescription").value;
        const blogContent = document.getElementById("blogContent").value;
    
        const newBlog = {
          imageUrl: blogImageUrl,
          title: blogTitle,
          description: blogDescription,
          content: blogContent,
        };
    
        blogs.push(newBlog); // Access the blogs variable from the global scope
        saveToLocalStorage();
        addBlogModal.style.display = "none";
        closeAddBlogModal();
        showBlogs();
      }
  
    function viewBlog(index) {
      const blogPage = document.getElementById("blogPage");
      blogPage.innerHTML = `<h2>${blogs[index].title}</h2>
                            <p><strong>Posted by:</strong> ${blogs[index].poster}</p>
                            <p>${blogs[index].content}</p>`;
      blogPage.style.display = "block";
      homePage.style.display = "none";
    }

    function openAddBlogModal() {
        addBlogModal.innerHTML = `<div class="modal-content">
                                    <h2>Add New Blog</h2>
                                    <label for="blogImageUrl">Enter Blog Post Image URL:</label>
                                    <input type="text" placeholder="Enter image URL" id="blogImageUrl">
                                    <label for="blogTitle">Enter Blog Post Title:</label>
                                    <input type="text" placeholder="Enter title" id="blogTitle">
                                    <label for="blogDescription">Enter Blog Description:</label>
                                    <textarea placeholder="Enter description" id="blogDescription"></textarea>
                                    <label for="blogContent">Write Blog:</label>
                                    <textarea placeholder="Write your blog here" id="blogContent"></textarea>
                                    <button onclick="addNewBlog()">Submit</button>
                                  </div>`;
        addBlogModal.style.display = "block";
      }

      function closeAddBlogModal() {
        addBlogModal.style.display = "none";
      }
    
    
      showBlogs();
    
      addBlogBtn.addEventListener("click", openAddBlogModal);
    
      // Dynamically add event listener to the "Submit" button inside the modal
      addBlogModal.addEventListener("click", function (event) {
        if (event.target.tagName === "BUTTON" && event.target.innerText === "Submit") {
          addNewBlog();
        }
      });

  });

