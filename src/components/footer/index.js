
const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className="text-gray-600 body-font w-full tw-bg-black tw-p-0">
            <div className="bg-black ">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-between">
                    <p className="text-gray-500 text-sm text-center sm:text-left">© {year} ALBINO
                    </p>
                    <p className="text-gray-500 text-xs text-center sm:text-left mt-2 sm:mt-0">Powered by:&nbsp; 
                        <a href="http://www.brdigitech.com" target="blank" className="text-blue-600 hover:text-blue-200"><i>Button R Digitech (bRd)</i></a>
                    </p>
                </div> 
            </div>
        </footer>
    )
}

export default Footer