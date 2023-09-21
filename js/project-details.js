const projectDetailsContainer = document.querySelector('.about')
const caption = document.querySelector('.caption')
const urlId = location.href.split("?")[1]
const projects = [    
    project1 = {
        id: 'proj1',
        title:`مجمع مطاعم وكافيهات`,
        p:`  اسم المشروع / مجمع مطاعم وكافيهات
        <br>
        الموقع / الباطن 
        `,
        folderName:'cloudSquare',
        imgs: ['001.jpg','002.jpg','003.jpg','004.jpg','005.jpg','006.jpg','007.jpg','008.jpg']
    },
    project2 = {
        id: 'proj2',
        title:`فلل النهضة`,
        p:`  اسم المشروع / فلل حي النهضة
        <br>
        الموقع / حي النهضة
        `,
        folderName:'alNahda',
        imgs: ['00001.jpg','00002.jpg']
    },
    project3 = {
        id: 'proj3',
        title:`فيلا سكنية`,
        p:`  اسم المشروع / فيلا سكنية
        <br>
        الموقع / الشقيق`,
        folderName:'asemHasanZaki',
        imgs: ['01.jpg','02.jpg','03.jpg','04.jpg','06.jpg','07.jpg','08.jpg','09.jpg','010.jpg']
    },
    project4 = {
        id: 'proj4',
        title:`معرض و نقطة بيع`,
        p:`  اسم المشروع / معرض و نقطة بيع  
        <br>
        الموقع / حي الرمال 
        `,
        folderName:'abdelkader',
        imgs: ['001.jpg','002.jpg','003.jpg','004.jpg','005.jpg']
    },
    project5 = {
        id: 'proj5',
        title:`استراحة`,
        p:`اسم المشروع / استراحة 
        <br>
        الموقع / العمارية
        <br>
        نوع المشروع / استراحة خاصة 
        `,
        folderName:'hamoudElHazmy',
        imgs: ['069.jpg','070.jpg','071.jpg','072.jpg','073.jpg','074.jpg','075.jpg','076.jpg','077.jpg','078.jpg']
    },
    project6 = {
        id: 'proj6',
        title:`استراحة`,
        p:`اسم المشروع / استراحة 
        <br>
        الموقع / حي العمارية 
        <br>
        نوع المشروع / استراحة خاصة         
        <br>
        `,
        folderName:'hamoudElHazmy2',
        imgs: ['001-min.jpg','002-min.jpg','003-min.jpg','004-min.jpg','005-min.jpg','006-min.jpg','007-min.jpg','008-min.jpg','009-min.jpg','010-min.jpg','011-min.jpg','012-min.jpg','013-min.jpg','014-min.jpg','015-min.jpg','016-min.jpg','017-min.jpg','018-min.jpg','019-min.jpg',]
    },
    project7 = {
        id: 'proj7',
        title:`فيلا سكنية`,
        p:`اسم المشروع / فيلا سكنية 
        <br>
        الموقع / حي النهضة 
        <br>
        نوع المشروع / فيلا سكنية         
        <br>
        `,
        folderName:'mohamedAsker',
        imgs: ['01-min.jpg','02-min.jpg','03-min.jpg','04-min.jpg','05-min.jpg','06-min.jpg','07-min.jpg','08-min.jpg','09-min.jpg','010-min.jpg','011-min.jpg','012-min.jpg','013-min.jpg','014-min.jpg']
    },
    project8 = {
        id: 'proj8',
        title:`قصر الافراح`,
        p:`اسم المشروع / قصر الافراح  
        <br>
        الموقع /  المنطقة الشرقية بمدينة حفر الباطن 
        <br>
        نوع المشروع / قصر         
        <br>
        `,
        folderName:'palace',
        imgs: ['001.jpg','002.jpg','003.jpg','004.jpg']
    },
]
let projectDetails = projects.find((project) => {
    return project.id == urlId
})


function renderProject() {
    caption.innerHTML = `
        <div class="subtitle"><a href="#">تفاصيل المشروع</a></div>
        <div class="title">${projectDetails.title}</div>
    `
    projectDetailsContainer.innerHTML = `
    <div class="container">
    <div class="row">
        <div class="col-md-12">
            <p dir="rtl" class="fs-3">
                ${projectDetails.p}
            </p><br>
            <div class="row">
                ${projectDetails.imgs.map((img) => {
                    return `<div class="col-md-6 gallery-item">
                        <a href="images/${projectDetails.folderName}/${img}" title=${projectDetails.title}" class="img-zoom">
                            <div class="gallery-box">
                                <div class="gallery-img"> <img src="images/${projectDetails.folderName}/${img}" loading="lazy" class="img-fluid mx-auto d-block" alt="${projectDetails.title}"> </div>
                                <div class="gallery-detail text-center"> <i class="ti-fullscreen"></i> </div>
                            </div>
                        </a>
                    </div>
                    `
                }).join('')}
            </div>
        </div>
        </div>
    </div>
</div>
    `
} renderProject()