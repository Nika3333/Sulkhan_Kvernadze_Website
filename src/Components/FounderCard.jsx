export default function FounderCard({src, alt, birthDate, profession, name, about}) {
    return (
        <div className='flex flex-col justify-end h-[550px] w-[800px] rounded-lg relative z-40 max-2xl:w-[700px] max-2xl:h-[500px] max-xl:w-[600px] max-xl:h-[400px] max-sm:w-11/12 max-sm:h-[470px] max-vsm:h-[500px]'>
            <div className="shadow-lg shadow-MainColorDarker/60 size-[330px] max-2xl:size-[300px] max-xl:size-[200px] max-vsm:size-[150px] z-10 rounded-full bg-TextColor absolute top-0 left-2/4 -translate-x-2/4 max-xl:-translate-y-0 overflow-hidden border-8 border-MainColorDarker max-xl:border-4 max-vsm:border-2">
                <img src={src} alt={alt} />
            </div>
            <div className="bg-MainColor w-full h-[400px] rounded-lg shadow-lg shadow-TextColor/20 text-center pt-[200px] max-2xl:pt-[220px] max-xl:pt-[160px] max-xl:h-[350px] max-sm:h-full max-md:pt-[160px] max-sm:pt-[210px] max-vsm:pt-[155px] relative">
                <span className="absolute left-0 top-0 p-4 opacity-70 max-2xl:text-wrap max-2xl:w-min max-vsm:text-sm max-vsm:p-1 z-50">დაბ: <em><strong>{birthDate}</strong></em></span>
                <span className="absolute right-0 top-0 p-4 opacity-70 max-2xl:text-wrap max-2xl:w-min max-vsm:text-sm max-vsm:p-1 z-50">პროფესია: <em><strong>{profession}</strong></em></span>
                <h3 className="text-xl mb-2"><strong>{name}</strong></h3>
                <p className="text-base px-2">{about}</p>
            </div>
        </div>
    )
}