import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";

export interface IOrderTableRowProps {}

export function OrderTableRow(props: IOrderTableRowProps) {
  return (
    <TableRow>
      <TableCell>
        <Button variant="outline" size={"sm"}>
          <Search className="h-4 w-4" />
          <span className="sr-only">Detalhes do pedido</span>
        </Button>
      </TableCell>
      <TableCell className="font-mono text-sx font-medium">#123</TableCell>
      <TableCell className="text-muted-foreground">a 15 minutos</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400"></span>
          <span className="font-medium text-muted-foreground">Pendente</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">Luis Gustavo</TableCell>
      <TableCell>
        <span className="font-medium">R$ 25,00</span>
      </TableCell>
      <TableCell>
        <Button variant="outline" size={"sm"}>
          <ArrowRight className="h-4 w-4 mr-2" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size={"sm"}>
          <X className="h-4 w-4 mr-2" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  );
}
