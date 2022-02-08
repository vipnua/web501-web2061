import Navigo from "navigo";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProductPage from "./pages/product";
import Header from "./components/header";
import Footer from "./components/footer";
import AdminPosts from "./pages/posts";

const router = new Navigo("/", { linksSelector: "a" });

const print = async (content) => {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("app").innerHTML = await content.render();
    if(content.afterRender) await content.afterRender();
    document.getElementById("footer").innerHTML = Footer.render();
};

router.on({
    "/": () => print(HomePage),
    "/about": () => print(AboutPage),
    "/product": () => print(ProductPage),
    "/admin/posts": () =>print(AdminPosts),
});
router.resolve();


// const a = 10;
// const b = 20;

// function sum(a,b, callback){
//     callback(a + b);
// }
// sum(a,b, function(result){
//     document.getElementById('app').innerHTML = result;
// });

// function loadScript(src, callback){
//     const script = document.createElement('script');
//     script.src = src;
//     script.onload = () => {
//         callback(null, script)
//     }
//     script.onerror = () => {
//         callback(new Error("Lỗi kết nối"));
//     }
//     document.head.append(script);
// }
// loadScript('https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif', function(error, script){
//     if(error){
//         console.log(error);
//     } else {
//         console.log(script);
//     }
// });

// Promise
function loadScript(src){
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => {
            resolve(script)
        }
        script.onerror = () => {
            reject(new Error("Lỗi kết nối"));
        }
        document.head.append(script);
    });
}
// loadScript('https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif')
//     .then(script => console.log(script))
//     .catch(error => console.log(error))

// async/await
async function asyncFunction(){
    try {
        const result = await loadScript('https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif')
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}
asyncFunction();

