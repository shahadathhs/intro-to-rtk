import { Link } from 'react-router-dom';

import { ModeToggle } from '../mode-toggle';

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto h-16 flex items-center gap-5 px-5">
      <div className="flex items-center">
        <span className="font-bold ml-2">Task Logo</span>
      </div>
      <Link to={'/'}>Task</Link>
      <Link to={'/users'}>Users</Link>
      <div>
        <ModeToggle />
      </div>
    </nav>
  );
}
