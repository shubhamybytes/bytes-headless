
import { useLoaderData  } from "@remix-run/react";
import { meta } from './($locale)._index';



export async function loader(args){
    

    return 'message tesxt'
    
}

export default function App(){
    return(
        <div className='mypage'>
            <div className='container page-width'>
                <h1>Custom page</h1>
            </div>
        </div>
    )
}