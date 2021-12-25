import Link from 'next/link';



export default function Nav() {
  return (
    <nav className='bg-white dark:bg-dark'>
      <ul className='flex items-center justify-between px-8 py-4'>
        <li>
          <Link href='/'>
            <a className='font-bold text-green-400'>Home</a>
          </Link>
        </li>

      </ul>
    </nav>
  );
}
