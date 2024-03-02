const loadPost = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
    const data = await res.json();
    const posts = data.posts;
    console.log(posts);
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = ``;

    posts.forEach((post) => {
        // console.log(post);
        const div = document.createElement('div');
        let addClass = '';
        if(post.isActive){
            addClass = 'bg-green-500'
        }
        else{
            addClass = 'bg-red-500';
        }
        console.log(addClass)
        
        // if(post.isActive){
        //     active.classList.add('bg-green-500');
        // }
        // else{
        //     active.classList.add('bg-red-500')
        // }
        div.classList = ` p-10 flex gap-8 bg-[#F3F3F5] mb-6 rounded-xl`;
        div.innerHTML = `
        <div class="h-[72px] w-[82px] relative">
                <img class="h-full w-full  rounded-2xl " src="${post.image}" alt="">
                <div id="active" class="h-3 w-3 absolute -top-1 right-0 rounded-full ${addClass}"></div>
            </div>
            <div class="">
                <!-- Author -->
                <div id="author" class=" flex gap-10">
                    <h1 class="font-medium"># ${post.category}</h1>
                    <h1 class="font-medium">Author : <span id="author_name">${post.author.name}</span></h1>

                </div>
                <!-- title -->
            <div>
                <h1 class="text-xl font-bold my-4">${post.title}</h1>
                <p class="text border-b-4 border-dotted pb-4">${post.description
                }</p>
                <!-- View -->
               <div class="flex justify-between items-center w-[600px] mt-6  ">
                <!-- Eye -->
                <div class="flex gap-10">
                    <h1><img class="inline" src="images/sms.png" alt=""><span>  ${post.comment_count}</span></h1>
                    <h1><img class="inline" src="images/eye (1).png" alt=""> <span> ${post.view_count
                    }</span></h1>
                    <h1><img class="inline" src="images/clock.png" alt=""><span class=""> ${post.posted_time}</span> min</h1>
                </div>

                <div>
                    <button onclick="clickedEmail('${post.title}','${post.view_count}' )" class="btn"><img src="images/email 1.png" alt=""></button>
                </div>
               </div>
            </div>
                
            </div>
        `
        
        const active = document.getElementById('active');
        console.log(active)

        postContainer.appendChild(div)
    })
}

loadPost();

let count = 0;
const clickedEmail = (title, view) => {
    count++;
    document.getElementById('count').innerText = count;
    const parent = document.getElementById('click-container');
    const div = document.createElement('div');
    div.classList = `flex justify-between gap-1 mb-6 bg-white p-4 rounded-xl`
    div.innerHTML = `
    <h1 class="font-semibold text-lg">${title}</h1>
    <h1 class="w-[100px] text-lg"><img class="inline" src="images/eye (1).png" alt=""> <span> ${view
    }</span></h1>
    `

    parent.appendChild(div)
}