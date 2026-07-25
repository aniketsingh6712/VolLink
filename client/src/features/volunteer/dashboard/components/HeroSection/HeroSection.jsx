export default function HeroSection({
    user,
}) {
    return (
        <section
            className="
      p-10
      "
        >

            <h1
                className="
        text-5xl
        md:text-6xl
        leading-none
        font-black
        text-[#07162F]
        "
            >
                Welcome back,
                {" "}
                {user.name}!
                <span className="ml-4">
                    👋
                </span>
            </h1>

            <p
                className="
        text-gray-600
        mt-2
        text-lg
        "
            >
                You have an event scheduled
            </p>

        </section>
    );
}