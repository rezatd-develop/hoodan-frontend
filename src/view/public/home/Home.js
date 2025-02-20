import HomeMainCarousel from './HomeMainCarousel';
import HomeClassesRow from './HomeClassesRow';
import HomeBooksRow from './HomeBooksRow';
import HomeArtItemsGrid from './HomeArtItemsGrid';
import HomeBannerSection from './HomeBannerSection';
import '../../../styles/view/home/home.css';


export default function Home() {
    return <>
        <HomeMainCarousel />
        <HomeClassesRow />
        <HomeBooksRow />
        <HomeArtItemsGrid />
        <HomeBannerSection />
    </>
};