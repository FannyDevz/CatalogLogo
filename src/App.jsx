
import Navbar from "./components/Nav.jsx";
import {useEffect, useState} from "react";
import { BsMoonFill , BsSunFill } from "react-icons/bs";

function App() {
    const packageProduct = [
        {
            id: 1,
            name: {
                ID: "Basic",
                EN: "Basic"
            },
            currency: {
                ID : "IDR",
                EN : "USD"
            },
            symbol: {
                ID : "Rp",
                EN : "$"
            },
            price: {
                ID : "200.000",
                EN : "19"
            },
            time: "3-4",
            bonus: null,
            discount: {
                ID : null,
                EN : null
            },
            desc: {
                ID: "2 Opsi Desain (3x Revisi)",
                EN: "2 Options Design (3x Revision)"
            },
            class: " border rounded-s-lg "
        },
        {
            id: 2,
            name: {
                ID: "Standard",
                EN: "Standard"
            },
            currency: {
                ID : "IDR",
                EN : "USD"
            },
            symbol: {
                ID : "Rp",
                EN : "$"
            },
            price: {
                ID : "300.000",
                EN : "29"
            },
            time: "4-5",
            bonus: null,
            discount: {
                ID : null,
                EN : null
            },
            desc: {
                ID: "3 Opsi Desain (4x Revisi)",
                EN: "3 Options Design (4x Revision)"
            },
            class: " border border-b "
        },
        {
            id: 3,
            name: {
                ID: "Premium",
                EN: "Premium"
            },
            currency: {
                ID : "IDR",
                EN : "USD"
            },
            symbol: {
                ID : "Rp",
                EN : "$"
            },
            price: {
                ID : "500.000",
                EN : "47"
            },
            time: "5-6",
            bonus: null,
            discount: {
                ID : null,
                EN : null
            },
            desc: {
                ID: "4 Opsi Desain (5x Revisi)",
                EN: "4 Options Design (5x Revision)"
            },
            class: " border border-b "
        },
        // {
        //     id: 4,
        //     name: {
        //         ID: "Add-Ons",
        //         EN: "Add-Ons"
        //     },
        //     currency: {
        //         ID : "IDR",
        //         EN : "USD"
        //     },
        //     symbol: {
        //         ID : "Rp",
        //         EN : "$"
        //     },
        //     price: {
        //         ID : "150.000",
        //         EN : "14"
        //     },
        //     time: "3-5",
        //     bonus: null,
        //     discount: {
        //         ID : null,
        //         EN : null
        //     },
        //     desc: {
        //         ID: "Kartu Nama, Amplop Besar & CD Cover, Stop Map, ID Card, Goodie Bag, Stample (Anda bisa memilih 6 item)",
        //         EN: "Business Card, Large Envelope & CD Cover, Stop Map, ID Card, Goodie Bag, Stample (You can choose 6 items)"
        //     },
        //     class: " border rounded-e-lg "
        // }
    ];
    const text  = {
        title : {
            EN: "LOGO PRICE",
            ID: "HARGA LOGO"
        },
        plan : {
            EN: "Choose a Plan",
            ID: "Pilih Paket"
        }, toogle : {
            EN: "Indonesia",
            ID: "English"
        }, terms:{
            ID: "Syarat & Ketentuan",
            EN: "Terms & Conditions"
        }, order:{
            ID: "Pesan Sekarang",
            EN: "Order Now"
        }, wa:{
            ID: "https://wa.me/6282338206740?text=Hallo%20Aku%20ingin%20memesan%20Logo%20",
            EN: "https://wa.me/6282338206740?text=Hi%20I%20want%20to%20order%20Logo%20"
        }
    }
    const terms = [
        {
            index: 1,
            ID : "Proses pengerjaan alternatif desain awal dimulai setelah DP/uang muka dibayarkan, yaitu sebesar 50% atau juga bisa Full Payment di awal.",
            EN: "The alternative initial design process begins after the down payment of 50% or full payment at the beginning."
        },
        {
            index: 2,
            ID: "Semua harga di atas sudah termasuk Softcopy file untuk 1 Final Artwork pada desain yang di pilih dari opsi yang di berikan dalam format: AI, PDF, JPG, dan PNG Transparant,.",
            EN: "All prices above include Softcopy files for 1 Final Artwork on the selected design from the options provided in the formats: AI, PDF, JPG, and Transparent PNG."
        },
        {
            index: 3,
            ID: "Waktu di atas hanya waktu pengerjaan Desain, tidak termasuk diskusi & revisi.",
            EN: "The above time is only the design process time, excluding discussion & revisions."
        },
        {
            index: 4,
            ID: "Jika klien memerlukan lebih dari revisi yang ditentukan, mereka akan diminta untuk membayar tambahan 15% dari biaya desain.",
            EN: "If the client requires more than the specified revisions, they will be asked to pay an additional 15% of the design cost."
        },
        {
            index: 5,
            ID: "Klien harus memberikan semua informasi dan materi yang diperlukan kepada desainer sebelum proses desain dimulai. Hal ini bisa mencakup teks, foto, atau bentuk media lainnya.",
            EN: "Clients must provide all necessary information and materials to the designer before the design process begins. This may include text, photos, or other media forms."
        },
        {
            index: 6,
            ID: "Salinan digital file desain akan diberikan kepada klien setelah revisi disetujui oleh klien dan biaya layanan desain telah dibayarkan sepenuhnya.",
            EN: "A digital copy of the design file will be provided to the client after the revisions are approved by the client and the design service fee has been fully paid."
        },
        {
            index: 7,
            ID: "Jika klien melakukan revisi major (melenceng dari brief awal yang telah ditetapkan) maka tetap wajib membayar biaya pengerjaan ulang.",
            EN: "If the client makes major revisions (deviating from the initial brief that has been set), they are still required to pay the redesign fee."
        },
        {
            index: 8,
            ID: "Konten dan materi yang mengakibatkan kerugian akibat konten, cara, dan penggunaan yang melanggar etika dan hukum internet di Indonesia, seperti namun tidak terbatas pada contoh-contoh berikut ini: Pornografi, SARA, Spamming, dan tindak pidana lainnya adalah tanggung jawab Klien.",
            EN: "Content and materials that cause losses due to content, methods, and usage that violate ethics and internet laws in Indonesia, such as but not limited to the following examples: Pornography, SARA, Spamming, and other criminal acts are the responsibility of the Client."
        },
        {
            index: 9,
            ID: "Desainer berhak untuk mempublikasikan hasil desain dalam bentuk apapun sebagai portofolio.",
            EN: "The designer has the right to publish the design results in any form as a portfolio."
        }
    ];

    const [icon, setIcon] = useState(<BsMoonFill />);
    const [lang, setLang] = useState("ID");
    const [product, setProduct] = useState(1);

    useEffect(() => {
        if (localStorage.theme === "dark" || !("theme" in localStorage)) {
            document.documentElement.classList.add("dark");
            setIcon(<BsSunFill/>);
        } else {
            document.documentElement.classList.remove("dark");
            setIcon(<BsMoonFill/>);
        }
    }, []);


    function handleClick() {
        const newTheme = localStorage.theme === "dark" ? "light" : "dark";
        localStorage.theme = newTheme;

        if (newTheme === "dark") {
            document.documentElement.classList.add("dark");
            setIcon(<BsSunFill />);
        } else {
            document.documentElement.classList.remove("dark");
            setIcon(<BsMoonFill />);
        }
    }

    const toggleLanguage = () => {
        setLang(lang === "EN" ? "ID" : "EN");
    };


    return (
        <>
            <Navbar handleClick={handleClick} icon={icon} lang={lang} toggleLanguage={toggleLanguage}/>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-4">
                <div className="relative flex h-16 my-8 items-center justify-center">
                    <h1 className="text-5xl font-extrabold ">{text.title[lang]}</h1>
                </div>
                <div className="flex h-16 items-start justify-between ">
                    <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                        <div className="flex-1 px-6 py-8 lg:p-12 dark:bg-gray-700 bg-gray-50">

                            <div className="relative flex items-center justify-center">
                                <h3 className="text-3xl font-extrabold sm:text-4xl">{text.plan[lang]}</h3>
                            </div>
                            <div className="relative flex items-center justify-center">
                                <div className="inline-flex rounded-md shadow-sm mt-8" role="group">
                                    {
                                        packageProduct.map((item) => (
                                            <button key = {item.id} type="button" onClick={() => setProduct(item.id)} className={`px-4 py-2 text-md md:text-xl font-bold text-black bg-white border-gray-200   hover:bg-gray-100  focus:z-10 focus:ring-2  dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-700  dark:focus:text-white ${item.class} ${product === item.id ? "bg-indigo-500 text-white dark:bg-indigo-500 dark:text-white" : ""}`}>
                                                {item.name[lang]}
                                            </button>
                                        ))
                                    }
                                </div>
                            </div>
                            {packageProduct.map((item) => {
                                if (item.id === product) {
                                    return (
                                        <div
                                            key={item.id}
                                            className="mt-6 py-8 px-6 text-center lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12 dark:bg-gray-800 bg-gray-100"
                                        >
                                            <h2 className="text-5xl font-extrabold py-4 text-indigo-500">{item.name[lang]}</h2>
                                            <p className="text-md max-w-xl mx-auto leading-6 font-medium">{item.desc[lang]}</p>
                                            {item.bonus ? <span className="ml-3 text-md font-medium dark:text-gray-50 text-gray-800">(Bonus : {item.bonus} )</span> : null}
                                            {item.discount[lang] == null ?
                                                <div className="mt-4 flex items-center justify-center text-5xl font-extrabold">
                                                    <span>{item.symbol[lang]} {item.price[lang]}</span>
                                                    <span className="ml-3 text-xl font-medium dark:text-gray-50 text-gray-800">{item.currency[lang]}</span>
                                                </div> : <>
                                                    <div className="mt-4 flex items-center justify-center text-5xl font-extrabold">
                                                        <span>{item.symbol[lang]} {item.discount[lang]}</span>
                                                        <span className="ml-3 text-xl font-medium dark:text-gray-50 text-gray-800">{item.currency[lang]}</span>
                                                    </div>
                                                    <div className="mt-4 flex items-center justify-center text-xl font-extrabold line-through">
                                                        <span >{item.symbol[lang]} {item.discount[lang]} {item.currency[lang]}</span>
                                                    </div>
                                                </>

                                            }
                                            <div className="mt-6">
                                                <div className="rounded-md shadow">
                                                    <a href={`${text.wa[lang]}${item.name[lang]}%20Package`} target="_blank" className="flex items-center text-gray-50 justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md bg-indigo-500 hover:bg-indigo-600">{text.order[lang]}</a>
                                                </div>
                                            </div>
                                            {/*<p className="dark:text-gray-300 text-gray-700 text-sm mt-3">100% money back guarantee</p>*/}
                                        </div>
                                    );
                                }
                                return null;
                            })}
                            {/*<p className="mt-6 text-base dark:text-gray-50  text-gray-500 sm:text-lg">Take your Tailwind CSS development to the next level!*/}
                            {/*</p>*/}
                            <div className="mt-8">
                                <div className="flex items-center space-x-5">

                                    <div className="flex-1 border-t-2 border-gray-200"></div>
                                </div>
                                <div className="flex items-center mt-6">
                                    <span className=" text-2xl font-bold"> {text.terms[lang]}</span>
                                </div>

                                <ul role="list" className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-1 lg:gap-x-8 lg:gap-y-5">
                                    {
                                        terms.map((item) => (
                                            <li key={item.index} className="flex items-start lg:col-span-1">
                                                <div className="flex-shrink-0"><svg className="h-5 w-5 text-green-400"
                                                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                                                    aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                          clip-rule="evenodd"></path>
                                                </svg></div>
                                                <p className="ml-3 ">{item[lang]}</p>
                                            </li>
                                        ))
                                    }

                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default App;
