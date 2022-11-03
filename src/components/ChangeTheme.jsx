import {AdjustmentsVerticalIcon, ChevronRightIcon} from "@heroicons/react/24/outline";
import {CardContainer} from "./utils";

const ChangeTheme = () => {
    return (
        <CardContainer className="p-4 flex items-center justify-between">
            <div className="space-y-2 ml-3">
                <h2 className="text-xl font-semibold text-gray-500">Theme</h2>
                <p className="font-light text-gray-500 text-sm">Light</p>
            </div>

            <button className="flex items-center text-gray-400 hover:bg-gray-200 p-4 rounded-md">
                <AdjustmentsVerticalIcon className="h-5 w-5"/>
                <span className="ml-3 mr-1 font-semibold text-sm hidden md:block">Change Theme</span>
                <ChevronRightIcon className="h-4 w-4 p-0.5"/>
            </button>
        </CardContainer>
    );
};

export default ChangeTheme;