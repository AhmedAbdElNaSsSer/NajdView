const blogContainer = document.querySelector('.blog .wrap')
const searchBox = document.querySelector('.search-box input')
const categorySection = document.querySelectorAll('.sidebar .rest li')
const latestNews = document.querySelector('.last-post-thum')
const posts = [
    {
        id:1,
        img:'001.jpg',
        title:'مشروع استراحة خاصة',
        date:' 15.11.2023 ',
        category:'التصميم المعماري',
        desc:'أعلنت شركة نجد فيو في السعودية عن أحدث مشاريعها، وهو مشروع "كلود سكوير - cloud square" الواقع في مدينة الرياض. يضم المشروع مجمعًا سكنيًا متكاملًا يضم شققًا سكنية، وفلل، ووحدات تجارية، بالإضافة إلى حدائق ومساحات خضراء. ومن المقرر أن يتم الانتهاء من المشروع في عام 2025',
    },
    {
        id:2,
        img:'002.jpg',
        title:'مشروع قصر الافراح',
        date:' 14.11.2023 ',
        category:'تصاميم الحدائق',
        desc:'أعلنت شركة نجد فيو في السعودية عن أحدث مشاريعها، وهو مشروع "كلود سكوير - cloud square" الواقع في مدينة الرياض. يضم المشروع مجمعًا سكنيًا متكاملًا يضم شققًا سكنية، وفلل، ووحدات تجارية، بالإضافة إلى حدائق ومساحات خضراء. ومن المقرر أن يتم الانتهاء من المشروع في عام 2025',
    },
    {
        id:3,
        img:'003.jpg',
        title:'مشروع كلاود سكوير',
        date:' 13.11.2023 ',
        category:'التصميم الانشائي',
        desc:'أعلنت شركة نجد فيو في السعودية عن أحدث مشاريعها، وهو مشروع "كلود سكوير - cloud square" الواقع في مدينة الرياض. يضم المشروع مجمعًا سكنيًا متكاملًا يضم شققًا سكنية، وفلل، ووحدات تجارية، بالإضافة إلى حدائق ومساحات خضراء. ومن المقرر أن يتم الانتهاء من المشروع في عام 2025',
    },
]

function renderPosts(post) {
    blogContainer.innerHTML += `
    <div class="con">
    <img loading="lazy"  src="images/cloudSquare/${post.img}" alt="">
    <div class="date main-font"> <span class="ti-time"></span> ${post.date} <span class="ti-tag"></span> ${post.category}</div>
    <div class="title">${post.title}</div>
    <p class="ptr text-cut">${post.desc}</p>
    <div class="more text-end"><a href="post.html?${post.id }" class="link-btn" tabindex="0" dir="rtl">اقرأ المزيد<i class="ti-arrow-left"></i></a></div>
</div>
    `
} 

function renderPost(posts) {
    posts.map((post) => {
        renderPosts(post)
    })
} renderPost(posts) 

function searchInp() {
    searchBox.addEventListener('change', () => {
        if(searchBox.value != '') {
            let filteredPosts = posts.filter((post) => {
                return  post.title.includes(searchBox.value)
            })
            if(filteredPosts.length != 0) {
                blogContainer.innerHTML = ''
                renderPost(filteredPosts)
            } else {
                blogContainer.innerHTML= `<h2 class="text-center bg-white">عذراً لا توجد منشورات</h2>`
            }
        } else {
            blogContainer.innerHTML = ''
            renderPost(posts)
        }
    })
} searchInp()

function filterCategory() {
    categorySection.forEach((li) => {
        li.addEventListener('click', (e) => {
            e.preventDefault()
            if(li.children[0].textContent != 'الكل') {
                let filteredPosts = posts.filter((post) => {
                    return li.children[0].textContent == post.category
                })
                if(filteredPosts.length != 0) {
                    blogContainer.innerHTML = ''
                    renderPost(filteredPosts)
                } else {
                    blogContainer.innerHTML= `<h2 class="text-center bg-white">عذراً لا توجد منشورات</h2>`
                }
            } else {
                blogContainer.innerHTML = ''
                renderPost(posts)
            }
        })
    })
} filterCategory()

function renderLatestNews() {
    let latestPosts = posts.splice(-3)
    latestPosts.map((post) => {
        latestNews.innerHTML += `
        <div class="item">
            <div class="valign">
                <div class="img">
                    <a href="post.html"><img loading="lazy"  src="images/cloudSquare/${post.img}" alt=""></a>
                </div>
            </div>
            <div class="cont">
                <h6><a href="post.html">${post.title}</a></h6> <span><a href="post.html" class="main-font">${post.date}</a></span>
            </div>
        </div>
        `
    })
} renderLatestNews()
