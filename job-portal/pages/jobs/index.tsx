import { title } from "@/components/primitives";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Select, SelectItem } from "@heroui/select";
import {
  Pagination,
  PaginationItem,
  PaginationCursor,
} from "@heroui/pagination";
import DefaultLayout from "@/layouts/default";
import { AdjustmentsVerticalIcon, SearchIcon } from "@/components/icons";
import { MapPinIcon } from "@/components/icons";
import FullInfoCard from "@/components/cards/FullInfoCard";
import CustomModal from "@/components/modals/CustomModal";
import { useDisclosure } from "@heroui/modal";

const animals = [
  { key: "Brasil", label: "Brasil" },
  { key: "Argentina", label: "Argentina" },
  { key: "Uruguai", label: "Uruguai" },
  { key: "Paraguai", label: "Paraguai" },
  { key: "Chile", label: "Chile" },
  { key: "Peru", label: "Peru" },
  { key: "Bolívia", label: "Bolívia" },
  { key: "Colômbia", label: "Colômbia" },
  { key: "Equador", label: "Equador" },
  { key: "Venezuela", label: "Venezuela" },
  { key: "Guiana", label: "Guiana" },
  { key: "Suriname", label: "Suriname" },
  { key: "Guiana Francesa", label: "Guiana Francesa" },
];

export default function DocsPage() {
  const {isOpen, onOpenChange} = useDisclosure();

  const handleOpenModal = () => {
    onOpenChange();
  };

  const handleModalRender = () => {
    return (
      <CustomModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={onOpenChange}
        size="3xl"
      />
    );
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="max-w-2xl justify-center text-center">
          <h1 className={title({ size: "sm" })}>Encontre as melhores vagas</h1>
        </div>
        <div className="flex w-full items-center justify-center gap-2">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-12",
              mainWrapper: "h-full",
              input: "text-sm",
              inputWrapper: "h-full font-normal text-default-500",
            }}
            placeholder="Nome da vaga ou palavra-chave"
            size="md"
            startContent={<SearchIcon size={18} />}
            type="search"
          />
          <Select
            className="w-36 max-w-sm"
            label="Localização"
            startContent={<MapPinIcon size={18} />}
            size="sm"
            radius="md"
          >
            {animals.map((animal) => (
              <SelectItem key={animal.key}>{animal.label}</SelectItem>
            ))}
          </Select>
          <Button variant="solid" color="primary" size="lg" radius="md">
            Buscar
          </Button>
          <Button variant="flat" color="primary" size="lg" radius="md" startContent={<AdjustmentsVerticalIcon size={18} />} onPress={handleOpenModal}>
            Filtros
          </Button>
        </div>
        <div className="mt-8 grid h-auto w-auto grid-cols-2 gap-4 p-4">
          <FullInfoCard />
          <FullInfoCard />
          <FullInfoCard />
          <FullInfoCard />
          <FullInfoCard />
          <FullInfoCard />
        </div>
        <div>
          <Pagination initialPage={1} total={10} />
        </div>
        {handleModalRender()}
      </section>
    </DefaultLayout>
  );
}
