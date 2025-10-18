import NavBar from "../components/Nav";
export default function MainLayout({children}) {
    return <>
        <NavBar/>
        <div className="container mt-4">{children}</div>
    </>
}
