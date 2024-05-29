import { Spinner } from "@material-tailwind/react";

export function Loader(props: { message: String }) {
    return <>
        <div className="flex items-center justify-center h-full w-full">
            <div className="flex flex-col items-center">
                <Spinner className="h-12 w-12 mb-4" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />
                <p className="text-white">{props.message}</p>
            </div>
        </div>
    </>
}

