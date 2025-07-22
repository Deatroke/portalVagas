import {Card, CardFooter} from "@heroui/card";
import {Image} from "@heroui/image";
import {Button} from "@heroui/button";
import {ImageCardProps} from "@/types/props/ImageCardProps";

export default function ImageCard(props: ImageCardProps){
  return (
    <Card isFooterBlurred className="border-none" radius="lg">
      <Image
        alt={props.altText}
        className="object-cover"
        height={180}
        src={props.imagePath}
        width={180}
      />
      <CardFooter className="justify-between gap-1 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 light: bg-blue-500/50">
        <p className="text-tiny text-white/80">{props.title}</p>
        <Button
          className="text-tiny text-white bg-black/20"
          color="default"
          radius="lg"
          size="sm"
          variant="flat"
        >
          {props.description}
        </Button>
      </CardFooter>
    </Card>
  );
}
