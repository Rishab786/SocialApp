const inputPostLink = document.getElementById("postLink");
const inputPostDesc = document.getElementById("postDesc");
const addBtn = document.getElementById("addBtn");
const allPost = document.getElementById("allPost");

addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const link = inputPostLink.value;
  const description = inputPostDesc.value;
  var id = Math.random();
  if (link === "") {
    alert("please enter correct link");
  } else if (description === "") {
    alert("please enter valid description");
  } else {
    savePost(link, description, id);
    clear();
  }
});

const savePost = (postLink, postDesc, id) => {
  const myObj = {
    url: postLink,
    description: postDesc,
    Id: id,
  };
  createElement(myObj);

  fetch("http://localhost:3000/addPost", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Link: postLink,
      Desc: postDesc,
      Id: id,
    }),
  });
};

const createElement = (element) => {
  const link = element.url;
  const description = element.description;
  const div = document.createElement("div");
  const img = document.createElement("img");
  const input = document.createElement("input");
  const Btn = document.createElement("button");
  const para = document.createElement("p");
  div.className = "gfg";
  input.classList.add("second-txt", "fixed");
  Btn.className = "first-txt";
  img.src = link;
  input.id = element.postid;
  input.type = "text";
  input.appendChild(Btn);
  Btn.appendChild(document.createTextNode("comment"));
  para.appendChild(document.createTextNode(`PostDesc: ${description}`));
  div.appendChild(img);
  div.appendChild(input);
  div.appendChild(para);
  div.appendChild(Btn);
  allPost.appendChild(div);
  getComment(Btn, element);
};

const getComment = (Btn, post) => {
  Btn.addEventListener("click", () => {
    const userId = post.postid;
    const comment = document.getElementById(`${userId}`).value;
    if (userId === undefined) {
      saveComment(comment, post.Id);
    } else {
      saveComment(comment, userId);
    }
    postComment(comment, userId);
  });
};

const postComment = (comment, id) => {
  let div = document.getElementById(`${id}`).parentElement;
  const h4 = document.createElement("h4");
  h4.appendChild(document.createTextNode(`${comment}`));
  div.after(h4);
};

const saveComment = (comment, id) => {
  fetch("http://localhost:3000/addComment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Comment: comment,
      Id: id,
    }),
  });
};

const getPosts = () => {
  fetch("http://localhost:3000/getAllPost", {
    method: "GET",
  })
    .then((response) => response.json())
    .then(async (data) => {
      data.forEach((element) => {
        createElement(element);
      });
      getAllComments();
    })
    .catch((error) => console.error("Error:", error));
};

const getAllComments = () => {
  fetch("http://localhost:3000/getAllComments", {
    method: "GET",
  })
    .then((response) => response.json())
    .then(async (data) => {
      data.forEach((element) => {
        postComment(element.comment, element.postid);
      });
    })
    .catch((error) => console.error("Error:", error));
};

function clear() {
  inputPostLink.value = "";
  inputPostDesc.value = "";
}
window.addEventListener("DOMContentLoaded", getPosts);
