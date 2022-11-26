import { TipContext } from "components/blocks/ToolTip";
import { urls } from "conf/urls";
import { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IItem } from "interfaces/IItem";

interface IProb {
  data: IItem
}

export function Item({ data }: IProb) {

  // const src = urls.item.img.local + data.image.full;
  const src = urls.item.img.net + data.image.full;

  const handles = useContext(TipContext);

  return (
    <div
      className="flex flex-col items-center gap-3 p-5 cursor-pointer text-slate-200"
    >

      <LazyLoadImage
        alt={data.name}
        height={64}
        src={src} // use normal <img> attributes as props
        width={64}
        threshold={10}
        className='z-10 relative rounded-sm'
        wrapperClassName="sceleton shadow-lg shadow-neutral-900 rounded-sm"
        data-id={data.id}
        onMouseEnter={e => handles?.showTip(`<h3 class="text-lg font-medium mb-1">${data.name}</h3>` + data.description, e.target)}
        onMouseLeave={handles?.hideTip}
      />
      {/* <span className='text-center'>
        {data.name}
      </span> */}
    </div>
  );
}
