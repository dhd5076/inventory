import Link from 'next/link';

export default function Layout({ children }) {
    return (
        <>
            <nav className="bg-black py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between">
                        <Link href="/">
                            <span className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium cursor-pointer text-lg">Inventory</span>
                        </Link>
                        <div className="flex space-x-4">
                            <Link href="/inventory">
                                <span className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Inventory</span>
                            </Link>
                            <Link href="/prep-list">
                                <span className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Prep List</span>
                            </Link>
                            <Link href="/recipes">
                                <span className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Recipes</span>
                            </Link>
                            <Link href="/reports">
                                <span className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">Reports</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <main className="container mx-auto">{children}</main>
        </>
    );
}
