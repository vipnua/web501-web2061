import banner from '@/components/banner';
import Header from '@/components/header';

const HomePage = {
    render() {
        return `
        <div class="container">
            ${Header.render()}
            <div class="banner">
                ${banner.render()}
            </div>
            <div class="news">
                ${news.render()}
            </div>
            <footer></footer>
        </div>
        `;
    },
};
export default HomePage;
