import Products from './ProdPage';
import Filter from '../components/Filter';

const MainLayout = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row container mx-auto">
                <div className="flex flex-row gap-8">
                    <div className="fixed mt-24 pr-8 border-r-[1px] border-[#272727] h-[500px] w-[250px] -z-50">
                        <Filter />
                    </div>
                    <div className="flex flex-col gap-8 ml-[300px]">
                        <Products />
                    </div>

                </div>
            </div>
        </>
    );
};

export default MainLayout;
