import { Button, Text, Transition } from 'components/core';
import Link from 'next/link';
import { RiKeyboardBoxFill } from 'react-icons/ri';

export default function Leaderboards() {
  return (
    <Transition className='flex flex-col cursor-default items-center self-center gap-6'>
      <Text className='text-[120px] font-bold leading-none' dimmed>
        Coming Soon!
      </Text>
      <Text className='text-center'>Leaderboards are coming soon, keep a eye out for when they come!</Text>
      <Button asChild className='gap-2.5 px-4 py-3' variant='filled'>
        <Link href='/'>
          <RiKeyboardBoxFill />
          Go Home
        </Link>
      </Button>
    </Transition>
  );
}
