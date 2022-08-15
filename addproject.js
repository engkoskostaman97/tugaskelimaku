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
    postAt: new Date(),
    author: "engkos kostaman",
    stardate,
    enddate,
    description,
    image,
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
            <div>
            <img class="blog-image"src="${dataBlog[index].image}" alt="gambar1">
            </div>
               
            </div>
            <div class="judul">
                <h1>
                    <a href="blog-detail.html" target="_blank">
                    ${dataBlog[index].project}</a>
                </h1>
            </div>
            <p> ${dataBlog[index].stardate}-${dataBlog[index].enddate}</p>
            <div class="durasi">
            ${getFullTime(dataBlog[index].postAt)} | ${dataBlog[index].author}
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
            <div style="text-align: right; margin-top: 15px">
            <span style="font-size: 12px; color:grey">${getDistanceTime(dataBlog[index].postAt)}</span>
        </div>
        </div>
    </div>
        
      `;
  }
}

function getFullTime(time) {
  let month = ["Januari", "Febuari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

  let date = time.getDate();
  let monthIndex = time.getMonth();
  let year = time.getFullYear();

  let hours = time.getHours();
  let minutes = time.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  } else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let fullTime = `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`;
  return fullTime;
}

function getDistanceTime(time) {
  let tanggalMulai = new Date();
  let tanggalSelesai = time;

  let distance = tanggalMulai - tanggalSelesai;
  console.log(distance);

  let milisecond = 1000;
  let secondInHours = 3600;
  let hoursInDay = 24;

  let distanceDay = Math.floor(distance / (milisecond * secondInHours * hoursInDay));
  let distanceHours = Math.floor(distance / (milisecond * 60 * 60));
  let distanceMinutes = Math.floor(distance / (milisecond * 60));
  let distanceSeconds = Math.floor(distance / milisecond);

  if (distanceDay > 0) {
    return `${distanceDay} day ago`;
  } else if (distanceHours > 0) {
    return `${distanceHours} hours ago`;
  } else if (distanceMinutes > 0) {
    return `${distanceMinutes} minutes ago`;
  } else {
    return `${distanceSeconds} seconds ago`;
  }
}
