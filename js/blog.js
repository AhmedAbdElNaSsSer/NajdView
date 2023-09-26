const blogContainer = document.querySelector('.blog .wrap')
const searchBox = document.querySelector('.search-box input')
const categorySection = Array.from(document.querySelectorAll('.sidebar .rest li'))
const categoryList = document.querySelector('.rest')
const latestNews = document.querySelector('.last-post-thum') 
const posts = [
    {
        id:1,
        img:'1.jpg',
        title:'مشروع استراحة خاصة',
        date:' 15.11.2023 ',
        category:'شاليهات',
        desc:`الهدف الرئيسي لهذا المشروع هو إنشاء استراحة خاصة للاستجمام والاسترخاء لأصحابها.
        تمثل الاستراحات الخاصة عادة مكانًا للعائلات والأصدقاء لقضاء وقت ممتع معًا دون الحاجة للسفر إلى أماكن بعيدة.
        يمكن تصميم الاستراحة بطريقة تلبي احتياجات المالك وتفضيلاته الشخصية، بما في ذلك وجود مسبح، منطقة للشواء، منطقة للألعاب، حديقة جميلة، ومرافق داخلية للراحة`,
    },
    {
        id:2,
        img:'2.jpg',
        title:'مشروع قصر الافراح',
        date:' 14.11.2023 ',
        category:'قاعة المناسبات وقصور الأفراح',
        desc:`قصر الأفراح هو منشأة مخصصة لاستضافة وإقامة المناسبات الخاصة والاحتفالات مثل حفلات الزفاف، حفلات التخرج، الاجتماعات الاجتماعية، وأي مناسبة أخرى تحتاج إلى مكان فخم ومريح.
        يتميز القصر بتصميم داخلي وخارجي فاخر يوفر أجواءً جميلة وفخمة للضيوف.
        يتضمن المشروع أماكن للجلوس والاستراحة، وصالة رئيسية لإقامة الفعاليات، ومناطق مخصصة لتقديم الطعام والمشروبات.`,
    },
    {
        id:3,
        img:'3.jpg',
        title:'مشروع كلاود سكوير',
        date:' 13.11.2023 ',
        category:'المطاعم والمطابخ',
        desc:`
        المشروع يهدف إلى إنشاء مجمع تجاري يضم عددًا من المطاعم والكافيهات المتنوعة.
        يمكن تصميم المطاعم والكافيهات بأساليب وأنماط مختلفة لتلبية احتياجات وتفضيلات مجموعة متنوعة من الزبائن.
        سيتضمن المشروع مناطق للجلوس الداخلية والخارجية لتوفير تجربة تناول الطعام متعددة الأوجه.`,
    },
    {
        id:4,
        img:'4.jpg',
        title:'مشروع استراحة خاصة',
        date:' 15.11.2023 ',
        category:'شاليهات',
        desc:`
        الاستراحة ستتضمن فيلا سكنية مصممة للراحة والاسترخاء، ويمكن تصميمها حسب رغبة المالك.
        تشمل المرافق الخارجية مساحات خضراء مع حديقة جميلة ونباتات متنوعة.
        توفير حمام سباحة للسباحة والترفيه.
        مناطق للجلوس والاستراحة في الهواء الطلق قرب المسبح أو تحت مظلات.`,
    },
    {
        id:5,
        img:'5.jpg',
        title:'فلل سكنية في حي النهضة',
        date:' 14.11.2023 ',
        category:'سكنى',
        desc:`
        المشروع يهدف إلى بناء مجموعة من الفلل السكنية عالية الجودة في حي النهضة.
        يمكن تصميم الفلل بمختلف المساحات والتصاميم لتلبية احتياجات مختلفة للعملاء.
        ستتضمن الفلل مرافق وخدمات مثل مساحات خضراء، ومواقف للسيارات، وأماكن للترفيه.`,
    },
    {
        id:6,
        img:'6.jpg',
        title:'فيلا سكنية في مدينة الشقيق',
        date:' 14.11.2023 ',
        category:'سكنى',
        desc:`
        المشروع يستهدف بناء فيلا سكنية تمنح السكان أو العائلات فرصة العيش في مكان هادئ وخاص في مدينة الشقيق.
        تصميم الفيلا يمكن أن يكون حسب الطلب، مع إمكانية تخصيص عدد الغرف والمرافق والمساحات الداخلية والخارجية.
        يتضمن المشروع بنية تحتية مثل مواقف للسيارات وحديقة وربما مسبح.`,
    },
    {
        id:7,
        img:'7.jpg',
        title:'معرض ونقطة بيع',
        date:' 14.11.2023 ',
        category:'مستودعات ومخازن وورش',
        desc:`المشروع يهدف إلى إنشاء معرض تجاري يعرض منتجات أو خدمات معينة للزبائن.
يمكن أن يكون المعرض مخصصًا للملابس والأزياء، أو الإلكترونيات، أو الأثاث، أو أي نوع آخر من المنتجات أو الخدمات.
سيتضمن المشروع نقطة بيع للزبائن للقيام بالمشتريات
        `,
    },
    {
        id:8,
        img:'8.jpg',
        title:'فيلا سكنية حي النهضة',
        date:' 14.11.2023 ',
        category:'سكنى',
        desc:`
        المشروع يستهدف بناء فيلا سكنية تمنح السكان أو العائلات فرصة العيش في مكان هادئ وخاص.
        تصميم الفيلا يمكن أن يكون حسب الطلب، مع إمكانية تخصيص عدد الغرف والمرافق والمساحات الداخلية والخارجية.
        يتضمن المشروع بنية تحتية مثل مواقف للسيارات وحديقة وربما مسبح.
        `,
    }
]
const latestPosts = [...posts]

