const postContainer = document.querySelector('.post-content')
let id = location.href.split('?')[1]
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

function getPost() {
    let existingPost = posts.find((post) => {
        return parseInt(id) == post.id
    })
    renderPost(existingPost)
} getPost()

function renderPost(post) {
    postContainer.innerHTML = `
    <img src="images/cloudSquare/${post.img}" class="img-responsive mb-5" alt="">
    <div class="date"> <span class="ti-tag"></span>  <p class="main-font d-inline fw-normal">${post.date}</p>  <span class="ti-time"></span><p class="d-inline">${post.category}</p></div>
    <h2>${post.title}</h2>
    <p>
        ${post.desc}</p>
    `
}