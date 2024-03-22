import { PageProps } from "$fresh/server.ts";
import {Search} from "../islands/Search.tsx"

//definicion y , si hay, ejemplo

const Page  = (props: PageProps) => {
    return(
        <div>
            <Search />
        </div>
    )
}

export default Page;