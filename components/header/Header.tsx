import Link from 'next/link';
import s from './header.module.css'

const Header = () => (
    <div className={s.container}>
        <header className={s.headerWrapper}>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/post/[id]" as="/post/first">
                        <a>First Post</a>
                    </Link>
                </li>
                <li>
                    <Link href="/post/[id]" as="/post/second">
                        <a>Second Post</a>
                    </Link>
                </li>
            </ul>
        </header>
    </div>
)

export default Header;
