import { TipContext } from "components/blocks/ToolTip";
import { dd } from "conf/urls";
import { useContext } from "react";

export function Rune({ rune, i }: any) {
  
  const handles = useContext(TipContext);

  return (
    <div className="flex flex-col justify-center items-center gap-3" key={rune.id}>
      <img
        src={`${dd}img/${rune.icon}`}
        alt=""
        className={i !== 0 ? 'w-16 h-16 cursor-pointer' : 'cursor-pointer'}
        onMouseEnter={e => handles?.showTip(rune.longDesc, e.target)}
        onMouseLeave={handles?.hideTip}
      />
      <h4>{rune.name}</h4>
    </div>
  );
}