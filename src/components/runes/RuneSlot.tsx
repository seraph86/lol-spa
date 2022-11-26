import { urls } from "conf/urls";
import { IRunesReforged } from "interfaces/IRunesReforged";
import style from "components/blocks/Block.module.sass"

export function RuneSlot({ data, i, handleRune }: { data: IRunesReforged, i: number, handleRune: Function }) {

  return (
    <div className={style.block} onClick={() => handleRune(i)}>
      <img src={urls.rune.img.net + data.icon} alt={data.name} className='border-2 border-orange-400 rounded-full p-3' />
      <span className="text-center">
        {data.name}
      </span>
    </div>
  );
}
