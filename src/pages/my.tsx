import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react';
import styles from '@/styles/Common.module.css';

export default function My() {
  const { data, status } = useSession();

  if (status === 'loading') {
    return <div>loading</div>;
  }

  return (
    <div>
      {data?.user?.image && (
        <Image
          src={data?.user?.image}
          alt=""
          width={50}
          height={50}
        />
      )}
      {data?.user?.name && <p>name: {data?.user?.name}</p>}
      {data?.user?.email && <p>email: {data?.user?.email}</p>}
      <button
        className={`${styles.button}`}
        onClick={() => signOut({ callbackUrl: '/' })}
      >
        Sign out
      </button>
    </div>
  );
}
