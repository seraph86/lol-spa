import { TipContext } from "components/blocks/ToolTip";
import { ddV } from "conf/urls";
import { useContext } from "react";
import { ISummoner } from "interfaces/ISummoner";

interface IProp {
  data: ISummoner
}

export function Summoner({ data }: IProp) {
  // const spritePath = urls.sprite.img.local;
  // const sprite = data.image.sprite;

  const handles = useContext(TipContext);

  return (
    <div className="flex flex-col items-center p-5 cursor-pointer text-slate-200 gap-3 hover:bg-zinc-700">
      {/* <div
        className="w-12 h-12 shadow-xl shadow-neutral-900"
        style={{
          // width: data.image.w,
          // height: data.image.h,
          backgroundImage: `url(${spritePath}${sprite})`,
          backgroundPosition: `${-data.image.x}px ${-data.image.y}px`
        }}
      /> */}
      <img
        src={ddV + 'img/spell/' + data.image.full}
        alt=""
        onMouseEnter={e => handles?.showTip(data.description, e.target)}
        onMouseLeave={handles?.hideTip}
      />
      <span className="text-center">
        {data.name}
      </span>
    </div>
  );
}
