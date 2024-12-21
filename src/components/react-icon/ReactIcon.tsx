import * as Ai from "react-icons/ai";
import * as Md from "react-icons/md";
import * as Hi from "react-icons/hi";
import * as Io from "react-icons/io";
import * as Io5 from "react-icons/io5";
import * as Fa from 'react-icons/fa'
const Icons = {
  ...Ai,
  ...Md,
  ...Hi,
  ...Io,
  ...Io5,
	...Fa
};

export type IconName = keyof typeof Icons;

interface Props {
  name: IconName;
  className?: string;
}

export function ReactIcon({ name, className }: Props) {
  return <>{Icons[name]({ className })}</>;
}
