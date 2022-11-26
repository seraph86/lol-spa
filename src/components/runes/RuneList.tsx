import { useGetDataQuery } from "api/lol";
import { ToolTip } from "components/blocks/ToolTip";
import { IRunesReforged } from "interfaces/IRunesReforged";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { Rune } from "./Rune";
import { RuneSlot } from "./RuneSlot";

export function RuneList() {
  const { version: { version }, language: { language } } = useSelector((state: RootState) => state);
  const data = useGetDataQuery(['runesReforged', version, language]).data as IRunesReforged[];
  const [id, setId] = useState(0);
  const rune: IRunesReforged | null = data ? data[id] : null;

  const handleRune = (i: number) => {
    setId(i)
  }

  return (
    <ToolTip>

      <div className="grid grid-cols-5 gap-4">
        {data && data.map((dataEl: IRunesReforged, i) => (
          <RuneSlot data={dataEl} key={dataEl.id} i={i} handleRune={handleRune} />
        ))}
      </div>

      <div>
        {rune && rune.slots.map((slot, i) => (
          <div className="flex justify-between w-full py-3" key={i}>
            {slot.runes.map(rune => (
              <Rune rune={rune} i={i} key={rune.id} />
            ))}
          </div>
        ))}
      </div>

    </ToolTip>
  );
}