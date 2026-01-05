'use client';

import Link from "next/link";
import Image from "next/image";
import posthog from 'posthog-js';

const Navbar = () => {
    const handleLogoClick = () => {
        posthog.capture('logo_clicked', {
            nav_location: 'header',
        });
    };

    const handleNavClick = (linkName: string) => {
        const eventMap: Record<string, string> = {
            'Home': 'nav_home_clicked',
            'Events': 'nav_events_clicked',
            'Create Event': 'nav_create_event_clicked',
        };

        posthog.capture(eventMap[linkName], {
            nav_item: linkName,
            nav_location: 'header',
        });
    };

    return (
        <header>
            <nav>
                <Link href='/' className="logo" onClick={handleLogoClick}>
                    <Image src="/icons/logo.png" alt="logo" width={24} height={24} />

                    <p>Event</p>
                </Link>

                <ul>
                    <Link href="/" onClick={() => handleNavClick('Home')}>Home</Link>
                    <Link href="/" onClick={() => handleNavClick('Events')}>Events</Link>
                    <Link href="/" onClick={() => handleNavClick('Create Event')}>Create Event</Link>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar