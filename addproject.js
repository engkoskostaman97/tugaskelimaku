let dataBlog = []
function addBlog(event) {
  event.preventDefault()

  let project = document.getElementById("input-blog-project").value
  let stardate = document.getElementById("start-date").value
  let enddate = document.getElementById("end-date").value
  let description = document.getElementById("input-blog-description").value
  let image = document.getElementById("input-blog-image").files
  let react = document.getElementById("react").checked
  let node = document.getElementById("node").checked
  let js = document.getElementById("js").checked
  let java = document.getElementById("typescript").checked


  if (react) {
    react = document.getElementById("react").value
  } else {
    react = ''
  }
  if (node) {
    node = document.getElementById("node").value
  } else {
    node = ''
  }
  if (js) {
    js = document.getElementById("js").value
  } else {
    js = ''
  }
  if (java) {
    java = document.getElementById("typescript").value
  } else {
    java = ''
  }

  console.log(react);
  console.log(node);
  console.log(js);
  console.log(java);


  image = URL.createObjectURL(image[0])

  let blog = {
    project,
    stardate,
    enddate,
    description,
    image,
    author: "engkos kostaman",
    postAt: "17 agustus 2022",
    react,
    node,
    js,
    java
  }

  dataBlog.push(blog)


  renderBlog()
}

function renderBlog() {
  document.getElementById("contents").innerHTML = ''

  console.log(dataBlog);

  for (let index = 0; index < dataBlog.length; index++) {

    // console.log(dataBlog[index]);
    document.getElementById("contents").innerHTML +=
      `<div class="addproject">
            <div class="imgproject">
                <img src="${dataBlog[index].image}" alt="gambar1">
            </div>
            <div class="judul">
                <h1>
                    <a href="blog-detail.html" target="_blank">
                    ${dataBlog[index].project}</a>
                </h1>
            </div>
            <p> ${dataBlog[index].stardate}-${dataBlog[index].enddate}</p>
            <div class="durasi">
            ${(dataBlog[index].postAt)} | ${dataBlog[index].author}
            </div>
            <div class="detail">
                <p>
                ${dataBlog[index].description}
                </p>

            </div>
            <i class="fa-brands fa-${dataBlog[index].react}"></i>
              
            <i class="fa-brands fa-${dataBlog[index].node} "></i>
    
             <i class="fa-brands fa-square-${dataBlog[index].js} "></i>
             <i class="fa-brands fa-${dataBlog[index].java}"></i>
          
            <div class="btn-group">
                <button class="btn-edit">Edit Post</button>
                <button class="btn-post">Post Blog</button>
            </div>
        </div>
    </div>
        
      `
  }
}