function getPosts(posts) {
    posts.map((post) => {
        renderPosts(post)
        
    })
} getPosts(posts) 

function renderPosts(post) {
    blogContainer.innerHTML += `
    <div class="con mb-5">
    <img src="images/blog/${post.img}" alt="">
    <div class="date main-font"><span class="ti-tag"></span> ${post.category}</div>
    <div class="title">${post.title}</div>
    <p class="ptr text-cut">${post.desc}</p>
    <div class="more text-end"><a href="post.html?${post.id}" class="link-btn" tabindex="0" dir="rtl">اقرأ المزيد<i class="ti-arrow-left"></i></a></div>
</div>
    `
} 

function searchInp() {
    searchBox.addEventListener('input', () => {
        if(searchBox.value != '') {
            let filteredPosts = posts.filter((post) => {
                return  post.title.includes(searchBox.value)
            })
            if(filteredPosts.length != 0) {
                blogContainer.innerHTML = ''
                getPosts(filteredPosts)
            } else {
                blogContainer.innerHTML= `<h2 class="text-center bg-white">عذراً لا توجد منشورات</h2>`
            }
        } else {
            blogContainer.innerHTML = ''
            getPosts(posts)
        }
    })
} searchInp()

function filterCategory() {
    const categoryCounts = {};
    categorySection.map((li) => {
        li.addEventListener('click', (e) => {
            e.preventDefault()
            if(li.children[0].textContent != 'الكل') {
                let filteredPosts = posts.filter((post) => {
                    return li.children[0].textContent == post.category
                })
                if(filteredPosts.length != 0) {
                    blogContainer.innerHTML = ''
                    getPosts(filteredPosts)
                } else {
                    blogContainer.innerHTML= `<h2 class="text-center bg-white">عذراً لا توجد منشورات</h2>`
                }
            } else {
                blogContainer.innerHTML = ''
                getPosts(posts)
            }
        })
    })
    for (const post of posts) {
        const category = post.category;
    
        if (categoryCounts[category]) {
            categoryCounts[category]++;
        } else {
            categoryCounts[category] = 1;
        }
    }
} filterCategory()

function renderLatestNews() {
    latestPosts.length = 3
    latestPosts.map((post) => {
        latestNews.innerHTML += `
        <div class="item">
            <div class="valign">
                <div class="img">
                    <a href="post.html"><img src="images/blog/${post.img}" alt=""></a>
                </div>
            </div>
            <div class="cont">
                <h6><a href="post.html">${post.title}</a></h6> <span><a href="post.html" class="main-font">${post.date}</a></span>
            </div>
        </div>
        `
    })
} renderLatestNews()

function categoryCounter() {
    categorySection.map(li => {
        if (li.children[0].textContent == 'الكل') {
            li.children[1].firstChild.textContent = posts.length
        } else {
            let categoryNumber = posts.filter(post => {
                console.log('post: ', post);
                return li.children[0].textContent == post.category
            })
            li.children[1].textContent = categoryNumber.length
        }
        
    })
} categoryCounter()