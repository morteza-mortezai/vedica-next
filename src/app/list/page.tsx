import { useRouter } from 'next/navigation'

export default async function ListPage({ searchParams }) {

    const page = parseInt(searchParams.page)
    const itemPerPage = searchParams.items_per_page || 10
    const data = await fetch(`https://vedica-back.liara.run/api/media?item_per_page=${itemPerPage}&page=${page}`)
    const result = await data.json()


    return (
        <div>
            <h1>hello</h1>
            <ul>
                {result.data.map((p) => <li key={p.id} ><a >{p.title}</a></li>)}
            </ul>
            <Pagination page={page} total={result.pagination.total_count} />
        </div>
    )
}


function Pagination({ page, total }: { page: number, total: number }) {
    const router=useRouter()

    const pages = Array.from(Array(total).keys())
    return (
        <ul>
            {pages.map(p => (<li key={p} onClick={()=>router.push(`?page=${p}`)} className={p == page ? 'bg-red-100' : ''}>{p}</li>))}

        </ul>
    )
}