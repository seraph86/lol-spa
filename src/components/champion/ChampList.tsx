import { Champ } from "./Champ";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { SkelList } from "../blocks/skeleton/SkelList";
import { IChamp } from "interfaces/champion/IChamp";
import { useGetDataQuery } from "api/lol";


export function ChampList() {

  const { version: { version }, language: { language } } = useSelector((state: RootState) => state);

  const data = useGetDataQuery(['champion', version, language]).data?.data;

  const { name, tag } = useSelector((state: RootState) => state.champion);

  const regexp: RegExp = new RegExp(`^${name}|.+?('|\\s)${name}`, "i");

  const champs: JSX.Element[] = []

  for (const name in data) {
    const champ: IChamp = data[name];

    if (
      (name === '' || regexp.test(champ.name)) &&
      (tag === 'All' || champ.tags.includes(tag))
    ) {
      champs.push(<Champ champ={champ} key={name} />)
    }
  }

  return (
    <div className="mt-3 grid grid-cols-3 gap-4 sm:grid-cols-5 lg:grid-cols-7">
      {data ? champs : <SkelList />}
    </div>
  )
}
