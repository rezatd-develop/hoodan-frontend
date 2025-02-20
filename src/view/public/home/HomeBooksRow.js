import HomeContentRow from "./HomeContentRow";
import blogSample from '../../../media/images/samples/blog_sample.webp'

export default function HomeBooksRow() {
    const contents = [
        {
            id: 1,
            img: blogSample,
            description: 'Hoodan editorial',
            title: '11 Must-See Shows during Frieze Los Angeles',
            secondDescription: 'this is second description',
            price: '$124.00',
        },
        {
            id: 2,
            img: blogSample,
            description: 'Hoodan editorial',
            title: '11 Must-See Shows during Frieze Los Angeles',
            secondDescription: 'this is second description',
            price: '$124.00',
        },
        {
            id: 3,
            img: blogSample,
            description: 'Hoodan editorial',
            title: '11 Must-See Shows during Frieze Los Angeles',
            secondDescription: 'this is second description',
            price: '$124.00',
        },
        {
            id: 4,
            img: blogSample,
            description: 'Hoodan editorial',
            title: '11 Must-See Shows during Frieze Los Angeles',
            secondDescription: 'this is second description',
            price: '$124.00',
        },
    ]

    return (
        <div className="mb-5 mt-5">
            <HomeContentRow title='Most Recent Translated Books' description='' contents={contents} />
        </div>
    )
}