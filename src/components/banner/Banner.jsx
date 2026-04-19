import React from 'react';

const Banner = () => {
    return (
        <div
            className="hero min-h-screen bg-cover bg-center rounded-2xl my-12 w-[95%] md:w-full mx-auto "
            style={{
                backgroundImage:
                    "url(https://images.unsplash.com/photo-1556911220-bff31c812dba)",
            }}
        >
            {/* overlay */}
            <div className="hero-overlay bg-black/60 rounded-2xl"></div>

            {/* content */}
            <div className="hero-content text-center text-white">
                <div className="max-w-2xl">
                    <h1 className="text-5xl font-bold mb-4">
                        Cook Smart, Eat Healthy, Live Better
                    </h1>

                    <p className="mb-6 text-lg">
                        Step into your kitchen with confidence. Discover easy-to-follow recipes,
                        track your daily calories, and build a healthier lifestyle with meals
                        that are both delicious and nutritious.
                    </p>

                    <div className="flex justify-center gap-4">
                        <button className="btn btn-primary">
                            Explore Now
                        </button>

                        <button className="btn btn-outline btn-secondary text-white">
                            Our Feedback
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;