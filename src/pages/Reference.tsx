
function Reference() {
    const sources = [
        "https://ncca.gov.ph/about-ncca-3/subcommissions/subcommission-on-the-arts-sca/literary-arts/philippine-literature-in-the-spanish-colonial-period/",
        "https://www.studocu.com/ph/document/university-of-the-cordilleras/life-and-works-of-rizal/noli-me-tangere-symbolisms/27458761",
        "https://ncca.gov.ph/about-ncca-3/subcommissions/subcommission-on-the-arts-sca/literary-arts/philippine-literature-in-spanish/",
        "https://www.scribd.com/doc/273024058/Noli-me-tangere-cover-symbolisms#:~:text=showing%20Catholicism's%20dominance.-,A%20guardia%20civil%20helmet%2C%20feet%20on%20the%20woman's%20form%2C%20and,hope%20for%20a%20new%20beginning.https://ncca.gov.ph/about-ncca-3/subcommissions/subcommission-on-the-arts-sca/literary-arts/philippine-literature-in-the-spanish-colonial-period/"
    ];

    return (
        <section
            className=" text-gray-100 flex px-8 flex-col items-center py-12"
            id="sources"
        >
            <h1 className="text-3xl font-bold mb-8 border-b-2 border-gray-700 pb-2">
                References
            </h1>
            <ul className="w-full max-w-3xl space-y-4">
                {sources.map((src, idx) => (
                    <li
                        key={idx}
                        className="bg-gray-800 rounded-lg px-4 py-3 shadow hover:bg-gray-700 transition"
                    >
                        <a
                            href={src}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline break-all"
                        >
                            {src}
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Reference;