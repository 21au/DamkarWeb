import { motion, AnimatePresence } from 'framer-motion';
import { Link, InertiaLinkProps } from '@inertiajs/react';
import { ReactNode } from 'react';
import clsx from 'clsx';

interface NavLinkProps extends InertiaLinkProps {
  active: boolean;
  icon: ReactNode;
  label: string;
  className?: string;
}

export default function NavLink({
  active = false,
  icon,
  label,
  className = '',
  ...props
}: NavLinkProps) {
  return (
    <Link
      {...props}
      className={clsx(
        'flex items-center gap-4 px-3 py-2 rounded-lg transition duration-150 ease-in-out',
        active
          ? 'bg-birutuek text-white font-semibold'
          : 'text-gray-500 hover:text-gray-700 hover:bg-birutuek',
        className,
      )}
    >
      <span className="text-xl">{icon}</span>
      {active && <span className="text-sm">{label}</span>}
    </Link>
  );
}
