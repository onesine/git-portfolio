import {CardContainer, ElementSkeleton, TextSkeleton} from "./utils";

export const SkeletonProject = () => {
    return (
        <CardContainer>
            <a href="/#link" className="h-full flex flex-col justify-between block p-7 text-gray-500">
                <div>
                    <div className="flex items-center space-x-2 mb-2">
                        <ElementSkeleton className="h-5 w-5 rounded-md"/>
                        <TextSkeleton>Lorem ipsum dolor sit amet, consectetur.</TextSkeleton>
                    </div>

                    <TextSkeleton>Lorem ipsum dolor sit amet, consectetur adipisicing elit onej.</TextSkeleton>
                    <TextSkeleton>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</TextSkeleton>
                </div>

                <div className="flex items-center justify-between text-sm mt-5">
                    <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-2">
                            <ElementSkeleton className={`h-3 w-3 rounded-full mb-0.5`}/>
                            <TextSkeleton>4457</TextSkeleton>
                        </div>

                        <div className="flex items-center space-x-2">
                            <ElementSkeleton className={`h-3 w-3 rounded-full mb-0.5`}/>
                            <TextSkeleton>4557</TextSkeleton>
                        </div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <ElementSkeleton className={`h-3 w-3 rounded-full mb-0.5`}/>
                        <TextSkeleton>JavaScript</TextSkeleton>
                    </div>
                </div>
            </a>
        </CardContainer>
    );
};