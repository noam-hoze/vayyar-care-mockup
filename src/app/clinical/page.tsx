"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    SparklesIcon,
    ClipboardDocumentListIcon,
    ChartBarIcon,
    HeartIcon,
} from "@heroicons/react/24/solid";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
    {
        title: "AI-Powered Assistant",
        description: `Ask anything — from "Did Room 304 get up today?" to "How many falls this week?" — and get answers, fast.`,
        icon: <SparklesIcon className="w-7 h-7" />,
    },
    {
        title: "Automated Documentation",
        description: `Fall events and key moments are logged for you, instantly — no more manual notes.`,
        icon: <ClipboardDocumentListIcon className="w-7 h-7" />,
    },
    {
        title: "Real-Time Insights",
        description: `See the full picture at a glance. Know what's happening across your floor — no digging.`,
        icon: <ChartBarIcon className="w-7 h-7" />,
    },
    {
        title: "Less Burnout",
        description: `Spend more time with people — not chasing tasks that are already taken care of.`,
        icon: <HeartIcon className="w-7 h-7" />,
    },
];

export default function OverlayScrollReal() {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    const containerRef = useRef<HTMLDivElement>(null);
    const section1Ref = useRef<HTMLElement>(null);
    const section2_5Ref = useRef<HTMLElement>(null);
    const section3Ref = useRef<HTMLElement>(null);

    const videoTestimonials = [
        {
            id: 1,
            thumbnail: "/videos/anthropos_testimonial.png",
            videoUrl:
                "https://firebasestorage.googleapis.com/v0/b/walabothome-app-cloud.appspot.com/o/testimonials%2Fanthropos_testimonial.mp4?alt=media",
        },
        {
            id: 2,
            thumbnail: "/videos/essex_county_council_testimonial.png",
            videoUrl:
                "https://firebasestorage.googleapis.com/v0/b/walabothome-app-cloud.appspot.com/o/testimonials%2Fessex_county_council_testimonial.mp4?alt=media",
        },
        {
            id: 3,
            thumbnail:
                "/videos/heritage_senior_living_executives_testimonial.png",
            videoUrl:
                "https://firebasestorage.googleapis.com/v0/b/walabothome-app-cloud.appspot.com/o/testimonials%2Fheritage_senior_living_executives_testimonial.mp4?alt=media",
        },
    ];

    useEffect(() => {
        if (
            !containerRef.current ||
            !section1Ref.current ||
            !section3Ref.current
        ) {
            return;
        }

        const ctx = gsap.context(() => {
            // Pin Section 1
            ScrollTrigger.create({
                trigger: containerRef.current!,
                start: "top top",
                end: "bottom top",
                pin: section1Ref.current!,
                pinSpacing: false,
                // markers: true,
            });

            // --- How It Works Card Animation & Pin Section 3 ---
            const cards = gsap.utils.toArray<HTMLElement>(
                section3Ref.current!.querySelectorAll(".grid > div")
            );

            // Set initial state (invisible and off-screen right)
            gsap.set(cards, { opacity: 0, x: 100 });

            // Create the timeline for the cards animating in
            const cardTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: section3Ref.current!,
                    pin: true,
                    scrub: 1,
                    start: "top top",
                    end: "+=320%",
                    // markers: true,    // Add markers for debugging trigger area
                },
            });

            // Add animations to the timeline with increased stagger
            if (cards.length >= 3) {
                cardTimeline
                    .to(cards[0], { opacity: 1, x: 0, duration: 1 }, 0)
                    .to(cards[1], { opacity: 1, x: 0, duration: 1 }, 1.2)
                    .to(cards[2], { opacity: 1, x: 0, duration: 1 }, 2.4);
            }
            // Note: The original separate ScrollTrigger for pinning section 3 is now replaced
            // by the ScrollTrigger within the cardTimeline definition above.
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef}>
            {/* Section 1 (Pinned Hero) */}
            <section
                ref={section1Ref}
                className="h-screen relative flex flex-col justify-center items-center px-6 text-center bg-[url('/images/clinical/clinical-hero.jpg')] bg-cover bg-center z-0"
            >
                <div className="relative z-10">
                    <h1 className="text-5xl font-bold mb-4 text-white text-shadow-lg">
                        You care for them. We care for you.
                    </h1>
                    <p className="text-lg mb-6 text-white text-shadow-sm">
                        Smart alerts, automated monitoring, and real-time
                        insights—so you can focus on delivering the best care.
                    </p>
                    <div className="flex justify-center mt-10">
                        <button className="bg-[#05aae9] text-white px-6 py-3 rounded-md text-lg hover:bg-vayyar-blue/90 transition">
                            Book a Demo
                        </button>
                    </div>
                </div>
            </section>

            {/* Wrapper for sections scrolling over Section 1 */}
            <div className="-mt-screen relative z-10">
                {/* UPDATED Section 2 JSX */}
                <section className="min-h-screen flex flex-col justify-start items-center px-6 pt-20 pb-24 bg-white text-center">
                    <h2 className="text-3xl font-semibold text-gray-900">
                        Smarter Care, Less Stress
                    </h2>

                    <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto mt-12">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="w-full sm:w-[45%] bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300 text-left"
                            >
                                <div className="w-12 h-12 bg-[#e0f6ff] text-[#06aeef] rounded-full flex items-center justify-center mb-4">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-gray-900">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section 2.5 scrolls over Section 1 - Testimonials on Orange BG */}
                <section
                    ref={section2_5Ref}
                    className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-orange-400 text-center"
                >
                    {/* Testimonials Content */}
                    <h3 className="text-2xl font-semibold mb-8 text-gray-800">
                        Hear From Our Partners
                    </h3>
                    <div className="flex justify-center gap-4 overflow-x-auto max-w-6xl mx-auto pb-4">
                        {videoTestimonials.map((video) => (
                            <img
                                key={video.id}
                                src={video.thumbnail}
                                alt={`Testimonial ${video.id}`}
                                className="w-80 h-48 object-cover rounded-md cursor-pointer hover:opacity-80 transition"
                                onClick={() => setActiveVideo(video.videoUrl)}
                            />
                        ))}
                    </div>
                    {/* Video Modal Logic */}
                    {activeVideo && (
                        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                            <div className="bg-white rounded-lg overflow-hidden w-full max-w-3xl relative">
                                <button
                                    className="absolute top-2 right-2 text-gray-700 text-xl font-bold hover:text-black"
                                    onClick={() => setActiveVideo(null)}
                                >
                                    {" "}
                                    ×{" "}
                                </button>
                                <iframe
                                    className="w-full h-[400px]"
                                    src={activeVideo}
                                    title="Testimonial Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    )}
                </section>
            </div>

            {/* Section 3 (Pinned) - How It Works Content */}
            <section
                ref={section3Ref}
                className="min-h-screen flex flex-col justify-center px-6 py-20 bg-gray-50 text-center z-0"
            >
                <h2 className="text-3xl font-semibold mb-10 text-gray-900">
                    How It Works
                </h2>
                <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Card 1 */}
                    <div className="bg-white rounded-lg p-6 shadow-md">
                        <h3 className="text-xl font-bold mb-2 text-vayyar-blue">
                            Step 1
                        </h3>
                        <p className="text-gray-600">
                            Initial setup and configuration. Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-white rounded-lg p-6 shadow-md">
                        <h3 className="text-xl font-bold mb-2 text-vayyar-blue">
                            Step 2
                        </h3>
                        <p className="text-gray-600">
                            Real-time monitoring begins. Sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-white rounded-lg p-6 shadow-md">
                        <h3 className="text-xl font-bold mb-2 text-vayyar-blue">
                            Step 3
                        </h3>
                        <p className="text-gray-600">
                            Smart alerts and insights delivered. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco
                            laboris.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 4 scrolls over Section 3 - Final CTA Content */}
            <div className="-mt-screen relative z-10">
                <section
                    // Apply original CTA styles + min-h-screen
                    className="min-h-screen flex flex-col justify-center items-center px-6 bg-[#2daae2] text-white text-center relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[url('/assets/cta-pattern.svg')] bg-cover opacity-10 z-0" />
                    <div className="relative z-10 max-w-3xl">
                        <h2 className="text-4xl font-bold mb-6">
                            Let's Bring VayyarCare to Your Facility
                        </h2>
                        <p className="text-lg mb-10">
                            See how our non-invasive, intelligent monitoring
                            system can transform your team's care delivery.
                        </p>
                        <form className="space-y-6">
                            <div className="flex flex-col text-left">
                                <label
                                    htmlFor="name"
                                    className="mb-1 text-white font-semibold"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="p-3 rounded-md border border-white/30 bg-white text-[#2daae2] placeholder-gray-400"
                                    placeholder="Your full name"
                                />
                            </div>
                            <div className="flex flex-col text-left">
                                <label
                                    htmlFor="email"
                                    className="mb-1 text-white font-semibold"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="p-3 rounded-md border border-white/30 bg-white text-[#2daae2] placeholder-gray-400"
                                    placeholder="you@company.com"
                                />
                            </div>
                            <div className="flex flex-col text-left">
                                <label
                                    htmlFor="facility"
                                    className="mb-1 text-white font-semibold"
                                >
                                    Facility Name
                                </label>
                                <input
                                    type="text"
                                    id="facility"
                                    name="facility"
                                    className="p-3 rounded-md border border-white/30 bg-white text-[#2daae2] placeholder-gray-400"
                                    placeholder="Facility or organization name"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-white text-[#2daae2] px-6 py-3 text-lg rounded-md font-semibold hover:bg-blue-100 transition"
                            >
                                Book a Demo
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    );
}
