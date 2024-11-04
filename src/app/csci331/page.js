import Counter from '@/app/components/Counter'
import Paragraph from '@/app/components/Paragraph'
import Search from '@/app/components/Search'

export default function MyPage() {
    return (
        <main>
            <h1 style={{
                textAlign: 'center',
                fontSize: '4rem',
                background: 'rgba(255,255,255,0.10)',
                padding: '20px',
            }}>Hello world</h1>
            <Counter increment={1} bg={'forestgreen'}/>
            <Counter increment={2} bg={'chocolate'}/>
            <Paragraph />
            <Search />
        </main>
    )
}