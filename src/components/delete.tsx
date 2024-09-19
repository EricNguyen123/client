import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface DialogDeleteProps { 
  open: boolean, 
  onOpenChange: (open: boolean) => void,
  label: string,
  handleDelete: () => void,
}

export function Delete({ open, onOpenChange, label, handleDelete }: DialogDeleteProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete</DialogTitle>
          <DialogDescription>
            You want to delete {label} này.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className=" space-x-3">
            <Button variant="outline" className="w-20" onClick={() => {onOpenChange(false)}}>Cancel</Button>
            <Button variant={'destructive'} className="w-20" onClick={() => {handleDelete()}}>Delete</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
