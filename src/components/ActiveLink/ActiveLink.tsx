import { AnchorHTMLAttributes } from 'react';
import { useRouter } from 'next/router';
/** Components */
import CustomLink from '@components/CustomLink';

interface ActiveLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string | { href: string; as: string }; // Allow both static and dynamic routes
  locale?: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
}

const ActiveLink = ({
  to,
  locale,
  children,
  className = '',
  activeClassName = '',
  ...props
}: ActiveLinkProps): JSX.Element => {
  const { asPath } = useRouter();

  const isActive =
    typeof to === 'string'
      ? to === asPath
      : asPath === to.href || asPath === to.as;

  const activeLinkClassName = isActive
    ? `${className} ${activeClassName}`.trim()
    : className;

  return (
    <CustomLink
      to={to}
      locale={locale}
      className={activeLinkClassName || null}
      {...props}
    >
      {children}
    </CustomLink>
  );
};

export default ActiveLink;
