//Please upload your images to postimage.com the use the urls to display 320x320 or lower
const projects = [
    {
        id:"1",
        name:"Blog Post Web Application (Node.js, JavaScript, Angular, Heroku, MongoDB)",
        shortTitle:"Blog Post Web Application",
        overview:"Front and back-end responsive web application that creates, updates, displays and deletes objects from a custom MongoDB database.",
        description: "Created this front and back-end responsive web application that creates, updates, displays and deletes objects from a custom MongoDB database.The user is able to create a post that is displayed in a list that can be tagged, commented and viewed. The web app was structured according to MVC Design Pattern and complemented with third party packages and tools such as Express, Routing, and Bootstrap.",
        img:"https://i.postimg.cc/02NvvrDD/blog-ban.jpg",
        url:"https://blog-angular01.herokuapp.com/blog",
        guides:{
            guide1:{
                title:"Home Page",
                desc:"The web application displays a list of blog objects retrieved from a custom MongoDB database.",
                img:"https://i.postimg.cc/3RvcW12Q/p1-blog-capture1.jpg"
            },
            guide2:{
                title:"Admin",
                desc:"The web application contains an Administrator page that allows to create, update and delete posts from a MongoDB database.",
                img:"https://i.postimg.cc/yYPrJk3x/p1-blog-capture3.jpg"
            },
            guide3:{
                title:"Single Post",
                desc:"The user can select the post of choice and view it individually. The post can be tagged and commented by the user. The comments will be automatically submited and saved in a MongoDB database",
                img:"https://i.postimg.cc/ZnDBg8D0/p1-lwlw-blg-04.jpg"
            }
        }
    },
    {
        id:"2",
        name:"Music Web Application (C#, DB2, ASP.NET, Azure)",
        shortTitle:"Music Web Application",
        overview:"Front and back-end web application that uses the MVC design pattern in ASP.NET Core framework.",
        description: "Created a front and back-end web application that uses the MVC design pattern in ASP.NET Core framework. The application allows users to create accounts under different roles such as administrative or user. The web app displays a list of tracks, albums and artists created by the admin account. The application was built using Security, Authorization, Media Items, C# principles and hosted on a custom database in Azure.",
        img:'https://i.postimg.cc/HLg5R05p/music-app.jpg',
        url:"http://vdalbani-wa2022.azurewebsites.net/",
        guides:{
            guide1:{
                desc:"What it does 1",
                img:"https://i.postimg.cc/HxVcB7kB/pug.png"
            },
            guide2:{
                desc:"Second description",
                img:"https://i.postimg.cc/HxVcB7kB/pug.png"
            },
            guide3:{
                desc:"third description",
                img:"https://i.postimg.cc/HxVcB7kB/pug.png"
            }
        }
    },
    {
        id:"3",
        name:"Weather Mobile App (Java, Android Studio, Google Maps, Location Services, Google Firestore, Room DB)",
        shortTitle:"Weather Mobile App",
        overview:"Created a mobile application for Android phones that retrieves country-related data from a RESTful API and displays it into a UI Activity.",
        description: "Created a mobile application for Android phones that retrieves country-related data from a RESTful API and displays it into a UI Activity. The user is able to click the items in the populated list to add them to a favorite list saved in a local Room database. The application displays the country’s information, weather forecast, and location in Google Maps. In addition, the user can create an account that will store its information and preferences in a cloud database using Google’s Cloud Firestore. The mobile application was designed and built using MVC Design patterns and Android Jetpack architecture.",
        img:'https://i.postimg.cc/GtQP65cJ/weather-ban.png',
        guides:{
            guide1:{
                desc:"What it does 1",
                img:"https://i.postimg.cc/HxVcB7kB/pug.png"
            },
            guide2:{
                desc:"Second description",
                img:"https://i.postimg.cc/HxVcB7kB/pug.png"
            },
            guide3:{
                desc:"third description",
                img:"https://i.postimg.cc/HxVcB7kB/pug.png"
            }
        }
    },
    // {
    //     id:"4",
    //     name:"Project four",
    //     overview:"Overview here",
    //     description: "Project one description here",
    //     img:'https://i.postimg.cc/HxVcB7kB/pug.png',
    //     guides:{
    //         guide1:{
    //             desc:"What it does 1",
    //             img:"https://i.postimg.cc/HxVcB7kB/pug.png"
    //         },
    //         guide2:{
    //             desc:"Second description",
    //             img:"https://i.postimg.cc/HxVcB7kB/pug.png"
    //         },
    //         guide3:{
    //             desc:"third description",
    //             img:"https://i.postimg.cc/HxVcB7kB/pug.png"
    //         }
    //     }
    // },
    // {
    //     id:"5",
    //     name:"Project five",
    //     overview:"Overview here",
    //     description: "Project one description here",
    //     img:'https://i.postimg.cc/HxVcB7kB/pug.png',
    //     guides:{
    //         guide1:{
    //             desc:"What it does 1",
    //             img:"https://i.postimg.cc/HxVcB7kB/pug.png"
    //         },
    //         guide2:{
    //             desc:"Second description",
    //             img:"https://i.postimg.cc/HxVcB7kB/pug.png"
    //         },
    //         guide3:{
    //             desc:"third description",
    //             img:"https://i.postimg.cc/HxVcB7kB/pug.png"
    //         }
    //     }
    // }
]

export default projects;