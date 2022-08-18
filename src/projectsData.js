//Please upload your images to postimage.com the use the urls to display 320x320 or lower
const projects = [
    {
        id:"1",
        name:"Blog Post Web Application (Node.js, JavaScript, Angular, Heroku, MongoDB)",
        shortTitle:"Blog Post Web Application",
        overview:"Front and back-end responsive web application that creates, updates, displays and deletes objects from a custom MongoDB database.",
        description: "Created this front and back-end responsive web application that creates, updates, displays and deletes objects from a custom MongoDB database.The user is able to create a post that is displayed in a list that can be tagged, commented and viewed. The web app was structured according to MVC Design Pattern and complemented with third party packages and tools such as Express, Routing, and Bootstrap.",
        img:"https://i.postimg.cc/rpDQSvdv/bp-posts.jpg",
        url:"https://blog-angular01.herokuapp.com/blog",
        guides:{
            guide1:{
                title:"Home Page",
                desc:"The web application displays a list of blog objects retrieved from a custom MongoDB database.",
                img:"https://i.postimg.cc/h42QBhZ1/bp-blog2.jpg"
            },
            guide2:{
                title:"Admin",
                desc:"The web application contains an Administrator page that allows to create, update and delete posts from a MongoDB database.",
                img:"https://i.postimg.cc/DwF9PyFR/bp-admin.jpg"
            },
            guide3:{
                title:"Single Post",
                desc:"The user can select a post of choice from the Blog page and view it individually. The post then can be tagged and commented by the user. The comments will be automatically submitted and saved in a MongoDB database.",
                img:"https://i.postimg.cc/XNLdYsqF/bp-single-post.jpg"
            }
        }
    },
    {
        id:"2",
        name:"Music Web Application (C#, DB2, ASP.NET, Azure)",
        shortTitle:"Music Web Application",
        overview:"Front and back-end web application that uses the MVC design pattern in ASP.NET Core framework.",
        description: "Created a front and back-end web application that uses the MVC design pattern in ASP.NET Core framework. The application allows users to create accounts under different roles such as administrative or user. The web app displays a list of tracks, albums and artists created by the admin account. The application was built using Security, Authorization, Media Items, C# principles and hosted on a custom database in Azure.",
        img:'https://i.postimg.cc/HWJGzhM4/home2-img.jpg',
        url:"http://vdalbani-wa2022.azurewebsites.net/",
        guides:{
            guide1:{
                title:"Register/Login",
                desc:"The application contains a Register page that allows to create an account. New accounts will be saved in a secured Azure repository. It is possible to select a Role which will grant access to different functionalities (to demonstrate Authorization and Security principles).",
                img:"https://i.postimg.cc/rs4Pk7GB/register-img.jpg"
            },
            guide2:{
                title:"Artist/Album",
                desc:"The application allows to view and create (only for an administrative account) a New Artists through the Artist page. Moreover, you can Add Album that will be linked to the artist selected. Both artist and album entries can be display in a list.",
                img:"https://i.postimg.cc/HxsZrVw9/albums-img.jpg"
            },
            guide3:{
                title:"Tracks",
                desc:"The Tracks page display a list of the tracks added to the albums. The track’s list allows to view more details about the tracks stored in the database. It is also possible to edit each track entry and add media items such as audio, images and documents related.",
                img:"https://i.postimg.cc/JhhYnscc/trackedit-img.jpg"
            }
        }
    },
    {
        id:"3",
        name:"Weather Mobile App (Java, Android Studio, Google Maps, Location Services, Google Firestore, Room DB)",
        shortTitle:"Weather Mobile App",
        overview:"Created a mobile application for Android phones that retrieves country-related data from a RESTful API and displays it into a UI Activity.",
        description: "Created a mobile application for Android phones that retrieves country-related data from a RESTful API and displays it into a UI Activity. The user is able to click the items in the populated list to add them to a favorite list saved in a local Room database. The application displays the country’s information, weather forecast, and location in Google Maps. In addition, the user can create an account that will store its information and preferences in a cloud database using Google’s Cloud Firestore. The mobile application was designed and built using MVC Design patterns and Android Jetpack architecture.",
        img:'https://i.postimg.cc/Zq904Lg8/wa-main.png',
        url:"",
        guides:{
            guide1:{
                title:"Countries List",
                desc:"The mobile application retrieves JSON objects(countries) from a RESTful API and display them in a list. ",
                img:"https://i.postimg.cc/BZ59LKf2/wa-countries.jpg"
            },
            guide2:{
                title:"Favorite List",
                desc:"You can add a favorite country by clicking one of the country items. The list of favorite items then can be accessed from the menu.",
                img:"https://i.postimg.cc/5NPrL57Q/wa-favorites.jpg"
            },
            guide3:{
                title:"Forecast Activity",
                desc:"Each country in the favorite list can be clicked to obtained information about the forecast. The weather data is being pulled from a third-party weather API.",
                img:"https://i.postimg.cc/QxVmL2mV/wa-forecast.jpg"
            }
        }
    },
//     {
//     id:"3",
//     name:"Weather Mobile App (Java, Android Studio, Google Maps, Location Services, Google Firestore, Room DB)",
//     shortTitle:"Weather Mobile App",
//     overview:"Created a mobile application for Android phones that retrieves country-related data from a RESTful API and displays it into a UI Activity.",
//     description: "Created a mobile application for Android phones that retrieves country-related data from a RESTful API and displays it into a UI Activity. The user is able to click the items in the populated list to add them to a favorite list saved in a local Room database. The application displays the country’s information, weather forecast, and location in Google Maps. In addition, the user can create an account that will store its information and preferences in a cloud database using Google’s Cloud Firestore. The mobile application was designed and built using MVC Design patterns and Android Jetpack architecture.",
//     img:'https://i.postimg.cc/GtQP65cJ/weather-ban.png',
//     url:"",
//     guides:{
//         guide1:{
//             title:"Countries List",
//             desc:"The mobile application retrieves JSON objects(countries) from a RESTful API and display them in a list. ",
//             img:"https://i.postimg.cc/HxVcB7kB/pug.png"
//         },
//         guide2:{
//             title:"Favorite List",
//             desc:"You can add a favorite country by clicking one of the country items. The list of favorite items then can be accessed from the menu.",
//             img:"https://i.postimg.cc/HxVcB7kB/pug.png"
//         },
//         guide3:{
//             title:"Forecast Activity",
//             desc:"Each country in the favorite list can be clicked to obtained information about the forecast. The weather data is being pulled from a third-party weather API.",
//             img:"https://i.postimg.cc/HxVcB7kB/pug.png"
//         }
//     }
// },
]

export default projects;