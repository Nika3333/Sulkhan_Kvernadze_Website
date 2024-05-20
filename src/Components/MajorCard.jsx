export default function MajorCard({ src, header, content}) {
    return (
        <div className="bg-TheeredColor rounded-lg h-[320px] w-[310px] flex flex-col border-4 border-TheeredColor shadow-lg shadow-TextColor/30 max-xl:w-full max-sm:max-w-[475px]">
            <img src={src} alt="Image-by-category" className="rounded-lg h-2/4 object-cover" />
            <div className="h-2/4 w-full p-2 flex flex-col justify-start items-center">
                <h3 className="text-xl text-SecondaryColor"><strong>{header}</strong></h3>
                <span className="border-t-2 border-dashed border-MainColorLighter w-full my-2"></span>
                <p className="text-base text-TextColor">{content}</p>
            </div>
        </div>
    )
}