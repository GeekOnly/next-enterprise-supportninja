import GetStartedButton from 'components/GetStartedButton/GetStartedButton';


export default function Footer() {
    return (
    <div className="bg-[#BFC1B9] h-636.859 p-[134.850px]">
      <footer className="rounded-lg dark:bg-gray-900">
        <div className="w-full max-w-screen-xl mx-5 ">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://cdn.prod.website-files.com/64149f79022d0c5fc8ce46e8/64149f79022d0cd45cce4719_Support%20Ninja%20%7C%20Full%20Logo.svg"
                className="h-8"
                alt="Flowbite Logo"
              />
            </a>
         </div>
         </div>
         <hr className="my-8 border-t-1 border-gray-400 dark:border-gray-600" />
         
        <footer className="">
            <div className="mx-5 w-full max-w-screen-xl">
              <div className="grid grid-cols-2 gap-15 py-16 lg:py-18 md:grid-cols-5">
                <div>
                    <h2 className="mb-1 text-2xl font-semibold text-gray-900 uppercase dark:text-white">Solutions</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-0">
                            <a href="#" className="text-lg font-bold hover:underline">Customer Experience</a>
                        </li>
                        <li className="mb-0">
                            <a href="#" className="text-lg font-bold hover:underline">Customer Conversion</a>
                        </li>
                        <li className="mb-0">
                            <a href="#" className="text-lg font-bold hover:underline">Technical Customer Support</a>
                        </li>
                        <li className="mb-0">
                            <a href="#" className="text-lg font-bold hover:underline">Customer Renewals</a>
                        </li>
                        <li className="mb-0">
                            <a href="#" className="text-lg font-bold hover:underline">Content Moderation</a>
                        </li>
                        <li className="mb-0">
                            <a href="#" className="text-lg font-bold hover:underline">Data Processing</a>
                        </li>
                        <li className="mb-0">
                            <a href="#" className="text-lg font-bold hover:underline">Finance & Accounting</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-0 text-2xl font-semibold text-gray-900 uppercase dark:text-white">Industries</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-0">
                            <a href="#" className="text-lg font-bold hover:underline">Saas</a>
                        </li>
                        <li className="mb-0">
                            <a href="#" className="text-lg font-bold hover:underline">AI</a>
                        </li>
                        <li className="mb-0">
                            <a href="#" className="text-lg font-bold hover:underline">Ecommerce</a>
                        </li>
                        <li className="mb-0">
                            <a href="#" className="text-lg font-bold hover:underline">Healthcare</a>
                        </li>
                        <li className="mb-0">
                            <a href="#" className="text-lg font-bold hover:underline">Supply chaln & Logistics</a>
                        </li>
                        <li className="mb-0">
                            <a href="#" className="text-lg font-bold hover:underline">Fintech</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-0 text-2xl font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-0">
                                <a href="#" className="text-lg font-bold hover:underline">Resource</a>
                            </li>
                        <li className="mb-0">
                            <a href="#" className="text-lg font-bold hover:underline">FAQs</a>
                        </li>
                        <li className="mb-5">
                            <a href="#" className="text-lg font-bold hover:underline">Glossary</a>
                        </li>
                    </ul>
                    <h2 className="mb-0 text-2xl font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-0">
                                <a href="#" className="text-lg font-bold hover:underline">How It Works</a>
                            </li>
                        <li className="mb-0">
                            <a href="#" className="text-lg font-bold hover:underline">About</a>
                        </li>
                        <li className="mb-0">
                            <a href="#" className="text-lg font-bold hover:underline">Careers</a>
                        </li>
                        <li className="mb-0">
                            <a href="#" className="text-lg font-bold hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-0 text-2xl font-semibold text-gray-900 uppercase dark:text-white">Follow</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-0">
                            <a href="#" className="text-lg font-bold hover:underline">LinkedIn</a>
                        </li>
                        <li className="mb-0">
                            <a href="#" className="text-lg font-bold hover:underline">Youtube</a>
                        </li>
                        <li className="mb-0">
                            <a href="#" className="text-lg font-bold hover:underline">Twitter</a>
                        </li>
                        <li className="mb-0">
                            <a href="#" className="text-lg font-boldhover:underline">Facebook</a>
                        </li>
                    </ul>
                </div>
            <div className="justify-center">
                <GetStartedButton size='w-75 h-16' rightItem='pl-23'/>
            </div>
            </div>
            <div className="px-4 dark:bg-gray-700 md:flex md:items-center md:justify-between">
                <span className="text-lg font-bold text-gray-500 dark:text-gray-300 sm:text-center">© 2025 SupportNinja, a registered trademark of Ninja Partners, LLC
                </span>
                <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
                <span className="text-lg font-bold text-gray-500 dark:text-gray-300 sm:text-center">Privacy Policy</span>
                <span className="text-lg font-bold text-gray-500 dark:text-gray-300 sm:text-center">Security Policy</span>
                <span className="text-lg font-bold text-gray-500 dark:text-gray-300 sm:text-center">Terms of Use</span>
                </div>
              </div>
            </div>
        </footer>

      </footer>
    </div>
    );
  }
  