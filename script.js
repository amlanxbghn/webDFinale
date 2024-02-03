var form = document.getElementById("post-form");
        var input = document.getElementById("text-input");
        var button = document.getElementById("post-button");
        var list = document.getElementById("post-list");

        form.addEventListener("submit", function(event) {
            event.preventDefault();
            if (input.value.trim() != "") {
                var post = document.createElement("input");
                post.setAttribute("type", "text");
                post.setAttribute("value", input.value);
                post.setAttribute("readonly", true);
                post.setAttribute("style", "border: none;");
                list.appendChild(post);
                input.value = "";
                var likeButton = document.createElement("span");
                likeButton.classList.add("like-button");
                likeButton.textContent = "Like";
                post.appendChild(likeButton);
                var likes = 0;
                likeButton.addEventListener("click", function() {
                likes++;
                likeButton.textContent = "Like (" + likes + ")";
                });
            }
        });

        
        

        

