import { Button } from "./ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

export function StoreProfileDialog() {
  return (
    <>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Perfil da Loja</DialogTitle>
          <DialogDescription>
            Gerencie as informações da sua loja
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button type="button" variant="outline">
            Cancelar
          </Button>
          <Button type="submit">Salvar</Button>
        </DialogFooter>
      </DialogContent>
    </>
  );
}
