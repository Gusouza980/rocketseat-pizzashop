import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, X } from "lucide-react";

export interface IOrderTableFiltersProps {}

export function OrderTableFilters(props: IOrderTableFiltersProps) {
  return (
    <form action="" className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filtros:</span>
      <Input placeholder="Id do pedido" className="h-7 w-auto" />
      <Input placeholder="Nome do cliente" className="h-7 w-[320px]" />
      <Select defaultValue="all">
        <SelectTrigger className="h-8 w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos</SelectItem>
          <SelectItem value="pending">Pendente</SelectItem>
          <SelectItem value="canceled">Cancelado</SelectItem>
          <SelectItem value="processing">Em preparo</SelectItem>
          <SelectItem value="delivering">Em Entrega</SelectItem>
          <SelectItem value="delivered">Entregue</SelectItem>
        </SelectContent>

        <Button type="submit" variant="secondary" size="sm">
          <Search className="h-4 w-4 mr-2" />
          Filtrar Resultados
        </Button>
        <Button type="button" variant="outline" size="sm">
          <X className="h-4 w-4 mr-2" />
          Remover Filtros
        </Button>
      </Select>
    </form>
  );
}
