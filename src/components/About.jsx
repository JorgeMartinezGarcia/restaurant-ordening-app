import aboutImage from "../assets/images/about-image.png";

export const About = () => {

    return (
        <div className="bg-white">
            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h2 className="text-2xl font-bold">About Us</h2>
                    <p className="text-lg">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
                        magnam labore eaque cum porro eveniet iusto, nam molestiae
                        tempora, soluta neque voluptatem hic aut fugit perspiciatis
                        optio, sint dignissimos? Aut Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Porro labore provident accusamus consequuntur, nihil
                        ducimus saepe. Incidunt debitis odio consequuntur odit saepe dolores
                        unde ipsa vitae natus animi? Nulla, perferendis!
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt="" className="w-[400px] h-[400px] object-cover" />
                </div>
            </div>
        </div>
    )
}