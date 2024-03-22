import { PageProps } from "$fresh/server.ts";

const layout = (props: PageProps) => {
    const Component = props.Component;

    return(
        <div>
            <a href="/wordcsr">Client Side</a>
            <a href="/wordssr">Server Side</a>
            <h1>My Dictionary</h1>
            <Component/>
        </div>
    )
}

export default layout;