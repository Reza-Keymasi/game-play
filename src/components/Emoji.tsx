import Meh from "../assets/meh.svg";
import ThumbsUp from "../assets/thumbs-up.svg";
import BullsEye from "../assets/bullseye-1.svg";

import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiIconMap:{[key:number]:ImageProps} = {
    3: {src:Meh, alt:"meh", boxSize:"25px"},
    4: {src:ThumbsUp, alt:"recommended", boxSize:"25px"},
    5: {src:BullsEye, alt:"exceptional", boxSize:"35px"},
  };
  return (
    <Image color="red" {...emojiIconMap[rating]} marginTop={1} />
  );
};

export default Emoji;
