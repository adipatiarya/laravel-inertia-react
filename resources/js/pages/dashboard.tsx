import { usePage } from "@inertiajs/react";

function Dashboard () {
     const { auth } = usePage<any>().props;
    return (
        <div>
            <p>{JSON.stringify(auth)}</p>
        </div>
    )
}

export default Dashboard;