import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

export default function ImageSlider({imageUrls}) {
    const [imageIndex, setImageIndex] = useState(0)

    function ShowPrevImage() {
        setImageIndex(index => {
            if (index === 0) return imageUrls.length - 1 
            return index - 1
        })
    }

    function ShowNextImage() {
        setImageIndex(index => {
            if (index === imageUrls.length - 1) return 0 
            return index + 1
        })
    }

    return (
        <div className="h-full w-full">
            <div className="relative h-full w-full">
                <div className="h-full w-full flex relative overflow-hidden">
                    {imageUrls.map(url => (
                        <img key={url} src={url} className="h-full w-full object-cover block shrink-0 grow-0 transition " style={{ translate: `${-100 * imageIndex}%`}}/>
                    ))}
                </div>
                <button className="slider-btn left-0" onClick={ShowPrevImage}><ArrowBigLeft className="size-10 max-lg:size-6 max-sm:size-4"/></button>
                <button className="slider-btn right-0" onClick={ShowNextImage}><ArrowBigRight className="size-10 max-lg:size-6 max-sm:size-4"/></button>
            </div>
        </div>
    )
}