'use client'
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

export default function PublicLayout({ children }) {

    return (
        <ClerkProvider>
            <Banner />
            <Navbar />
            {children}
            <Footer />
        </ClerkProvider>
    );
}
