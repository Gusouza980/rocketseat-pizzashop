import { Building, ChevronDown, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/api/get-profile";
import { getManagedRestaurant } from "@/api/get-menaged-restaurant";
import { Skeleton } from "./ui/skeleton";
import colors from "tailwindcss/colors";
import { Dialog, DialogTrigger } from "./ui/dialog";
import { StoreProfileDialog } from "./store-profile-dialog";

export interface IAccountMenuProps {}

export function AccountMenu(props: IAccountMenuProps) {
  const { data: profile, isLoading: isProfileLoading } = useQuery({
    queryFn: getProfile,
    queryKey: ["profile"],
  });

  const { data: managedRestaurant, isLoading: isManagedRestaurantLoading } =
    useQuery({
      queryFn: getManagedRestaurant,
      queryKey: ["managed-restaurant"],
    });

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex items-center gap-2 select-none"
          >
            {isManagedRestaurantLoading ? (
              <Skeleton className="w-40 h-4 bg-black/10 dark:bg-gray-100/20" />
            ) : (
              (managedRestaurant?.name ?? "Restaurante")
            )}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel className="flex flex-col">
            {isProfileLoading ? (
              <Skeleton className="w-24 h-4 bg-black/10 dark:bg-gray-100/20" />
            ) : (
              <>
                <span>{profile?.name}</span>
                <span className="text-sx font-normal text-muted-foreground">
                  {profile?.email}
                </span>
              </>
            )}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DialogTrigger asChild>
            <DropdownMenuItem className="cursor-pointer hover:bg-background/90">
              <Building className="h-4 w-4 mr-2" />
              Perfil
            </DropdownMenuItem>
          </DialogTrigger>
          <DropdownMenuItem className="text-rose-500 dark:text-rose-400 cursor-pointer hover:bg-background/90">
            <LogOut className="h-4 w-4 mr-2 " />
            Sair
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <StoreProfileDialog />
    </Dialog>
  );
}
