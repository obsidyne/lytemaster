import React, { useState } from "react";

export default function VideoCarousel({ videos }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="w-full h-screen hidden lg:block">
            <div className="relative overflow-hidden h-full">
                <video
                    key={currentIndex}
                    src={videos[currentIndex]}
                    autoPlay
                    muted
                    className="w-full h-full object-cover"
                    onEnded={() =>
                        setCurrentIndex((currentIndex + 1) % videos.length)
                    }
                />
                {/* Overlaid Indicators */}
                <div className="z-10 absolute top-0 left-0 w-full h-full py-4 flex flex-col justify-end items-center">
                    <div className=" flex space-x-2 bg-black/40 px-2 py-[0.4rem] rounded-full">
                        {videos.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-[0.4rem] rounded-full cursor-pointer transition-all hover:w-8 duration-500 ease-in-out ${
                                    idx === currentIndex
                                        ? "w-8 bg-white"
                                        : "w-[0.4rem] bg-gray-400"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
