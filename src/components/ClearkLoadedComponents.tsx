'use client'
import { SignedIn } from '@clerk/clerk-react';
import { ClerkLoaded, SignedOut, UserButton, SignInButton } from '@clerk/nextjs';
import Image from 'next/image';

const ClearkLoadedComponents = () => {
    return (
        
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <Image src="/people.png" alt="" width={24} height={24} />
            </div>
            <div className="cursor-pointer">
              <Image src="/messages.png" alt="" width={20} height={20} />
            </div>
            <div className="cursor-pointer">
              <Image src="/notifications.png" alt="" width={20} height={20} />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton />
          </SignedOut>
        </ClerkLoaded> 
        
    );
};

export default ClearkLoadedComponents;