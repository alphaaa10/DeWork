import Link from "next/link"
import Image from "next/image"
import { auth,signIn,signOut } from "@/auth"
const Navbar = async () =>{

    const session = await auth();

    return(
        <header className="px-5 py-3 mt-2 text-3xl font-work-sans bg-white" >
            <nav className="flex justify-between items-center">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" height={60} width={200} />
                </Link>
                
                <div className="flex gap-5 items-center text-black">
                    { session && session?.user ? (
                        <>
                            <Link href="/startup/create">
                                <span>Create</span>
                            </Link>

                            <form 
                                action={ async () => {
                                    "use server"
                                    await signOut({redirectTo:'/'})
                                }}
                            >
                            <button type="submit">LogOut</button>
                                </form>

                            <Link href={`/user/${session?.id}`}> 
                            <span>{session?.user?.name}</span> 
                            </Link>
                        </>
                    ) : (
                      <form 
                        action={async () => {
                            "use server"
                            await signIn("github")
                        }}
                      >
                        <button type="submit">Login</button>
                      </form>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Navbar